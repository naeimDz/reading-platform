"use client"
import React, { useState, useCallback, ChangeEvent, MouseEvent } from 'react';
import { 
  Users, PlusCircle, BookOpen, Tag, UserPlus, 
  Target, MessageCircle, Settings, XCircle 
} from 'lucide-react';

interface GroupDetails {
  name: string;
  description: string;
  type: 'Public' | 'Private';
  interests: string[];
  maxMembers: number;
  supervisor: { id: number; name: string; specialization: string } | null;
}

interface Supervisor {
  id: number;
  name: string;
  specialization: string;
}

const CreateNewGroup: React.FC = () => {
  const [groupDetails, setGroupDetails] = useState<GroupDetails>({
    name: '',
    description: '',
    type: 'Public',
    interests: [],
    maxMembers: 30,
    supervisor: null,
  });

  const [currentInterest, setCurrentInterest] = useState<string>('');
  const [supervisorSearchTerm, setSupervisorSearchTerm] = useState<string>('');

  const predefinedInterests = [
    'الروايات التاريخية', 'الأدب المعاصر',
    'الروايات العربية', 'أدب العالم',
    'الشعر', 'الفلسفة', 'الخيال العلمي'
  ];

  const mockSupervisors: Supervisor[] = [
    { id: 1, name: 'محمد بن علي', specialization: 'أدب العالم' },
    { id: 2, name: 'فاطمة خالد', specialization: 'الرواية العربية المعاصرة' },
    { id: 3, name: 'أحمد عمر', specialization: 'السرد التاريخي' }
  ];

  const addInterest = () => {
    if (currentInterest && !groupDetails.interests.includes(currentInterest)) {
      setGroupDetails(prev => ({
        ...prev,
        interests: [...prev.interests, currentInterest]
      }));
      setCurrentInterest('');
    }
  };

  const removeInterest = (interest: string) => {
    setGroupDetails(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i !== interest)
    }));
  };

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    console.log('تم إنشاء المجموعة:', groupDetails);
    // Implement actual group creation logic
  };

  const filteredSupervisors = mockSupervisors.filter(supervisor => 
    supervisor.name.toLowerCase().includes(supervisorSearchTerm.toLowerCase()) ||
    supervisor.specialization.toLowerCase().includes(supervisorSearchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-purple-50 to-white min-h-screen p-8 rtl">
      <div className="container mx-auto max-w-4xl">
        <header className="flex justify-between items-center mb-10">
          <div className="flex items-center space-x-4">
            <Users className="text-purple-600" size={40} />
            <h1 className="text-4xl font-bold text-gray-800">إنشاء مجموعة قراءة جديدة</h1>
          </div>
        </header>

        <div className="bg-white shadow-2xl rounded-2xl p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Basic Group Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="text-purple-600" size={28} />
                <h2 className="text-2xl font-semibold">تفاصيل المجموعة</h2>
              </div>
              
              <div>
                <label className="block mb-2 text-gray-700">اسم المجموعة</label>
                <input 
                  type="text" 
                  placeholder="أدخل اسم المجموعة"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-300"
                  value={groupDetails.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setGroupDetails(prev => ({...prev, name: e.target.value}))}
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">الوصف</label>
                <textarea 
                  placeholder="وصف مهمة المجموعة"
                  className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-purple-300"
                  value={groupDetails.description}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setGroupDetails(prev => ({...prev, description: e.target.value}))}
                ></textarea>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">نوع المجموعة</label>
                <div className="flex space-x-4">
                  {['عام', 'خاص'].map(type => (
                    <button
                      key={type}
                      className={`
                        px-4 py-2 rounded-lg transition-all 
                        ${groupDetails.type === type 
                          ? 'bg-purple-500 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }
                      `}
                     
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Advanced Configuration */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <Settings className="text-green-600" size={28} />
                <h2 className="text-2xl font-semibold">الإعدادات المتقدمة</h2>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">أقصى عدد من الأعضاء</label>
                <input 
                  type="number" 
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-300"
                  value={groupDetails.maxMembers}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setGroupDetails(prev => ({...prev, maxMembers: Number(e.target.value)}))}
                  min={5}
                  max={100}
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">اهتمامات المجموعة</label>
                <div className="flex mb-2">
                  <input 
                    type="text" 
                    placeholder="أضف اهتمام"
                    className="flex-grow p-2 border rounded-l-lg"
                    value={currentInterest}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setCurrentInterest(e.target.value)}
                  />
                  <button 
                    className="bg-green-500 text-white px-4 rounded-r-lg hover:bg-green-600"
                    onClick={addInterest}
                  >
                    <PlusCircle size={20} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {predefinedInterests
                    .filter(interest => !groupDetails.interests.includes(interest))
                    .map(interest => (
                      <button
                        key={interest}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm hover:bg-gray-200"
                        onClick={() => {
                          setCurrentInterest(interest);
                          addInterest();
                        }}
                      >
                        {interest}
                      </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {groupDetails.interests.map(interest => (
                    <div 
                      key={interest} 
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm flex items-center"
                    >
                      {interest}
                      <button 
                        onClick={() => removeInterest(interest)}
                        className="ml-2 text-purple-500 hover:text-purple-700"
                      >
                        <XCircle size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">تعيين مشرف</label>
                <input 
                  type="text"
                  placeholder="ابحث عن المشرفين"
                  className="w-full p-2 border rounded-lg mb-2"
                  value={supervisorSearchTerm}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setSupervisorSearchTerm(e.target.value)}
                />
                <div className="max-h-40 overflow-y-auto">
                  {filteredSupervisors.map(supervisor => (
                    <div 
                      key={supervisor.id}
                      className={`
                        p-2 hover:bg-purple-50 cursor-pointer rounded-lg
                        ${groupDetails.supervisor?.id === supervisor.id ? 'bg-purple-100' : ''}
                      `}
                      onClick={() => setGroupDetails(prev => ({...prev, supervisor}))}
                    >
                      <div className="flex justify-between">
                        <span className="font-medium">{supervisor.name}</span>
                        <span className="text-gray-500 text-sm">{supervisor.specialization}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-6 flex justify-end space-x-4">
            <button 
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              إلغاء
            </button>
            <button 
              className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
              onClick={handleSubmit}
            >
              إنشاء المجموعة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewGroup;
