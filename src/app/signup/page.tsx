"use client";
import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [method, setMethod] = useState<"phone" | "email">("phone");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg border-2 border-orange-500 bg-white">
        {/* Desktop two-column */}
        <div className="hidden sm:flex">
          <div className="w-1/2 bg-[#fff7f3] relative overflow-hidden">
            <img
              src="/assets/images/authbg.svg"
              alt="auth art"
              className="w-full h-full object-cover"
            />

            {/* Logo top-left */}
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

            {/* Large heading on image */}

            <div className="absolute inset-0 z-10 flex flex-col justify-center px-8 pt-16">
              <p className="text-6xl font-extrabold text-black leading-tight">
                Create
              </p>
              <p className="text-6xl font-extrabold text-orange-600 leading-tight">
                Account
              </p>

              <p className="mt-4 text-lg text-gray-800 max-w-[380px]">
                Join thousands of users buying and selling with ease.
              </p>
            </div>
          </div>

          <div className="w-1/2 p-8 sm:p-12">
            <h1 className="text-4xl font-extrabold text-orange-600">Sign Up</h1>
            <p className="mt-2 text-gray-700">
              Create your 234Deals account
              <br />
              Sign up Via
            </p>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setMethod("phone")}
                className={`px-3 py-2 rounded-full text-sm font-medium ${method === "phone" ? "bg-orange-600 text-white" : "bg-white border border-orange-300 text-gray-700"}`}
              >
                Phone number
              </button>

              <button
                type="button"
                onClick={() => setMethod("email")}
                className={`px-3 py-2 rounded-full text-sm font-medium ${method === "email" ? "bg-orange-600 text-white" : "bg-white border border-orange-300 text-gray-700"}`}
              >
                E-mail
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  {method === "phone" ? "Phone Number" : "E-mail"}
                </label>
                <input
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-300"
                  placeholder={
                    method === "phone"
                      ? "Enter your phone number"
                      : "Enter your email address"
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-300"
                  placeholder="Enter your username"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative mt-2">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-300"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label="toggle password"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative mt-2">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-300"
                      placeholder="Confirm your password"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input id="terms" type="checkbox" className="w-4 h-4" />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the Terms & Privacy Policy
                </label>
              </div>

              <button className="mt-2 w-full bg-orange-600 text-white py-3 rounded-lg text-lg font-medium">
                Sign Up
              </button>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <div className="flex-1 h-px bg-gray-200" />
              <div className="text-sm text-gray-500">Or</div>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 rounded-lg border border-orange-300 py-2 text-sm">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6 12.227c0-.68-.06-1.333-.168-1.959H12v3.716h5.44c-.234 1.26-.945 2.33-2.016 3.05v2.536h3.256c1.9-1.748 2.88-4.326 2.88-7.343z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 22c2.7 0 4.97-.9 6.627-2.422l-3.256-2.535c-.9.606-2.055.966-3.371.966-2.594 0-4.792-1.75-5.574-4.098H3.97v2.578C5.635 19.95 8.61 22 12 22z"
                    fill="#34A853"
                  />
                  <path
                    d="M6.426 13.912A6.997 6.997 0 016 12c0-.647.112-1.27.322-1.863V7.559H3.97A10.983 10.983 0 002 12c0 1.774.42 3.445 1.16 4.941l3.266-3.03z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 6.48c1.468 0 2.79.504 3.826 1.497l2.864-2.864C16.962 3.413 14.7 2 12 2 8.61 2 5.635 4.05 3.97 6.922l3.778 2.558C7.208 7.78 9.406 6.48 12 6.48z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>

              <button className="flex items-center justify-center gap-2 rounded-lg border border-orange-300 py-2 text-sm">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12.073C22 6.48 17.523 2 11.93 2 6.338 2 2 6.48 2 12.073c0 5.04 3.657 9.214 8.438 9.93v-7.02H8.078V12.07h2.36V9.797c0-2.333 1.38-3.61 3.497-3.61.994 0 2.034.178 2.034.178v2.236h-1.144c-1.127 0-1.478.7-1.478 1.416V12.07h2.516l-.402 2.914h-2.114V22C18.343 21.287 22 17.113 22 12.073z"
                    fill="#1877F2"
                  />
                </svg>
                Facebook
              </button>
            </div>

            <p className="text-sm text-center text-gray-600 mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-orange-600">
                Log In
              </Link>
            </p>

            <p className="text-xs text-gray-400 mt-4">
              By continuing you agree to the Policy and Rules
            </p>
          </div>
        </div>

        {/* Mobile single-column: image then form */}
        <div className="sm:hidden">
          <div className="w-full">
            <img
              src="/assets/images/authbg.svg"
              alt="auth art"
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="p-6">
            <h1 className="text-3xl font-extrabold text-orange-600">
              Create Account
            </h1>
            <p className="mt-2 text-gray-700">
              Join thousands of users buying and selling with ease.
            </p>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setMethod("phone")}
                className={`px-3 py-2 rounded-full text-sm font-medium ${method === "phone" ? "bg-orange-600 text-white" : "bg-white border border-orange-300 text-gray-700"}`}
              >
                Phone number
              </button>
              <button
                type="button"
                onClick={() => setMethod("email")}
                className={`px-3 py-2 rounded-full text-sm font-medium ${method === "email" ? "bg-orange-600 text-white" : "bg-white border border-orange-300 text-gray-700"}`}
              >
                E-mail
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  {method === "phone" ? "Phone Number" : "E-mail"}
                </label>
                <input
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-300"
                  placeholder={
                    method === "phone"
                      ? "Enter your phone number"
                      : "Enter your email address"
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-300"
                  placeholder="Enter your username"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative mt-2">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-300"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label="toggle password"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative mt-2">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-300"
                      placeholder="Confirm your password"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input id="terms-mob" type="checkbox" className="w-4 h-4" />
                <label htmlFor="terms-mob" className="text-sm text-gray-700">
                  I agree to the Terms & Privacy Policy
                </label>
              </div>

              <button className="mt-2 w-full bg-orange-600 text-white py-3 rounded-lg text-lg font-medium">
                Sign Up
              </button>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <div className="flex-1 h-px bg-gray-200" />
              <div className="text-sm text-gray-500">Or</div>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 rounded-lg border border-orange-300 py-2 text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.6 12.227c0-.68-.06-1.333-.168-1.959H12v3.716h5.44c-.234 1.26-.945 2.33-2.016 3.05v2.536h3.256c1.9-1.748 2.88-4.326 2.88-7.343z" fill="#4285F4" />
                  <path d="M12 22c2.7 0 4.97-.9 6.627-2.422l-3.256-2.535c-.9.606-2.055.966-3.371.966-2.594 0-4.792-1.75-5.574-4.098H3.97v2.578C5.635 19.95 8.61 22 12 22z" fill="#34A853" />
                  <path d="M6.426 13.912A6.997 6.997 0 016 12c0-.647.112-1.27.322-1.863V7.559H3.97A10.983 10.983 0 002 12c0 1.774.42 3.445 1.16 4.941l3.266-3.03z" fill="#FBBC05" />
                  <path d="M12 6.48c1.468 0 2.79.504 3.826 1.497l2.864-2.864C16.962 3.413 14.7 2 12 2 8.61 2 5.635 4.05 3.97 6.922l3.778 2.558C7.208 7.78 9.406 6.48 12 6.48z" fill="#EA4335" />
                </svg>
                Google
              </button>

              <button className="flex items-center justify-center gap-2 rounded-lg border border-orange-300 py-2 text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12.073C22 6.48 17.523 2 11.93 2 6.338 2 2 6.48 2 12.073c0 5.04 3.657 9.214 8.438 9.93v-7.02H8.078V12.07h2.36V9.797c0-2.333 1.38-3.61 3.497-3.61.994 0 2.034.178 2.034.178v2.236h-1.144c-1.127 0-1.478.7-1.478 1.416V12.07h2.516l-.402 2.914h-2.114V22C18.343 21.287 22 17.113 22 12.073z" fill="#1877F2" />
                </svg>
                Facebook
              </button>
            </div>

            <p className="text-sm text-center text-gray-600 mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-orange-600">
                Log In
              </Link>
            </p>

            <p className="text-xs text-gray-400 mt-4">
              By continuing you agree to the Policy and Rules
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
