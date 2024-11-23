"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AlertCircle, AlertTriangle, Info } from "lucide-react";

type KanbanCardProps = {
  task: {
    id: string;
    title: string;
    description: string;
    priority: "low" | "medium" | "high";
  };
  style?: React.CSSProperties;
};

const priorityConfig = {
  low: {
    icon: Info,
    color: "text-blue-400",
  },
  medium: {
    icon: AlertTriangle,
    color: "text-yellow-400",
  },
  high: {
    icon: AlertCircle,
    color: "text-red-400",
  },
};

export default function KanbanCard({ task, style }: KanbanCardProps) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
  });

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition,
    ...style,
  };

  const PriorityIcon = priorityConfig[task.priority].icon;

  return (
    <Card
      ref={setNodeRef}
      style={styles}
      className={cn(
        "cursor-grab touch-none neon-border",
        "bg-secondary/50 border-primary/20 backdrop-blur-sm",
        isDragging && "opacity-50"
      )}
      {...attributes}
      {...listeners}
    >
      <CardHeader className="p-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-primary">
            {task.title}
          </CardTitle>
          <PriorityIcon 
            className={cn("h-4 w-4", priorityConfig[task.priority].color)} 
          />
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <p className="text-sm text-muted-foreground">{task.description}</p>
      </CardContent>
    </Card>
  );
}