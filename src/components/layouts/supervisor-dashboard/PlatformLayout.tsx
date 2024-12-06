"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopNavigation from "./TopNavigation";
import { PlatformLayoutProps } from "./types";

const PlatformLayout: React.FC<PlatformLayoutProps> = ({ children, pageTitle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const user = {
    name: "Nadia Benali",
    role: "Supervisor",
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-20"}`}>
        <TopNavigation pageTitle={pageTitle} user={user} />
        <main className="pt-20 px-6 pb-6 overflow-y-auto" style={{ height: "calc(100vh - 4rem)" }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default PlatformLayout;
