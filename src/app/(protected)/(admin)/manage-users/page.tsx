"use client"
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

const UserManagementInterface = () => {
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
    { 
      icon: <LayoutDashboard className="w-5 h-5" />, 
      label: 'Overview', 
      view: 'overview' 
    },
    { 
      icon: <Users className="w-5 h-5" />, 
      label: 'User Management', 
      view: 'users' 
    },
    { 
      icon: <Book className="w-5 h-5" />, 
      label: 'Book Management', 
      view: 'books' 
    },
    { 
      icon: <Group className="w-5 h-5" />, 
      label: 'Group Insights', 
      view: 'groups' 
    },
    { 
      icon: <BarChart2 className="w-5 h-5" />, 
      label: 'Performance', 
      view: 'performance' 
    },
    { 
      icon: <Settings className="w-5 h-5" />, 
      label: 'Platform Settings', 
      view: 'settings' 
    }
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

    function handleStatusChange(id: number): void {
        throw new Error('Function not implemented.');
    }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-xl border-r border-gray-200 p-4">
        <div className="flex items-center mb-8">
          <Shield className="text-blue-600 mr-3" size={30} />
          <h1 className="text-2xl font-bold text-blue-900">Admin Panel</h1>
        </div>
        
        <nav>
          {sidebarItems.map((item) => (
            <button
              key={item.view}
              onClick={() => setActiveView(item.view)}
              className={`
                flex items-center w-full p-3 mb-2 rounded-lg transition-all
                ${activeView === item.view 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'hover:bg-gray-100 text-gray-700'}`}
            >
              {item.icon}
              <span className="ml-3 font-medium">{item.label}</span>
              {activeView === item.view && (
                <ChevronRight className="ml-auto" size={18} />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-blue-900">User Management</h2>
            
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

          {/* User Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="p-4 text-left">
                    <input 
                      type="checkbox"
                      checked={selectedUsers.length === users.length}
                      onChange={() => 
                        setSelectedUsers(
                          selectedUsers.length === users.length 
                            ? [] 
                            : users.map(u => u.id)
                        )
                      }
                      className="form-checkbox"
                    />
                  </th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Role</th>
                  <th className="p-4 text-left">Groups</th>
                  <th className="p-4 text-left">Join Date</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map(user => (
                  <tr 
                    key={user.id} 
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-4">
                      <input 
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => toggleUserSelection(user.id)}
                        className="form-checkbox"
                      />
                    </td>
                    <td className="p-4 flex items-center">
                      {user.potentialSupervisor && (
                        <Star 
                          className="text-yellow-500 mr-2" 
                          size={16} 
                          name="Potential Supervisor"
                        />
                      )}
                      {user.name}
                    </td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">
                      <span 
                        className={`
                          px-3 py-1 rounded-full text-xs
                          ${user.role === 'Supervisor' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'}`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4">
                      {user.groups.map(group => (
                        <span 
                          key={group} 
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-1"
                        >
                          {group}
                        </span>
                      ))}
                    </td>
                    <td className="p-4">{user.joinDate}</td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <button 
                          className="text-blue-600 hover:bg-blue-100 p-2 rounded"
                          title="Edit User"
                        >
                          <Edit size={16} />
                        </button>
                        <button 
                          className="text-red-600 hover:bg-red-100 p-2 rounded"
                          title="Delete User"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


        </div>       
      </div>
    </div>
  );
};

export default UserManagementInterface;
