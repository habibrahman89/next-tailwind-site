"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={() => signIn()}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Sign In
      </button>
    </div>
  );
}