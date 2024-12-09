"use client"
import { Book, Highlighter, StickyNote, Volume2 } from 'lucide-react';
import React, { useState } from 'react';

import { pdfjs } from 'react-pdf';
import dynamic from 'next/dynamic';


if (typeof window !== 'undefined') {
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

// Dynamically import the Document and Page components with no SSR
const Document = dynamic(() => import('react-pdf').then(mod => mod.Document), { ssr: false });
const Page = dynamic(() => import('react-pdf').then(mod => mod.Page), { ssr: false });


const PDFReader = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const goToNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const goToPreviousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="w-20 bg-white shadow-lg flex flex-col items-center py-8 gap-6">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
          <Book className="text-white" size={24} />
        </div>
        <nav className="flex flex-col gap-4">
          <button className="p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-200">
            <Highlighter size={24} />
          </button>
          <button className="p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-200">
            <StickyNote size={24} />
          </button>
          <button className="p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-200">
            <Volume2 size={24} />
          </button>
        </nav>
      </div>

      {/* Main Reading Area */}
      <div className="flex-1 bg-white p-8 relative">
        {/* PDF Viewer */}
        <Document
          file="/1.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>

        {/* Page Controls */}
        <div className="absolute bottom-4 left-8 right-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={goToPreviousPage}
              disabled={pageNumber <= 1}
              className="p-2 rounded-full bg-blue-600 text-white"
            >
              ‹ Prev
            </button>
            <span className="text-sm text-gray-600">
              Page {pageNumber} of {numPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="p-2 rounded-full bg-blue-600 text-white"
            >
              Next ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFReader;
