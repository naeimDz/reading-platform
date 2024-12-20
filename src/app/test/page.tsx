"use client"
import React, { useState, ReactNode } from 'react';
import { 
  Menu, Bell, Search, Users, Settings, BarChart2, FileText, Home, Plus, ChevronRight, Moon, Sun, HelpCircle, MessageSquare, Bug, Lightbulb 
} from 'lucide-react';
import RoadmapDashboard from './RoadmapDashboard';

interface SidebarItemProps {
  icon: React.ElementType;
  text: string;
  collapsed: boolean;
  isDark: boolean;
}

interface ModernAppLayoutProps {
  children: ReactNode;
}

const ModernAppLayout: React.FC<ModernAppLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>

            {/* Sidebar + Main Content Container */}
      <div className="pt-16 flex h-screen">
        {/* Sidebar */}
        <aside 
          className={`fixed right-0 h-full transition-all duration-300 z-20 ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } border-r ${isSidebarOpen ? 'w-64' : 'w-20'}`}
        >
          <div className="p-4">
            <button className={`w-full p-3 rounded-lg flex items-center justify-center space-x-2 
              bg-gradient-to-r from-blue-500 to-green-400 text-white transition-all duration-300 
              hover:shadow-lg hover:opacity-90 ${isSidebarOpen ? 'px-4' : 'px-2'}`}>
              <Plus className="h-5 w-5" />
              {isSidebarOpen && <span>مشروع جديد</span>}
            </button>
          </div>
          
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item) => (
              <SidebarItem 
                key={item.text}
                icon={item.icon} 
                text={item.text} 
                collapsed={!isSidebarOpen} 
                isDark={isDarkMode} 
              />
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main 
          className={`flex-1 transition-all duration-300 p-6 ${
            isSidebarOpen ? 'mr-64' : 'mr-25'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <RoadmapDashboard />
            {children}
          </div>
        </main>
      </div>
      {/* Top Navigation Bar */}
      <header className={`fixed top-0 w-full z-30 transition-all duration-300 ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } ${searchFocused ? 'h-24' : 'h-16'} border-b backdrop-blur-sm bg-opacity-80`}>
        <div className="px-4 h-full flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              <Menu className={`h-6 w-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-400 text-transparent bg-clip-text">آراء</span>
            </div>
          </div>

          {/* Center Section - Search */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
            searchFocused ? 'w-1/2' : 'w-1/3'
          }`}>
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن المشاريع، المستخدمين، أو الآراء..."
                className={`w-full py-2 px-4 pr-10 rounded-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 focus:bg-gray-600 text-white' 
                    : 'bg-gray-100 focus:bg-white text-gray-900'
                } focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <Search className={`absolute right-3 top-2.5 h-5 w-5 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell className={`h-5 w-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="relative group">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-green-400 p-0.5">
                <div className={`h-full w-full rounded-full ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } flex items-center justify-center`}>
                  <span className="text-sm font-medium text-blue-500">ع</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


    </div>
  );
};

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, text, collapsed, isDark }) => (
  <div className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
    isDark 
      ? 'hover:bg-gray-700 text-gray-300' 
      : 'hover:bg-gray-100 text-gray-600'
  } ${collapsed ? 'justify-center' : 'justify-start space-x-3'}`}>
    <Icon className="h-5 w-5" />
    {!collapsed && <span>{text}</span>}
  </div>
);

const sidebarItems = [
  { icon: Home, text: 'الرئيسية' },
  { icon: Bug, text: 'الإبلاغ عن خطأ' },
  { icon: MessageSquare, text: 'الآراء' },
  { icon: Lightbulb, text: 'اقتراحات' },
  { icon: Users, text: 'المستخدمين' },
  { icon: FileText, text: 'المشاريع' },
  { icon: BarChart2, text: 'التحليلات' },
  { icon: HelpCircle, text: 'مركز المساعدة' },
  { icon: Settings, text: 'الإعدادات' },
];

export default ModernAppLayout;
