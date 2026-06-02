import { Plane, Check, X, Settings } from "lucide-react";
import { ActionButton } from "@/components/ActionButton";

export default function TimeOffPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-white font-logo">Shift Rotations & Hitches</h1>
          <p className="text-slate-500 mt-1 font-semibold text-sm">Review and approve crew shift rotation requests, hitch swaps, and standby coverages.</p>
        </div>
        <ActionButton 
          icon={<Settings className="w-4 h-4" />} 
          label="Hitch Templates" 
          loadingLabel="Loading settings..."
          successMessage="Hitch template settings loaded."
          className="bg-slate-950 hover:bg-black text-white border border-slate-900 shadow-sm font-bold text-xs cursor-pointer px-4 py-2.5 rounded"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
          <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Hitch Swaps Pending</p>
          <p className="text-3xl font-black text-amber-900 font-logo">4</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <p className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-1">Offshore Rotation (Hitch B)</p>
          <p className="text-3xl font-black text-blue-900 font-logo">265 <span className="text-sm font-normal text-blue-500">active</span></p>
        </div>
        <div className="bg-black p-6 rounded-xl border border-slate-900">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Next Site Mobilization</p>
          <p className="text-base font-extrabold text-white mt-1">Gulf Coast Refinery Unit 4</p>
          <p className="text-[10px] text-slate-400 font-bold mt-1">June 12, 2026</p>
        </div>
      </div>

      <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-8 mb-4">Pending Roster Swaps</h2>
      <div className="space-y-4">
        {[
          { name: "Sarah Jenkins", role: "Rigging Supervisor", dates: "Jun 10 - Jun 24", type: "Hitch C Swap", days: 14 },
          { name: "Michael Chen", role: "Crane Operator", dates: "May 22", type: "Standby Sick Cover", days: 1 },
        ].map((req, i) => (
          <div key={i} className="bg-slate-950 p-5 rounded-xl border border-slate-900 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg/5 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <p className="font-extrabold text-white text-sm">{req.name}</p>
                <p className="text-xs text-slate-500 font-semibold">{req.role}</p>
              </div>
            </div>
            
            <div className="text-center hidden md:block">
              <p className="text-sm font-bold text-white">{req.dates}</p>
              <p className="text-xs text-slate-500 font-semibold">{req.days} day(s) • {req.type}</p>
            </div>

            <div className="flex gap-2">
              <button className="p-2 rounded border border-slate-900 text-slate-400 hover:text-red-650 hover:bg-red-50 hover:border-red-200 transition-colors cursor-pointer">
                <X className="w-5 h-5" />
              </button>
              <button className="p-2 rounded bg-slate-900 text-white hover:bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg transition-colors cursor-pointer">
                <Check className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
