"use client"
import React, { useState, useEffect } from 'react';
import { 
  BookOpenIcon, 
  UsersIcon, 
  TrendingUpIcon, 
  StarIcon, 
  AlertTriangleIcon,
  ClockIcon,
  CheckCircleIcon,
  MessageSquareIcon
} from 'lucide-react';

// Mock data for the dashboard
const mockDashboardData = {
  groupName: "Horizon Readers Club",
  overallStats: {
    totalMembers: 42,
    activeReaders: 35,
    booksCompleted: 67,
    averageReadingTime: 2.5 // hours per week
  },
  readingChallenges: [
    {
      id: 1,
      title: "Summer Reading Marathon",
      participants: 25,
      progress: 65,
      deadline: "August 31, 2024"
    },
    {
      id: 2,
      title: "Classic Literature Quest",
      participants: 18,
      progress: 40,
      deadline: "December 15, 2024"
    }
  ],
  memberLeaderboard: [
    { 
      name: "Yasmin Ahmed", 
      booksRead: 12, 
      totalReadingHours: 89,
      badges: ['Consistent Reader', 'Genre Explorer']
    },
    { 
      name: "Omar Boudjemaa", 
      booksRead: 10, 
      totalReadingHours: 76,
      badges: ['Speed Reader', 'Night Owl']
    },
    { 
      name: "Fatima Zara", 
      booksRead: 9, 
      totalReadingHours: 65,
      badges: ['Diversity Champion']
    }
  ],
  recentAchievements: [
    { 
      user: "Yasmin Ahmed", 
      achievement: "Completed 'War and Peace'", 
      timestamp: "2 hours ago" 
    },
    { 
      user: "Omar Boudjemaa", 
      achievement: "Started Russian Literature Challenge", 
      timestamp: "5 hours ago" 
    }
  ],
  potentialRisks: [
    {
      type: "Inactivity",
      members: 7,
      details: "Members inactive for over 2 weeks"
    },
    {
      type: "Goal Deviation",
      members: 3,
      details: "Behind schedule in current reading challenge"
    }
  ]
};

const InnovativeSupervisorDashboard = () => {
  const [dashboardData, setDashboardData] = useState(mockDashboardData);
  const [activeSection, setActiveSection] = useState('overview');

  const renderDashboardSection = () => {
    switch(activeSection) {
      case 'challenges':
        return (
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Active Reading Challenges</h2>
            {dashboardData.readingChallenges.map((challenge) => (
              <div key={challenge.id} className="mb-6 bg-blue-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-blue-800">{challenge.title}</h3>
                  <span className="text-sm text-gray-600">Deadline: {challenge.deadline}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div 
                    className="bg-blue-600 h-3 rounded-full" 
                    style={{width: `${challenge.progress}%`}}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Participants: {challenge.participants}</span>
                  <span className="text-sm font-bold text-blue-700">{challenge.progress}% Complete</span>
                </div>
              </div>
            ))}
          </div>
        );
      case 'leaderboard':
        return (
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Member Leaderboard</h2>
            {dashboardData.memberLeaderboard.map((member, index) => (
              <div 
                key={member.name} 
                className={`flex items-center p-4 rounded-lg mb-4 ${
                  index === 0 ? 'bg-yellow-50 border-2 border-yellow-200' : 
                  index === 1 ? 'bg-gray-100' : 
                  index === 2 ? 'bg-yellow-100' : ''
                }`}
              >
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {member.name}
                      {index === 0 && <StarIcon className="inline ml-2 text-yellow-500" />}
                    </h3>
                    <div className="flex space-x-2">
                      {member.badges.map((badge) => (
                        <span 
                          key={badge} 
                          className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>Books Read: {member.booksRead}</p>
                    <p>Total Reading Hours: {member.totalReadingHours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <><div className='grid grid-cols-1 m-6'>
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Group Overview</h3>
                <UsersIcon className="text-blue-600" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Total Members</p>
                  <p className="text-2xl font-bold text-blue-800">
                    {dashboardData.overallStats.totalMembers}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Active Readers</p>
                  <p className="text-2xl font-bold text-green-800">
                    {dashboardData.overallStats.activeReaders}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Books Completed</p>
                  <p className="text-2xl font-bold text-purple-800">
                    {dashboardData.overallStats.booksCompleted}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Avg Reading Time</p>
                  <p className="text-2xl font-bold text-orange-800">
                    {dashboardData.overallStats.averageReadingTime} hrs
                  </p>
                </div>
              </div>
            </div>

          </div><div className="grid grid-cols-3 gap-4">
              {/* Overview Cards */}

              {/* Recent Achievements */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Recent Achievements</h3>
                  <CheckCircleIcon className="text-green-600" />
                </div>
                {dashboardData.recentAchievements.map((achievement) => (
                  <div key={achievement.user} className="mb-4 pb-4 border-b last:border-b-0">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-800">{achievement.user}</p>
                        <p className="text-sm text-gray-600">{achievement.achievement}</p>
                      </div>
                      <span className="text-xs text-gray-500">{achievement.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Potential Risks */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-red-800">Potential Risks</h3>
                  <AlertTriangleIcon className="text-red-600" />
                </div>
                {dashboardData.potentialRisks.map((risk) => (
                  <div
                    key={risk.type}
                    className="mb-4 p-4 bg-red-50 rounded-lg border border-red-200"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-red-800">{risk.type}</p>
                        <p className="text-sm text-red-600">{risk.details}</p>
                      </div>
                      <span className="bg-red-200 text-red-800 px-2 py-1 rounded-full text-xs">
                        {risk.members} Members
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Motivational Messaging */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Motivate Your Group</h2>
                <textarea
                  className="w-full h-32 border rounded p-2 mb-4"
                  placeholder="Write a motivational message to inspire your readers..."
                  value=""

                ></textarea>
                <button
                  className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"

                >
                  Send Message
                </button>
              </div>
            </div></>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Top Navigation */}
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold text-gray-800">{dashboardData.groupName}</h1>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            Active
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="flex space-x-4">
            <button 
              onClick={() => setActiveSection('overview')}
              className={`px-4 py-2 rounded-lg ${
                activeSection === 'overview' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveSection('challenges')}
              className={`px-4 py-2 rounded-lg ${
                activeSection === 'challenges' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              Challenges
            </button>
            <button 
              onClick={() => setActiveSection('leaderboard')}
              className={`px-4 py-2 rounded-lg ${
                activeSection === 'leaderboard' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              Leaderboard
            </button>
          </nav>

        </div>
      </header>

      {/* Dynamic Dashboard Content */}
      {renderDashboardSection()}
    </div>
  );
};

export default InnovativeSupervisorDashboard;