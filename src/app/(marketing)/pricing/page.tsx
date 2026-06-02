import Link from "next/link";
import { Check, X, Shield, Info } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050507] text-slate-100 font-sans">
      {/* Hero Section */}
      <div className="pt-44 pb-32 px-6 text-center border-b border-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff02_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <div className="text-cyan-400 font-extrabold tracking-widest text-xs uppercase mb-6 bg-cyan-500/5 px-3 py-1 w-fit mx-auto rounded-full border border-cyan-500/20">Pricing Matrix</div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight font-logo">
            Sleek, Scalable Plans
          </h1>
          <p className="text-base text-slate-450 max-w-2xl mx-auto font-medium">
            Deploy gateway telemetry and compliance triggers. Pay only for what you deploy, with straightforward monthly developer subscription tiers.
          </p>
        </div>
      </div>

      {/* Comparison Grid Matrix */}
      <div className="max-w-5xl mx-auto px-6 py-20 w-full relative z-10 flex-1">
        <div className="bg-slate-950/90 rounded-2xl border border-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-md">
          
          {/* Header Row */}
          <div className="grid grid-cols-4 bg-black/90 text-white p-6 items-stretch border-b border-slate-900 text-center sm:text-left">
            <div className="col-span-4 sm:col-span-1 flex flex-col justify-center gap-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">Telemetry Tiers</span>
              <span className="text-lg font-extrabold text-cyan-400 font-logo">Comparison Matrix</span>
            </div>
            
            {/* Tier 1 */}
            <div className="col-span-4 sm:col-span-1 p-4 border-t sm:border-t-0 sm:border-l border-slate-900 text-center flex flex-col justify-between gap-3">
              <div>
                <h3 className="font-extrabold text-xs text-slate-300 font-logo">Compliance Hub</h3>
                <span className="text-2xl font-black text-cyan-400 font-logo">$6<span className="text-[10px] text-slate-500 font-bold">/mo</span></span>
              </div>
              <Link href="/login" className="bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold py-2 rounded-lg text-[10px] uppercase tracking-wider block transition-colors border border-slate-850">
                Start Trial
              </Link>
            </div>

            {/* Tier 2 */}
            <div className="col-span-4 sm:col-span-1 p-4 border-t sm:border-t-0 sm:border-l border-slate-900 text-center flex flex-col justify-between gap-3 relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-violet-500 text-black text-[8px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">Most Popular</div>
              <div>
                <h3 className="font-extrabold text-xs text-slate-350 font-logo">Operations Suite</h3>
                <span className="text-2xl font-black text-cyan-400 font-logo">$39<span className="text-[10px] text-slate-500 font-bold">/mo</span></span>
              </div>
              <Link href="/login" className="bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-bold py-2 rounded-lg text-[10px] uppercase tracking-wider block transition-all shadow-md">
                Get Started
              </Link>
            </div>

            {/* Tier 3 */}
            <div className="col-span-4 sm:col-span-1 p-4 border-t sm:border-t-0 sm:border-l border-slate-900 text-center flex flex-col justify-between gap-3">
              <div>
                <h3 className="font-extrabold text-xs text-slate-300 font-logo">Enterprise Gateway</h3>
                <span className="text-xl font-black text-cyan-400 font-logo">Custom</span>
              </div>
              <Link href="/contact" className="bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold py-2 rounded-lg text-[10px] uppercase tracking-wider block transition-colors border border-slate-850">
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Matrix Rows */}
          <div className="divide-y divide-slate-900/60 font-semibold text-xs text-slate-450">
            {[
              { feat: "Operator Roster & Directory", desc: "View and filter all dispatched and standby operators.", t1: true, t2: true, t3: true },
              { feat: "Live Credential API Audit", desc: "Verifies NCCCO crane logs and OSHA-30 cards in real-time.", t1: true, t2: true, t3: true },
              { feat: "Union CBA Payroll & Fringe Sync", desc: "Calculates overtime, CBA fringe pension scales, and per diems.", t1: false, t2: true, t3: true },
              { feat: "SMS Dispatch & Rotation Swaps", desc: "Clear, coordinate, and assign hitch rosters via mobile SMS.", t1: false, t2: true, t3: true },
              { feat: "Safety Gear & PPE Logistics", desc: "Automatic shipment of custom FR uniforms and gear to terminal.", t1: false, t2: false, t3: true },
              { feat: "Dedicated HSE dispatcher", desc: "Dedicated safety manager assigned to audit site gates directly.", t1: false, t2: false, t3: true }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-4 p-5 hover:bg-slate-900/40 items-center transition-colors">
                <div className="col-span-4 sm:col-span-1 space-y-1 pr-4">
                  <h4 className="font-bold text-slate-200 flex items-center gap-1.5">{row.feat}</h4>
                  <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{row.desc}</p>
                </div>
                
                {/* Tier 1 */}
                <div className="col-span-4 sm:col-span-1 text-center py-2 sm:py-0 border-t sm:border-t-0 border-slate-900 mt-2 sm:mt-0 flex justify-center">
                  <span className="sm:hidden text-slate-500 mr-2">Compliance Hub:</span>
                  {row.t1 ? <Check className="w-5 h-5 text-cyan-400 shrink-0" /> : <X className="w-4 h-4 text-slate-700 shrink-0" />}
                </div>

                {/* Tier 2 */}
                <div className="col-span-4 sm:col-span-1 text-center py-2 sm:py-0 border-t sm:border-t-0 border-slate-900 mt-2 sm:mt-0 flex justify-center bg-slate-900/10">
                  <span className="sm:hidden text-slate-500 mr-2">Operations Suite:</span>
                  {row.t2 ? <Check className="w-5 h-5 text-cyan-400 shrink-0" /> : <X className="w-4 h-4 text-slate-700 shrink-0" />}
                </div>

                {/* Tier 3 */}
                <div className="col-span-4 sm:col-span-1 text-center py-2 sm:py-0 border-t sm:border-t-0 border-slate-900 mt-2 sm:mt-0 flex justify-center">
                  <span className="sm:hidden text-slate-500 mr-2">Enterprise:</span>
                  {row.t3 ? <Check className="w-5 h-5 text-cyan-400 shrink-0" /> : <X className="w-4 h-4 text-slate-700 shrink-0" />}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Final CTA Section */}
      <section className="bg-black py-24 px-6 overflow-hidden relative mt-auto border-t border-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-logo">
            Ready to mobilize your next project?
          </h2>
          <p className="text-base text-slate-450 max-w-2xl mx-auto leading-relaxed">
            Partner with MyCrestMind to secure certified manpower, automated union compliance, and seamless crew logistics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact" className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold px-8 py-4 rounded-lg shadow-lg cursor-pointer">
              Request Demo Crew
            </Link>
            <Link href="/login" className="w-full sm:w-auto bg-slate-900/60 border border-slate-800 text-slate-350 font-bold px-8 py-4 rounded-lg backdrop-blur-md cursor-pointer">
              Log in
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
