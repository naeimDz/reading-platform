"use client";

import React, { useState } from "react";
import { TopNavigationProps } from "./types";
import { BellIcon } from "lucide-react";

const TopNavigation: React.FC<TopNavigationProps> = ({ pageTitle, user }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <div className="bg-white shadow-sm border-b fixed top-0 right-0 left-64 z-30 h-16 flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-800">{pageTitle}</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-full px-4 py-2 w-64 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="relative">
          <button
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className="text-gray-600 hover:text-blue-600 relative"
          >
            <BellIcon />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
          {isNotificationOpen && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-white border rounded-lg shadow-lg">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">Notifications</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {[1, 2, 3].map((notification) => (
                  <div key={notification} className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                    <p className="text-sm text-gray-800">New reading goal added</p>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <img src="/placeholder/profile.png" alt="User Profile" className="rounded-full w-10 h-10" />
          <div>
            <p className="text-sm font-medium text-gray-800">{user.name}</p>
            <p className="text-xs text-gray-500">{user.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
