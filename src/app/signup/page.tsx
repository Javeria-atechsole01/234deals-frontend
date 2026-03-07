"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function SignupPage() {
  const router = useRouter();
  const [method, setMethod] = useState<"phone" | "email">("phone");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "", // email or phone
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const payload: any = {
        name: formData.name,
        password: formData.password.trim(),
        role: "buyer" // Default role
      };

      if (method === "email") {
        payload.email = formData.contact.trim().toLowerCase();
      } else {
        // normalize phone: keep digits and optional leading +
        const normalizedPhone = formData.contact.replace(/[^\d+]/g, "");
        payload.phone_number = normalizedPhone;
      }

      // Call external API (running on port 5000)
      // Note: In production, this should be proxied or configured via env
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // Auto-login after signup (using NextAuth credentials provider which we'll update)
      const result = await signIn("credentials", {
        redirect: false,
        email: method === "email" ? formData.contact.trim().toLowerCase() : formData.contact.replace(/[^\d+]/g, ""),
        password: formData.password.trim(),
      });

      if (result?.error) {
        // If auto-login fails, redirect to login page
        router.push("/login");
      } else {
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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

            {error && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  {method === "phone" ? "Phone Number" : "E-mail"}
                </label>
                <input
                  name="contact"
                  required
                  type={method === "email" ? "email" : "text"}
                  value={formData.contact}
                  onChange={handleChange}
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
                  Password
                </label>
                <div className="relative">
                  <input
                    name="password"
                    required
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-3 pr-10 text-sm outline-none focus:ring-2 focus:ring-orange-300"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                        <path d="M14.12 14.12a3 3 0 11-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  required
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-300"
                  placeholder="Confirm your password"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition disabled:opacity-50"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-orange-600 hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>

        {/* Mobile View */}
        <div className="sm:hidden p-6">
             <div className="flex items-center gap-2 mb-6">
                <Link href="/" className="text-orange-500">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </Link>
                <h1 className="text-2xl font-extrabold text-orange-600">Sign Up</h1>
             </div>
             
             <div className="flex gap-3 mb-6">
              <button
                type="button"
                onClick={() => setMethod("phone")}
                className={`flex-1 py-2 rounded-full text-sm font-medium ${method === "phone" ? "bg-orange-600 text-white" : "bg-white border border-orange-300 text-gray-700"}`}
              >
                Phone
              </button>
              <button
                type="button"
                onClick={() => setMethod("email")}
                className={`flex-1 py-2 rounded-full text-sm font-medium ${method === "email" ? "bg-orange-600 text-white" : "bg-white border border-orange-300 text-gray-700"}`}
              >
                Email
              </button>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

             <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm focus:ring-2 focus:ring-orange-300 outline-none"
                  placeholder="Full Name"
                />
                <input
                  name="contact"
                  required
                  type={method === "email" ? "email" : "text"}
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm focus:ring-2 focus:ring-orange-300 outline-none"
                  placeholder={method === "phone" ? "Phone Number" : "Email Address"}
                />
                <div className="relative">
                  <input
                    name="password"
                    required
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-3 py-3 pr-10 text-sm focus:ring-2 focus:ring-orange-300 outline-none"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                        <path d="M14.12 14.12a3 3 0 11-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
                <input
                  name="confirmPassword"
                  required
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm focus:ring-2 focus:ring-orange-300 outline-none"
                  placeholder="Confirm Password"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition disabled:opacity-50"
                >
                    {loading ? "Creating..." : "Create Account"}
                </button>
             </form>
             <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-orange-600 hover:underline">
                Log In
              </Link>
            </p>
        </div>
      </div>
    </div>
  );
}
