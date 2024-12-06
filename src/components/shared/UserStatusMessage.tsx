import { useEffect, useState } from 'react';

const UserStatusMessage = ({ user }: { user: any }) => {
  const [inactiveMessage, setInactiveMessage] = useState<string | null>(null);

  useEffect(() => {
    const lastActiveDate = new Date(user.lastActive);
    const today = new Date();
    const diffInDays = Math.floor((today.getTime() - lastActiveDate.getTime()) / (1000 * 3600 * 24));

    if (diffInDays > 30) { 
      setInactiveMessage('The user has been inactive for more than 30 days.');
    }
  }, [user]);

  return inactiveMessage ? (
    <div className="mt-2 text-sm text-yellow-600 p-2 bg-yellow-100 rounded-lg">
      {inactiveMessage}
    </div>
  ) : null;
};

export default UserStatusMessage;
