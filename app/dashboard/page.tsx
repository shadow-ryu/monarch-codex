import GlassCard from "@/components/global/GlassCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { BarChart3, Flag, Shield, Swords, Trophy } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <GlassCard>
            {/* <Card className="bg-gradient-to-br from-[#4b3a6f]/50 to-[#8a5caa]/30 border-0 shadow-lg"> */}
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#a7bbd1]">
                Level
              </CardTitle>
              <Trophy className="h-4 w-4 text-[#8a5caa]" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#ebeff5]">Level 12</div>
              <Progress
                value={75}
                className="mt-2 bg-[#4b3a6f]/30"
                // indicatorclassname="bg-gradient-to-r from-[#a7bbd1] to-[#8a5caa]"
              />
              <p className="text-xs text-[#a7bbd1] mt-2">
                3,250 / 4,000 XP to Level 13
              </p>
            </CardContent>
            {/* </Card> */}
          </GlassCard>
          <Card className="bg-gradient-to-br from-[#4b3a6f]/50 to-[#8a5caa]/30 border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#a7bbd1]">
                Guild Rank
              </CardTitle>
              <Shield className="h-4 w-4 text-[#8a5caa]" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#ebeff5]">Silver II</div>
              <Progress
                value={60}
                className="mt-2 bg-[#4b3a6f]/30"
                // indicatorclassname="bg-gradient-to-r from-[#a7bbd1] to-[#8a5caa]"
              />
              <p className="text-xs text-[#a7bbd1] mt-2">Progress to Gold</p>
            </CardContent>
          </Card>
          <GlassCard className="bg-gradient-to-br from-[#4b3a6f]/50 to-[#8a5caa]/30 border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#a7bbd1]">
                Çurrent Rank
              </CardTitle>
              <Shield className="h-4 w-4 text-[#8a5caa]" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#ebeff5]">Silver I</div>
              <Progress
                value={60}
                className="mt-2 bg-[#4b3a6f]/30"
                // indicatorclassname="bg-gradient-to-r from-[#a7bbd1] to-[#8a5caa]"
              />
              <p className="text-xs text-[#a7bbd1] mt-2">Progress to Gold</p>
            </CardContent>
          </GlassCard>
        </div>
        <div className="min-h-[80vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4 bg-[#4b3a6f]/20 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-[#ebeff5]">
                  Active Missions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-[#a7bbd1]/20">
                      <TableHead className="text-[#a7bbd1]">Mission</TableHead>
                      <TableHead className="text-[#a7bbd1]">Type</TableHead>
                      <TableHead className="text-[#a7bbd1]">Progress</TableHead>
                      <TableHead className="text-[#a7bbd1]">Reward</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-[#a7bbd1]/20">
                      <TableCell className="font-medium text-[#ebeff5]">
                        Deploy New Feature
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 border-[#8a5caa] text-[#a7bbd1] hover:bg-[#8a5caa]/20"
                        >
                          <Swords className="h-4 w-4" />
                          Personal
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Progress
                          value={80}
                          className="bg-[#4b3a6f]/30"
                          // indicatorclassname="bg-[#8a5caa]"
                        />
                      </TableCell>
                      <TableCell className="text-[#a7bbd1]">500 XP</TableCell>
                    </TableRow>
                    <TableRow className="border-[#a7bbd1]/20">
                      <TableCell className="font-medium text-[#ebeff5]">
                        Deploy New Feature
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 border-[#8a5caa] text-[#a7bbd1] hover:bg-[#8a5caa]/20"
                        >
                          <Swords className="h-4 w-4" />
                          Personal
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Progress
                          value={80}
                          className="bg-[#4b3a6f]/30"
                          // indicatorclassname="bg-[#8a5caa]"
                        />
                      </TableCell>
                      <TableCell className="text-[#a7bbd1]">500 XP</TableCell>
                    </TableRow>
                    <TableRow className="border-[#a7bbd1]/20">
                      <TableCell className="font-medium text-[#ebeff5]">
                        Deploy New Feature
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 border-[#8a5caa] text-[#a7bbd1] hover:bg-[#8a5caa]/20"
                        >
                          <Swords className="h-4 w-4" />
                          Personal
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Progress
                          value={80}
                          className="bg-[#4b3a6f]/30"
                          // indicatorclassname="bg-[#8a5caa]"
                        />
                      </TableCell>
                      <TableCell className="text-[#a7bbd1]">500 XP</TableCell>
                    </TableRow>
                    <TableRow className="border-[#a7bbd1]/20">
                      <TableCell className="font-medium text-[#ebeff5]">
                        Deploy New Feature
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 border-[#8a5caa] text-[#a7bbd1] hover:bg-[#8a5caa]/20"
                        >
                          <Swords className="h-4 w-4" />
                          Personal
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Progress
                          value={80}
                          className="bg-[#4b3a6f]/30"
                          // indicatorclassname="bg-[#8a5caa]"
                        />
                      </TableCell>
                      <TableCell className="text-[#a7bbd1]">500 XP</TableCell>
                    </TableRow>
                    <TableRow className="border-[#a7bbd1]/20">
                      <TableCell className="font-medium text-[#ebeff5]">
                        Code Review Sprint
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 border-[#8a5caa] text-[#a7bbd1] hover:bg-[#8a5caa]/20"
                        >
                          <Shield className="h-4 w-4" />
                          Guild
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Progress
                          value={45}
                          className="bg-[#4b3a6f]/30"
                          // indicatorclassname="bg-[#8a5caa]"
                        />
                      </TableCell>
                      <TableCell className="text-[#a7bbd1]">750 XP</TableCell>
                    </TableRow>
                    <TableRow className="border-[#a7bbd1]/20">
                      <TableCell className="font-medium text-[#ebeff5]">
                        Bug Hunt Challenge
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 border-[#8a5caa] text-[#a7bbd1] hover:bg-[#8a5caa]/20"
                        >
                          <Shield className="h-4 w-4" />
                          Guild
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Progress
                          value={20}
                          className="bg-[#4b3a6f]/30"
                          // indicatorclassname="bg-[#8a5caa]"
                        />
                      </TableCell>
                      <TableCell className="text-[#a7bbd1]">1000 XP</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3 bg-[#4b3a6f]/20 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-[#ebeff5]">
                  Guild Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-[#8a5caa]/20 p-2">
                      <Trophy className="h-6 w-6 text-[#8a5caa]" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium text-[#ebeff5] leading-none">
                        Achievement Unlocked
                      </p>
                      <p className="text-xs text-[#a7bbd1]">
                        Guild completed 100 missions
                      </p>
                    </div>
                    <div className="text-xs text-[#a7bbd1]">2h ago</div>
                  </div>
                  <Separator className="bg-[#a7bbd1]/20" />
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-[#8a5caa]/20 p-2">
                      <Flag className="h-6 w-6 text-[#8a5caa]" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium text-[#ebeff5] leading-none">
                        New Milestone
                      </p>
                      <p className="text-xs text-[#a7bbd1]">
                        Reached Silver II Rank
                      </p>
                    </div>
                    <div className="text-xs text-[#a7bbd1]">1d ago</div>
                  </div>
                  <Separator className="bg-[#a7bbd1]/20" />
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-[#8a5caa]/20 p-2">
                      <BarChart3 className="h-6 w-6 text-[#8a5caa]" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium text-[#ebeff5] leading-none">
                        Productivity Boost
                      </p>
                      <p className="text-xs text-[#a7bbd1]">
                        30% increase in completed tasks
                      </p>
                    </div>
                    <div className="text-xs text-[#a7bbd1]">3d ago</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
