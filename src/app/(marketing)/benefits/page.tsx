import Link from "next/link";
import { ArrowRight, Shield, Award, Heart } from "lucide-react";

export default function BenefitsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050507] text-slate-200">
      {/* Hero Section (LIGHT) */}
      <div className="pt-44 pb-32 px-6 border-b border-slate-900 relative overflow-hidden">
        {/* Technical grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a04_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="text-cyan-400 font-extrabold tracking-widest text-xs uppercase mb-6 flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg/5 px-3 py-1 w-fit rounded-full border border-[#ea580c]/15">
              <Shield className="w-3.5 h-3.5" /> Field & Union Benefits
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Union-compliant field benefits, automated.
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              Provide your crew with top-tier health insurance, safety bonuses, and specialized gear allowances. Seamlessly integrated with hours logged in the field and CBA union scales.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg text-white px-8 py-4 rounded font-bold hover:from-cyan-400 hover:to-violet-400 transition-colors cursor-pointer shadow-lg shadow-cyan-500/10">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-black p-8 rounded-xl border border-slate-900 shadow-sm relative text-black">
             <div className="bg-black rounded-lg p-6 border border-slate-900 shadow-sm">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="font-extrabold text-lg text-white mb-1 font-logo">Field Hazard Health Plan</div>
                    <div className="text-green-700 border border-green-200 bg-green-50 font-bold text-xs px-2 py-0.5 rounded inline-block">CBA Active</div>
                  </div>
                  <Heart className="w-7 h-7 text-cyan-400 fill-cyan-400/10" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Coverage Type</span>
                    <span className="font-bold text-slate-800">Medical + Dental + Hazard Ins</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Family Inclusion</span>
                    <span className="font-bold text-slate-800">Spouse & Dependents</span>
                  </div>
                  <div className="h-px bg-slate-100 w-full my-2"></div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Employer Contribution</span>
                    <span className="font-bold text-green-700">100% Union Mandated</span>
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
            <span className="text-slate-400 font-extrabold uppercase tracking-widest text-xs">BENEFITS TAILORED TO WORKERS</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 mt-2">Build a culture of safety & support.</h2>
            <p className="text-xl text-slate-450 font-medium font-sans">Retain skilled operators by offering premium, union-compliant benefits that protect workers in high-risk environments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-xl border border-slate-900 shadow-sm">
              <Shield className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Union Health Plans</h3>
              <p className="text-slate-400 leading-relaxed font-semibold text-sm">Provide tier-1 medical, dental, and vision insurance customized to meet local collective bargaining agreement (CBA) standards.</p>
            </div>
            <div className="bg-black p-8 rounded-xl border border-slate-900 shadow-sm">
              <Award className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Safety & Boot Stipends</h3>
              <p className="text-slate-400 leading-relaxed font-semibold text-sm">Automate monthly safety incentives and PPE credits. Operators can claim boot allowances and gear upgrades directly in their MyCrestMind portal.</p>
            </div>
            <div className="bg-black p-8 rounded-xl border border-slate-900 shadow-sm">
              <Heart className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Pension Matching</h3>
              <p className="text-slate-400 leading-relaxed font-semibold text-sm">Manage retirement plans, annuity contributions, and international pension schemes with automated payroll deductions synced directly with union guidelines.</p>
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
