export const dynamic = "force-dynamic";

"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const session = useSession();

  // ✅ SAFETY GUARD (THIS IS WHAT YOU ASKED ABOUT)
  if (!session) return null;

  const { data, status } = session;

  const router = useRouter();

  // redirect logged-in users
  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Login</h1>

      <button onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
        Continue with Google
      </button>
    </div>
  );
}