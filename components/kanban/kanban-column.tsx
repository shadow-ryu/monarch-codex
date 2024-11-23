"use client";

import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import KanbanCard from "./kanban-card";
import { cn } from "@/lib/utils";

type KanbanColumnProps = {
  id: string;
  title: string;
  icon: string;
  tasks: {
    id: string;
    title: string;
    description: string;
    priority: "low" | "medium" | "high";
  }[];
};

export default function KanbanColumn({ id, title, icon, tasks }: KanbanColumnProps) {
  const { setNodeRef } = useDroppable({
    id,
    data: {
      type: "Column",
      id,
    },
  });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "w-80 shrink-0 rounded-lg p-4",
        "bg-secondary/30 backdrop-blur-sm border border-primary/20",
        "transition-colors duration-300"
      )}
    >
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <h2 className="font-semibold text-primary">{title}</h2>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="h-1 flex-1 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary/50 rounded-full transition-all duration-300"
              style={{ width: `${(tasks.length / 10) * 100}%` }}
            />
          </div>
          <span className="text-sm text-muted-foreground">
            {tasks.length}/10
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <SortableContext items={tasks.map((task) => task.id)}>
          {tasks.map((task) => (
            <KanbanCard key={task.id} task={task} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}