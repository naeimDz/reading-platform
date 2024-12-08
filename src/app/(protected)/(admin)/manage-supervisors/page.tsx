"use client";
import { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Book,
  Group,
  BarChart2,
  Settings,
  ChevronRight,
  Search,
  Filter,
  Edit,
  Trash2,
  Shield,
  Star,
  UserPlus,
  MoreVertical
} from 'lucide-react';
import UserCard from '@/components/shared/UserCard';
import UserStatusMessage from '@/components/shared/UserStatusMessage';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  groups: string[];
  readingStreak: number;
  joinDate: string;
  status: string;
  potentialSupervisor: boolean;
}

interface SidebarItem {
  icon: JSX.Element;
  label: string;
  view: string;
}

const SupervisorManagement = () => {
  const [activeView, setActiveView] = useState<string>('users');
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Yasmin Benali",
      email: "yasmin.benali@example.com",
      role: "Reader",
      groups: ["Young Readers", "Arabic Literature"],
      readingStreak: 24,
      joinDate: "2023-06-15",
      status: "Active",
      potentialSupervisor: true
    },
    {
      id: 2,
      name: "Ahmed Zouani",
      email: "ahmed.zouani@example.com", 
      role: "Supervisor",
      groups: ["Historical Fiction", "Research Group"],
      readingStreak: 42,
      joinDate: "2022-11-20",
      status: "Active",
      potentialSupervisor: false
    }
  ]);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const sidebarItems: SidebarItem[] = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Overview', view: 'overview' },
    { icon: <Users className="w-5 h-5" />, label: 'User Management', view: 'users' },
    { icon: <Book className="w-5 h-5" />, label: 'Book Management', view: 'books' },
    { icon: <Group className="w-5 h-5" />, label: 'Group Insights', view: 'groups' },
    { icon: <BarChart2 className="w-5 h-5" />, label: 'Performance', view: 'performance' },
    { icon: <Settings className="w-5 h-5" />, label: 'Platform Settings', view: 'settings' }
  ];

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleUserSelection = (userId: number) => {
    setSelectedUsers(prev => 
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleUserAction = (action: 'delete' | 'promote') => {
    switch(action) {
      case 'delete':
        setUsers(prev => prev.filter(user => !selectedUsers.includes(user.id)));
        setSelectedUsers([]);
        break;
      case 'promote':
        setUsers(prev => prev.map(user => 
          selectedUsers.includes(user.id) 
            ? { ...user, role: 'Supervisor', potentialSupervisor: false }
            : user
        ));
        setSelectedUsers([]);
        break;
    }
  };

  const handleStatusChange = (id: number): void => {
    setUsers(prev => prev.map(user => 
      user.id === id ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' } : user
    ));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">

      {/* Main Content Area */}
      <div className="flex justify-between mb-6">
        <div >
          <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-semibold text-gray-800">Supervisor Management</h2>
            
            <div className="flex space-x-4">
              {selectedUsers.length > 0 && (
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleUserAction('delete')}
                    className="bg-red-50 text-red-600 px-4 py-2 rounded-lg flex items-center hover:bg-red-100"
                  >
                    <Trash2 className="mr-2" size={16} />
                    Delete
                  </button>
                  <button 
                    onClick={() => handleUserAction('promote')}
                    className="bg-green-50 text-green-600 px-4 py-2 rounded-lg flex items-center hover:bg-green-100"
                  >
                    <Shield className="mr-2" size={16} />
                    Promote
                  </button>
                </div>
              )}
              
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700">
                <UserPlus className="mr-2" size={16} />
                Add User
              </button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex mb-6 space-x-4">
            <div className="relative flex-grow">
              <input 
                type="text" 
                placeholder="Search users by name or email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
            </div>
            <button className="bg-gray-100 p-3 rounded-lg">
              <Filter size={18} className="text-gray-600" />
            </button>
          </div>

          {/* User Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredUsers.map(user => (
              <div key={user.id}>
                <UserCard user={user} onStatusChange={handleStatusChange} />
                <UserStatusMessage user={user} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorManagement;
