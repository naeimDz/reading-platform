"use client"
import React, { useState } from 'react';
import { 
  Plus, 
  MoreHorizontal, 
  Calendar,
  MessageCircle,
  Paperclip,
} from 'lucide-react';

// Define types for Task and Column
interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'urgent' | 'high' | 'medium' | 'low';
  dueDate: string;
  comments: number;
  attachments: number;
  assignees: string[];
  tags: string[];
}

interface Column {
  id: string;
  title: string;
  color: string;
  count: number;
}

const ModernKanbanDashboard: React.FC = () => {  
  const columns: Column[] = [
    {
      id: 'backlog',
      title: 'قائمة المهام',
      color: 'bg-gray-100',
      count: 5
    },
    {
      id: 'inProgress',
      title: 'قيد التنفيذ',
      color: 'bg-blue-100',
      count: 3
    },
    {
      id: 'review',
      title: 'المراجعة',
      color: 'bg-purple-100',
      count: 2
    },
    {
      id: 'done',
      title: 'مكتمل',
      color: 'bg-green-100',
      count: 4
    }
  ];

  const tasks: Record<string, Task[]> = {
    backlog: [
      {
        id: 1,
        title: 'تحسين تجربة المستخدم',
        description: 'تحليل وتحسين تجربة المستخدم في الصفحة الرئيسية',
        priority: 'high',
        dueDate: '2024-12-25',
        comments: 3,
        attachments: 2,
        assignees: ['أ', 'م'],
        tags: ['UI/UX', 'تصميم']
      },
      {
        id: 2,
        title: 'تطوير واجهة API',
        description: 'إنشاء واجهة برمجة تطبيقات RESTful جديدة',
        priority: 'medium',
        dueDate: '2024-12-28',
        comments: 5,
        attachments: 1,
        assignees: ['س'],
        tags: ['تطوير', 'API']
      }
    ],
    inProgress: [
      {
        id: 3,
        title: 'تحديث قاعدة البيانات',
        description: 'ترحيل البيانات إلى النظام الجديد',
        priority: 'urgent',
        dueDate: '2024-12-23',
        comments: 8,
        attachments: 4,
        assignees: ['ع', 'ح'],
        tags: ['قاعدة البيانات', 'ترحيل']
      }
    ],
    review: [
      {
        id: 4,
        title: 'اختبار الأداء',
        description: 'إجراء اختبارات الأداء على النظام',
        priority: 'low',
        dueDate: '2024-12-24',
        comments: 2,
        attachments: 1,
        assignees: ['ر'],
        tags: ['اختبار']
      }
    ],
    done: [
      {
        id: 5,
        title: 'تحديث التوثيق',
        description: 'تحديث وثائق API وإرشادات المستخدم',
        priority: 'medium',
        dueDate: '2024-12-20',
        comments: 4,
        attachments: 3,
        assignees: ['م', 'ن'],
        tags: ['توثيق']
      }
    ]
  };

  const getPriorityColor = (priority: 'urgent' | 'high' | 'medium' | 'low'): string => {
    const colors: Record<string, string> = {
      urgent: 'bg-red-500',
      high: 'bg-orange-500',
      medium: 'bg-blue-500',
      low: 'bg-green-500'
    };
    return colors[priority] || colors.medium;
  };

  return (
    <div className="h-full">
      {/* Dashboard Header */}
      <div className="mb-6 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
              لوحة المشروع
            </h1>
            <p className="text-gray-500 mt-1">إدارة المهام والمشاريع بكفاءة</p>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:opacity-90 transition-all">
            <Plus className="h-5 w-5" />
            <span>مهمة جديدة</span>
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex space-x-4 pb-4">
        {columns.map(column => (
          <div key={column.id} className="flex-shrink-0 w-80">
            <div className="bg-white rounded-xl shadow-sm">
              {/* Column Header */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`h-2 w-2 rounded-full ${column.color}`}></div>
                    <h3 className="font-semibold">{column.title}</h3>
                    <span className="text-sm text-gray-500">({column.count})</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Tasks */}
              <div className="p-4 space-y-3">
                                {/* Add Task Button */}
                <button className="w-full py-2 border-2 border-dashed border-gray-200 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors">
                  <Plus className="h-5 w-5 mx-auto" />
                </button>
                {tasks[column.id]?.map(task => (
                  <div key={task.id} className="bg-white border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    {/* Task Priority */}
                    <div className="flex items-center justify-between mb-2">
                      <div className={`px-2 py-1 rounded-full text-xs text-white ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Task Title & Description */}
                    <h4 className="font-medium mb-1">{task.title}</h4>
                    <p className="text-sm text-gray-500 mb-3">{task.description}</p>

                    {/* Task Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {task.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Task Footer */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex -space-x-2">
                          {task.assignees.map((assignee, index) => (
                            <div key={index} className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-green-400 flex items-center justify-center text-white text-xs">
                              {assignee}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          <span>{task.comments}</span>
                        </div>
                        <div className="flex items-center">
                          <Paperclip className="h-4 w-4 mr-1" />
                          <span>{task.attachments}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{task.dueDate.split('-').reverse().join('/')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModernKanbanDashboard;

