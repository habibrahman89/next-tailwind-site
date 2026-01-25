"use client";

import { useSession, signOut } from "next-auth/react";

export const dynamic = "force-dynamic";

export default function Navbar() {
  const session = useSession();

  if (!session) return null;

  const { data, status } = session;

  if (status === "loading") return null;

  return (
    <nav>
      {data?.user ? (
        <>
          <span>{data.user.email}</span>
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <span>Not logged in</span>
      )}
    </nav>
  );
}