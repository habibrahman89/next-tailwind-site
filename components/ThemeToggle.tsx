"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggle = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark", !dark);
    localStorage.setItem("theme", !dark ? "dark" : "light");
  };

  return (
    <button onClick={toggle} className="border px-3 py-1 rounded">
      {dark ? "☀️" : "🌙"}
    </button>
  );
}