'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaGoogle } from 'react-icons/fa';

export default function Login() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center bg-gray-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/jiit.webp"
          alt="JIIT Campus"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-green-500/30 to-blue-600/40 mix-blend-multiply"></div>
      </div>

      {/* Login Container */}
      <div className="relative w-full max-w-md px-6 py-12 mx-auto">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
            <span className="text-blue-400">JIIT</span>
            <span className="text-green-400">Simplified</span>
          </h1>
          <h2 className="text-2xl font-semibold text-white mb-2 drop-shadow-md">
            Sign in to your account
          </h2>
        </div>

        {/* Login Form */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                JIIT Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.name@mail.jiit.ac.in"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
            >
              <FaGoogle className="text-lg" />
              Sign in with Google
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Need help?</span>
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center">
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-white/80">
            Only @mail.jiit.ac.in email addresses are allowed
          </p>
        </div>
      </div>
    </main>
  );
} 