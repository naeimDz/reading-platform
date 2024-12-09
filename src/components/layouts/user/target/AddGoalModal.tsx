import React, { useState } from 'react';
import { Zap, PlusCircle, X, Cpu, BookOpen, Dumbbell } from 'lucide-react';

interface Category {
  name: string;
  icon: JSX.Element;
  subcategories: string[];
}



interface AddGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddGoal: (goal: Goal) => void;
}

const GoalCategories: Category[] = [
  {
    name: 'التطوير الذاتي',
    icon: <Cpu size={24} className="text-purple-600" />,
    subcategories: ['التعلم', 'المهارات الرقمية', 'التكنولوجيا'],
  },
  {
    name: 'القراءة',
    icon: <BookOpen size={24} className="text-blue-600" />,
    subcategories: ['الكتب', 'المقالات', 'التطوير الفكري'],
  },
  {
    name: 'اللياقة البدنية',
    icon: <Dumbbell size={24} className="text-green-600" />,
    subcategories: ['التمارين', 'الصحة', 'التغذية'],
  },
];

const AddGoalModal: React.FC<AddGoalModalProps> = ({ isOpen, onClose, onAddGoal }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [goalTitle, setGoalTitle] = useState<string>('');
  const [goalTarget, setGoalTarget] = useState<number>(1);

  const handleAddGoal = () => {
    if (selectedCategory && goalTitle) {
      const newGoal: Goal = {
        id:5,
        title: goalTitle,
        category: selectedCategory.name,
        progress: 0,
        total: goalTarget,
        streak: 0,
        type: 'current',
        icon: selectedCategory.icon,
        progressColor:
          selectedCategory.name === 'التطوير الذاتي'
            ? 'bg-purple-500'
            : selectedCategory.name === 'القراءة'
            ? 'bg-blue-500'
            : 'bg-green-500',
        description: `هدف جديد في ${selectedCategory.name}`,
      };

      onAddGoal(newGoal);

      // Reset modal state
      setSelectedCategory(null);
      setGoalTitle('');
      setGoalTarget(1);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <Zap size={28} className="text-blue-600" />
            إضافة هدف جديد
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">اختر الفئة</h3>
            <div className="grid grid-cols-3 gap-4">
              {GoalCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 ${
                    selectedCategory?.name === category.name
                      ? 'bg-blue-50 border-2 border-blue-500'
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                >
                  {category.icon}
                  <span className="mt-2 text-sm text-gray-700">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {selectedCategory && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">عنوان الهدف</label>
                <input
                  type="text"
                  value={goalTitle}
                  onChange={(e) => setGoalTitle(e.target.value)}
                  placeholder={`مثال: ${selectedCategory.subcategories[0]}`}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">حدد الهدف الكلي</label>
                <div className="flex items-center">
                  <button
                    onClick={() => setGoalTarget(Math.max(1, goalTarget - 1))}
                    className="bg-gray-100 p-2 rounded-r-lg"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={goalTarget}
                    onChange={(e) => setGoalTarget(Number(e.target.value))}
                    className="w-full text-center p-3 border-t border-b border-gray-300"
                  />
                  <button onClick={() => setGoalTarget(goalTarget + 1)} className="bg-gray-100 p-2 rounded-l-lg">
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddGoal}
                disabled={!selectedCategory || !goalTitle}
                className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
                  !selectedCategory || !goalTitle
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'
                }`}
              >
                <PlusCircle size={20} />
                إنشاء الهدف
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddGoalModal;
