"use client"
import { useState } from 'react';
import {
  Search,
  Filter,
  Edit,
  Trash2,
  Shield,
  Star,
  UserPlus,
} from 'lucide-react';


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


  return (
    <div className="bg-gray-50 min-h-screen p-8">
      

      {/* Main Content Area */}

      <div className="flex justify-between mb-6">
      <h2 className="text-4xl font-semibold text-gray-800">User Management</h2>
            
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
  
   
  );
};

export default UserManagementInterface;
