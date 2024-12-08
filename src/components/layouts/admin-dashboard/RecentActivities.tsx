// src/components/Dashboard/RecentActivities.tsx
import React from "react";
import { RecentActivity } from "./dashboardTypes";
import { Filter, MessageCircle } from "lucide-react";

interface RecentActivitiesProps {
  recentActivities: RecentActivity[];
}

const RecentActivities: React.FC<RecentActivitiesProps> = ({ recentActivities }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-bold flex items-center">
                  <MessageCircle className="mr-3 text-indigo-500" /> 
                  Platform Activity
                </h3>
                <button className="text-sm text-indigo-600 hover:underline">
                  Filter <Filter className="inline ml-1" size={16} />
                </button>
      </div>
      {recentActivities.map((activity, index) => (
        <div key={index} className="flex justify-between items-center p-3 border-b last:border-b-0 hover:bg-gray-50">
          <div>
            <p className="font-medium">{activity.description}</p>
            <p className="text-sm text-gray-500">{activity.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivities;
