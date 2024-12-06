"use client"
import React, { useState } from 'react';
import { Plus, Trash2, Edit2, Search, Filter, Download, Upload, BookOpen, Star, Shield, BarChart2, Settings, Group, Book, Users, LayoutDashboard } from 'lucide-react';
import AddBookModal from './add-book/page';
interface SidebarItem {
    icon: JSX.Element;
    label: string;
    view: string;
  }
const BookManagement = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'The Silent Patient',
      author: 'Alex Michaelides',
      genre: 'Thriller',
      availableCopies: 15,
      rating: 4.5,
      coverImage: '/api/placeholder/300/400',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Atomic Habits',
      author: 'James Clear',
      genre: 'Self-Help',
      availableCopies: 30,
      rating: 4.7,
      coverImage: '/api/placeholder/300/400',
      status: 'Active'
    },
    {
      id: 3,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      genre: 'History',
      availableCopies: 20,
      rating: 4.8,
      coverImage: '/api/placeholder/300/400',
      status: 'Inactive'
    },
    {
      id: 4,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
      availableCopies: 5,
      rating: 4.2,
      coverImage: '/api/placeholder/300/400',
      status: 'Active'
    },
    // More books can be added dynamically
  ]);

  const [selectedBooks, setSelectedBooks] = useState<number[]>([]);
  const [filterCriteria, setFilterCriteria] = useState({
    genre: '',
    status: '',
  });

  const sidebarItems: SidebarItem[] = [
    { 
      icon: <LayoutDashboard className="w-5 h-5" />, 
      label: 'Overview', 
      view: 'overview' 
    },
    { 
      icon: <Users className="w-5 h-5" />, 
      label: 'User Management', 
      view: 'users' 
    },
    { 
      icon: <Book className="w-5 h-5" />, 
      label: 'Book Management', 
      view: 'books' 
    },
    { 
      icon: <Group className="w-5 h-5" />, 
      label: 'Group Insights', 
      view: 'groups' 
    },
    { 
      icon: <BarChart2 className="w-5 h-5" />, 
      label: 'Performance', 
      view: 'performance' 
    },
    { 
      icon: <Settings className="w-5 h-5" />, 
      label: 'Platform Settings', 
      view: 'settings' 
    }
  ];
  // Mock logic to add or delete books
  const handleSelectBook = (id: number) => {
    setSelectedBooks(prevSelectedBooks =>
      prevSelectedBooks.includes(id)
        ? prevSelectedBooks.filter(bookId => bookId !== id)
        : [...prevSelectedBooks, id]
    );
  };

  const handleDeleteBooks = () => {
    setBooks(books.filter(book => !selectedBooks.includes(book.id)));
    setSelectedBooks([]);
  };
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
     {/* Sidebar */}
     <div className="w-64 bg-white shadow-xl border-r border-gray-200 p-4">
        <div className="flex items-center mb-8">
          <Shield className="text-blue-600 mr-3" size={30} />
          <h1 className="text-2xl font-bold text-blue-900">Admin Panel</h1>
        </div>
        
        <nav>
          {sidebarItems.map((item) => (
            <button
              key={item.view}
              className={`
                flex items-center w-full p-3 mb-2 rounded-lg transition-all
    `}
            >
              {item.icon}
              <span className="ml-3 font-medium">{item.label}</span>

            </button>
          ))}
        </nav>
      </div>


      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-4xl font-semibold text-gray-800">Book Management</h2>
            <p className="text-gray-600 mt-2">Manage your books efficiently with ease.</p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
          <div>
      {/* Add Book Button */}
      <button
        className="p-3 rounded-full bg-green-600 text-white hover:bg-green-700 flex items-center"
        onClick={() => setIsAddBookModalOpen(true)}
      >
        <Plus size={24} />
      </button>

      {/* Add Book Modal */}
      <AddBookModal
        isOpen={isAddBookModalOpen}
        onClose={() => setIsAddBookModalOpen(false)}
        onSave={()=>null}
      />
    </div>
            {selectedBooks.length > 0 && (
              <button 
                className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 flex items-center"
                onClick={handleDeleteBooks}
              >
                <Trash2 size={24} />
              </button>
            )}
          </div>
        </div>

        {/* Book Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.filter(book => {
            // Apply filters for genre
            if (filterCriteria.genre && book.genre !== filterCriteria.genre) {
              return false;
            }
            return true;
          }).map(book => (
            <div key={book.id} className="bg-white rounded-xl shadow-lg p-4 group transform hover:scale-105 transition-all">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
              <p className="text-gray-500 mb-2">{book.author}</p>
              <div className="flex items-center space-x-1 mb-2">
                <Star className="text-yellow-400" size={18} />
                <span>{book.rating}</span>
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleSelectBook(book.id)}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg ${selectedBooks.includes(book.id) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  {selectedBooks.includes(book.id) ? 'Selected' : 'Select'}
                </button>
                <button
                  onClick={() => {/* Edit book modal */}}
                  className="px-4 py-2 text-sm font-semibold rounded-lg bg-yellow-500 text-white hover:bg-yellow-600"
                >
                  <Edit2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {books.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p>There are no books available. Add new books to get started!</p>
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <button 
          className="p-4 bg-blue-600 rounded-full text-white shadow-lg hover:bg-blue-700 transition-all"
          onClick={() => {/* Add book modal */}}
        >
          <Plus size={28} />
        </button>
      </div>
    </div>
  );
};

export default BookManagement;