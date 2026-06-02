import Link from "next/link";
import { ArrowRight, UserPlus, Calendar, PenTool, Shield, Check, Info } from "lucide-react";

export default function MyCrestMindHirePage() {
  const kanbanColumns: {
    title: string;
    count: number;
    candidates: {
      name: string;
      trade: string;
      local: string;
      details: string;
      badge?: string;
      site?: string;
    }[];
    color: string;
  }[] = [
    {
      title: "Applied Pool",
      count: 3,
      candidates: [
        { name: "Sarah Jenkins", trade: "Rigging Supervisor", local: "Local 450", details: "Applied 2h ago" },
        { name: "John Davis", trade: "Tig Welder (API)", local: "Local 15", details: "Applied 4h ago" },
        { name: "Alex Thompson", trade: "Rigging Lead", local: "Local 450", details: "Applied 1d ago" }
      ],
      color: "border-slate-900 bg-slate-950/40 text-slate-400"
    },
    {
      title: "Certs Verified",
      count: 2,
      candidates: [
        { name: "Michael Kim", trade: "Crane Operator", local: "Local 450", details: "NCCCO License Cleared", badge: "NCCCO #294" },
        { name: "David Miller", trade: "Rigging Lead", local: "Local 450", details: "OSHA-30 Verified", badge: "OSHA-30 Clear" }
      ],
      color: "border-cyan-500/20 bg-cyan-500/5 text-cyan-400"
    },
    {
      title: "Drug Screen Clear",
      count: 2,
      candidates: [
        { name: "Marcus Chen", trade: "Structural Welder", local: "Local 15", details: "Panel test passed today" },
        { name: "Vilian Garner", trade: "Crane Operator", local: "Local 450", details: "Panel test passed yesterday" }
      ],
      color: "border-slate-900 bg-slate-950/40 text-slate-450"
    },
    {
      title: "Mobilized to Site",
      count: 1,
      candidates: [
        { name: "Jessica Alva", trade: "Rigging Lead", local: "Local 450", details: "RFID Badge Activated", site: "Baytown Site Gate A" }
      ],
      color: "border-violet-500/20 bg-violet-500/5 text-violet-400"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#050507] text-slate-200 font-sans">
      {/* Hero Section */}
      <div className="pt-44 pb-32 px-6 border-b border-slate-900 relative overflow-hidden">
        {/* Technical grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff02_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-cyan-400 font-extrabold tracking-widest text-[10px] bg-cyan-500/5 px-3 py-1 w-fit rounded-full border border-cyan-500/20 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span> Dispatch ATS Sourcing
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-logo bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
              Sourcing to site dispatch in record time.
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              An industrial sourcing platform built directly into your crewing dashboard. Find crane operators and riggers, verify trade cards, check OSHA logs, and dispatch them to payroll with zero manual entry.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-black px-8 py-4 rounded-lg font-extrabold hover:from-cyan-400 hover:to-violet-400 transition-colors cursor-pointer shadow-lg shadow-cyan-500/10 text-sm">
              Request Demo Crew <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-5 bg-slate-950/80 p-8 rounded-2xl border border-slate-900 flex flex-col justify-center items-center text-center shadow-2xl backdrop-blur-md">
            <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800 mb-4 shadow-sm">
              <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="font-extrabold text-sm text-white font-logo">100% Credential Audit Guarantee</h3>
            <p className="text-slate-450 font-semibold text-xs leading-relaxed max-w-xs mt-2">MyCrestMind checks license expiry with issuing boards before adding candidates to standby queues.</p>
          </div>
        </div>
      </div>

      {/* Visual Kanban Sourcing Pipeline Board */}
      <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="space-y-3 mb-10 text-center lg:text-left">
          <span className="text-cyan-400 font-extrabold uppercase tracking-widest text-[10px] font-mono">Visual Tracker</span>
          <h2 className="text-2xl font-extrabold text-white font-logo">Dispatched Sourcing Kanban</h2>
          <p className="text-slate-400 text-xs font-semibold leading-relaxed max-w-xl">Watch how candidate cards move from union application pools to verified certifications, drug clearances, and active site access badges.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {kanbanColumns.map((col, i) => (
            <div key={i} className={`p-4 rounded-xl border flex flex-col shadow-inner bg-slate-950/40 border-slate-900`}>
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-900 text-slate-300">
                <span className="font-extrabold text-[10px] tracking-wider uppercase font-mono">{col.title}</span>
                <span className="font-mono text-xs bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-cyan-400 font-bold">{col.count}</span>
              </div>
              <div className="space-y-3 flex-1">
                {col.candidates.map((cand, j) => (
                  <div key={j} className="bg-slate-950 p-4 rounded-lg border border-slate-900 shadow-sm space-y-2 hover:border-cyan-500/30 transition-all">
                    <div>
                      <h4 className="font-bold text-slate-200 text-xs">{cand.name}</h4>
                      <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider font-mono">{cand.trade} • {cand.local}</span>
                    </div>
                    
                    {cand.details && (
                      <p className="text-[10px] text-slate-400 font-medium flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> {cand.details}
                      </p>
                    )}

                    {cand.badge && (
                      <span className="inline-block text-[8px] bg-slate-900 border border-slate-800 font-mono font-bold px-2 py-0.5 rounded text-cyan-400 uppercase tracking-wider">{cand.badge}</span>
                    )}

                    {cand.site && (
                      <span className="inline-block text-[8px] bg-violet-500/10 border border-violet-500/20 font-mono font-bold px-2 py-0.5 rounded text-violet-400 uppercase tracking-wider">{cand.site}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Concrete Features Section */}
      <div className="py-24 px-6 border-t border-slate-900 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-slate-500 font-extrabold uppercase tracking-widest text-xs font-mono">SOURCE SKILLED LABOR</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 mt-2 font-logo">Recruit top industrial trades.</h2>
            <p className="text-base text-slate-400 font-medium font-sans">Everything you need to attract, evaluate, and dispatch skilled operators without paper logbooks or compliance gaps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-slate-950 p-8 rounded-xl border border-slate-900 shadow-sm hover:border-cyan-500/20 transition-all">
              <UserPlus className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white font-logo">Trade Job Boards</h3>
              <p className="text-slate-400 leading-relaxed font-semibold text-sm">Publish openings directly to union directories, local trade offices, and industrial job index sites. Coordinate incoming CVs in one place.</p>
            </div>
            <div className="bg-slate-950 p-8 rounded-xl border border-slate-900 shadow-sm hover:border-cyan-500/20 transition-all">
              <Calendar className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white font-logo">OSHA Check integration</h3>
              <p className="text-slate-400 leading-relaxed font-semibold text-sm">Check training credentials and run background/safety screening automatically before workers get scheduled for interviews.</p>
            </div>
            <div className="bg-slate-950 p-8 rounded-xl border border-slate-900 shadow-sm hover:border-cyan-500/20 transition-all">
              <PenTool className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white font-logo">Automated Dispatch</h3>
              <p className="text-slate-400 leading-relaxed font-semibold text-sm">Generate dispatch notices, collect e-signatures on project labor agreements, and assign PPE sizes with zero delay.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
