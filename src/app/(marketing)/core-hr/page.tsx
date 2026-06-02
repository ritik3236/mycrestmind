import Link from "next/link";
import { ArrowRight, Users, Database, FileText, Shield } from "lucide-react";

export default function CoreHRPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050507] text-slate-200">
      {/* Hero Section (LIGHT) */}
      <div className="pt-44 pb-32 px-6 border-b border-slate-900 relative overflow-hidden">
        {/* Technical grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a04_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="text-cyan-400 font-extrabold tracking-widest text-xs uppercase mb-6 flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg/5 px-3 py-1 w-fit rounded-full border border-[#ea580c]/15">
              <Shield className="w-3.5 h-3.5" /> Compliance Hub
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              One central directory for field compliance.
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              MyCrestMind acts as your project's absolute compliance source of truth. Manage worker details, safety credentials, drug testing records, and union scales in one place.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg text-white px-8 py-4 rounded font-bold hover:from-cyan-400 hover:to-violet-400 transition-colors cursor-pointer shadow-lg shadow-cyan-500/10">
              Request Demo Crew <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-black p-8 rounded-xl border border-slate-900 shadow-sm relative text-black">
             <div className="flex items-center justify-between mb-8">
               <div className="font-extrabold text-xl text-white font-logo">Operator Directory</div>
               <div className="bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg/5 border border-[#ea580c]/15 px-4 py-1.5 rounded-full text-xs font-bold text-cyan-400 animate-pulse">Syncing APIs...</div>
             </div>
             <div className="space-y-4">
                {[
                  { name: "Sarah Jenkins", role: "Rigging Supervisor", status: "Cleared", creds: "NCCCO #824" },
                  { name: "Marcus Chen", role: "Crane Operator", status: "Active", creds: "Lattice Boom Card" },
                  { name: "Elena Rodriguez", role: "Structural Welder", status: "Pending", creds: "AWS drug screen" }
                ].map((emp, i) => (
                  <div key={i} className="flex items-center gap-4 bg-black p-4 rounded-lg border border-slate-900 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg flex items-center justify-center font-bold text-white text-sm">{emp.name.charAt(0)}</div>
                    <div className="flex-1">
                      <div className="font-bold text-sm text-white">{emp.name}</div>
                      <div className="text-slate-500 text-xs font-semibold">{emp.role} • <span className="text-slate-400 font-medium">{emp.creds}</span></div>
                    </div>
                    <div className={`px-2.5 py-0.5 rounded text-[10px] uppercase font-bold border ${
                      emp.status === 'Cleared' || emp.status === 'Active' 
                        ? 'bg-green-50 text-green-700 border-green-200' 
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}>
                      {emp.status}
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* Concrete Features Section (LIGHT) */}
      <div className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-slate-400 font-extrabold uppercase tracking-widest text-xs">FEATURES IN DEPTH</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 mt-2">Manage crew logistics in one place.</h2>
            <p className="text-xl text-slate-450 font-medium font-sans">Say goodbye to outdated spreadsheets, paper certification cards, and manual union pay scale overrides.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-xl border border-slate-900 shadow-sm">
              <Database className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Credential Registry</h3>
              <p className="text-slate-400 leading-relaxed font-semibold text-sm">Keep track of safety training, OSHA logs, medical clearances, and NCCCO licenses in a highly secure, compliant environment.</p>
            </div>
            <div className="bg-black p-8 rounded-xl border border-slate-900 shadow-sm">
              <FileText className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Union CBA Tracking</h3>
              <p className="text-slate-400 leading-relaxed font-semibold text-sm">Execute local Union dispatch agreements and site access forms directly within the platform, cleanly matching dispatch orders to active roster rates.</p>
            </div>
            <div className="bg-black p-8 rounded-xl border border-slate-900 shadow-sm">
              <Users className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Field Hours Logging</h3>
              <p className="text-slate-400 leading-relaxed font-semibold text-sm">Allow supervisors to log crew shift hours, overtime multipliers, and per diems directly on-site, syncing instantly to payroll runs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="bg-black py-24 px-6 overflow-hidden relative mt-auto border-t border-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-8">
            Ready to mobilize your next project?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Partner with MyCrestMind to secure certified manpower, automated union compliance, and seamless crew logistics for your next turnaround or build.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg hover:from-cyan-400 hover:to-violet-400 text-white font-bold px-8 py-4 rounded transition-colors text-lg shadow-lg cursor-pointer">
              Request Demo Crew
            </Link>
            <Link href="/login" className="w-full sm:w-auto bg-black/10 hover:bg-black/20 text-white font-bold px-8 py-4 rounded transition-colors text-lg backdrop-blur-md border border-slate-850 cursor-pointer">
              Log in
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
