import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6"> Links</h1>
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
             
                User Dashboard
           
            </Link>
          </li>
          <li>
            <Link href="/admin-dashboard" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Admin Dashboard
            
            </Link>
          </li>
          <li>
            <Link href="/supervisor-dashboard" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Supervisor Dashboard
          
            </Link>
          </li>
          <li>
            <Link href={`/Books/${2}`} className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Book Detail Page
       
            </Link>
          </li>
          <li>
            <Link href={`/profile`} className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            profile Page
       
            </Link>
          </li>
          <li>
            <Link href="/add-group" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Add Group (Admin)
      
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
