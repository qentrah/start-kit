"use client";

import { AuthWrapper } from "@/components/auth/auth-wrapper";
import { Sidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSkeleton } from "@/components/dashboard/dashboard-skeleton";
import { useAuth } from "@/hooks/use-auth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useAuth();

  return (
    <AuthWrapper>
      <div className="flex h-screen bg-background">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader />
          {isLoading ? (
            <DashboardSkeleton />
          ) : (
            <main className="flex-1 overflow-y-auto">{children}</main>
          )}
        </div>
      </div>
    </AuthWrapper>
  );
}

