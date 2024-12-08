"use client"
import Sidebar from '@/components/layouts/admin-dashboard/Sidebar';
import React, { useState } from 'react';
import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const [activeView, setActiveView] = useState<string>("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         <Sidebar activeView={activeView} setActiveView={setActiveView} />
                 {/* Main Content Area */}
        <div className="md:col-span-3 space-y-6">
      {children}
      </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
