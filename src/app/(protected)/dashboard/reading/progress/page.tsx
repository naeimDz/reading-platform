"use client"
import React, { useState } from 'react';
import { 
  Book, 
  Target, 
  Trophy, 
  ChevronRight, 
  BarChart2, 
  Zap, 
  Award, 
  Star 
} from 'lucide-react';

interface Genre {
  name: string;
  percentage: number;
  color: string;
}

interface ProgressData {
  totalBooksRead: number;
  readingStreak: number;
  achievements: number;
  monthlyGoal: number;
  genreBreakdown: Genre[];
}

const ReadingProgressDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'achievements'>('overview');

  // Mock data for reading progress
  const progressData: ProgressData = {
    totalBooksRead: 12,
    readingStreak: 42,
    achievements: 8,
    monthlyGoal: 15,
    genreBreakdown: [
      { name: 'تطوير ذاتي', percentage: 40, color: 'bg-blue-500' },
      { name: 'أعمال', percentage: 30, color: 'bg-purple-500' },
      { name: 'روايات', percentage: 20, color: 'bg-green-500' },
      { name: 'علمي', percentage: 10, color: 'bg-red-500' },
    ],
  };

  return (
    <div >
      {/* Header */}
      <div className="items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">تفاصيل التقدم في القراءة</h1>
        <div className="w-10"></div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-md mb-8">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-4 flex items-center justify-center gap-2 ${
              activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
            }`}
          >
            <BarChart2 size={20} />
            نظرة عامة
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`flex-1 py-4 flex items-center justify-center gap-2 ${
              activeTab === 'achievements' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
            }`}
          >
            <Trophy size={20} />
            الإنجازات
          </button>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="p-6 space-y-6">
            {/* Reading Streak Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-6 flex items-center justify-between shadow-lg">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={24} />
                  <span className="font-semibold">سلسلة القراءة المستمرة</span>
                </div>
                <p className="text-3xl font-bold">{progressData.readingStreak} يوم</p>
                <p className="text-sm mt-2">استمر في القراءة يومياً!</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl">
                <Target size={32} className="text-white" />
              </div>
            </div>

            {/* Genre Breakdown */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-lg font-semibold mb-4">توزيع الأنواع</h2>
              <div className="space-y-3">
                {progressData.genreBreakdown.map((genre, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-10 h-2 ${genre.color} rounded-full`}></div>
                    <span className="flex-1">{genre.name}</span>
                    <span className="text-gray-600">{genre.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress to Monthly Goal */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">الهدف الشهري</h2>
                <span className="text-blue-600">
                  {progressData.totalBooksRead}/{progressData.monthlyGoal} كتاب
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${(progressData.totalBooksRead / progressData.monthlyGoal) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="p-6 space-y-6">
            {/* Total Achievements */}
            <div className="bg-gradient-to-br from-green-500 to-blue-500 text-white rounded-2xl p-6 flex items-center justify-between shadow-lg">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Award size={24} />
                  <span className="font-semibold">إجمالي الإنجازات</span>
                </div>
                <p className="text-3xl font-bold">{progressData.achievements}</p>
                <p className="text-sm mt-2">استمر في تحقيق أهدافك!</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl">
                <Star size={32} className="text-white" />
              </div>
            </div>

            {/* Individual Achievements */}
            <div className="space-y-4">
              {[
                { title: 'قارئ متقدم', description: 'قراءة 10 كتب في شهر', icon: <Book size={24} /> },
                { title: 'مثابر', description: 'سلسلة قراءة لمدة 30 يوماً', icon: <Target size={24} /> },
                { title: 'متنوع', description: 'القراءة في 4 أنواع مختلفة', icon: <Trophy size={24} /> },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-gray-500 text-sm">{achievement.description}</p>
                  </div>
                  <button className="text-blue-600">
                    <ChevronRight size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadingProgressDetails;
