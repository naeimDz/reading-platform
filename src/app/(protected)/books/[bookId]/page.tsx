"use client"
import React, { useState } from 'react';
import { 
  Book, 
  Users, 
  Clock, 
  Calendar,
  ThumbsUp,
  MessageCircle,
  Bookmark,
  Share2
} from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

// Sample data
const bookData = {
  title: "عادات القراءة الفعالة",
  author: "د. محمد أحمد",
  coverImage: "/api/placeholder/300/450",
  progress: 65,
  totalReaders: 234,
  activeReaders: 180,
  category: "تطوير الذات",
  pages: 320,
  startDate: "2024-03-01",
  endDate: "2024-04-01",
  description: "كتاب يستكشف أفضل الممارسات والعادات التي تساعد على تحسين مهارات القراءة وفهم المحتوى بشكل أفضل..."
};

const BookDetailsPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50 p-6" dir="rtl">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Book Cover */}
          <div className="md:col-span-1">
            <img
              src={bookData.coverImage}
              alt={bookData.title}
              className="w-full rounded-lg shadow-md"
            />
            <div className="mt-4 flex justify-center space-x-4 space-x-reverse">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                <Bookmark size={20} />
                <span>حفظ الكتاب</span>
              </button>
              <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
                <Share2 size={20} />
                <span>مشاركة</span>
              </button>
            </div>
          </div>

          {/* Book Info */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{bookData.title}</h1>
            <p className="text-xl text-blue-600 mb-4">{bookData.author}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg font-medium flex items-center gap-2">
                    <Users size={20} className="text-blue-600" />
                    القراء النشطون
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-2xl font-bold">{bookData.activeReaders}</p>
                  <p className="text-sm text-gray-500">من أصل {bookData.totalReaders}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg font-medium flex items-center gap-2">
                    <Clock size={20} className="text-blue-600" />
                    نسبة الإنجاز
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-2xl font-bold">{bookData.progress}%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${bookData.progress}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-600">
                <Book size={20} />
                <span>{bookData.pages} صفحة</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={20} />
                <span>بدأ في {new Date(bookData.startDate).toLocaleDateString('ar-EG')}</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">{bookData.description}</p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full justify-start p-0 bg-gray-100 rounded-t-lg">
            <TabsTrigger value="overview" className="px-6 py-3 data-[state=active]:bg-white">نظرة عامة</TabsTrigger>
            <TabsTrigger value="discussions" className="px-6 py-3 data-[state=active]:bg-white">النقاشات</TabsTrigger>
            <TabsTrigger value="notes" className="px-6 py-3 data-[state=active]:bg-white">الملاحظات</TabsTrigger>
            <TabsTrigger value="quotes" className="px-6 py-3 data-[state=active]:bg-white">اقتباسات</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>ملخص التقدم</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>معدل القراءة اليومي</span>
                      <span className="font-bold">12 صفحة</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>الوقت المتبقي</span>
                      <span className="font-bold">15 يوم</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>الصفحات المتبقية</span>
                      <span className="font-bold">180 صفحة</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>القراء النشطون</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-3">
                    {[1, 2, 3, 4, 5].map((reader) => (
                      <div key={reader} className="flex items-center gap-3">
                        <img
                          src={`/api/placeholder/40/40`}
                          alt="Reader avatar"
                          className="w-8 h-8 rounded-full"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium">قارئ {reader}</p>
                          <p className="text-xs text-gray-500">صفحة 123</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="discussions" className="p-6">
            <div className="space-y-6">
              {[1, 2, 3].map((discussion) => (
                <Card key={discussion}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={`/api/placeholder/40/40`}
                          alt="User avatar"
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h3 className="font-medium">عنوان النقاش {discussion}</h3>
                          <p className="text-sm text-gray-500">بواسطة أحمد - منذ 3 ساعات</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <ThumbsUp size={16} />
                          <span>24</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle size={16} />
                          <span>12</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">محتوى النقاش يظهر هنا... يمكن أن يكون سؤالاً أو تعليقاً أو فكرة للنقاش حول الكتاب.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="notes" className="p-6">
            <div className="text-center text-gray-500">
              قريباً - إضافة الملاحظات الشخصية
            </div>
          </TabsContent>

          <TabsContent value="quotes" className="p-6">
            <div className="text-center text-gray-500">
              قريباً - إضافة الاقتباسات المفضلة
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BookDetailsPage;