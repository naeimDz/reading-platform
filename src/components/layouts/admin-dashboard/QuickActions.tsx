// src/components/Dashboard/QuickActions.tsx
import React from "react";
import { Users, Book, Bell, UserCircle } from "lucide-react";

const QuickActions: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Add User", icon: UserCircle },
          { label: "Create Group", icon: Users },
          { label: "Send Notification", icon: Bell },
          { label: "Add Book", icon: Book }
        ].map((action, index) => (
          <button key={index} className="bg-gray-100 hover:bg-blue-50 p-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300">
            <action.icon className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-800">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
