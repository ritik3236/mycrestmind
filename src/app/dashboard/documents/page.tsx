import { FileText, Folder, MoreVertical, Upload } from "lucide-react";
import { ActionButton } from "@/components/ActionButton";

export default function DocumentsPage() {
  const folders = ["OSHA-30 Cards", "NCCCO Licenses", "Union CBA Pacts", "Drug Panel Reports"];
  const files = [
    { name: "Baytown_Safety_Audit_Q2.pdf", date: "May 12, 2026", size: "4.2 MB" },
    { name: "Ironworkers_CBA_Scale_2026.pdf", date: "Jan 5, 2026", size: "2.1 MB" },
    { name: "OSHA_Incident_Zero_Log.pdf", date: "Mar 18, 2026", size: "1.8 MB" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-white font-logo">Compliance Vault</h1>
          <p className="text-slate-500 mt-1 font-semibold text-sm">Centralized storage for HSE safety certificates, Union labor CBAs, and site access badges.</p>
        </div>
        <ActionButton 
          icon={<Upload className="w-4 h-4" />} 
          label="Upload Credential" 
          loadingLabel="Uploading..."
          successMessage="Credential document uploaded."
          className="bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg hover:from-cyan-400 hover:to-violet-400 text-white shadow-sm font-bold text-xs cursor-pointer px-4 py-2.5 rounded"
        />
      </div>

      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Credential Folders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {folders.map((folder, i) => (
          <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-900 shadow-sm flex items-center gap-3 cursor-pointer hover:border-[#ea580c] transition-colors">
            <Folder className="w-6 h-6 text-cyan-400 fill-[#ea580c]/5" />
            <span className="font-bold text-xs text-slate-200">{folder}</span>
          </div>
        ))}
      </div>

      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-10">Recent Files</h2>
      <div className="bg-slate-950 border border-slate-900 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs border-collapse">
          <thead className="bg-black text-slate-500 text-xs font-bold border-b border-slate-900">
            <tr>
              <th className="px-6 py-3 font-bold uppercase tracking-wider">File Name</th>
              <th className="px-6 py-3 font-bold uppercase tracking-wider">Date Modified</th>
              <th className="px-6 py-3 font-bold uppercase tracking-wider">Size</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="text-xs font-semibold text-slate-400 divide-y divide-slate-100">
            {files.map((file, i) => (
              <tr key={i} className="hover:bg-black/50 transition-colors cursor-pointer">
                <td className="px-6 py-4 font-bold text-white flex items-center gap-3">
                  <FileText className="w-5 h-5 text-slate-400" />
                  {file.name}
                </td>
                <td className="px-6 py-4 text-slate-500 font-semibold">{file.date}</td>
                <td className="px-6 py-4 text-slate-500 font-semibold">{file.size}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-slate-400 cursor-pointer">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
