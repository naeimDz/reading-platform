import { Calendar } from 'lucide-react';
import ReadingTrackerModal from './readingTracker';

interface HeaderProps {
  userName: string;
}

const Header = ({ userName }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">مرحباً، {userName} 👋</h1>
        <p className="text-gray-500 mt-1">لديك 17 يوم متتالي من القراءة!</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-green-50 text-green-600 px-4 py-2 rounded-lg flex items-center gap-2">
          <Calendar size={20} />
          <span>تسجيل قراءة اليوم</span>
        </div>
        <ReadingTrackerModal />
      </div>
    </header>
  );
};

export default Header;
