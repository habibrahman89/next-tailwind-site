"use client";
import { useState } from "react";

export default function Contact() {
  const [msg, setMsg] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setMsg("✔️ Message sent successfully!");
  }

  return (
    <section id="contact" className="py-20 bg-gray-200 dark:bg-slate-700 text-center">
      <h2 className="text-3xl mb-6">Contact Us</h2>
      <form onSubmit={submit} className="max-w-md mx-auto space-y-4">
        <input className="w-full p-2" placeholder="Name" required />
        <input className="w-full p-2" placeholder="Email" required />
        <textarea className="w-full p-2" placeholder="Message" required />
        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Send
        </button>
        <p>{msg}</p>
      </form>
    </section>
  );
}