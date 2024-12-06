import { ReactNode } from "react";

export interface MenuItem {
  icon: ReactNode;
  label: string;
  path: string;
}

export interface User {
  name: string;
  role: string;
}

export interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export interface TopNavigationProps {
  pageTitle: string;
  user: User;
}

export interface PlatformLayoutProps {
  children: ReactNode;
  pageTitle: string;
}
