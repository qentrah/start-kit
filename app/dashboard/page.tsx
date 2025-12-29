"use client";

import { useAuth } from "@/hooks/use-auth";
import { StatsCard } from "@/components/dashboard/stats-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Activity,
  Users,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
} from "lucide-react";

interface ActivityItem {
  id: string;
  action: string;
  description: string;
  time: string;
  type: "success" | "info" | "warning";
}

const recentActivity: ActivityItem[] = [
  {
    id: "1",
    action: "New user registered",
    description: "john.doe@example.com joined the platform",
    time: "2 minutes ago",
    type: "success",
  },
  {
    id: "2",
    action: "Profile updated",
    description: "You updated your profile information",
    time: "1 hour ago",
    type: "info",
  },
  {
    id: "3",
    action: "Settings changed",
    description: "Notification preferences were modified",
    time: "3 hours ago",
    type: "warning",
  },
  {
    id: "4",
    action: "Document uploaded",
    description: "New document was added to your account",
    time: "5 hours ago",
    type: "info",
  },
];

export default function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Welcome back, {user.name}!</h1>
        <p className="text-muted-foreground">
          Here&apos;s what&apos;s happening with your account today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Users"
          value="1,234"
          description="+20% from last month"
          icon={Users}
        />
        <StatsCard
          title="Active Sessions"
          value="456"
          description="+12% from last month"
          icon={Activity}
        />
        <StatsCard
          title="Growth Rate"
          value="+15.2%"
          description="Compared to last month"
          icon={TrendingUp}
        />
        <StatsCard
          title="Revenue"
          value="$12,345"
          description="+8% from last month"
          icon={DollarSign}
        />
      </div>

      {/* Charts and Activity Row */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Chart Placeholder */}
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Analytics Overview</CardTitle>
            <CardDescription>Performance metrics for the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
              <div className="text-center space-y-2">
                <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Chart will be displayed here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0"
                >
                  <div
                    className={`mt-1 h-2 w-2 rounded-full ${
                      activity.type === "success"
                        ? "bg-green-500"
                        : activity.type === "warning"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    }`}
                  />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions and Summary */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-accent transition-colors text-sm">
              Create new document
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-accent transition-colors text-sm">
              Invite team member
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-accent transition-colors text-sm">
              View analytics
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-accent transition-colors text-sm">
              Update settings
            </button>
          </CardContent>
        </Card>

        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Page Views</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">+24%</span>
                <ArrowUpRight className="h-4 w-4 text-green-500" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Bounce Rate</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">-12%</span>
                <ArrowDownRight className="h-4 w-4 text-green-500" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Avg. Session</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">+8%</span>
                <ArrowUpRight className="h-4 w-4 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total Projects</span>
              <span className="font-semibold">12</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Active Tasks</span>
              <span className="font-semibold">8</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Completed</span>
              <span className="font-semibold">24</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Pending</span>
              <span className="font-semibold">5</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
