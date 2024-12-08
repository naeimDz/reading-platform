import React from "react";
import { BarChart2, Users, Book, Globe, Award, Settings, User, Shield } from "lucide-react";
import { SidebarProps } from "./dashboardTypes";
import Link from "next/link";

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">

<div className="flex text-right mb-6 items-center gap-x-4" dir="rtl">
  {/* Icon */}
  <div className="bg-indigo-100 p-3 rounded-full mb-3 self-end">
    <Shield className="text-blue-600" size={30} />
  </div>
  {/* Text */}
  <div>
    <h2 className="text-2xl font-extrabold text-gray-800 leading-tight">لوحة إدارة الأدمين</h2>
    <p className="text-sm text-gray-500 mt-1">إدارة شاملة للمنصة</p>
  </div>
</div>

      <nav className="space-y-2">
        {[
          { icon: <BarChart2 />, label: "نظرة عامة", view: "overview", href: "/admin-dashboard" },
          { icon: <Users />, label: "إدارة المشرفين", view: "supervisors", href: "/manage-supervisors" },
          { icon: <User />, label: "إدارة المستخدمين", view: "users", href: "/manage-users" },
          { icon: <Book />, label: "إدارة الكتب", view: "books", href: "/manage-books" },
          { icon: <Globe />, label: "رؤى المجموعات", view: "groups", href: "/add-group" },
          { icon: <Award />, label: "الأداء", view: "performance", href: "analytics" },
          { icon: <Settings />, label: "إعدادات المنصة", view: "settings", href: "/setting-platform" },
        ].map((item) => (
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
