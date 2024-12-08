"use client";
import React, { useState } from "react";
import { MenuItem, PlatformLayoutProps } from "./types";
import Sidebar from "@/components/shared/Sidebar";
import { 
  BookOpenIcon, 
  UsersIcon, 
  ChartBarIcon, 
  BellIcon, 
  LayoutDashboardIcon, 
} from "lucide-react";

const PlatformLayout: React.FC<PlatformLayoutProps> = ({ children }) => {
  const supervisorMenuItems: MenuItem[] = [
    { icon: <LayoutDashboardIcon className="w-5 h-5" />, label:"نظرة عامة",view:"Dashboard", href: "/supervisor-dashboard" },
    { icon: <UsersIcon className="w-5 h-5" />, label:"رؤى المجموعات",view:"Group Management", href: "/group-management" },
    { icon: <BookOpenIcon className="w-5 h-5" />, label: "إدارة الكتب",view:"Book Assignments", href: "/assign-books" },
    { icon: <ChartBarIcon className="w-5 h-5" />, label: "إدارة المستخدمين",view:"Member Performance", href: "/performance" },
    { icon: <BellIcon className="w-5 h-5" />, label: "الإشعارات", view:"Notifications",href: "/notifications" },
  ];
  const [activeView, setActiveView] = useState("overview");


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Sidebar menuItems={supervisorMenuItems} activeView={activeView} setActiveView={setActiveView} />
          
            <div className="md:col-span-3 space-y-6">
     
          {children}
          </div>
      </div>
    </div>
  );
};

export default PlatformLayout;
