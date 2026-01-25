"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      window.location.href = callbackUrl;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      
{/* Divider */}
<div className="flex items-center my-4">
  <div className="flex-grow border-t border-gray-300" />
  <span className="mx-3 text-sm text-gray-500">OR</span>
  <div className="flex-grow border-t border-gray-300" />
</div>

{/* Google Login Button */}
<button
  type="button"
  onClick={() =>
  signIn("google", {
    callbackUrl: "/dashboard",
  })
}
  className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition"
>
  <img
    src="/google.svg"
    alt="Google"
    className="w-5 h-5"
  />
  <span className="text-sm font-medium">
    Continue with Google
  </span>
</button>




    </form>
  );
}