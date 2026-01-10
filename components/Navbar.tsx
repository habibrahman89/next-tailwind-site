"use client";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 bg-slate-900 text-white sticky top-0">
      <h1 className="font-bold text-xl">Widenex</h1>
      <nav className="space-x-6">
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
        <ThemeToggle />
      </nav>
    </header>
  );
}