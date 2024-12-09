import React, { useState } from 'react';
import { Zap, Award, CheckCircle, Plus, Minus, XCircle } from 'lucide-react';

interface Goal {
  id: number;
  title: string;
  progress: number;
  total: number;
  icon: JSX.Element;
  category: string;
  progressColor: string;
}

interface ProgressUpdateModalProps {
  goal: Goal;
  onClose: () => void;
  onUpdate: (progressAmount: number) => void;
}

const ProgressUpdateModal: React.FC<ProgressUpdateModalProps> = ({ goal, onClose, onUpdate }) => {
  const [progressAmount, setProgressAmount] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleProgressUpdate = () => {
    setIsAnimating(true);
    onUpdate(progressAmount);

    setTimeout(() => {
      setIsAnimating(false);
      onClose();
    }, 1500);
  };

  const incrementProgress = () => {
    if (goal.progress + progressAmount <= goal.total) {
      setProgressAmount((prev) => prev + 1);
    }
  };

  const decrementProgress = () => {
    if (progressAmount > 1) {
      setProgressAmount((prev) => prev - 1);
    }
  };

  const currentProgress = goal.progress + progressAmount;
  const progressPercentage = Math.min((currentProgress / goal.total) * 100, 100);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        className={`bg-white rounded-2xl shadow-2xl w-96 p-6 transform transition-all duration-300 ${
          isAnimating ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {isAnimating ? (
          <div className="flex flex-col items-center justify-center h-64">
            <CheckCircle size={64} className="text-green-500 animate-bounce mb-4" />
            <p className="text-xl font-bold text-green-600">تم تحديث التقدم بنجاح!</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">تحديث التقدم</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-red-500 transition-colors">
                <XCircle size={24} />
              </button>
            </div>

            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl mb-6">
              {goal.icon}
              <div>
                <h3 className="font-semibold text-xl">{goal.title}</h3>
                <p className="text-gray-500">{goal.category}</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">التقدم الحالي</span>
                <span className="font-bold">
                  {currentProgress} / {goal.total}
                </span>
              </div>
              <div className="bg-gray-100 rounded-full h-3">
                <div
                  className={`${goal.progressColor} h-3 rounded-full transition-all duration-300`}
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={decrementProgress}
                disabled={progressAmount <= 1}
                className="p-2 rounded-full bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
              >
                <Minus size={20} className="text-gray-600" />
              </button>

              <div className="flex items-center gap-2">
                <Zap size={24} className="text-purple-600" />
                <span className="text-2xl font-bold">{progressAmount}</span>
              </div>

              <button
                onClick={incrementProgress}
                disabled={currentProgress >= goal.total}
                className="p-2 rounded-full bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
              >
                <Plus size={20} className="text-gray-600" />
              </button>
            </div>

            <button
              onClick={handleProgressUpdate}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors flex items-center justify-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={currentProgress > goal.total}
            >
              <Award size={20} />
              تحديث التقدم
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProgressUpdateModal;
