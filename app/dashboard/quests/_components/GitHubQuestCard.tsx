import { useState } from "react";
import { Github, Lock, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GlassCard from "@/components/global/GlassCard";

export default function GitHubQuestCard() {
  return (
    <GlassCard className="w-full max-w-md bg-[#1A1B1E] border-gray-800 text-gray-100">
      <CardHeader className="border-b border-gray-800">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <Github className="w-6 h-6" />
          GitHub Quests locked
        </CardTitle>
        <CardDescription className="text-gray-400">
          Complete quests to earn EXP and level up
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between border-t border-gray-800 pt-4">
        <p className="text-sm text-gray-400">
          Unlock quests to start earning EXP
        </p>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 rounded-full  ease-in-out transform hover:scale-105">
          Unlock Next Quest
        </Button>
      </CardFooter>
    </GlassCard>
  );
}
