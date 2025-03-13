"use client"
import React, { useState } from 'react';
import { AdminDashboardProps } from './dashboardTypes';
import PlatformStatsCard from './PlatformStatsCard';
import QuickActions from './QuickActions';
import RecentActivities from './RecentActivities';
import TopGroups from './TopGroups';


const AdminDashboard: React.FC<AdminDashboardProps> = ({ platformStats, topGroups, recentActivities }) => {
  const [activeView, setActiveView] = useState<string>("overview");

  return (
    <>
          {/* Platform Stats Cards */}
          <PlatformStatsCard platformStats={platformStats} />
          <QuickActions />

          {/* Top Performers & Recent Activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top Performers */}
            <TopGroups topGroups={topGroups} />
            {/* Recent Activities */}          
            <RecentActivities recentActivities={recentActivities} />
          </div>
    </>
     
  
  );
};

export default AdminDashboard;