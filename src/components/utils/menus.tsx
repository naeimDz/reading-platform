import { BarChart2, Users, Book, Globe, Award, Settings, User, Shield, LayoutDashboardIcon } from "lucide-react";
import { MenuItem } from "../types/dashboardTypes";
import { 
  BookOpenIcon, 
  UsersIcon, 
  ChartBarIcon, 
  BellIcon,  
} from "lucide-react";

export const adminMenu: MenuItem[] = [
    { icon: <BarChart2 />, label: "نظرة عامة", view: "overview", href: "/admin-dashboard" },
    { icon: <Users />, label: "إدارة المشرفين", view: "supervisors", href: "/manage-supervisors" },
    { icon: <User />, label: "إدارة المستخدمين", view: "users", href: "/manage-users" },
    { icon: <Book />, label: "إدارة الكتب", view: "books", href: "/manage-books" },
    { icon: <Globe />, label: "رؤى المجموعات", view: "groups", href: "/add-group" },
    { icon: <Award />, label: "الأداء", view: "performance", href: "analytics" },
    { icon: <Settings />, label: "إعدادات المنصة", view: "settings", href: "/setting-platform" },
  ];

export const supervisorMenuItems: MenuItem[] = [
  { icon: <LayoutDashboardIcon className="w-5 h-5" />, label:"نظرة عامة",view:"Dashboard", href: "/supervisor-dashboard" },
  { icon: <UsersIcon className="w-5 h-5" />, label:"رؤى المجموعات",view:"Group Management", href: "/group-management" },
  { icon: <BookOpenIcon className="w-5 h-5" />, label: "إدارة الكتب",view:"Book Assignments", href: "/assign-books" },
  { icon: <ChartBarIcon className="w-5 h-5" />, label: "إدارة المستخدمين",view:"Member Performance", href: "/performance" },
  { icon: <BellIcon className="w-5 h-5" />, label: "الإشعارات", view:"Notifications",href: "/notifications" },
];

