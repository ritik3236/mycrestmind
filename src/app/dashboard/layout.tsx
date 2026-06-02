import Link from "next/link";
import { LayoutDashboard, Users, CreditCard, Calendar, ShieldPlus, FileText, BarChart, Settings } from "lucide-react";
import { LogoutButton } from "@/components/LogoutButton";
import { TopNav } from "@/components/TopNav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050507] flex text-slate-200">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-black text-slate-400 flex-shrink-0 border-r border-slate-900 flex-col h-screen sticky top-0 font-mono text-xs">
        <div className="h-16 flex items-center px-6 border-b border-slate-900">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <span className="font-bold text-base text-white tracking-tight font-logo">MyCrestMind HR</span>
          </div>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>
          <Link href="/dashboard/directory" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-900/60 hover:text-slate-200 transition-colors font-medium border border-transparent">
            <Users className="w-4 h-4" />
            Directory
          </Link>
          <Link href="/dashboard/payroll" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-900/60 hover:text-slate-200 transition-colors font-medium border border-transparent">
            <CreditCard className="w-4 h-4" />
            Payroll
          </Link>
          <Link href="/dashboard/time-off" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-900/60 hover:text-slate-200 transition-colors font-medium border border-transparent">
            <Calendar className="w-4 h-4" />
            Time Off
          </Link>
          <Link href="/dashboard/benefits" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-900/60 hover:text-slate-200 transition-colors font-medium border border-transparent">
            <ShieldPlus className="w-4 h-4" />
            Benefits
          </Link>
          <Link href="/dashboard/documents" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-900/60 hover:text-slate-200 transition-colors font-medium border border-transparent">
            <FileText className="w-4 h-4" />
            Documents
          </Link>
          <Link href="/dashboard/reports" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-900/60 hover:text-slate-200 transition-colors font-medium border border-transparent">
            <BarChart className="w-4 h-4" />
            Reports
          </Link>
        </nav>
        
        <div className="p-4 border-t border-slate-900 space-y-1">
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-900/60 hover:text-slate-200 transition-colors font-medium border border-transparent">
            <Settings className="w-4 h-4" />
            Settings
          </Link>
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navigation */}
        <TopNav />

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto bg-[#050507]">
          {children}
        </main>
      </div>
    </div>
  );
}
