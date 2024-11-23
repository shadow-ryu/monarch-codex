"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Users, Swords, MessageSquare, Trophy, Activity } from "lucide-react";

// Mock data - In a real app, this would come from your backend
const MOCK_GUILD = {
  name: "Crystal Vanguard",
  level: 15,
  exp: 75,
  members: [
    { id: 1, name: "DragonSlayer", role: "Guild Master", avatar: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "ShadowMage", role: "Officer", avatar: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "LightKnight", role: "Member", avatar: "https://i.pravatar.cc/150?u=3" },
  ],
  missions: [
    { id: 1, title: "Defeat the Frost Giant", difficulty: "Hard", reward: "5000 Gold", timeLimit: "2 days" },
    { id: 2, title: "Collect Mystic Herbs", difficulty: "Easy", reward: "1000 Gold", timeLimit: "1 day" },
    { id: 3, title: "Clear the Dark Cave", difficulty: "Medium", reward: "3000 Gold", timeLimit: "3 days" },
  ],
  activities: [
    { id: 1, text: "DragonSlayer completed a mission", time: "2 hours ago" },
    { id: 2, text: "ShadowMage joined the guild", time: "5 hours ago" },
    { id: 3, text: "Guild reached level 15!", time: "1 day ago" },
  ]
};

export default function GuildDashboard() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">{MOCK_GUILD.name}</h1>
          <p className="text-muted-foreground">Level {MOCK_GUILD.level}</p>
        </div>
        <Progress value={MOCK_GUILD.exp} className="w-32" />
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid grid-cols-4 gap-4 bg-transparent">
          <TabsTrigger value="overview" className="data-[state=active]:bg-primary">
            <Activity className="mr-2 h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="members" className="data-[state=active]:bg-primary">
            <Users className="mr-2 h-4 w-4" />
            Members
          </TabsTrigger>
          <TabsTrigger value="missions" className="data-[state=active]:bg-primary">
            <Swords className="mr-2 h-4 w-4" />
            Missions
          </TabsTrigger>
          <TabsTrigger value="chat" className="data-[state=active]:bg-primary">
            <MessageSquare className="mr-2 h-4 w-4" />
            Chat
          </TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TabsContent value="overview" className="space-y-4 col-span-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    {MOCK_GUILD.activities.map((activity) => (
                      <div key={activity.id} className="mb-4">
                        <p className="text-sm">{activity.text}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                        <Separator className="mt-2" />
                      </div>
                    ))}
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Guild Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Members</span>
                    <span>{MOCK_GUILD.members.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Active Missions</span>
                    <span>{MOCK_GUILD.missions.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Guild Level</span>
                    <span>{MOCK_GUILD.level}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-[200px]">
                    <Trophy className="w-16 h-16 text-primary opacity-50" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="members" className="space-y-4 col-span-full">
            <Card>
              <CardHeader>
                <CardTitle>Guild Members</CardTitle>
                <CardDescription>Total members: {MOCK_GUILD.members.length}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {MOCK_GUILD.members.map((member) => (
                    <div key={member.id} className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="missions" className="space-y-4 col-span-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_GUILD.missions.map((mission) => (
                <Card key={mission.id}>
                  <CardHeader>
                    <CardTitle>{mission.title}</CardTitle>
                    <CardDescription>Difficulty: {mission.difficulty}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm">Reward: {mission.reward}</p>
                      <p className="text-sm">Time Limit: {mission.timeLimit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="chat" className="space-y-4 col-span-full">
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle>Guild Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">Chat feature coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}