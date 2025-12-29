import {
  LayoutDashboard,
  Settings,
  User,
  BarChart3,
  FileText,
  Bell,
  HelpCircle,
  LogOut,
  LucideIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
  disabled?: boolean;
}

export interface NavGroup {
  title?: string;
  items: NavItem[];
}

export const dashboardNavItems: NavGroup[] = [
  {
    items: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Analytics",
        href: "/dashboard/analytics",
        icon: BarChart3,
      },
      {
        title: "Documents",
        href: "/dashboard/documents",
        icon: FileText,
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        title: "Profile",
        href: "/dashboard/profile",
        icon: User,
      },
      {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
      },
      {
        title: "Notifications",
        href: "/dashboard/notifications",
        icon: Bell,
        badge: 3,
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        title: "Help",
        href: "/dashboard/help",
        icon: HelpCircle,
      },
    ],
  },
];

