"use client";

import { useSession } from "next-auth/react";

export const dynamic = "force-dynamic";

export default function DashboardPage() {
  const session = useSession();

  if (!session) return null;

  const { data, status } = session;

  if (status === "loading") return <p>Loading...</p>;

  if (!data?.user) {
    return <p>Unauthorized</p>;
  }

  return <div>Welcome {data.user.email}</div>;
}