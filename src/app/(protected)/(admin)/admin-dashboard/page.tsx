"use client"
import React, { useState } from 'react';
import { 
  Users, Book, TrendingUp, Award, MessageCircle, 
  Settings, BarChart2, Target, Globe, Filter, 
  Bell
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeView, setActiveView] = useState('overview');

  // Simulated data for dashboard
  const platformStats = {
    totalUsers: 5423,
    activeReaders: 3211,
    booksRead: 12345,
    groupsActive: 87
  };

  const topPerformers = [
    { name: "Fatima Bouazza", booksRead: 42, streak: 65 },
    { name: "Ahmed Mansouri", booksRead: 38, streak: 55 },
    { name: "Leila Khali", booksRead: 35, streak: 48 }
  ];

  const recentActivities = [
    { type: 'book', description: "New book 'Echoes of Algiers' added", timestamp: "2 mins ago" },
    { type: 'group', description: "New reading group 'Cultural Explorers' created", timestamp: "1 hour ago" },
    { type: 'user', description: "50 new users joined this week", timestamp: "6 hours ago" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <div className="flex items-center mb-6">
            <img 
              src="/api/placeholder/80/80" 
              alt="Admin" 
              className="w-16 h-16 rounded-full mr-4 border-4 border-indigo-100"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-800">Admin Dashboard</h2>
              <p className="text-sm text-gray-500">Comprehensive Platform Management</p>
            </div>
          </div>
          
          <nav className="space-y-2">
            {[
              { icon: <BarChart2 />, label: 'Overview', view: 'overview' },
              { icon: <Users />, label: 'User Management', view: 'users' },
              { icon: <Book />, label: 'Book Management', view: 'books' },
              { icon: <Globe />, label: 'Group Insights', view: 'groups' },
              { icon: <Award />, label: 'Performance', view: 'performance' },
              { icon: <Settings />, label: 'Platform Settings', view: 'settings' }
            ].map((item) => (
              <button
                key={item.view}
                className={`
                  w-full text-left p-3 rounded-lg flex items-center transition-all
                  ${activeView === item.view 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'hover:bg-gray-100 text-gray-600'}
                `}
                onClick={() => setActiveView(item.view)}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="md:col-span-3 space-y-6">
          {/* Platform Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { 
                icon: <Users className="text-blue-500" />, 
                label: "Total Users", 
                value: platformStats.totalUsers 
              },
              { 
                icon: <Book className="text-green-500" />, 
                label: "Books Read", 
                value: platformStats.booksRead 
              },
              { 
                icon: <TrendingUp className="text-purple-500" />, 
                label: "Active Readers", 
                value: platformStats.activeReaders 
              },
              { 
                icon: <Target className="text-red-500" />, 
                label: "Active Groups", 
                value: platformStats.groupsActive 
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-4 flex items-center hover:shadow-lg transition"
              >
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
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Add User", icon: Users },
                { label: "Create Group", icon: Book },
                { label: "Send Notification", icon: Bell },
                { label: "Generate Report", icon: BarChart2 }
              ].map((action, index) => (
                <button key={index} className="bg-gray-100 hover:bg-blue-50 p-4 rounded-lg 
                  flex items-center justify-center space-x-2 transition-all duration-300">
                  <action.icon className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-800">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
          {/* Top Performers & Recent Activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top Performers */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold flex items-center">
                  <Award className="mr-3 text-yellow-500" /> 
                  Top Performers
                </h3>
                <button className="text-sm text-indigo-600 hover:underline">
                  View All
                </button>
              </div>
              {topPerformers.map((performer, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium">{performer.name}</p>
                    <p className="text-sm text-gray-500">
                      {performer.booksRead} books | {performer.streak} day streak
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                    Top Reader
                  </span>
                </div>
              ))}
            </div>

            {/* Recent Activities */}
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
                <div 
                  key={index} 
                  className="flex justify-between items-center p-3 border-b last:border-b-0 hover:bg-gray-50"
                >
                  <div>
                    <p className="font-medium">{activity.description}</p>
                    <p className="text-sm text-gray-500">{activity.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;