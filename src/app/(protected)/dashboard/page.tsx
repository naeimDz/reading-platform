import React from 'react';
import { Book, Users, Target, Trophy, Bell, Settings, Home, ChevronRight, Calendar, Bookmark, Star } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <div className="w-20 bg-white shadow-lg flex flex-col items-center py-8 gap-8">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
          <Book className="text-white" size={24} />
        </div>
        <nav className="flex flex-col gap-6">
          <button className="p-3 rounded-xl bg-blue-50 text-blue-600">
            <Home size={24} />
          </button>
          <button className="p-3 rounded-xl text-gray-400 hover:bg-gray-50">
            <Target size={24} />
          </button>
          <button className="p-3 rounded-xl text-gray-400 hover:bg-gray-50">
            <Users size={24} />
          </button>
          <button className="p-3 rounded-xl text-gray-400 hover:bg-gray-50">
            <Trophy size={24} />
          </button>
          <button className="p-3 rounded-xl text-gray-400 hover:bg-gray-50">
            <Bell size={24} />
          </button>
        </nav>
        <div className="mt-auto">
          <button className="p-3 rounded-xl text-gray-400 hover:bg-gray-50">
            <Settings size={24} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Main Feed */}
        <div className="flex-1 px-8 py-6 overflow-y-auto">
          {/* Header */}
          <header className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">مرحباً، أحمد 👋</h1>
              <p className="text-gray-500 mt-1">لديك 42 يوم متتالي من القراءة!</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-50 text-green-600 px-4 py-2 rounded-lg flex items-center gap-2">
                <Calendar size={20} />
                <span>تسجيل قراءة اليوم</span>
              </div>
              <button className="w-10 h-10 rounded-full bg-gray-100"></button>
            </div>
          </header>

          {/* Reading Progress */}
          <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">تقدمك في القراءة</h2>
              <button className="text-blue-600 flex items-center gap-1">
                عرض التفاصيل
                <ChevronRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-xl">
                <div className="text-blue-600 mb-2">
                  <Book size={20} />
                </div>
                <p className="text-gray-600">الكتب المقروءة</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl">
                <div className="text-purple-600 mb-2">
                  <Target size={20} />
                </div>
                <p className="text-gray-600">أيام القراءة</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">42</p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <div className="text-green-600 mb-2">
                  <Trophy size={20} />
                </div>
                <p className="text-gray-600">الإنجازات</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
              </div>
            </div>
          </div>

          {/* Current Book */}
          <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
            <h2 className="text-lg font-semibold mb-4">الكتاب الحالي</h2>
            <div className="flex gap-6">
              <div className="w-32 h-48 bg-gray-200 rounded-lg"></div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">عادات العقل</h3>
                <p className="text-gray-600 mb-4">كوستا وكاليك</p>
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">32 قارئ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-yellow-400" />
                    <span className="text-sm text-gray-600">4.8</span>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
                  متابعة القراءة
                </button>
              </div>
            </div>
          </div>

          {/* Reading Groups */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">مجموعات القراءة</h2>
              <button className="text-blue-600">عرض الكل</button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="border rounded-xl p-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg"></div>
                  <div>
                    <h3 className="font-semibold">تطوير الذات</h3>
                    <p className="text-sm text-gray-500">16 عضو</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg text-sm">
                    انضمام
                  </button>
                  <button className="w-10 h-10 border rounded-lg flex items-center justify-center">
                    <Bookmark size={16} className="text-gray-400" />
                  </button>
                </div>
              </div>
              <div className="border rounded-xl p-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg"></div>
                  <div>
                    <h3 className="font-semibold">رواد الأعمال</h3>
                    <p className="text-sm text-gray-500">24 عضو</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg text-sm">
                    انضمام
                  </button>
                  <button className="w-10 h-10 border rounded-lg flex items-center justify-center">
                    <Bookmark size={16} className="text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white border-r p-6">
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">التحديات النشطة</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">تحدي 30 يوم</h3>
                  <span className="text-sm text-blue-600">18/30</span>
                </div>
                <div className="w-full bg-white rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">قراءة 5 كتب</h3>
                  <span className="text-sm text-purple-600">3/5</span>
                </div>
                <div className="w-full bg-white rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">الإنجازات الأخيرة</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Trophy className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">قارئ مثابر</h3>
                  <p className="text-sm text-gray-500">30 يوم متتالي</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Book className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">قارئ نشط</h3>
                  <p className="text-sm text-gray-500">5 كتب في شهر</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;