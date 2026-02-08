"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/Button";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await signIn("credentials", { email, password, callbackUrl: "/" });
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-6 rounded border w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Sign in</h2>
        <label className="block mb-2">
          <span className="text-sm">Email</span>
          <input className="mt-1 w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="block mb-4">
          <span className="text-sm">Password</span>
          <input type="password" className="mt-1 w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
}
