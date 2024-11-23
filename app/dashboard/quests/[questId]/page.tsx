import KanbanBoard from "@/components/kanban/kanban-board";
import { CircuitBoard } from "lucide-react";

export default function Home() {
  return (
    <main className="container mx-auto p-4 min-h-screen">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3 bg-secondary/30 p-6 rounded-lg backdrop-blur-sm">
          <CircuitBoard className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Mission Control
            </h1>
            <p className="text-muted-foreground">
              Task Management Interface v1.0
            </p>
          </div>
        </div>
        <KanbanBoard />
      </div>
    </main>
  );
}
