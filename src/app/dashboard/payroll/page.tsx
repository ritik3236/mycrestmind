import { DollarSign, Download, Clock, CheckCircle } from "lucide-react";
import { ActionButton } from "@/components/ActionButton";

export default function PayrollPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-white font-logo">Union CBA Payroll</h1>
          <p className="text-slate-500 mt-1 font-semibold text-sm">Manage trade classifications, union benefit fringe calculations, and per diems.</p>
        </div>
        <ActionButton 
          icon={<DollarSign className="w-4 h-4" />} 
          label="Process Union Batch" 
          successMessage="Union payroll processed! CBAs synced."
          className="bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg hover:from-cyan-400 hover:to-violet-400 text-white shadow-sm font-bold text-xs cursor-pointer px-4 py-2.5 rounded"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-950 p-6 rounded-xl border border-slate-900 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Next Union Dispatch Payday</p>
          <p className="text-2xl font-black text-white font-logo">June 15, 2026</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded w-fit font-bold">
            <CheckCircle className="w-3.5 h-3.5" /> CBAs Cleared
          </div>
        </div>
        <div className="bg-slate-950 p-6 rounded-xl border border-slate-900 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Estimated Total Run</p>
          <p className="text-2xl font-black text-white font-logo">$412,500.00</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 font-semibold">
            <Clock className="w-3.5 h-3.5 text-cyan-400" /> Syncing 984 active operators
          </div>
        </div>
        <div className="bg-slate-950 p-6 rounded-xl border border-slate-900 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Union Fringe Deductions</p>
          <p className="text-2xl font-black text-white font-logo">$90,750.00</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 font-semibold">
            <Download className="w-3.5 h-3.5 text-cyan-400" /> Auto-filed to IUOE & Ironworkers locals
          </div>
        </div>
      </div>

      <div className="bg-slate-950 border border-slate-900 rounded-xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-900">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Recent Payroll Runs</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-black text-slate-500 text-xs font-bold border-b border-slate-900">
              <tr>
                <th className="px-6 py-3 uppercase tracking-wider font-bold">Pay Period</th>
                <th className="px-6 py-3 uppercase tracking-wider font-bold">Pay Date</th>
                <th className="px-6 py-3 uppercase tracking-wider font-bold">Total Amount</th>
                <th className="px-6 py-3 uppercase tracking-wider font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="text-xs font-semibold text-slate-400 divide-y divide-slate-100">
              {[1, 2, 3].map((i) => (
                <tr key={i} className="hover:bg-black/50 transition-colors">
                  <td className="px-6 py-4 text-white font-extrabold text-sm">May 16 - May 31</td>
                  <td className="px-6 py-4 text-slate-500 font-semibold">May 31, 2026</td>
                  <td className="px-6 py-4 text-white font-black font-logo">$410,200.00</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-0.5 rounded border border-green-200 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider">
                      Paid & Cleared
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
