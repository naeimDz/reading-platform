'use client'

import React, { useState, useCallback } from 'react'
import { 
  Users, Book, TrendingUp, MessageCircle, 
  Award, Clock, UserPlus, UserMinus, AlertTriangle, 
  Edit2, MoreVertical, Activity, Target 
} from 'lucide-react'

type Group = {
  id: number;
  name: string;
  supervisor: string;
  totalMembers: number;
  activeReaders: number;
  currentBook: string;
  progressPercentage: number;
}

type Member = {
  id: number;
  name: string;
  readingStatus: 'On Track' | 'Behind';
  daysStreak: number;
  booksRead: number;
  warningLevel: number;
  progress: number;
}

type BookType = {
  id: number;
  title: string;
  author: string;
  startDate: string;
  endDate: string;
  assignedMembers: number;
  completedMembers: number;
}

type TimelineEvent = {
  date: string;
  event: string;
  description: string;
}

const GroupDetailManagement: React.FC = () => {
  const [group, setGroup] = useState<Group>({
    id: 1,
    name: "Literary Explorers",
    supervisor: "Mohamed Benali",
    totalMembers: 24,
    activeReaders: 18,
    currentBook: "Shadows of Algiers",
    progressPercentage: 65
  })

  const [members, setMembers] = useState<Member[]>([
    {
      id: 1,
      name: "Ahmed Hassan",
      readingStatus: "On Track",
      daysStreak: 22,
      booksRead: 7,
      warningLevel: 0,
      progress: 85
    },
    {
      id: 2,
      name: "Leila Bouazza",
      readingStatus: "Behind",
      daysStreak: 15,
      booksRead: 5,
      warningLevel: 1,
      progress: 45
    },
    {
      id: 2,
      name: "Leila Bouazza",
      readingStatus: "Behind",
      daysStreak: 15,
      booksRead: 5,
      warningLevel: 1,
      progress: 45
    },
    {
      id: 2,
      name: "Leila Bouazza",
      readingStatus: "Behind",
      daysStreak: 15,
      booksRead: 5,
      warningLevel: 1,
      progress: 45
    },
    {
      id: 2,
      name: "Leila Bouazza",
      readingStatus: "Behind",
      daysStreak: 15,
      booksRead: 5,
      warningLevel: 1,
      progress: 45
    },
    {
      id: 2,
      name: "Leila Bouazza",
      readingStatus: "Behind",
      daysStreak: 15,
      booksRead: 5,
      warningLevel: 1,
      progress: 45
    },{
      id: 2,
      name: "Leila Bouazza",
      readingStatus: "Behind",
      daysStreak: 15,
      booksRead: 5,
      warningLevel: 1,
      progress: 45
    },
    {
      id: 1,
      name: "Ahmed Hassan",
      readingStatus: "On Track",
      daysStreak: 22,
      booksRead: 7,
      warningLevel: 0,
      progress: 85
    },
        {
      id: 1,
      name: "Ahmed Hassan",
      readingStatus: "On Track",
      daysStreak: 22,
      booksRead: 7,
      warningLevel: 0,
      progress: 85
    },
  ])

  const [currentBooks, setCurrentBooks] = useState<BookType[]>([
    {
      id: 1,
      title: "Shadows of Algiers",
      author: "Kamel Daoud",
      startDate: "2024-01-15",
      endDate: "2024-02-28",
      assignedMembers: 24,
      completedMembers: 12
    }
  ])

  const [readingTimeline, setReadingTimeline] = useState<TimelineEvent[]>([
    {
      date: "2024-01-15",
      event: "Book Assignment",
      description: "Group started reading 'Shadows of Algiers'"
    },
    {
      date: "2024-01-22",
      event: "Progress Check",
      description: "Mid-point review of reading progress"
    }
  ])

  const handleUpdateMemberStatus = (memberId: number, status: 'On Track' | 'Behind', warningLevel: number) => {
    setMembers(members.map(member =>
      member.id === memberId
        ? { ...member, readingStatus: status, warningLevel: warningLevel }
        : member
    ))
  }

  const handleSendWarning = (memberId: number) => {
    const updatedMembers = members.map(member =>
      member.id === memberId
        ? { ...member, warningLevel: Math.min(member.warningLevel + 1, 3) }
        : member
    )
    setMembers(updatedMembers)
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white min-h-screen p-8">
      <div className="container mx-auto space-y-8">
        {/* Group Header */}
        <header className="bg-white shadow-xl rounded-2xl p-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Book className="text-indigo-600" size={40} />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{group.name}</h1>
              <p className="text-gray-500">Supervised by {group.supervisor}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition flex items-center">
              <MessageCircle className="mr-2" size={20} /> Group Message
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition flex items-center">
              <Edit2 className="mr-2" size={20} /> Edit Group
            </button>
          </div>
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Members Management */}
          <div className="md:col-span-2 bg-white shadow-xl rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Users className="mr-3 text-purple-600" size={32} /> 
                Member Management
              </h2>
              <button className="bg-blue-50 hover:bg-blue-100 p-2 rounded-full">
                <UserPlus className="text-blue-600" size={20} />
              </button>
            </div>

            <div className="space-y-4">
              {members.map(member => (
                <div 
                  key={member.id} 
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="font-semibold">{member.name}</h3>
                      <div className="flex items-center space-x-2">
                        <span 
                          className={`
                            px-2 py-1 rounded-full text-xs 
                            ${member.readingStatus === 'On Track' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                            }
                          `}
                        >
                          {member.readingStatus}
                        </span>
                        {[...Array(member.warningLevel)].map((_, index) => (
                          <AlertTriangle 
                            key={index} 
                            className="text-red-500" 
                            size={16} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-right">
                      <div className="text-sm text-gray-600">
                        pages Read today : {member.booksRead}
                      </div>
                      <div className="text-sm text-gray-600">
                        Reading Streak: {member.daysStreak} days
                      </div>
                    </div>
                    <div className="space-x-2">
                      <button 
                        onClick={() => handleUpdateMemberStatus(member.id, 'On Track', 0)}
                        className="bg-green-50 hover:bg-green-100 p-2 rounded-full"
                      >
                        <Activity className="text-green-600" size={20} />
                      </button>
                      <button 
                        onClick={() => handleSendWarning(member.id)}
                        className="bg-red-50 hover:bg-red-100 p-2 rounded-full"
                      >
                        <AlertTriangle className="text-red-600" size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions & Group Overview */}
          <div className="space-y-8">
            <div className="bg-white shadow-xl rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Target className="mr-3 text-indigo-600" size={32} /> 
                Group Overview
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Total Members</span>
                  <span className="font-medium">{group.totalMembers}</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Readers</span>
                  <span className="font-medium">{group.activeReaders}</span>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between mb-2">
                    <span>Group Reading Progress</span>
                    <span className="text-indigo-600">
                      {group.progressPercentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full" 
                      style={{ width: `${group.progressPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white shadow-xl rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Clock className="mr-3 text-green-600" size={32} /> 
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg flex flex-col items-center">
                  <Book className="text-blue-600 mb-2" size={24} />
                  <span>New Book</span>
                </button>
                <button className="bg-green-50 hover:bg-green-100 p-4 rounded-lg flex flex-col items-center">
                  <MessageCircle className="text-green-600 mb-2" size={24} />
                  <span>Announce</span>
                </button>
                <button className="bg-purple-50 hover:bg-purple-100 p-4 rounded-lg flex flex-col items-center">
                  <TrendingUp className="text-purple-600 mb-2" size={24} />
                  <span>Progress</span>
                </button>
                <button className="bg-red-50 hover:bg-red-100 p-4 rounded-lg flex flex-col items-center">
                  <Award className="text-red-600 mb-2" size={24} />
                  <span>Rewards</span>
                </button>
              </div>
            </div>
          </div>

          {/* Reading Timeline */}
          <div className="md:col-span-3 bg-white shadow-xl rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Activity className="mr-3 text-purple-600" size={32} /> 
              Reading Timeline
            </h2>
            <div className="space-y-4">
              {readingTimeline.map((event, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                >
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <div>
                    <div className="font-semibold">{event.event}</div>
                    <div className="text-sm text-gray-600">{event.description}</div>
                    <div className="text-xs text-gray-500">{event.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupDetailManagement
