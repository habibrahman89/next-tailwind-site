"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

export default function LoginPage() {
  const session = useSession();
  const router = useRouter();

  // ✅ VERY IMPORTANT GUARD
  if (!session) return null;

  const { data, status } = session;

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

      {/* login form / google button */}
    </div>
  );
}