"use client"

import { MenuItem } from '@/components/layouts/supervisor-dashboard/types';
import React, { useState } from 'react';
import { ReactNode } from 'react';
import { BarChart2, Users, Book, Globe, Award, Settings, User, Shield } from "lucide-react";
import Sidebar from '@/components/shared/Sidebar';
interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const [activeView, setActiveView] = useState<string>("overview");
    const adminMenu: MenuItem[] = [
      { icon: <BarChart2 />, label: "نظرة عامة", view: "overview", href: "/admin-dashboard" },
      { icon: <Users />, label: "إدارة المشرفين", view: "supervisors", href: "/manage-supervisors" },
      { icon: <User />, label: "إدارة المستخدمين", view: "users", href: "/manage-users" },
      { icon: <Book />, label: "إدارة الكتب", view: "books", href: "/manage-books" },
      { icon: <Globe />, label: "رؤى المجموعات", view: "groups", href: "/add-group" },
      { icon: <Award />, label: "الأداء", view: "performance", href: "analytics" },
      { icon: <Settings />, label: "إعدادات المنصة", view: "settings", href: "/setting-platform" },
    ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
     <Sidebar menuItems={adminMenu} activeView={activeView} setActiveView={setActiveView} />
                 {/* Main Content Area */}
        <div className="md:col-span-3 space-y-6">
      {children}
      </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
