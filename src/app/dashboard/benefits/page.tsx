import { HeartPulse, Shield, Award, ArrowUpRight, Plus } from "lucide-react";
import { ActionButton } from "@/components/ActionButton";

export default function BenefitsPage() {
  const benefits = [
    {
      icon: <HeartPulse className="w-6 h-6 text-cyan-400" />,
      title: "Union Health & Welfare",
      provider: "IUOE Trust Fund / BlueCross",
      enrolled: 684,
      color: "bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg/5 border-cyan-500/20"
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: "Boots & PPE Allowance",
      provider: "Red Wing Gear / MyCrestMind",
      enrolled: 984,
      color: "bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg/5 border-cyan-500/20"
    },
    {
      icon: <Award className="w-6 h-6 text-cyan-400" />,
      title: "Union Pension Fund",
      provider: "Ironworkers Local 15 Trust",
      enrolled: 230,
      color: "bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg/5 border-cyan-500/20"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-white font-logo">Crew Benefits & Per Diems</h1>
          <p className="text-slate-500 mt-1 font-semibold text-sm">Manage union benefit allocations, safety incentives, and gear credits.</p>
        </div>
        <ActionButton 
          icon={<Plus className="w-4 h-4" />} 
          label="Add Union Perk" 
          loadingLabel="Preparing form..."
          successMessage="Ready to add a new benefit."
          className="bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg hover:from-cyan-400 hover:to-violet-400 text-white shadow-sm font-bold text-xs cursor-pointer px-4 py-2.5 rounded"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, i) => (
          <div key={i} className={`p-6 rounded-xl border bg-slate-950 ${benefit.color} flex flex-col shadow-sm`}>
            <div className="w-12 h-12 rounded bg-black flex items-center justify-center mb-6 border border-slate-900">
              {benefit.icon}
            </div>
            <h3 className="text-lg font-bold text-white font-logo">{benefit.title}</h3>
            <p className="text-xs text-slate-500 font-semibold mt-1">Managed via {benefit.provider}</p>
            
            <div className="mt-auto pt-6 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 bg-slate-900 border border-slate-900 px-2 py-0.5 rounded">
                {benefit.enrolled} Dispatched
              </span>
              <button className="text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
