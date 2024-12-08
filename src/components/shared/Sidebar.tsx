import React from "react";
import Link from "next/link";
import { Shield } from "lucide-react";
import { MenuItem } from "../layouts/supervisor-dashboard/types";



interface SidebarProps {
  menuItems: MenuItem[]; // Dynamic menu items based on role
  activeView: string;
  setActiveView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems, activeView, setActiveView }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      {/* Header Section */}
      <div className="flex text-right mb-6 items-center gap-x-4" dir="rtl">
        <div className="bg-indigo-100 p-3 rounded-full mb-3 self-end">
          <Shield className="text-blue-600" size={30} />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-gray-800 leading-tight">لوحة إدارة الأدمين</h2>
          <p className="text-sm text-gray-500 mt-1">إدارة شاملة للمنصة</p>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link key={item.view} href={item.href} passHref>
            <button
              className={`w-full text-right p-3 rounded-lg flex items-center justify-between transition-all ${
                activeView === item.view ? "bg-indigo-100 text-indigo-700" : "hover:bg-gray-100 text-gray-600"
              }`}
              onClick={() => setActiveView(item.view)}
            >
              <span className="text-gray-600">{item.label}</span>
              <span className="text-blue-600">{item.icon}</span>
            </button>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
