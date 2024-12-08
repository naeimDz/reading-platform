"use client";
import React, { useState } from "react";
import {PlatformLayoutProps } from "./types";
import Sidebar from "@/components/shared/Sidebar";
import { supervisorMenuItems } from "@/components/utils/menus";


const PlatformLayout: React.FC<PlatformLayoutProps> = ({ children }) => {
  const menuItems = supervisorMenuItems;
  const [activeView, setActiveView] = useState("overview");


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Sidebar menuItems={menuItems} activeView={activeView} setActiveView={setActiveView} />
          
            <div className="md:col-span-3 space-y-6">
     
          {children}
          </div>
      </div>
    </div>
  );
};

export default PlatformLayout;
