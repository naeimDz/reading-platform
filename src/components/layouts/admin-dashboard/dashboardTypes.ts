// src/types/dashboardTypes.ts

export interface PlatformStats {
  totalUsers: number;
  activeReaders: number;
  booksRead: number;
  groupsActive: number;
}

export interface Group {
  name: string;
  booksRead: number;
  membersCount: number;
  recentActivity: string;
}

export interface RecentActivity {
  type: string;
  description: string;
  timestamp: string;
}

// Props specific to AdminDashboard
export interface AdminDashboardProps {
  platformStats: PlatformStats;
  topGroups: Group[];
  recentActivities: RecentActivity[];
}

// Props specific to Sidebar
export interface SidebarProps {
  activeView: string;
  setActiveView: React.Dispatch<React.SetStateAction<string>>;
}
