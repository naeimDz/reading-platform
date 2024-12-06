"use client"
import React, { useState } from 'react';
import { 
  BellIcon, 
  SendIcon, 
  CalendarIcon, 
  FilterIcon, 
  ClockIcon,
  MessageCircleIcon,
  BookOpenIcon,
  TargetIcon
} from 'lucide-react';

// Define types for notification templates and history
interface NotificationTemplate {
  id: number;
  type: string;
  icon: React.ReactNode;
  title: string;
  content: string;
}

interface NotificationHistoryItem {
  id: number;
  date: string;
  message: string;
  audience: string;
  status: 'Sent' | 'Scheduled';
}

// Mock data for notifications and templates
const notificationTemplates: NotificationTemplate[] = [
  {
    id: 1,
    type: 'Motivational',
    icon: <BookOpenIcon className="text-blue-600" />,
    title: 'Reading Progress Motivation',
    content: 'Keep pushing forward! Every page you read brings you closer to your goals.',
  },
  {
    id: 2,
    type: 'Reminder',
    icon: <ClockIcon className="text-yellow-600" />,
    title: 'Reading Deadline Approaching',
    content: 'Reminder: Your current book assignment deadline is approaching. Make sure to stay on track!',
  },
  {
    id: 3,
    type: 'Achievement',
    icon: <TargetIcon className="text-green-600" />,
    title: 'Group Reading Challenge',
    content: 'Challenge: Can your group complete 5 books this month? Let\'s set a new record!',
  },
];

const NotificationsPage: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>('Literary Explorers');
  const [notificationType, setNotificationType] = useState<string>('Announcement');
  const [customMessage, setCustomMessage] = useState<string>('');
  const [scheduledDate, setScheduledDate] = useState<string>('');
  const [selectedTemplate, setSelectedTemplate] = useState<NotificationTemplate | null>(null);
  const [notificationHistory, setNotificationHistory] = useState<NotificationHistoryItem[]>([
    {
      id: 1,
      date: '2024-03-15',
      message: 'Monthly reading challenge kickoff!',
      audience: 'Literary Explorers',
      status: 'Sent',
    },
  ]);

  const handleSendNotification = () => {
    if (!customMessage && !selectedTemplate) {
      alert('Please select a template or write a custom message');
      return;
    }

    const newNotification: NotificationHistoryItem = {
      id: notificationHistory.length + 1,
      date: new Date().toISOString().split('T')[0],
      message: selectedTemplate ? selectedTemplate.content : customMessage,
      audience: selectedGroup,
      status: scheduledDate ? 'Scheduled' : 'Sent',
    };

    setNotificationHistory([...notificationHistory, newNotification]);

    // Reset form
    setCustomMessage('');
    setSelectedTemplate(null);
    setScheduledDate('');

    alert('Notification sent successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <BellIcon className="text-gray-700 w-8 h-8" />
          <h1 className="text-2xl font-bold text-gray-800">Notifications Center</h1>
        </div>
        <div className="flex items-center space-x-4">
          <select 
            className="bg-white border rounded px-3 py-2"
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
          >
            <option>Literary Explorers</option>
            <option>Young Readers Club</option>
            <option>Advanced Book Enthusiasts</option>
          </select>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Notification Creation Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 col-span-2">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Create Notification</h2>
          
          {/* Notification Type Selector */}
          <div className="flex space-x-4 mb-6">
            {['Announcement', 'Reminder', 'Motivational'].map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
                  notificationType === type 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setNotificationType(type)}
              >
                {type === 'Announcement' && <SendIcon className="w-4 h-4" />}
                {type === 'Reminder' && <ClockIcon className="w-4 h-4" />}
                {type === 'Motivational' && <MessageCircleIcon className="w-4 h-4" />}
                <span>{type}</span>
              </button>
            ))}
          </div>

          {/* Templates Section */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Quick Templates</h3>
            <div className="grid grid-cols-3 gap-4">
              {notificationTemplates.map((template) => (
                <div 
                  key={template.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedTemplate?.id === template.id 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => setSelectedTemplate(template)}
                >
                  <div className="flex items-center mb-2">
                    {template.icon}
                    <span className="ml-2 font-medium text-gray-800">{template.title}</span>
                  </div>
                  <p className="text-sm text-gray-600">{template.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Message */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Custom Message</label>
            <textarea 
              className="w-full border rounded p-3 h-32"
              placeholder="Write your custom message here..."
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
            />
          </div>

          {/* Scheduling */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <CalendarIcon className="text-gray-600" />
              <label>Schedule Notification</label>
            </div>
            <input 
              type="datetime-local"
              className="border rounded px-3 py-2"
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
            />
          </div>

          {/* Send Button */}
          <div className="mt-6">
            <button 
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
              onClick={handleSendNotification}
            >
              <SendIcon className="w-5 h-5" />
              <span>Send Notification to {selectedGroup}</span>
            </button>
          </div>
        </div>

        {/* Notification History */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Notification History</h2>
            <FilterIcon className="text-gray-600 cursor-pointer hover:text-blue-600" />
          </div>
          
          <div className="space-y-4">
            {notificationHistory.map((notification) => (
              <div 
                key={notification.id} 
                className="border-b pb-3 last:border-b-0"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">{notification.message}</p>
                    <p className="text-sm text-gray-600">{notification.audience}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-500">{notification.date}</span>
                    <span 
                      className={`text-xs px-2 py-1 rounded-full mt-1 ${
                        notification.status === 'Sent' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {notification.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
