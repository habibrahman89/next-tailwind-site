"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

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

      {/* credentials form here */}

      <button
        onClick={() => signIn("google")}
        className="border px-4 py-2 rounded"
      >
        Continue with Google
      </button>
    </div>
  );
}