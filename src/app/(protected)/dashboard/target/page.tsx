"use client"

import React, { useState } from 'react';
import { 
  Target, 
  TrendingUp, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Zap, 
  Award, 
  ArrowUpRight, 
  BarChart2, 
  Home, 
  Book
} from 'lucide-react';
import ProgressUpdateModal from '@/components/layouts/user/ProgressUpdateModal';

// Define types for your goal
interface Goal {
  id: number;
  title: string;
  progress: number;
  total: number;
  streak: number;
  type: 'current' | 'completed';
  category: string;
  icon: JSX.Element;
  progressColor: string;
  description: string;
}

const GoalsDashboard = () => {
  const [activeTab, setActiveTab] = useState<'current' | 'completed'>('current');
  const [selectedGoal, setSelectedGoal] = useState<number | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const goals: Goal[] = [
    {
      id: 1,
      title: "قراءة ٢٤ كتاب هذا العام",
      progress: 12,
      total: 24,
      streak: 42,
      type: 'current',
      category: 'القراءة',
      icon: <Book size={24} className="text-blue-600" />,
      progressColor: 'bg-blue-500',
      description: "تحدي القراءة السنوي - نصف الطريق!"
    },
    {
      id: 2,
      title: "قراءة ل 12 مؤلف",
      progress: 3,
      total: 12,
      streak: 2,
      type: 'current',
      category: "قراءة متنوعة",
      icon: <Zap size={24} className="text-purple-600" />,
      progressColor: 'bg-purple-500',
      description :"تنوع الثقافات"
    },
    {
      id: 3,
      title: "إنهاء كتاب أسبوعياً",
      progress: 2,
      total: 4,
      streak: 8,
      type: 'completed',
      category: 'القراءة',
      icon: <CheckCircle size={24} className="text-green-600" />,
      progressColor: 'bg-green-500',
      description: "إنجاز متميز في القراءة المنتظمة"
    }
  ];
  const openModal = (goalId: number) => {
    setSelectedGoal(goalId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedGoal(null);
  };
  const updateGoalProgress = (progressAmount: number) => {
    const updatedGoals = goals.map((goal) =>
      goal.id === selectedGoal ? { ...goal, progress: goal.progress + progressAmount } : goal
    );
    // Do something with updated goals, like saving to state or server
  };
  const renderGoalCard = (goal: Goal) => {
    const progressPercentage = (goal.progress / goal.total) * 100;

    return (
      <div 
        key={goal.id} 
        className={`
          border rounded-2xl p-5 mb-4 transition-all duration-300
          ${selectedGoal === goal.id 
            ? 'border-blue-500 shadow-lg scale-105' 
            : 'border-gray-200 hover:border-blue-300'}`}
        onClick={() => setSelectedGoal(goal.id)}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            {goal.icon}
            <div>
              <h3 className="font-semibold text-gray-800">{goal.title}</h3>
              <p className="text-sm text-gray-500">{goal.category}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-gray-400" />
            <span className="text-sm text-gray-600">{goal.streak} يوم متتابع</span>
          </div>
        </div>
        <div className="bg-gray-100 rounded-full h-2 mb-2">
          <div 
            className={`${goal.progressColor} h-2 rounded-full`} 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">{goal.description}</p>
          <div className="flex items-center gap-1 text-sm">
            <span className="font-bold">{goal.progress}</span>
            <span className="text-gray-500">/ {goal.total}</span>
          </div>
        </div>

       
      </div>
    );
  };

  const renderDetailPanel = () => {
    const goal = goals.find(g => g.id === selectedGoal);
    if (!goal) return null;

    return (
<div className="bg-white border-r border-gray-200 p-6 w-full max-w-full md:max-w-lg lg:max-w-xl space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">تفاصيل الهدف</h2>
        <button 
          className="text-gray-500 hover:text-blue-600"
          onClick={() => setSelectedGoal(null)}
        >
          <XCircle size={24} />
        </button>
      </div>

      <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
        {goal.icon}
        <div>
          <h3 className="font-semibold text-xl">{goal.title}</h3>
          <p className="text-gray-500">{goal.category}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <TrendingUp size={20} className="text-blue-600" />
            <span>التقدم</span>
          </div>
          <div className="font-bold">
            {goal.progress} / {goal.total}
          </div>
        </div>

        <div className="bg-gray-100 rounded-full h-3">
          <div 
            className={`${goal.progressColor} h-3 rounded-full`} 
            style={{ width: `${(goal.progress / goal.total) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-xl text-center">
          <Clock size={24} className="mx-auto mb-2 text-blue-600" />
          <p className="font-bold">{goal.streak}</p>
          <p className="text-sm text-gray-500">يوم متتابع</p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl text-center">
          <Award size={24} className="mx-auto mb-2 text-green-600" />
          <p className="font-bold">٪{Math.round((goal.progress / goal.total) * 100)}</p>
          <p className="text-sm text-gray-500">نسبة الإنجاز</p>
        </div>
      </div>

      <div>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        onClick={() => openModal(goal.id)}>
          تحديث التقدم
          <ArrowUpRight size={20} />
        </button>
      </div>
    </div>
    );
  };

  return (
    <div>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Goals List */}
        <div className="w-96 border-r border-gray-200 p-6 overflow-y-auto bg-white">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">أهدافي</h1>
            <button className="text-blue-600 flex items-center gap-1" >
              <BarChart2 size={20} />
              تقرير
            </button>
          </div>

          <div className="flex border-b mb-6">
            <button 
              className={`flex-1 py-2 ${activeTab === 'current' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('current')}
            >
              الأهداف الحالية
            </button>
            <button 
              className={`flex-1 py-2 ${activeTab === 'completed' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('completed')}
            >
              المنجزة
            </button>
          </div>

          {goals
            .filter(goal => goal.type === activeTab)
            .map(renderGoalCard)
          }

          <button className="w-full bg-blue-50 text-blue-600 py-3 rounded-lg mt-4 flex items-center justify-center gap-2">
            <Zap size={20} />
            إضافة هدف جديد
          </button>
        </div>

        {/* Goal Details Panel */}
        {selectedGoal ? renderDetailPanel() : (
          <div className="flex-1 flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <Target size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">اختر هدفاً لعرض التفاصيل</p>
            </div>
          </div>
        )}
      </div>

       {/* Show Modal if showModal is true */}
       {showModal && selectedGoal && (
        <ProgressUpdateModal
          goal={goals.find((goal) => goal.id === selectedGoal)!}
          onClose={closeModal}
          onUpdate={updateGoalProgress}
        />
      )}
    </div>
  );
};

export default GoalsDashboard;








