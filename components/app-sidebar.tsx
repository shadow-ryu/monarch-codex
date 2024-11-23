"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { Badge } from "./ui/badge";

const data = {
  adventurer: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Guild Hall",
      url: "/dashboard/guild-hall", // Direct route
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Chronicles of Valor",
          url: "/dashboard/chronicles-of-valor", // Nested inside dashboard
        },
        {
          title: "Hall of Heroes",
          url: "/dashboard/hall-of-heroes", // Nested inside dashboard
        },
        {
          title: "Guild Charter",
          url: "/dashboard/guild-charter", // Nested inside dashboard
        },
      ],
    },
    {
      title: "Quests",
      url: "/dashboard/quests", // Nested inside dashboard
      icon: Bot,
      items: [
        {
          title: "Current Quests",
          url: "/dashboard/quests/current", // Further nested
        },
        {
          title: "Completed Quests",
          url: "/dashboard/quests/completed", // Further nested
        },
        {
          title: "Legendary Quests",
          url: "/dashboard/quests/legendary", // Further nested
        },
      ],
    },
    {
      title: "Oracle's Wisdom",
      url: "/dashboard/oracles-wisdom", // Nested inside dashboard
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "/dashboard/oracles-wisdom/introduction", // Further nested
        },
        {
          title: "Begin Your Journey",
          url: "/dashboard/oracles-wisdom/journey", // Further nested
        },
        {
          title: "Tavern Tutorials",
          url: "/dashboard/oracles-wisdom/tutorials", // Further nested
        },
        {
          title: "Scribe's Notes",
          url: "/dashboard/oracles-wisdom/scribes-notes", // Further nested
        },
      ],
    },
    {
      title: "Guild Charter",
      url: "/dashboard/guild-charter", // Nested inside dashboard
      icon: Settings2,
      items: [
        {
          title: "General Settings",
          url: "/dashboard/guild-charter/general", // Further nested
        },
        {
          title: "Adventurers' Roster",
          url: "/dashboard/guild-charter/adventurers-roster", // Further nested
        },
        {
          title: "Treasury",
          url: "/dashboard/guild-charter/treasury", // Further nested
        },
        {
          title: "Quest Limits",
          url: "/dashboard/guild-charter/quest-limits", // Further nested
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Messenger Raven",
      url: "/dashboard/messenger-raven", // Nested inside dashboard
      icon: LifeBuoy,
    },
    {
      title: "Submit Prophecy",
      url: "/dashboard/submit-prophecy", // Nested inside dashboard
      icon: Send,
    },
  ],
  quests: [
    {
      name: "Forge of Innovation",
      url: "/dashboard/quests/forge-of-innovation", // Nested inside quests
      icon: Frame,
    },
    {
      name: "Trade Alliance",
      url: "/dashboard/quests/trade-alliance", // Nested inside quests
      icon: PieChart,
    },
    {
      name: "Wanderlust Expeditions",
      url: "/dashboard/quests/wanderlust-expeditions", // Nested inside quests
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className=" bg-gray-200  rounded-full">
              <Link href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg  border-dashed rounded-full border-gray-600  text-black">
                  <Image alt="" src={logo} />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight  text-gray-600">
                  <span className="truncate font-semibold"> Monarch codex</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.adventurer} />
      </SidebarFooter>
    </Sidebar>
  );
}
