"use client"
import React, { useState, useCallback } from 'react';
import { 
  Users, Edit2, Trash2, PlusCircle, Search, Filter, 
  BookOpen, MessageCircle ,Eye
} from 'lucide-react';
import Link from 'next/link';

// Define TypeScript interface for Group structure
interface Group {
  id: number;
  name: string;
  supervisor: string;
  totalMembers: number;
  activeMembers: number;
  currentBook: string;
  recentActivity: string;
  status: 'Active' | 'Inactive';
}

const SupervisorGroupManagement: React.FC = () => {
  // State with type for groups
  const [groups, setGroups] = useState<Group[]>([
    {
      id: 1,
      name: "Literary Explorers",
      supervisor: "Mohamed Benali",
      totalMembers: 24,
      activeMembers: 18,
      currentBook: "Shadows of Algiers",
      recentActivity: "3 hours ago",
      status: "Active"
    },
    {
      id: 2,
      name: "Desert Bibliophiles",
      supervisor: "Fatima Khaled", 
      totalMembers: 32,
      activeMembers: 25,
      currentBook: "Roots of Resistance", 
      recentActivity: "1 hour ago",
      status: "Active"
    }
  ]);

  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<'All' | 'Active' | 'Inactive'>('All');

  // Function to add a new group (placeholder for later API call or modal functionality)
  const handleAddGroup = () => {
    console.log("Add new group"); // Placeholder for actual logic
  };

  // Function to edit an existing group
  const handleEditGroup = (group: Group) => {
    setSelectedGroup(group); // Open edit modal or navigate to edit page
  };

  // Function to delete a group
  const handleDeleteGroup = (groupId: number) => {
    setGroups(groups.filter(group => group.id !== groupId)); // Remove from state
  };

  // Filter groups based on search term and status
  const filteredGroups = groups.filter(group => 
    (filterStatus === 'All' || group.status === filterStatus) &&
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white min-h-screen p-8">
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-10">
          <div className="flex items-center space-x-4">
            <Users className="text-indigo-600" size={40} />
            <h1 className="text-4xl font-bold text-gray-800">Group Management</h1>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={handleAddGroup}
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition flex items-center"
            >
              <PlusCircle className="mr-2" size={20} /> Create New Group
            </button>
          </div>
        </header>

        <div className="bg-white shadow-xl rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4 w-full">
              <div className="relative flex-grow">
                <input 
                  type="text" 
                  placeholder="Search groups..." 
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-500" size={20} />
                <select 
                  className="border rounded px-2 py-2"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as 'All' | 'Active' | 'Inactive')}
                >
                  <option>All</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredGroups.map(group => (
              <div 
                key={group.id} 
                className="bg-white border-2 border-transparent hover:border-indigo-300 rounded-2xl p-6 shadow-md transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{group.name}</h2>
                    <p className="text-sm text-gray-500">Supervisor: {group.supervisor}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleEditGroup(group)}
                      className="text-blue-500 hover:bg-blue-50 p-2 rounded-full"
                    >
                      <Edit2 size={20} />
                    </button>
                    <button 
                      onClick={() => handleDeleteGroup(group.id)}
                      className="text-red-500 hover:bg-red-50 p-2 rounded-full"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <Users size={20} className="text-indigo-600" />
                      <span>Total Members</span>
                    </div>
                    <span className="font-medium">{group.totalMembers}</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <BookOpen size={20} className="text-green-600" />
                      <span>Current Book</span>
                    </div>
                    <span className="font-medium text-sm truncate">{group.currentBook}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <MessageCircle size={20} className="text-purple-600" />
                      <span>Recent Activity</span>
                    </div>
                    <span className="text-sm text-gray-500">{group.recentActivity}</span>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <span 
                    className={`
                      px-3 py-1 rounded-full text-sm 
                      ${group.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                      }
                    `}
                  >
                    {group.status}
                  </span>
                  <Link href={`/group-management/${group.id}`}>
                  <button className="text-indigo-600 hover:underline text-sm flex items-center">
                    <Eye className="mr-1" size={16} /> View Details
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredGroups.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              No groups found. Try adjusting your search or filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupervisorGroupManagement;
