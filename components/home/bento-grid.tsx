import { cn } from "@/lib/utils";
import rpg from "@/public/rpg.png";
import { Gamepad, ScrollText, Users, WaypointsIcon } from "lucide-react";
import { Sword, Shield, Wand } from "lucide-react";
import { ReactNode } from "react";
const dungeons = [
  {
    name: "Authentication Fortress",
    type: "Backend Dungeon",
    difficulty: "LEGENDARY",
    progress: 75,
    contributors: [
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop",
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=40&h=40&fit=crop",
    ],
    icon: Shield,
    color: "#00F0FF",
  },
  {
    name: "UI Component Library",
    type: "Frontend Castle",
    difficulty: "EPIC",
    progress: 45,
    contributors: [
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop",
    ],
    icon: Wand,
    color: "#50FA7B",
  },
  {
    name: "API Gateway Labyrinth",
    type: "Infrastructure Maze",
    difficulty: "RARE",
    progress: 90,
    contributors: [
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=40&h=40&fit=crop",
    ],
    icon: Sword,
    color: "#FF79C6",
  },
];

const defaultTasks = [
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
];
import { Card, CardContent } from "../ui/card";

import KanbanCard from "../kanban/kanban-card";
import { Integrations } from "./integrations";
import Image from "next/image";

export const CARDS = [
  {
    Icon: ScrollText,
    name: "Task Tracking",
    description: "Convert your tasks into quests with automatic XP rewards",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Card className="absolute top-10 rounded-full left-10 origin-top rounded-none rounded-tl-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105 border border-border border-r-0">
        <CardContent className="mt-4 flex flex-col gap-4 ">
          {defaultTasks.map((task) => (
            // @ts-expect-error type
            <KanbanCard key={task.id} task={task} />
          ))}
        </CardContent>
      </Card>
    ),
  },
  {
    Icon: Users,
    name: "Team Collaborations",
    description: "Form guilds and tackle challenges together",

    className: "col-span-3 lg:col-span-2",
    background: (
      <Card className="absolute top-10  w-[90%] left-10 origin-top transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105 border border-border border-r-0">
        <CardContent className="mt-4 flex flex-col gap-4 ">
          {dungeons.map((dungeon) => (
            <div key={dungeon.name} className="bg-[#1E1E1E] rounded-lg p-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${dungeon.color}20` }}
                  >
                    <dungeon.icon
                      className="w-6 h-6"
                      style={{ color: dungeon.color }}
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{dungeon.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-gray-400">
                        {dungeon.type}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full bg-[#2A2356]"
                        style={{ color: dungeon.color }}
                      >
                        {dungeon.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {dungeon.contributors.map((avatar, i) => (
                    <img
                      key={i}
                      src={avatar}
                      alt="Contributor"
                      className="w-8 h-8 rounded-full border-2 border-[#1E1E1E]"
                    />
                  ))}
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Progress</span>
                  <span style={{ color: dungeon.color }}>
                    {dungeon.progress}%
                  </span>
                </div>
                <div className="h-2 bg-[#2A2356] rounded-full">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${dungeon.progress}%`,
                      backgroundColor: dungeon.color,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    ),
  },
  {
    Icon: WaypointsIcon,
    name: "github integration",
    description:
      "Integrate with your github to keep the issues sync and manage them",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
    background: (
      <Integrations className="absolute right-2  md:pl-0 top-4 h-[300px]  border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Gamepad,
    name: "Mobile RPG",
    description: "Convert in-game achievements to real-world perks",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Card className="absolute top-10 rounded-full left-10 origin-top rounded-none rounded-tl-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105 border border-border border-r-0">
        <CardContent className="mt-4 flex flex-col gap-4 ">
          <Image src={rpg} alt="rpg" />
        </CardContent>
      </Card>
    ),
  },
];

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  //   @ts-expect-error any
  Icon,
  description,
}: {
  name: string;
  className: string;
  background: ReactNode;
  description: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between border border-border/60 overflow-hidden rounded-xl",
      "bg-black [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-neutral-300">{name}</h3>
      <p className="max-w-lg text-neutral-400">{description}</p>
    </div>

    <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
