import Link from "next/link";
import { ArrowRight, Wrench, Shield, Box } from "lucide-react";

export default function ITDevicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050507] text-slate-200">
      {/* Hero Section (LIGHT) */}
      <div className="pt-44 pb-32 px-6 border-b border-slate-900 relative overflow-hidden">
        {/* Technical grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a04_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="text-cyan-400 font-extrabold tracking-widest text-xs uppercase mb-6 flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg/5 px-3 py-1 w-fit rounded-full border border-[#ea580c]/15">
              <Wrench className="w-3.5 h-3.5" /> Logistics & PPE
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Automated safety gear and telematics logistics.
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              The moment a crew member is dispatched, MyCrestMind automatically coordinates safety gear allocation, ships FR uniforms to site terminals, and pre-registers cellular radio hardware.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg text-white px-8 py-4 rounded font-bold hover:from-cyan-400 hover:to-violet-400 transition-colors cursor-pointer shadow-lg shadow-cyan-500/10">
              Request Demo Crew <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-black p-8 rounded-xl border border-slate-900 shadow-sm relative text-black">
             <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Logistics Onboarding Flow</div>
             <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#ea580c] before:to-transparent">
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                 <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg text-white shadow shrink-0 z-10 font-bold">1</div>
                 <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg bg-black border border-slate-900 shadow-sm ml-4 md:ml-0 md:mr-4">
                   <div className="font-bold text-xs text-white">Gear Allocated</div>
                   <div className="text-[10px] text-slate-500 font-semibold">FRC Uniforms & steel-toes cataloged</div>
                 </div>
               </div>
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                 <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg text-white shadow shrink-0 z-10 font-bold">2</div>
                 <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg bg-black border border-slate-900 shadow-sm ml-4 md:ml-0 md:mr-4">
                   <div className="font-bold text-xs text-white">PPE Dispatched</div>
                   <div className="text-[10px] text-slate-500 font-semibold">Harness & telemetry tools shipped to site</div>
                 </div>
               </div>
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                 <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 bg-slate-250 text-slate-500 shadow shrink-0 z-10 font-bold">3</div>
                 <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg bg-black border border-slate-900 shadow-sm ml-4 md:ml-0 md:mr-4 opacity-50">
                   <div className="font-bold text-xs text-white">Device Sync</div>
                   <div className="text-[10px] text-slate-500 font-semibold">Radio activation pending supervisor login...</div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Concrete Features Section (LIGHT) */}
      <div className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-slate-400 font-extrabold uppercase tracking-widest text-xs">LOGISTICS HIGHLIGHTS</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 mt-2">Simplify field gear management.</h2>
            <p className="text-xl text-slate-450 font-medium font-sans">Stop managing uniform sizes on paper spreadsheets. Automate equipment provisioning globally.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-xl border border-slate-900 shadow-sm">
              <Box className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Field Equipment</h3>
              <p className="text-slate-400 leading-relaxed font-semibold text-sm">Order, track, and manage safety gear, high-vis uniforms, and customized tool kits across multiple project warehouses effortlessly.</p>
            </div>
            <div className="bg-black p-8 rounded-xl border border-slate-900 shadow-sm">
              <Shield className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Asset Tracking</h3>
              <p className="text-slate-400 leading-relaxed font-semibold text-sm">Pre-verify cell-equipped radios, telematics tablets, and field meters using dynamic RFID tag numbers mapped to workers.</p>
            </div>
            <div className="bg-black p-8 rounded-xl border border-slate-900 shadow-sm">
              <Wrench className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Access Control</h3>
              <p className="text-slate-400 leading-relaxed font-semibold text-sm">Instantly register workers into project safety databases, refinery-entry gate logs, and radio channels based on active dispatch status.</p>
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
