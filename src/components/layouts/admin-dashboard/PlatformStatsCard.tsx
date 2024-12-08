// src/components/Dashboard/PlatformStats.tsx
import React from "react";
import { PlatformStats } from "./dashboardTypes";
import { Users, Book, TrendingUp, Target} from 'lucide-react';
interface PlatformStatsProps {
  platformStats: PlatformStats;
}

const PlatformStatsCard: React.FC<PlatformStatsProps> = ({ platformStats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        {  icon: <Users className="text-blue-500" />,  label: "Total Users", value: platformStats.totalUsers },
        { icon: <Book className="text-green-500" />,  label: "Books Read", value: platformStats.booksRead },
        { icon: <TrendingUp className="text-purple-500" />,  label: "Active Readers", value: platformStats.activeReaders },
        {   icon: <Target className="text-red-500" />,  label: "Active Groups", value: platformStats.groupsActive }
      ].map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md p-4 flex items-center hover:shadow-lg transition">
                <div className="mr-4 bg-gray-100 p-3 rounded-full">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                </div>
        </div>
      ))}
    </div>
  );
};

export default PlatformStatsCard;
