import React from "react";
import { BarChart2, Users, Book, Globe, Award, Settings, User, Shield } from "lucide-react";
import { SidebarProps } from "./dashboardTypes";
import Link from "next/link";

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      <div className="flex items-center mb-6">
      <Shield className="text-blue-600 mr-3" size={30} />
        <div>
          <h2 className="text-xl font-bold text-gray-800">Admin Dashboard</h2>
          <p className="text-sm text-gray-500">Comprehensive Platform Management</p>
        </div>
      </div>
      <nav className="space-y-2">
        {[
          { icon: <BarChart2 />, label: 'Overview', view: 'overview', href: '/admin-dashboard' },
          { icon: <Users />, label: 'Supervisors Management', view: 'supervisors', href: '/manage-supervisors' },
          { icon: <User />, label: 'User Management', view: 'users', href: '/manage-users' },
          { icon: <Book />, label: 'Book Management', view: 'books', href: '/manage-books' },
          { icon: <Globe />, label: 'Group Insights', view: 'groups', href: '/add-group' },
          { icon: <Award />, label: 'Performance', view: 'performance', href: 'analytics' },
          { icon: <Settings />, label: 'Platform Settings', view: 'settings', href: '/setting-platform' }
        ].map((item) => (
          <Link key={item.view} href={item.href} passHref>
            <button
              key={item.view}
              className={`w-full text-left p-3 rounded-lg flex items-center transition-all ${
                activeView === item.view ? "bg-indigo-100 text-indigo-700" : "hover:bg-gray-100 text-gray-600"
              }`}
              onClick={() => setActiveView(item.view)}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
