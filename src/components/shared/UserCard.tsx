import { useState } from 'react';
import { Star, Edit, Trash2 } from 'lucide-react';

const UserCard = ({ user, onStatusChange }: { user: any, onStatusChange: (id: number) => void }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="flex flex-col p-4 border rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <div className="flex justify-between items-center mb-4">
        <img 
          src={`https://www.gravatar.com/avatar/${user.email}`}
          alt={user.name}
          className="w-12 h-12 rounded-full"
        />
        {user.potentialSupervisor && (
          <Star className="text-yellow-500" size={18} name="Potential Supervisor" />
        )}
      </div>

      <h3 className="font-semibold text-lg">{user.name}</h3>
      <p className="text-sm text-gray-500">{user.email}</p>
      <div className="mt-2 text-xs text-gray-600">
        {user.groups.map((group: string) => (
          <span key={group} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded mr-1">{group}</span>
        ))}
      </div>

      <div className="mt-2">
        <button 
          onClick={() => onStatusChange(user.id)}
          className={`px-3 py-1 rounded-full text-sm ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
        >
          {user.status === 'Active' ? 'Deactivate' : 'Activate'}
        </button>
        {showDetails && (
          <div className="mt-2 text-xs text-gray-500">
            <p>Reading Streak: {user.readingStreak} days</p>
            <p>Joined on: {user.joinDate}</p>
          </div>
        )}
      </div>

      {showDetails && (
        <div className="mt-4 flex justify-between">
          <button className="text-blue-500 hover:text-blue-700">
            <Edit size={16} />
          </button>
          <button className="text-red-500 hover:text-red-700">
            <Trash2 size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default UserCard;
