"use client";

import { signOut } from "next-auth/react";

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>

      <button
        onClick={() => signOut({ callbackUrl: "/auth/login" })}
        className="text-red-600"
      >
        Logout
      </button>
    </div>
  );
}