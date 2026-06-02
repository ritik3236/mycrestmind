"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export function LogoutButton() {
  return (
    <button 
      onClick={() => signOut({ callbackUrl: '/login' })}
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-900/60 transition-colors w-full text-left text-red-400 font-bold border border-transparent"
    >
      <LogOut className="w-4 h-4" />
      Log out
    </button>
  );
}
