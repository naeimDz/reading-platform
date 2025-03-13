"use client"
import React, { useState } from 'react';
import { Plus, Trash2, Edit2, Star } from 'lucide-react';
import Page from './add-book/page';

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
<div>    


      {/* Main Content */}

      <div className="bg-gray-50 min-h-screen p-8">
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
      <Page        />
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

    </div>
  );
};

export default BookManagement;
