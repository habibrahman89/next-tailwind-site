"use client";

import { useSession, signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

export default function LoginPage() {
  const session = useSession();

  if (!session) return null;

  const { data, status } = session;

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // If already logged in, redirect (optional)
  if (data?.user) {
    return <p>Redirecting...</p>;
  }

  return (
    <div>
      <h1>Login</h1>

      <button
        onClick={() =>
          signIn("google", { callbackUrl: "/dashboard" })
        }
      >
        Sign in with Google
      </button>
    </div>
  );
}