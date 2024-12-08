// src/components/Dashboard/TopPerformers.tsx
import React from "react";
import { Group } from "./dashboardTypes";
import { Award } from "lucide-react";

interface TopGroupsProps {
    topGroups: Group[];
}

const TopPerformers: React.FC<TopGroupsProps> = ({ topGroups }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold flex items-center">
            <Award className="mr-3 text-yellow-500" /> 
            Top Group
        </h3>
        <button className="text-sm text-indigo-600 hover:underline">
            View All
        </button>
      </div>
      {topGroups.map((group, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg"
        >
          <div>
            <p className="font-medium">{group.name}</p>
            <p className="text-sm text-gray-500">
              {group.booksRead} books | {group.membersCount} members
            </p>
            <p className="text-sm text-gray-500">{group.recentActivity}</p>
          </div>
          <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
            Active Group
          </span>
        </div>
      ))}
    </div>
  );
};

export default TopPerformers;
