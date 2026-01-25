"use client";

import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const session = useSession();
  if (!session) return null;

  const { data, status } = session;

  if (status !== "authenticated") return null;

  return (
    <nav className="flex gap-4 p-4">
      <span>{data?.user?.email}</span>

      <button
        onClick={() => signOut({ callbackUrl: "/auth/login" })}
        className="text-red-600"
      >
        Logout
      </button>
    </nav>
  );
}