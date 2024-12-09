import { Home, Target, Trophy, Bell, Settings } from 'lucide-react';
import Link from 'next/link';

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const SidebarUser = ({ activeItem, onItemClick }: SidebarProps) => {
  const sidebarItems = [
    { id: 'home', icon: <Home size={24} />, label: 'Home' ,href:"/dashboard"},
    { id: 'target', icon: <Target size={24} />, label: 'Target',href:'/dashboard/target' },
    { id: 'trophy', icon: <Trophy size={24} />, label: 'Trophy' ,href:'/dashboard/'},
    { id: 'bell', icon: <Bell size={24} />, label: 'Notifications' ,href:'/dashboard/'},

  ];

  return (
    <div className="w-20 bg-white shadow-lg flex flex-col items-center py-8 gap-8">
      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
        <span className="text-white">N</span> {/* Book Icon */}
      </div>
      <nav className="flex flex-col gap-6">
        {sidebarItems.map(({ id, icon, label,href }) => (
           <Link key={label} href={href} passHref>
          <button
            key={id}
            className={`p-3 rounded-xl ${activeItem === id ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:bg-gray-50'}`}
            onClick={() => onItemClick(id)}
          >
            {icon}
          </button>
          </Link>
        ))}
      </nav>
      <div className="mt-auto">
      <Link key="profile" href="/dashboard/profile" passHref>
        <button className="p-3 rounded-xl text-gray-400 hover:bg-gray-50" key="profile"  onClick={() => onItemClick("profile")}>
          <Settings size={24} />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SidebarUser;
