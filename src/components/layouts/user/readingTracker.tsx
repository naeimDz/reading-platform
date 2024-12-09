import React, { useState } from 'react';
import { Calendar, Clock, BookOpen, Check, Zap, X } from 'lucide-react';

interface ReadingTrackerModalProps {}

const ReadingTrackerModal: React.FC<ReadingTrackerModalProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [readingTime, setReadingTime] = useState<number>(0); // TypeScript: Explicit number type
  const [pagesRead, setPagesRead] = useState<number>(0); // Tracks the number of pages
  const [isCompleted, setIsCompleted] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseInt(e.target.value, 10);
    setReadingTime(time);
  };

  const handlePagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pages = parseInt(e.target.value, 10);
    setPagesRead(pages);
  };

  const handleSubmit = () => {
    if (readingTime > 0 || pagesRead > 0) {
      // Logic to save reading session (e.g., API call)
      setIsCompleted(true);
      setTimeout(() => {
        setIsCompleted(false);
        handleCloseModal();
      }, 1500);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={handleOpenModal}
        className="relative group transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
      >
        <div className="bg-gradient-to-br from-green-400 to-blue-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow">
          <Zap className="text-yellow-200 animate-pulse" size={20} />
          <span className="font-medium">سجل قراءتك اليوم</span>
        </div>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          {/* Modal Container */}
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            {!isCompleted ? (
              <div className="p-8 space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">سجل رحلة قراءتك</h2>
                  <p className="text-gray-500">احتفل بإنجازك اليومي</p>
                </div>

                {/* Reading Time Input */}
                <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
                  <Clock className="text-blue-500" size={24} />
                  <div className="flex-1">
                    <label className="block text-sm text-gray-600 mb-1">مدة القراءة (دقيقة)</label>
                    <input
                      type="range"
                      min="0"
                      max="120"
                      value={readingTime}
                      onChange={handleTimeChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-center text-gray-800 font-bold mt-2">
                      {readingTime} دقيقة
                    </div>
                  </div>
                </div>

                {/* Pages Read Input */}
                <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
                  <BookOpen className="text-green-500" size={24} />
                  <div className="flex-1">
                    <label className="block text-sm text-gray-600 mb-1">عدد الصفحات المقروءة</label>
                    <input
                      type="number"
                      min="0"
                      value={pagesRead}
                      onChange={handlePagesChange}
                      className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                    />
                    <div className="text-center text-gray-800 font-bold mt-2">
                      {pagesRead} صفحات
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={readingTime === 0 && pagesRead === 0}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  سجل إنجازك
                </button>
              </div>
            ) : (
              // Completion State
              <div className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 rounded-full p-4 animate-bounce">
                    <Check className="text-green-600" size={48} />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">أحسنت!</h2>
                <p className="text-gray-600">لقد سجلت قراءتك اليوم بنجاح</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ReadingTrackerModal;
