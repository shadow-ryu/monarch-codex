"use client";

import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

function GuildLockScreen() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
      <div className="text-center space-y-4">
        <Shield className="w-20 h-20 mx-auto text-primary animate-pulse" />
        <h1 className="text-4xl font-bold tracking-tighter">
          Welcome to the Guild Hall
        </h1>
        <p className="text-muted-foreground max-w-md">
          Join an existing guild or create your own to begin your adventure
        </p>
      </div>

      <div className="flex gap-4">
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button variant="default" size="lg">
              Create Guild
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Guild</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="guildName">Guild Name</Label>
                <Input id="guildName" placeholder="Enter guild name..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guildDescription">Description</Label>
                <Input
                  id="guildDescription"
                  placeholder="Describe your guild..."
                />
              </div>
              <Button className="w-full" onClick={() => setIsCreateOpen(false)}>
                Create Guild
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={isJoinOpen} onOpenChange={setIsJoinOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="lg">
              Join Guild
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Join Existing Guild</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="guildCode">Guild Code</Label>
                <Input
                  id="guildCode"
                  placeholder="Enter guild invite code..."
                />
              </div>
              <Button className="w-full" onClick={() => setIsJoinOpen(false)}>
                Join Guild
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default GuildLockScreen;
