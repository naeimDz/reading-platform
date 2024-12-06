"use client"
import React, { useState, useEffect } from 'react';
import { 
  BookOpenIcon, 
  PlusCircleIcon, 
  CalendarIcon, 
  UsersIcon, 
  FilterIcon,
  SearchIcon,
  XCircleIcon,
  FileText
} from 'lucide-react';
import Link from 'next/link';

// Define types for book assignment and library items
interface BookAssignment {
  id: number;
  title: string;
  author: string;
  status: string;
  startDate: string;
  deadline: string;
  assignedTo: string;
  progress: number;
  coverImage: string;
  readingGoal:string;
}

interface BookLibrary {
  id: number;
  title: string;
  author: string;
  genre: string;
  language: string;
  recommendedAge: string;
}

// Define types for the form and filters
interface AssignmentForm {
  book: string;
  group: string;
  startDate: string;
  deadline: string;
  readingGoal: string;
}

interface Filters {
  status: string;
  group: string;
}

const mockBookAssignments: BookAssignment[] = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    status: "In Progress",
    startDate: "2024-03-15",
    deadline: "2024-04-30",
    assignedTo: "Literary Explorers",
    progress: 65,
    coverImage: "/api/placeholder/200/300",
    readingGoal:""
    
  },
  {
    id: 2,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    status: "Not Started",
    startDate: "2024-05-01",
    deadline: "2024-06-15",
    assignedTo: "Young Readers Club",
    progress: 0,
    coverImage: "/api/placeholder/200/300",
    readingGoal:""
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    status: "Completed",
    startDate: "2024-02-01",
    deadline: "2024-03-10",
    assignedTo: "Literary Explorers",
    progress: 100,
    coverImage: "/api/placeholder/200/300",
    readingGoal:""
  }
];

const mockBookLibrary: BookLibrary[] = [
  {
    id: 101,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    genre: "Fiction",
    language: "French Translation",
    recommendedAge: "12+"
  },
  {
    id: 102,
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    genre: "Historical Fiction",
    language: "English",
    recommendedAge: "14+"
  },
  {
    id: 103,
    title: "The Stranger",
    author: "Albert Camus",
    genre: "Philosophical Novel",
    language: "French Translation",
    recommendedAge: "16+"
  }
];

const BookAssignmentPage: React.FC = () => {
  const [assignments, setAssignments] = useState<BookAssignment[]>(mockBookAssignments);
  const [library, setLibrary] = useState<BookLibrary[]>(mockBookLibrary);
  const [selectedBook, setSelectedBook] = useState<BookLibrary | null>(null);
  const [assignmentForm, setAssignmentForm] = useState<AssignmentForm>({
    book: '',
    group: '',
    startDate: '',
    deadline: '',
    readingGoal:'',
  });

  const [filters, setFilters] = useState<Filters>({
    status: '',
    group: ''
  });

  const handleAssignBook = () => {
    if (Object.values(assignmentForm).every(val => val)) {
      const newAssignment: BookAssignment = {
        id: assignments.length + 1,
        ...assignmentForm,
        status: 'Not Started',
        progress: 0,
        coverImage: "/api/placeholder/200/300",
        title: '',
        author: '',
        assignedTo: ''
      };
      setAssignments([...assignments, newAssignment]);
      setSelectedBook(null);
    } else {
      alert('Please fill in all fields');
    }
  };

  const filteredAssignments = assignments.filter((assignment) => 
    (!filters.status || assignment.status === filters.status) &&
    (!filters.group || assignment.assignedTo === filters.group)
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <BookOpenIcon className="text-blue-600 w-10 h-10" />
          <h1 className="block text-3xl font-bold text-gray-800">Book Assignment Center</h1>
          <p className="text-gray-600">Manage and track reading assignments for your groups</p>
        </div>
        <div className="flex space-x-4">
             {/*  <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-600"
            onClick={() => setSelectedBook({} as BookLibrary)}  // Type-casting for empty object
          >
            <PlusCircleIcon className="w-5 h-5" />
            <span>Assign New Book</span>
          </button> */}
        </div>
      </header>

      {/* Filters */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6 flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <FilterIcon className="text-gray-500" />
          <select 
            className="border rounded px-2 py-1"
            value={filters.status}
            onChange={(e) => setFilters({...filters, status: e.target.value})}
          >
            <option value="">All Statuses</option>
            <option value="In Progress">In Progress</option>
            <option value="Not Started">Not Started</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <UsersIcon className="text-gray-500" />
          <select 
            className="border rounded px-2 py-1"
            value={filters.group}
            onChange={(e) => setFilters({...filters, group: e.target.value})}
          >
            <option value="">All Groups</option>
            <option value="Literary Explorers">Literary Explorers</option>
            <option value="Young Readers Club">Young Readers Club</option>
          </select>
        </div>
        <div className="flex-grow flex items-center space-x-2">
          <SearchIcon className="text-gray-500" />
          <input 
            type="text" 
            placeholder="Search books..." 
            className="border rounded px-2 py-1 w-full"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-3 gap-6">
        {/* Book Assignments List */}
        <div className="col-span-2 space-y-4">

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Current Assignments</h2>
       
        {filteredAssignments.map((book) => (
        <Link 
          key={book.id}
          href={`/assign-books/${book.id}`} // Link to BookDetailSupervisor with the book's ID
          className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow"
        >
          <img 
            src={book.coverImage} 
            alt={book.title} 
            className="w-24 h-36 object-cover rounded-md"
          />
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xl font-semibold text-gray-800">{book.title}</h4>
                <p className="text-gray-600">{book.author}</p>
              </div>
              <span 
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  book.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                  book.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}
              >
                {book.status}
              </span>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <CalendarIcon className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">{book.startDate} - {book.deadline}</span>
              </div>
              <div className="flex items-center space-x-2">
                <UsersIcon className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">{book.assignedTo}</span>
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${book.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Progress</span>
                <span>{book.progress}%</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
        </div>

        {/* Book Assignment/Library Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
        
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {'Assign New Book'}
                </h2>
           {/*   <XCircleIcon 
                  className="text-gray-500 cursor-pointer hover:text-red-500" 
                  onClick={() => setSelectedBook(null)}
                /> */} 
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Select Book</label>
                  <select 
                    className="w-full border rounded px-3 py-2"
                    value={assignmentForm.book}
                    onChange={(e) => setAssignmentForm({...assignmentForm, book: e.target.value})}
                  >
                    <option value="">Choose a Book</option>
                    {library.map((book) => (
                      <option key={book.id} value={book.title}>
                        {book.title} by {book.author}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Assign to Group</label>
                  <select 
                    className="w-full border rounded px-3 py-2"
                    value={assignmentForm.group}
                    onChange={(e) => setAssignmentForm({...assignmentForm, group: e.target.value})}
                  >
                    <option value="">Select Group</option>
                    <option value="Literary Explorers">Literary Explorers</option>
                    <option value="Young Readers Club">Young Readers Club</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Start Date</label>
                    <input 
                      type="date" 
                      className="w-full border rounded px-3 py-2"
                      value={assignmentForm.startDate}
                      onChange={(e) => setAssignmentForm({...assignmentForm, startDate: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Deadline</label>
                    <input 
                      type="date" 
                      className="w-full border rounded px-3 py-2"
                      value={assignmentForm.deadline}
                      onChange={(e) => setAssignmentForm({...assignmentForm, deadline: e.target.value})}
                    />
                  </div>
                  <div>
  <label className="block mb-2 text-sm font-medium text-gray-700">Reading Goal</label>
  <textarea 
    className="w-full border rounded-lg p-2"  // Same width as other inputs
    placeholder="Describe reading expectations, chapters, or discussion goals"
    value={assignmentForm.readingGoal}
    onChange={(e) => setAssignmentForm({ ...assignmentForm, readingGoal: e.target.value })}
  />
</div>
                </div>
                <button 
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                  onClick={handleAssignBook}
                >
                  Assign Book
                </button>
              </div>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default BookAssignmentPage;
