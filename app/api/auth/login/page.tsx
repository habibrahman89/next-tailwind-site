"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const res = await signIn("credentials", {
      email: form.get("email"),
      password: form.get("password"),
      redirect: true,
      callbackUrl: "/dashboard",
    });

    if (!res) {
      setError("Login failed");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20 space-y-4">
      <h1 className="text-xl font-bold">Login</h1>
      <input name="email" placeholder="Email" className="input" />
      <input name="password" type="password" placeholder="Password" className="input" />
      {error && <p className="text-red-500">{error}</p>}
      <button className="btn w-full">Login</button>
    </form>
  );
}