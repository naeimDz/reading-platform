import { ReactNode } from "react";


export interface User {
  name: string;
  role: string;
}

export interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}


export interface MenuItem {
  icon: JSX.Element;
  label: string;
  view: string;
  href: string;
}

export interface PlatformLayoutProps {
  children: ReactNode;
  pageTitle: string;
}
