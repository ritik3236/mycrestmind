"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, HelpCircle, ChevronDown, User, Settings, LogOut, CheckCircle, AlertTriangle, Menu, X, LayoutDashboard, Users, CreditCard, Calendar, ShieldPlus, FileText, BarChart } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function TopNav() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const profileRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      router.push(`/dashboard/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
    <header className="h-16 bg-black border-b border-slate-900 flex items-center justify-between px-4 md:px-8 sticky top-0 z-10 backdrop-blur-md">
      <div className="flex items-center gap-3 md:hidden">
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-1 -ml-1 text-slate-400 hover:text-slate-200">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 max-w-xl hidden md:block">
        <div className="relative">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search API gateway & logs..." 
            className="w-full bg-slate-950/80 border border-slate-900 rounded-lg pl-4 pr-10 py-1.5 text-xs focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-slate-200 placeholder:text-slate-650"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        {/* Notifications Dropdown */}
        <div className="relative" ref={notifRef}>
          <button 
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            className="text-slate-400 hover:text-slate-200 relative cursor-pointer flex items-center justify-center p-1"
          >
            <Bell className="w-4.5 h-4.5" />
            <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></span>
          </button>
          
          {isNotifOpen && (
            <div className="absolute right-0 mt-3 w-80 bg-slate-950 border border-slate-900 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 overflow-hidden">
              <div className="p-4 border-b border-slate-900 flex justify-between items-center bg-slate-950/50">
                <h3 className="font-bold text-xs text-slate-200 uppercase tracking-wider">Gateway Alerts</h3>
                <span className="text-[10px] text-cyan-400 font-bold cursor-pointer hover:underline">Flush alerts</span>
              </div>
              <div className="max-h-80 overflow-y-auto divide-y divide-slate-900/60">
                <div className="p-4 hover:bg-slate-900/40 transition-colors cursor-pointer flex gap-3">
                  <div className="mt-0.5"><CheckCircle className="w-4 h-4 text-cyan-400" /></div>
                  <div>
                    <p className="text-xs font-bold text-slate-200">Crestmind Agent Synchronized</p>
                    <p className="text-[10px] text-slate-450 mt-0.5 leading-relaxed">Union local dispatch registries synced successfully across 4 active API pipelines.</p>
                    <p className="text-[9px] text-slate-500 mt-1 font-mono">2m ago</p>
                  </div>
                </div>
                <div className="p-4 hover:bg-slate-900/40 transition-colors cursor-pointer flex gap-3">
                  <div className="mt-0.5"><AlertTriangle className="w-4 h-4 text-violet-400" /></div>
                  <div>
                    <p className="text-xs font-bold text-slate-200">Credential Pipeline Audit</p>
                    <p className="text-[10px] text-slate-450 mt-0.5 leading-relaxed">OSHA-30 check pending for 3 candidates on Odessa turnarounds.</p>
                    <p className="text-[9px] text-slate-500 mt-1 font-mono">1h ago</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Help Icon */}
        <Link 
          href="/dashboard/help"
          className="text-slate-400 hover:text-slate-200 cursor-pointer p-1"
        >
          <HelpCircle className="w-4.5 h-4.5" />
        </Link>
        
        <div className="h-6 border-l border-slate-900"></div>
        
        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer text-slate-300"
          >
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-black text-xs shadow-sm">
              OM
            </div>
            <div className="text-left hidden md:block">
              <div className="text-xs font-bold text-slate-200">Olivia Martin</div>
              <div className="text-[9px] text-slate-500 font-mono">ADMIN GATEWAY</div>
            </div>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-slate-950 border border-slate-900 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 overflow-hidden py-1">
              <div className="px-4 py-3 border-b border-slate-900 mb-1">
                <p className="text-xs font-bold text-slate-200">Olivia Martin</p>
                <p className="text-[10px] text-slate-500 truncate font-mono">olivia@crestmind.com</p>
              </div>
              
              <Link href="/dashboard/profile" className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-900/60 transition-colors">
                <User className="w-3.5 h-3.5 text-cyan-400" /> My Profile
              </Link>
              <Link href="/dashboard/settings" className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-900/60 transition-colors">
                <Settings className="w-3.5 h-3.5 text-violet-400" /> Account Settings
              </Link>
              
              <div className="border-t border-slate-900 my-1"></div>
              
              <button 
                onClick={() => signOut({ callbackUrl: '/login' })}
                className="w-full flex items-center gap-2 px-4 py-2 text-xs font-bold text-red-400 hover:bg-red-950/20 transition-colors cursor-pointer text-left"
              >
                <LogOut className="w-3.5 h-3.5" /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>

    {/* Mobile Navigation Drawer */}
    {isMobileMenuOpen && (
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
        <div 
          className="w-64 h-full bg-slate-950 text-slate-300 flex flex-col border-r border-slate-900 animate-in slide-in-from-left"
          onClick={e => e.stopPropagation()}
        >
          <div className="h-16 flex items-center justify-between px-4 border-b border-slate-900">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              <span className="font-bold text-lg text-white font-logo">MyCrestMind HR</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 p-1">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 text-xs">
            <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
              <LayoutDashboard className="w-4 h-4" /> Dashboard
            </Link>
            <Link href="/dashboard/directory" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white transition-colors font-medium">
              <Users className="w-4 h-4" /> Directory
            </Link>
            <Link href="/dashboard/payroll" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white transition-colors font-medium">
              <CreditCard className="w-4 h-4" /> Payroll
            </Link>
            <Link href="/dashboard/time-off" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white transition-colors font-medium">
              <Calendar className="w-4 h-4" /> Time Off
            </Link>
            <Link href="/dashboard/benefits" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white transition-colors font-medium">
              <ShieldPlus className="w-4 h-4" /> Benefits
            </Link>
            <Link href="/dashboard/documents" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white transition-colors font-medium">
              <FileText className="w-4 h-4" /> Documents
            </Link>
            <Link href="/dashboard/reports" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white transition-colors font-medium">
              <BarChart className="w-4 h-4" /> Reports
            </Link>
          </nav>
        </div>
      </div>
    )}
    </>
  );
}
