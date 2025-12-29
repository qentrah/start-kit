"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">
          View detailed analytics and insights
        </p>
      </div>

      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Analytics Overview</CardTitle>
          <CardDescription>Performance metrics and statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] flex items-center justify-center border-2 border-dashed rounded-lg">
            <div className="text-center space-y-2">
              <BarChart3 className="h-16 w-16 mx-auto text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Analytics charts will be displayed here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

