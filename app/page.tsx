'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaGraduationCap, FaBook, FaUpload } from 'react-icons/fa';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold tracking-wider">
                <span className="text-white">JIIT</span>
                <span className="text-yellow-300">Papers</span>
              </h1>
            </div>
            <div>
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-105"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Search */}
      <div className="relative h-[700px]">
        {/* College Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/JIIT-Noida.webp"
            alt="JIIT Noida Campus"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
            priority
            className="brightness-110 contrast-105 saturate-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-800/40 to-blue-900/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center items-center h-full text-center pt-64">
            <h2 className="text-5xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">
              JIIT
              <span className="block text-yellow-300">Simplified</span>
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto drop-shadow">
              Access past exam papers from all branches and prepare smarter!
            </p>
            
            <form onSubmit={handleSearch} className="max-w-2xl w-full mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter subject code or name..."
                  className="w-full px-8 py-4 text-lg border-2 border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-xl bg-white/95 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full hover:shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <FaSearch size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white/90 backdrop-blur-sm">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group hover:transform hover:scale-105 transition-all duration-200">
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="text-blue-600 mb-4 bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                <FaGraduationCap size={24} />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Easy Access</h3>
              <p className="text-blue-800">Find question papers from all branches and years in one centralized platform</p>
            </div>
          </div>

          <div className="group hover:transform hover:scale-105 transition-all duration-200">
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="text-blue-600 mb-4 bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                <FaBook size={24} />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Smart Search</h3>
              <p className="text-blue-800">Quickly find papers using subject codes or names with our intelligent search</p>
            </div>
          </div>

          <div className="group hover:transform hover:scale-105 transition-all duration-200">
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="text-blue-600 mb-4 bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                <FaUpload size={24} />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Contribute</h3>
              <p className="text-blue-800">Help your peers by uploading and sharing your question papers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-blue-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-white/90 text-sm">
              © 2024 JIIT Papers. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
} 