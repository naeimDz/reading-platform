"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  BookOpenIcon, 
  UsersIcon, 
  ChartBarIcon, 
  BellIcon, 
  LayoutDashboardIcon, 
  MenuIcon, 
  SettingsIcon, 
  LogOutIcon 
} from "lucide-react";
import { MenuItem, SidebarProps } from "./types";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const pathname = usePathname();

  const supervisorMenuItems: MenuItem[] = [
    { icon: <LayoutDashboardIcon className="w-5 h-5" />, label: "Dashboard", path: "/supervisor-dashboard" },
    { icon: <UsersIcon className="w-5 h-5" />, label: "Group Management", path: "/group-management" },
    { icon: <BookOpenIcon className="w-5 h-5" />, label: "Book Assignments", path: "/assign-books" },
    { icon: <ChartBarIcon className="w-5 h-5" />, label: "Member Performance", path: "/performance" },
    { icon: <BellIcon className="w-5 h-5" />, label: "Notifications", path: "/notifications" },
  ];

  return (
    <div className={`bg-white border-r shadow-lg h-full fixed left-0 top-0 z-40 transition-all duration-300 
      ${isOpen ? "w-64" : "w-20"} overflow-hidden`}>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          {isOpen ? (
            <img src="/placeholder/logo.png" alt="Platform Logo" className="h-10" />
          ) : (
            <BookOpenIcon className="w-8 h-8 text-blue-600" />
          )}
        </div>
        <button onClick={toggleSidebar} className="text-gray-600 hover:text-blue-600">
          <MenuIcon />
        </button>
      </div>

      <nav className="mt-6">
        {supervisorMenuItems.map((item) => (
          <Link key={item.path} href={item.path} className={`flex items-center py-3 px-4 transition-colors duration-200 
            ${pathname === item.path 
              ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600" 
              : "text-gray-600 hover:bg-gray-100"}`}>
         
              <span className="mr-4">{item.icon}</span>
              {isOpen && <span className="text-sm">{item.label}</span>}
           
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 border-t" >
        <Link href="/settings" className="flex items-center py-3 px-4 hover:bg-gray-100 text-gray-600">
         
            <SettingsIcon className="w-5 h-5 mr-4" />
            {isOpen && <span className="text-sm">Settings</span>}
        
        </Link>
        <button className="w-full flex items-center py-3 px-4 hover:bg-gray-100 text-gray-600">
          <LogOutIcon className="w-5 h-5 mr-4" />
          {isOpen && <span className="text-sm">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
