import Link from "next/link";
import { ArrowRight, Globe, Shield, Zap, CheckCircle2 } from "lucide-react";

export default function GlobalPayrollPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050507] text-slate-200">
      {/* Hero Section (LIGHT) */}
      <div className="pt-44 pb-32 px-6 border-b border-slate-900 relative overflow-hidden">
        {/* Technical grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a04_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="text-cyan-400 font-extrabold tracking-widest text-xs uppercase mb-6 flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg/5 px-3 py-1 w-fit rounded-full border border-[#ea580c]/15">
              <Shield className="w-3.5 h-3.5" /> Operations Payroll
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Automate union payroll and per diems.
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              Stop wrestling with complex collective bargaining agreements, shift differentials, and multiple union local reports. MyCrestMind processes heavy operations payroll in a single consolidated run.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg text-white px-8 py-4 rounded font-bold hover:from-cyan-400 hover:to-violet-400 transition-colors cursor-pointer shadow-lg shadow-cyan-500/10">
              Request Crew Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-black p-8 rounded-xl border border-slate-900 shadow-sm relative text-black">
             <div className="bg-black p-6 rounded-lg shadow-sm mb-4 border border-slate-900">
                <div className="flex justify-between items-center mb-4">
                   <div className="font-extrabold text-slate-400 text-xs uppercase tracking-wider">Active Crew Payroll Run</div>
                   <div className="text-green-700 border border-green-200 font-bold bg-green-50 px-3 py-1 rounded-full text-xs">Approved</div>
                </div>
                <div className="text-5xl font-black mb-2 text-white font-logo">$420,500</div>
                <div className="text-xs text-slate-500 font-bold">Processing union fringe & per diems...</div>
             </div>
             <div className="space-y-3">
                {[
                  { union: "IUOE Local 450 (Texas)", amount: "$280k", sub: "Operators & Riggers" },
                  { union: "Ironworkers Local 15 (NY)", amount: "$85k", sub: "Structural Welders" },
                  { union: "Non-Union Standby Crew", amount: "$55.5k", sub: "HSE & Support" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center bg-black p-4 rounded-lg border border-slate-900">
                    <div className="flex items-center gap-3 font-bold text-white text-sm">
                      <Globe className="w-4 h-4 text-cyan-400" /> 
                      <div className="flex flex-col">
                        <span>{item.union}</span>
                        <span className="text-[10px] text-slate-400 font-medium">{item.sub}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-extrabold text-white text-sm">{item.amount}</span>
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
            <span className="text-slate-400 font-extrabold uppercase tracking-widest text-xs">PAYROLL IN DEPTH</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 mt-2">Built for heavy operations.</h2>
            <p className="text-xl text-slate-450 font-medium font-sans">Everything you need to pay your project crews on time, compliantly, without touching a single spreadsheet.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-black p-8 rounded-xl border border-slate-900 shadow-sm">
              <Zap className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">CBA Scale Automation</h3>
              <p className="text-slate-400 leading-relaxed font-semibold text-sm">Natively handles complex local CBA union rules, travel allowances, double-time, and pension contributions based on hours logged in the field.</p>
            </div>
            <div className="bg-black p-8 rounded-xl border border-slate-900 shadow-sm">
              <Shield className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Automated Tax & Fringe</h3>
              <p className="text-slate-400 leading-relaxed font-semibold text-sm">Calculates state, federal, and local withholding taxes alongside union benefit allocations so you stay 100% audit-proof.</p>
            </div>
            <div className="bg-black p-8 rounded-xl border border-slate-900 shadow-sm">
              <CheckCircle2 className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Field Payslips</h3>
              <p className="text-slate-400 leading-relaxed font-semibold text-sm">Disburse funds directly via direct deposit or physical check cards, sending workers detailed itemized payslips automatically.</p>
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
