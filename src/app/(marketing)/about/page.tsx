import Link from "next/link";
import { ArrowRight, Compass, Shield, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050507] text-slate-200">
      {/* Hero Section (LIGHT) */}
      <div className="pt-44 pb-32 px-6 text-center border-b border-slate-900 relative overflow-hidden">
        {/* Technical grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a04_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-cyan-400 font-extrabold tracking-widest text-xs uppercase mb-6 bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg/5 px-3 py-1 w-fit mx-auto rounded-full border border-[#ea580c]/15">Our Mission</div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight">
            We believe industrial crewing shouldn't be so hard.
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
            MyCrestMind was founded out of sheer frustration with manual staffing in the energy and heavy infrastructure sectors. We realized that project managers were using fragmented spreadsheets, legacy phone lines, and manual credential checks just to mobilize crews. By automating dispatch compliance and crewing logistics, we ensure projects start on-time and with 100% safety clearance.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg text-white px-8 py-4 rounded font-bold hover:from-cyan-400 hover:to-violet-400 transition-colors cursor-pointer shadow-lg shadow-cyan-500/10">
              Request Demo Crew <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 bg-black text-slate-800 px-8 py-4 rounded font-bold hover:bg-black transition-colors border border-slate-900 shadow-sm cursor-pointer">
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Concrete Features / Values Section (LIGHT) */}
      <div className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-slate-400 font-extrabold uppercase tracking-widest text-xs">GUIDING PRINCIPLES</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 mt-2">Our Core Values</h2>
            <p className="text-xl text-slate-450 font-medium">The standards that guide every dispatcher, automation trigger, and site audit we run.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-xl border border-slate-900 shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Rigorous Safety</h3>
              <p className="text-slate-400 leading-relaxed font-semibold text-sm">Safety is not a feature; it is our foundation. We automate live OSHA and NCCCO verification so only qualified personnel ever set foot on site.</p>
            </div>
            <div className="bg-black p-8 rounded-xl border border-slate-900 shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Operator First</h3>
              <p className="text-slate-400 leading-relaxed font-semibold text-sm">Behind every dispatcher log is a skilled worker in the field. We build software that respects their time, handles their union pay scales correctly, and pays them on time.</p>
            </div>
            <div className="bg-black p-8 rounded-xl border border-slate-900 shadow-sm hover:shadow-md transition-shadow">
              <Compass className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Field Driven</h3>
              <p className="text-slate-400 leading-relaxed font-semibold text-sm">Built for builders. We design our tools to operate cleanly in harsh field environments, ensuring fast mobile inputs and quick SMS dispatch alerts.</p>
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
