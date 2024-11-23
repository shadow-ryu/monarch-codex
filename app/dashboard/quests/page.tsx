"use client";

import React, { useState } from "react";
import { Power } from "lucide-react";
import GlassCard from "@/components/global/GlassCard";
import { Button, buttonVariants } from "@/components/ui/button";
import GitHubQuestCard from "./_components/GitHubQuestCard";
import Link from "next/link";
import { cn } from "@/lib/utils";
// Mock project data with RPG-style names
const projects = [
  {
    id: 1,
    name: "NEUROLINK ODYSSEY",
    type: "PERSONAL",
    exp: 1200,
    maxExp: 5000,
    active: true,
    expDebt: 300,
  },
  {
    id: 2,
    name: "CYBERNETIC VANGUARD",
    type: "OFFICE",
    exp: 2500,
    maxExp: 5000,
    active: false,
    expDebt: 500,
  },
  {
    id: 3,
    name: "QUANTUM NEXUS FORGE",
    type: "SAAS",
    exp: 3800,
    maxExp: 5000,
    active: true,
    expDebt: 200,
  },
  {
    id: 4,
    name: "ETHEREAL CODEX",
    type: "SAAS",
    exp: 1800,
    maxExp: 5000,
    active: false,
    expDebt: 700,
  },
];

const Page = () => {
  const [activeProjects, setActiveProjects] = useState(
    projects.reduce(
      (acc, project) => ({ ...acc, [project.id]: project.active }),
      {}
    )
  );

  const toggleProject = (id: number) => {
    setActiveProjects((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <GitHubQuestCard />
        {projects.map((project) => (
          <GlassCard
            key={project.id}
            className={`bg-[#1A1B1E] rounded-lg p-6 border relative group transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20
                ${
                  activeProjects[project.id]
                    ? "border-blue-500/50"
                    : "border-gray-800"
                }`}
          >
            <button
              onClick={() => toggleProject(project.id)}
              className={`absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out transform
                  ${
                    activeProjects[project.id]
                      ? "bg-blue-500 text-white rotate-180 hover:rotate-360"
                      : "bg-gray-800 text-gray-400 hover:rotate-180"
                  }`}
            >
              <Power className="w-4 h-4" />
            </button>

            <div className="space-y-4 flex flex-col gap-4">
              <div className="space-y-1">
                <h2 className="text-lg font-bold text-white">{project.name}</h2>
                <p className="text-sm text-gray-400">{project.type}</p>
              </div>

              {activeProjects[project.id] ? (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">EXP</span>
                    <span className="text-blue-400">
                      {project.exp}{" "}
                      <span className="text-gray-600">/ {project.maxExp}</span>
                    </span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-1000 ease-out"
                      style={{
                        width: `${(project.exp / project.maxExp) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm text-gray-400">Project Inactive</p>
                  <p className="text-sm text-red-400">
                    EXP Debt: {project.expDebt}
                  </p>
                  <Button
                    onClick={() => toggleProject(project.id)}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 ease-in-out transform hover:scale-105 rounded-full"
                  >
                    Activate
                  </Button>
                </div>
              )}
              <Link
                href={`quests/${project.id}`}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "rounded-full"
                )}
              >
                Go to missions
              </Link>
            </div>
          </GlassCard>
        ))}
      </div>
    </>
  );
};

export default Page;
