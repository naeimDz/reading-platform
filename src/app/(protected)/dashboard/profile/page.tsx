"use client"
import React, { useState } from 'react';
import { 
  User, Book, Award, TrendingUp, Calendar, 
  Edit2, Settings, LogOut, Target, 
  Star, MapPin, MessageCircle 
} from 'lucide-react';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Ahmed Benali",
    email: "ahmed.benali@example.com",
    location: "Algiers, Algeria",
    bio: "Passionate reader exploring literary worlds, one book at a time.",
    avatarUrl: "/api/placeholder/150/150",
    joinDate: "March 15, 2023",
    readingGoal: {
      yearly: 30,
      current: 15
    },
    stats: {
      booksRead: 15,
      totalPagesRead: 3752,
      readingStreak: 22,
      favoriteGenres: ["Historical Fiction", "North African Literature"]
    },
    achievements: [
      { 
        id: 1, 
        name: "Consistent Reader", 
        description: "Read 15 days consecutively", 
        icon: <Star className="text-yellow-500" size={24} /> 
      },
      { 
        id: 2, 
        name: "Genre Explorer", 
        description: "Read across 3 different genres", 
        icon: <MapPin className="text-green-500" size={24} /> 
      }
    ]
  });

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white min-h-screen p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Overview Section */}
          <div className="md:col-span-1 bg-white rounded-2xl shadow-xl p-6 text-center">
            <div className="relative inline-block mb-6">
              <img 
                src={user.avatarUrl} 
                alt={user.name} 
                className="w-32 h-32 rounded-full mx-auto border-4 border-indigo-200"
              />
              <button className="absolute bottom-0 right-0 bg-indigo-500 text-white p-2 rounded-full">
                <Edit2 size={18} />
              </button>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-600 mb-4">{user.bio}</p>
            
            <div className="flex justify-center space-x-4 mb-6">
              <div className="flex flex-col items-center">
                <span className="font-bold text-indigo-600">{user.stats.booksRead}</span>
                <span className="text-sm text-gray-500">Books Read</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-green-600">{user.stats.readingStreak}</span>
                <span className="text-sm text-gray-500">Reading Streak</span>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 flex items-center justify-center">
                <MessageCircle className="mr-2" size={20} /> Edit Profile
              </button>
              <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 flex items-center justify-center">
                <Settings className="mr-2" size={20} /> Account Settings
              </button>
            </div>
          </div>

          {/* Reading Progress & Stats Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                  <Target className="mr-3 text-purple-600" size={32} /> 
                  Reading Goal Progress
                </h3>
                <span className="text-indigo-600 font-medium">
                  {user.readingGoal.current} / {user.readingGoal.yearly} Books
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div 
                  className="bg-indigo-600 h-4 rounded-full" 
                  style={{width: `${(user.readingGoal.current / user.readingGoal.yearly) * 100}%`}}
                ></div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <Book className="text-blue-600 mb-2" size={28} />
                  <span className="block text-sm text-gray-600">Total Pages Read</span>
                  <span className="text-xl font-bold">{user.stats.totalPagesRead}</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <Award className="text-green-600 mb-2" size={28} />
                  <span className="block text-sm text-gray-600">Favorite Genres</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {user.stats.favoriteGenres.map(genre => (
                      <span key={genre} className="bg-green-100 text-xs px-2 py-1 rounded-full">
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <Calendar className="text-purple-600 mb-2" size={28} />
                  <span className="block text-sm text-gray-600">Member Since</span>
                  <span className="text-xl font-bold">{user.joinDate}</span>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <TrendingUp className="mr-3 text-green-600" size={32} /> 
                Achievements
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {user.achievements.map(achievement => (
                  <div 
                    key={achievement.id} 
                    className="bg-gray-50 p-4 rounded-lg flex items-center space-x-4 hover:bg-gray-100 transition"
                  >
                    <div className="bg-white p-3 rounded-full shadow">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{achievement.name}</h4>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;