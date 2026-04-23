"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#1a1a2e]/80 backdrop-blur-sm border-b border-zinc-800/50">
      {/* Terminal-style logo */}
      <Link 
        href="/" 
        className="flex items-center gap-1 font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
      >
        <span className="text-zinc-500">~</span>
        <span className="text-zinc-500">/</span>
        <span className="text-[#00ff41] animate-pulse">▊</span>
      </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-8">
        <Link 
          href="/about" 
          className="font-mono text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          About
        </Link>
        <Link 
          href="/projects" 
          className="font-mono text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          Projects
        </Link>
        <a 
          href="/NewResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
