"use client"
import React, { useState, useEffect } from 'react';
import { 
  BookOpenIcon, 
  PenToolIcon, 
  MessageCircleIcon, 
  ShareIcon, 
  StarIcon, 
  ActivityIcon,
  ClipboardListIcon,
  UserCheckIcon,
  QuoteIcon,
  BarChartIcon
} from 'lucide-react';

// Types for the mock book data
interface MemberProgress {
  name: string;
  progress: number;
  pagesRead: number;
}

interface GroupProgress {
  totalMembers: number;
  completedMembers: number;
  averageProgress: number;
  progressByMember: MemberProgress[];
}

interface Discussion {
  id: number;
  user: string;
  message: string;
  timestamp: string;
  replies: number;
}

interface Quote {
  id: number;
  text: string;
  contributor: string;
  likes: number;
}

interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  totalPages: number;
  assignedDate: string;
  deadline: string;
  groupProgress: GroupProgress;
  discussions: Discussion[];
  quotes: Quote[];
}

// Mock Book Data
const mockBookData: Book = {
  id: 'book_001',
  title: 'One Hundred Years of Solitude',
  author: 'Gabriel García Márquez',
  coverImage: '/api/placeholder/200/300',
  description: 'A landmark novel of magical realism that chronicles the multi-generational story of the Buendía family.',
  totalPages: 417,
  assignedDate: '2024-01-15',
  deadline: '2024-03-15',
  groupProgress: {
    totalMembers: 24,
    completedMembers: 6,
    averageProgress: 45,
    progressByMember: [
      { name: 'Amira K.', progress: 100, pagesRead: 417 },
      { name: 'Hassan M.', progress: 35, pagesRead: 146 },
      { name: 'Fatima B.', progress: 50, pagesRead: 209 }
    ]
  },
  discussions: [
    { 
      id: 1, 
      user: 'Fatima B.', 
      message: 'The magical realism in this book is incredible! How does everyone interpret the cyclical nature of time?', 
      timestamp: '2 hours ago',
      replies: 3
    },
    { 
      id: 2, 
      user: 'Hassan M.', 
      message: 'I\'m struggling to keep track of all the characters. Any tips?', 
      timestamp: '4 hours ago',
      replies: 2
    }
  ],
  quotes: [
    { 
      id: 1, 
      text: 'It is not true that people stop pursuing dreams because they grow old, they grow old because they stop pursuing dreams.',
      contributor: 'Amira K.',
      likes: 12
    },
    { 
      id: 2, 
      text: 'Nobody knows yet how much wisdom there is in the way people act.',
      contributor: 'Nadia B.',
      likes: 8
    }
  ]
};

const BookDetailSupervisor: React.FC = () => {
  const [book, setBook] = useState<Book>(mockBookData);
  const [activeTab, setActiveTab] = useState<'progress' | 'discussions' | 'quotes'>('progress');
  const [newDiscussion, setNewDiscussion] = useState<string>('');
  const [newQuote, setNewQuote] = useState<string>('');
  const [selectedMember, setSelectedMember] = useState<MemberProgress | null>(null);

  const handleProgressUpdate = (member: MemberProgress) => {
    setSelectedMember(member);
  };

  const renderProgressUpdateModal = () => {
    if (!selectedMember) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-96">
          <h2 className="text-xl font-bold mb-4">Update Progress for {selectedMember.name}</h2>
          <div className="mb-4">
            <label className="block mb-2">Pages Read</label>
            <input 
              type="number" 
              className="w-full border rounded p-2"
              defaultValue={selectedMember.pagesRead}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Progress Percentage</label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              className="w-full"
              defaultValue={selectedMember.progress}
            />
            <div className="text-center mt-2">{selectedMember.progress}%</div>
          </div>
          <div className="flex justify-end space-x-2">
            <button 
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded"
              onClick={() => setSelectedMember(null)}
            >
              Cancel
            </button>
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                // Logic to save progress update
                setSelectedMember(null);
              }}
            >
              Save Progress
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'progress':
        return (
          <div className="grid grid-cols-3 gap-4">
            {book.groupProgress.progressByMember.map((member, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{member.name}</span>
                  <button 
                    className="text-blue-500 hover:bg-blue-100 p-1 rounded"
                    onClick={() => handleProgressUpdate(member)}
                  >
                    <PenToolIcon size={18} />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-2">Pages Read: {member.pagesRead}/{book.totalPages}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${member.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 text-right">{member.progress}% Complete</p>
              </div>
            ))}
          </div>
        );
      case 'discussions':
        return (
          <div>
            <div className="mb-4">
              <textarea 
                className="w-full border rounded p-2"
                placeholder="Start a new discussion about the book..."
                value={newDiscussion}
                onChange={(e) => setNewDiscussion(e.target.value)}
              ></textarea>
              <button 
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  // Logic to add new discussion
                  setNewDiscussion('');
                }}
              >
                Post Discussion
              </button>
            </div>
            {book.discussions.map((discussion) => (
              <div key={discussion.id} className="border-b py-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <UserCheckIcon className="text-blue-500" size={18} />
                    <span className="font-medium">{discussion.user}</span>
                  </div>
                  <span className="text-xs text-gray-500">{discussion.timestamp}</span>
                </div>
                <p className="mb-2">{discussion.message}</p>
                <div className="flex items-center space-x-2">
                  <MessageCircleIcon size={16} className="text-gray-500" />
                  <span className="text-xs text-gray-500">{discussion.replies} Replies</span>
                </div>
              </div>
            ))}
          </div>
        );
      case 'quotes':
        return (
          <div>
            <div className="mb-4">
              <textarea 
                className="w-full border rounded p-2"
                placeholder="Add an inspiring quote from the book..."
                value={newQuote}
                onChange={(e) => setNewQuote(e.target.value)}
              ></textarea>
              <button 
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  // Logic to add new quote
                  setNewQuote('');
                }}
              >
                Share Quote
              </button>
            </div>
            {book.quotes.map((quote) => (
              <div key={quote.id} className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex items-start space-x-4">
                  <QuoteIcon className="text-gray-400 mt-1" size={24} />
                  <div>
                    <p className="italic mb-2">"{quote.text}"</p>
                    <div className="flex items-center space-x-2">
                      <UserCheckIcon className="text-blue-500" size={16} />
                      <span className="text-sm text-gray-600">- {quote.contributor}</span>
                      <div className="flex items-center space-x-1">
                        <StarIcon className="text-yellow-500" size={16} />
                        <span className="text-xs text-gray-500">{quote.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {selectedMember && renderProgressUpdateModal()}

      <div className="grid grid-cols-3 gap-6">
        {/* Book Information */}
        <div className="bg-white shadow-lg rounded-lg p-6 col-span-1">
          <img 
            src={book.coverImage} 
            alt={book.title} 
            className="w-full rounded-lg mb-4 shadow"
          />
          <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
          <p className="text-gray-600 mb-4">by {book.author}</p>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <BookOpenIcon className="text-blue-500" />
              <span>Total Pages: {book.totalPages}</span>
            </div>
            <div className="flex items-center space-x-2">
              <ClipboardListIcon className="text-green-500" />
              <span>Assigned: {book.assignedDate}</span>
            </div>
            <div className="flex items-center space-x-2">
              <ActivityIcon className="text-red-500" />
              <span>Deadline: {book.deadline}</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-bold mb-2">Book Description</h3>
            <p className="text-gray-700">{book.description}</p>
          </div>

          <div className="mt-6 flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-blue-600">
              <ShareIcon size={18} />
              <span>Share Book</span>
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-green-600">
              <BarChartIcon size={18} />
              <span>Generate Report</span>
            </button>
          </div>
        </div>

        {/* Book Activity and Tracking */}
        <div className="bg-white shadow-lg rounded-lg p-6 col-span-2">
          <div className="flex mb-4 border-b pb-2">
            {['progress', 'discussions', 'quotes'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 capitalize ${
                  activeTab === tab 
                    ? 'border-b-2 border-blue-500 text-blue-600 font-semibold' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setActiveTab(tab as 'progress' | 'discussions' | 'quotes')}
              >
                {tab}
              </button>
            ))}
          </div>

          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default BookDetailSupervisor;
