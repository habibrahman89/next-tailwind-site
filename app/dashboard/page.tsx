"use client";

import { signOut, useSession } from "next-auth/react";

export const dynamic = "force-dynamic";

export default function DashboardPage() {
  const session = useSession();
  if (!session) return null;

  const { data, status } = session;

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome {data?.user?.email}</h1>

      <button
        onClick={() => signOut({ callbackUrl: "/auth/login" })}
      >
        Logout
      </button>
    </div>
  );
}