"use client"
import React, { useState } from 'react';
import { 
  Users, 
  PlusCircle, 
  BookOpen, 
  Globe, 
  Zap, 
  Filter, 
  Search, 
  Bookmark,
  ArrowRight
} from 'lucide-react';

const ReadingGroupsScreen: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('الكل');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const groupCategories = [
    { 
      name: 'النمو الشخصي', 
      icon: <Zap className="text-purple-600" size={24} />,
      members: 16,
      description: 'اكتشف أفكارًا للتحسين الذاتي والتحول',
      color: 'purple'
    },
    { 
      name: 'رواد الأعمال', 
      icon: <Globe className="text-blue-600" size={24} />,
      members: 24,
      description: 'اكتشف الكتب التي تقود الابتكار في الأعمال',
      color: 'blue'
    },
    { 
      name: 'مبتكرو التكنولوجيا', 
      icon: <BookOpen className="text-green-600" size={24} />,
      members: 32,
      description: 'التكنولوجيا المتقدمة والاتجاهات المستقبلية',
      color: 'green'
    },
    { 
      name: 'العقول الإبداعية', 
      icon: <PlusCircle className="text-orange-600" size={24} />,
      members: 20,
      description: 'تحفيز الإبداع من خلال وجهات نظر أدبية متنوعة',
      color: 'orange'
    }
  ];

  const filters = ['الكل', 'الأكثر تداولاً', 'موصى به', 'جديد'];

  return (
    <div >

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">مجتمعات القراءة</h1>
            <p className="text-gray-600 mt-2">تواصل، تعلم، وننمو معًا</p>
          </div>

        </div>

        {/* Filters */}
        <div className="flex space-x-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-xl flex items-center space-x-2 transition ${
                activeFilter === filter 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              <Filter size={16} />
              <span>{filter}</span>
            </button>
          ))}
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-2 gap-6">
          {groupCategories.map((group) => (
            <div 
              key={group.name} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-transparent hover:border-blue-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`w-16 h-16 bg-${group.color}-50 rounded-xl flex items-center justify-center`}>
                  {group.icon}
                </div>
                <button className="text-gray-400 hover:text-blue-600 transition">
                  <Bookmark size={24} />
                </button>
              </div>
              <h2 className="text-xl font-bold mb-2">{group.name}</h2>
              <p className="text-gray-600 mb-4">{group.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users size={16} className="text-gray-400" />
                  <span className="text-gray-600">{group.members} عضوًا</span>
                </div>
                <button className="text-blue-600 flex items-center hover:underline">
                  انضم للمجموعة
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

      {/* Create Group CTA */}



  {/* Sponsor / Ad Section */}
  <div className="mt-8 bg-blue-300 text-blue-600 p-6 rounded-xl shadow-lg">
    <h4 className="text-xl font-bold mb-3">برعاية</h4>
    <div className="flex items-center justify-center space-x-4">
      <img 
        src="https://via.placeholder.com/80" 
        alt="شعار الراعي" 
        className="w-16 h-16 rounded-full object-cover" 
      />
      <div>
        <p className="text-lg font-semibold">مكتبة الصفوة</p>
        <p className="text-gray-500 text-sm">اكتشف مجموعة رائعة من الكتب الحديثة</p>
      </div>
    </div>
    <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 transition">
      زيارة الراعي
    </button>
  
</div>

    
    </div>
  );
};

export default ReadingGroupsScreen;
