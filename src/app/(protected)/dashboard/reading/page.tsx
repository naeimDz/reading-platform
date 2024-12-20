"use client"
import React, { useState } from 'react';
import { 
  Book, 
  Bookmark, 
  Highlighter, 
  StickyNote, 
  Volume2, 
  Share2, 
  Sun, 
  MoonStar, 
  Feather, 
  Zap 
} from 'lucide-react';

interface ActiveTools {
  highlight: boolean;
  note: boolean;
  voiceOver: boolean;
}

const PDFReader: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages] = useState<number>(320);
  const [readingMode, setReadingMode] = useState<string>('default');
  const [fontSize, setFontSize] = useState<number>(16);
  const [isNightMode, setIsNightMode] = useState<boolean>(false);
  const [activeTools, setActiveTools] = useState<ActiveTools>({
    highlight: false,
    note: false,
    voiceOver: false
  });

  const progressPercentage = Math.round((currentPage / totalPages) * 100);

  return (
    <div className={`flex h-screen ${isNightMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Sidebar Navigation */}
      <div className="w-20 bg-white shadow-lg flex flex-col items-center py-8 gap-6">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
          <Book className="text-white" size={24} />
        </div>
        <nav className="flex flex-col gap-4">
          {[
            { icon: Highlighter, active: activeTools.highlight },
            { icon: StickyNote, active: activeTools.note },
            { icon: Volume2, active: activeTools.voiceOver }
          ].map((tool, index) => (
            <button 
              key={index} 
              className={`p-3 rounded-xl ${tool.active 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-400 hover:bg-gray-50'}`}
            >
              <tool.icon size={24} />
            </button>
          ))}
        </nav>
      </div>

      {/* Main Reading Area */}
      <div className="flex-1 flex">
        <div className="flex-1 bg-white p-8 relative">
          {/* Reading Progress */}
          <div className="absolute top-4 left-8 right-8 flex items-center gap-4">
            <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-blue-600 h-full" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600">
              {currentPage} / {totalPages}
            </span>
          </div>

          {/* PDF Content Placeholder */}
          <div 
            className={`mt-12 h-[calc(100vh-200px)] overflow-y-auto p-4 rounded-lg ${
              isNightMode 
                ? 'bg-gray-800 text-gray-200' 
                : 'bg-gray-100 text-gray-800'
            }`}
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
          >
            {/* Simulated PDF Content */}
            <h2 className="text-2xl font-bold mb-4">عادات العقل</h2>
            <p>النص التجريبي للكتاب سيظهر هنا مع تفاصيل وفقرات متعددة...</p>
          </div>

          {/* Reading Controls */}
          <div className="absolute bottom-4 left-8 right-8 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsNightMode(!isNightMode)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                {isNightMode ? <Sun size={24} /> : <MoonStar size={24} />}
              </button>
              <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
                <button 
                  onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                  className="p-2 rounded-full hover:bg-gray-200"
                >
                  <Feather size={16} />
                </button>
                <span>{fontSize}</span>
                <button 
                  onClick={() => setFontSize(Math.min(32, fontSize + 2))}
                  className="p-2 rounded-full hover:bg-gray-200"
                >
                  <Zap size={16} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2">
                <Bookmark size={20} />
                حفظ العلامة
              </button>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg flex items-center gap-2">
                <Share2 size={20} />
                مشاركة
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFReader;
