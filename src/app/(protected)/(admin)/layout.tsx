"use client"

import React, { useState } from 'react';
import { ReactNode } from 'react';
import Sidebar from '@/components/shared/Sidebar';
import { adminMenu } from '@/components/utils/menus';
interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const [activeView, setActiveView] = useState<string>("overview");

    const menuItems =adminMenu;
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
     <Sidebar menuItems={menuItems} activeView={activeView} setActiveView={setActiveView} />
                 {/* Main Content Area */}
        <div className="md:col-span-3 space-y-6">
      {children}
      </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
