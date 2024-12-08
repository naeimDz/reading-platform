// src/app/admindashboard/page.tsx
import AdminDashboard from "@/components/layouts/admin-dashboard/AdminDashboard";
import { PlatformStats, RecentActivity, Group } from "@/components/layouts/admin-dashboard/dashboardTypes";
import React from "react";

// Example data (in a real-world scenario, this would likely come from an API)
const platformStats: PlatformStats = {
  totalUsers: 5423,
  activeReaders: 3211,
  booksRead: 12345,
  groupsActive: 87
};

const topGroups: Group[] = [
  { name: "Literature Lovers", booksRead: 132, membersCount: 200, recentActivity: "Started reading 'The Great Gatsby'" },
  { name: "Science Explorers", booksRead: 98, membersCount: 150, recentActivity: "Finished 'The Origin of Species'" },
  { name: "Tech Enthusiasts", booksRead: 72, membersCount: 120, recentActivity: "Joined a new tech discussion" }
];

const recentActivities: RecentActivity[] = [
  { type: "book", description: "New book 'Echoes of Algiers' added", timestamp: "2 mins ago" },
  { type: "group", description: "New reading group 'Cultural Explorers' created", timestamp: "1 hour ago" },
  { type: "user", description: "50 new users joined this week", timestamp: "6 hours ago" }
];

const Page = () => {
  return (
    
    <AdminDashboard 
      platformStats={platformStats} 
      topGroups={topGroups} 
      recentActivities={recentActivities}
    />
  );
};

export default Page;
