'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaUpload } from 'react-icons/fa';

export default function Dashboard() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Mock user data - will be replaced with actual data from backend
  const userData = {
    name: 'John Doe',
    email: 'john.doe@mail.jiit.ac.in',
    enrollmentNumber: '21124001',
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // TODO: Implement file upload to backend
      console.log('File selected:', file.name);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">JIIT Papers</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">{userData.email}</span>
              <button className="text-gray-600 hover:text-primary">
                <FaUser size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profile Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-6">Profile</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <p className="mt-1 text-lg">{userData.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 text-lg">{userData.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Enrollment Number</label>
                <p className="mt-1 text-lg">{userData.enrollmentNumber}</p>
              </div>
            </div>
          </div>

          {/* Upload Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-6">Upload Question Paper</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FaUpload className="w-10 h-10 mb-3 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PDF (MAX. 10MB)</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf"
                    onChange={handleFileUpload}
                  />
                </label>
              </div>
              {selectedFile && (
                <p className="text-sm text-gray-600">
                  Selected file: {selectedFile.name}
                </p>
              )}
              <button
                className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors"
                disabled={!selectedFile}
              >
                Upload Paper
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 