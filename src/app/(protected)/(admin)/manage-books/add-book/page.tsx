"use client";
import React, { useState } from "react";
import { UploadCloud, XCircle } from "lucide-react";

// Define the types for the book details
interface BookDetails {
  title: string;
  author: string;
  genre: string;
  description: string;
  coverImage: string;
  bookLink: string;
}

// Props for the modal component
interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;

}

const AddBookModal: React.FC<AddBookModalProps> = ({ isOpen, onClose}) => {
  // State for book details
  const [bookDetails, setBookDetails] = useState<BookDetails>({
    title: "",
    author: "",
    genre: "",
    description: "",
    coverImage: "",
    bookLink: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBookDetails((prev) => ({ ...prev, coverImage: URL.createObjectURL(file) }));
    }
  };

  // Save book details
  const handleSave = () => {
    if (bookDetails.title && bookDetails.author) {
      onClose();
    } else {
      alert("Please fill in the required fields (Title and Author).");
    }
  };

  // Modal Content
  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg animate-fade-in">
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Add a New Book</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              <XCircle size={28} />
            </button>
          </div>

          {/* Title and Author */}
          <div className="mb-4">
            <input
              type="text"
              name="title"
              value={bookDetails.title}
              onChange={handleChange}
              required
              placeholder="Book Title"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="author"
              value={bookDetails.author}
              onChange={handleChange}
              required
              placeholder="Author Name"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Genre */}
          <p className="text-gray-600 mb-2">Select Genre</p>
          <div className="flex space-x-4 mb-4">
            {["Thriller", "Fantasy", "Science Fiction", "Non-Fiction"].map((genre) => (
              <button
                key={genre}
                className={`w-full px-4 py-2 rounded-lg font-medium ${
                  bookDetails.genre === genre
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setBookDetails((prev) => ({ ...prev, genre }))}
              >
                {genre}
              </button>
            ))}
          </div>

          {/* Description */}
          <textarea
            name="description"
            value={bookDetails.description}
            onChange={handleChange}
            rows={3}
            placeholder="Book Description"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />

          {/* Cover Image Upload */}
          <div className="relative mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
              id="cover-image-upload"
            />
            <div className="w-full p-4 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center">
              <label
                htmlFor="cover-image-upload"
                className="cursor-pointer flex items-center space-x-2 text-gray-500"
              >
                <UploadCloud size={24} />
                <span>Upload Cover Image</span>
              </label>
            </div>
            {bookDetails.coverImage && (
              <div className="mt-4">
                <img
                  src={bookDetails.coverImage}
                  alt="Book Cover"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Book Link */}
          <div className="mb-4">
            <input
              type="text"
              name="bookLink"
              value={bookDetails.bookLink}
              onChange={handleChange}
              placeholder="Add a Link (e.g., Download or Platform URL)"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Save Book
            </button>
          </div>
        </div>
      </div>
    )
  );
};

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AddBookModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    />
  );
};

export default Page;
