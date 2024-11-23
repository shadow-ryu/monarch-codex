"use client";

import { useState } from "react";
import {
  DndContext,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import KanbanColumn from "./kanban-column";
import KanbanCard from "./kanban-card";
import { PlusCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Column = {
  id: string;
  title: string;
  icon: string;
};

type Task = {
  id: string;
  columnId: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
};

const defaultCols: Column[] = [
  { id: "todo", title: "Pending Missions", icon: "📡" },
  { id: "in-progress", title: "Active Operations", icon: "🛸" },
  { id: "done", title: "Completed Tasks", icon: "✨" },
];

const defaultTasks: Task[] = [
  {
    id: "1",
    columnId: "todo",
    title: "Scan New Territory",
    description: "Deploy drones to analyze unexplored sectors",
    priority: "high",
  },
  {
    id: "2",
    columnId: "todo",
    title: "Update Defense Systems",
    description: "Implement latest security protocols",
    priority: "medium",
  },
  {
    id: "3",
    columnId: "in-progress",
    title: "Resource Collection",
    description: "Gather essential materials from sector 7",
    priority: "high",
  },
  {
    id: "4",
    columnId: "done",
    title: "Base Initialization",
    description: "Set up primary command center",
    priority: "low",
  },
];

export default function KanbanBoard() {
  const [columns] = useState<Column[]>(defaultCols);
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "medium" as Task["priority"],
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );

  function getDraggingTaskData(taskId: string) {
    return tasks.find((task) => task.id === taskId);
  }

  function handleDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === "Task") {
      // @ts-expect-error no type
      setActiveTask(getDraggingTaskData(event.active.id as string));
    }
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";

    if (!isActiveATask) return;

    if (isActiveATask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);

        if (tasks[activeIndex].columnId != tasks[overIndex].columnId) {
          tasks[activeIndex].columnId = tasks[overIndex].columnId;
          return arrayMove(tasks, activeIndex, overIndex);
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current?.type === "Column";

    if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        tasks[activeIndex].columnId = overId as string;
        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  }

  function handleDragEnd() {
    setActiveTask(null);
  }

  function handleAddTask() {
    if (newTask.title.trim() === "") return;

    const task: Task = {
      id: Math.random().toString(),
      columnId: "todo",
      title: newTask.title,
      description: newTask.description,
      priority: newTask.priority,
    };

    setTasks([...tasks, task]);
    setNewTask({ title: "", description: "", priority: "medium" });
    setIsDialogOpen(false);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between mb-4">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="neon-border">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Mission
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-background/95 backdrop-blur-sm border-primary/20">
            <DialogHeader>
              <DialogTitle className="text-primary">
                Initialize New Mission
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Input
                  placeholder="Mission objective"
                  value={newTask.title}
                  onChange={(e) =>
                    setNewTask({ ...newTask, title: e.target.value })
                  }
                  className="bg-secondary/50 border-primary/20"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Mission details"
                  value={newTask.description}
                  onChange={(e) =>
                    setNewTask({ ...newTask, description: e.target.value })
                  }
                  className="bg-secondary/50 border-primary/20"
                />
              </div>
              <Button onClick={handleAddTask} className="w-full neon-border">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Initialize Mission
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex gap-4 h-full overflow-x-auto pb-4">
        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
          id="kanban-board"
        >
          <div className="flex gap-4">
            {columns.map((col) => (
              <div key={col.id} className="flex">
                <KanbanColumn
                  id={col.id}
                  title={col.title}
                  icon={col.icon}
                  tasks={tasks.filter((task) => task.columnId === col.id)}
                />
              </div>
            ))}
          </div>

          {typeof document !== "undefined" &&
            createPortal(
              <DragOverlay>
                {activeTask && (
                  <KanbanCard
                    task={activeTask}
                    style={{ transform: "rotate(3deg)" }}
                  />
                )}
              </DragOverlay>,
              document.body
            )}
        </DndContext>
      </div>
    </div>
  );
}
