import { Github, ScrollText, Coins, GamepadIcon } from "lucide-react";

export const PROCESS = [
   {
       title: "Connect GitHub",
       description: "Link your repositories to track your development progress.",
       icon: Github,
   },
   {
       title: "Create Quests",
       description: "Transform your projects into epic quests. Each task completed brings you closer to rewards.",
       icon: ScrollText, 
   },
   {
       title: "Earn Rewards",
       description: "Complete tasks to earn power-ups, rare items, and special abilities for your adventure.",
       icon: Coins,
   },
   {
       title: "Start Adventure", 
       description: "Use your earned rewards in our mobile RPG. Battle, explore and grow with fellow developers.",
       icon: GamepadIcon,
   },
] as const;