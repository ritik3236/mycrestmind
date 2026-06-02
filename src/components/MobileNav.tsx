"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden flex items-center">
      <button onClick={() => setIsOpen(!isOpen)} className="text-slate-200 p-2 cursor-pointer hover:text-cyan-400 transition-colors">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-slate-950/95 border-b border-slate-900 p-6 flex flex-col gap-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] animate-in slide-in-from-top-2 z-50 backdrop-blur-lg">
          <Link href="/about" className="text-slate-200 font-bold text-lg hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>Solutions</Link>
          <Link href="/pricing" className="text-slate-200 font-bold text-lg hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>Pricing</Link>
          <div className="h-px bg-slate-900 w-full my-2"></div>
          <Link href="/login" className="text-slate-200 font-bold text-lg hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>Log in</Link>
          <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold text-lg px-6 py-3 rounded-lg text-center shadow-lg shadow-cyan-500/10" onClick={() => setIsOpen(false)}>Get a demo</Link>
        </div>
      )}
    </div>
  );
}
