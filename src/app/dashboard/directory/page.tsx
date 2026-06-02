import { Search, Mail, Shield } from "lucide-react";

const employees = [
  { id: 1, name: "Sarah Chen", role: "Rigging Supervisor", dept: "Rigging", email: "sarah.c@mycrestmind-crews.com", avatar: "SC", color: "bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg/10 text-cyan-400" },
  { id: 2, name: "Michael Rodriguez", role: "Heavy Crane Operator", dept: "Heavy Crane", email: "michael.r@mycrestmind-crews.com", avatar: "MR", color: "bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg/10 text-cyan-400" },
  { id: 3, name: "Vilian Garner", role: "Pressure Welder (API)", dept: "Welding", email: "vilian.g@mycrestmind-crews.com", avatar: "VG", color: "bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg/10 text-cyan-400" },
  { id: 4, name: "John Smity", role: "Crane Operator", dept: "Heavy Crane", email: "john.s@mycrestmind-crews.com", avatar: "JS", color: "bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg/10 text-cyan-400" },
  { id: 5, name: "Alex Thompson", role: "Rigging Lead", dept: "Rigging", email: "alex.t@mycrestmind-crews.com", avatar: "AT", color: "bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg/10 text-cyan-400" },
  { id: 6, name: "Sanny Honkson", role: "Structural Welder", dept: "Welding", email: "sanny.h@mycrestmind-crews.com", avatar: "SH", color: "bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg/10 text-cyan-400" },
  { id: 7, name: "Emily Watson", role: "HSE Inspector", dept: "Safety", email: "emily.w@mycrestmind-crews.com", avatar: "EW", color: "bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg/10 text-cyan-400" },
  { id: 8, name: "David Kim", role: "Lattice Boom Specialist", dept: "Heavy Crane", email: "david.k@mycrestmind-crews.com", avatar: "DK", color: "bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg/10 text-cyan-400" },
];

export default function DirectoryPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white font-logo">Dispatch Roster</h1>
          <p className="text-slate-500 font-semibold text-sm">View and manage all active, standby, and pending crew operators.</p>
        </div>
        <button className="bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg hover:from-cyan-400 hover:to-violet-400 text-white font-bold px-4 py-2.5 rounded transition-colors text-sm cursor-pointer shadow-sm shadow-[#ea580c]/15">
          + Register Operator
        </button>
      </div>

      <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search operators by name or certification..." 
            className="w-full bg-black border border-slate-900 text-slate-200 placeholder:text-slate-400 font-semibold rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-[#ea580c] text-sm"
          />
        </div>
        <div className="flex gap-4">
          <select className="bg-black border border-slate-900 text-slate-400 font-bold rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-[#ea580c] text-xs">
            <option>Trade Specialty: All</option>
            <option>Rigging</option>
            <option>Heavy Crane</option>
            <option>Welding</option>
            <option>Safety</option>
          </select>
          <select className="bg-black border border-slate-900 text-slate-400 font-bold rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-[#ea580c] text-xs">
            <option>Site Access: All</option>
            <option>Gulf Coast Terminal</option>
            <option>Delaware Basin</option>
            <option>Offshore Block-5</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {employees.map((emp) => (
          <div key={emp.id} className="bg-slate-950 rounded-xl border border-slate-900 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow relative">
            <div className="absolute top-4 right-4 bg-green-50 text-green-700 border border-green-200 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
              <Shield className="w-3 h-3" /> HSE Approved
            </div>
            
            <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-4 ${emp.color}`}>
              {emp.avatar}
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{emp.name}</h3>
            <div className="text-xs font-bold text-cyan-400 mb-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg/5 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">{emp.role}</div>
            
            <div className="w-full space-y-3 text-xs">
              <div className="flex justify-between items-center py-2 border-t border-slate-900">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Trade Group</span>
                <span className="font-bold text-slate-200">{emp.dept}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-t border-slate-900">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Logistics Mail</span>
                <a href={`mailto:${emp.email}`} className="text-cyan-400 hover:text-[#c2410c] font-bold flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" /> Send
                </a>
              </div>
            </div>
            
            <button className="mt-6 w-full py-2 border border-slate-900 hover:border-slate-350 text-slate-400 rounded text-xs font-bold hover:bg-black transition-colors cursor-pointer">
              View Compliance Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
