"use client"
import Header from '@/components/layouts/user/Header';
import Sidebar from '@/components/layouts/user/Sidebar';
import React, { useState } from 'react';


interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [activeItem, setActiveItem] = useState<string>('home'); // Default active item

  const handleSidebarItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar activeItem={activeItem} onItemClick={handleSidebarItemClick} />

      {/* Main Content */}
      <div className="flex-1 flex">
                {/* Main Feed */}
                <div className="flex-1 px-8 py-6 overflow-y-auto">
                <Header userName="نعيم" />

        {/* Main Feed (Children content goes here) */}
        <div className="flex-1 px-8 py-6 overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout>{children}</DashboardLayout>
  );
}
