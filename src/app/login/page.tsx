"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-0 px-0 sm:py-12 sm:px-4">
      <div className="w-full sm:max-w-4xl sm:rounded-2xl overflow-hidden shadow-none sm:shadow-2xl border-0 sm:border sm:border-gray-200 bg-white relative min-h-screen sm:min-h-0">

        {/* Close button — desktop only */}
        <button className="hidden sm:block absolute top-4 right-4 z-30 text-orange-500 hover:text-orange-700 transition-colors">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* ── MOBILE LAYOUT ── */}
        <div className="flex flex-col sm:hidden min-h-screen bg-gray-100 px-5 pt-10 pb-8">

          {/* Back arrow + Login heading */}
          <div className="flex items-center gap-2 mb-1">
            <Link href="/" className="text-orange-500">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </Link>
            <h1 className="text-2xl font-extrabold text-orange-500" style={{ fontFamily: "Georgia, serif" }}>
              Login
            </h1>
          </div>

          <p className="text-gray-900 font-bold text-[15px] mb-8 leading-snug">
            Welcome back! please login to your account
          </p>

          {/* Phone / Username / Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-900 mb-1.5">
              Phone Number/{" "}
              <span className="text-gray-400 font-normal">Username/ Email Address</span>
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div className="mb-1">
            <label className="block text-sm font-semibold text-gray-900 mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 pr-12 text-sm outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                    <path d="M14.12 14.12a3 3 0 11-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <div className="flex justify-end mb-6">
            <Link href="/forgot-password" className="text-sm text-orange-500 font-medium hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Log in button */}
          <button className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-3.5 rounded-xl text-base font-semibold transition-colors shadow-md mb-5">
            Log in
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-gray-500 text-sm font-medium">Or</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Social buttons */}
          <div className="flex gap-3 mb-6">
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-3 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 active:bg-gray-100 transition">
              {/* Google SVG kept */}
              ...
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-3 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 active:bg-gray-100 transition">
              {/* Facebook SVG kept */}
              ...
            </button>
          </div>

          <p className="text-sm text-center text-gray-700 mb-2">
            Don't have an account?{" "}
            <Link href="/signup" className="text-orange-500 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>

          <p className="text-xs text-center text-gray-600">
            By continuing you agree to the{" "}
            <span className="font-bold text-gray-800">Policy and Rules</span>
          </p>
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden sm:flex min-h-[600px]">
          {/* Left panel */}
          <div className="w-1/2 relative overflow-hidden bg-[#f5ede6]">
            <img
              src="/assets/images/authbg.svg"
              alt="auth background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute left-6 top-6 z-20">
              <Link href="/">
                <img
                  src="/234dealslogo.svg"
                  alt="234Deals"
                  width={110}
                  height={60}
                  className="cursor-pointer"
                />
              </Link>
            </div>
            <div className="absolute inset-0 z-10 flex flex-col justify-center px-8 pt-16">
              <p className="text-6xl font-extrabold text-gray-900 leading-tight">Welcome</p>
              <p className="text-6xl font-extrabold text-orange-500 leading-tight">Back!</p>
            </div>
          </div>

          {/* Right panel */}
          <div className="w-1/2 p-10 flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold text-orange-500" style={{ fontFamily: "Georgia, serif" }}>
              Login
            </h1>
            <p className="mt-2 text-gray-800 font-semibold text-base">
              Welcome back!, please login to your account
            </p>

            <div className="mt-8">
              <label className="block text-sm font-semibold text-gray-900">
                Phone Number/{" "}
                <span className="text-gray-400 font-normal">Username/ Email Address</span>
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition"
              />
            </div>

            <div className="mt-5">
              <label className="block text-sm font-semibold text-gray-900">Password</label>
              <div className="relative mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 text-sm outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                      <path d="M14.12 14.12a3 3 0 11-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* ✅ Desktop Forgot Password Added */}
            <div className="flex justify-end mt-2">
              <Link
                href="/forgot-password"
                className="text-sm text-orange-500 font-medium hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-lg font-semibold transition-colors shadow-md">
              Log in
            </button>

            <p className="text-sm text-center text-gray-600 mt-6">
              Don't have an account?{" "}
              <Link href="/signup" className="text-orange-500 font-semibold hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}