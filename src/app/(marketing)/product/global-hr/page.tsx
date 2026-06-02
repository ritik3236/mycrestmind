import Link from "next/link";
import { CheckCircle2, Globe, FileCheck, CalendarClock } from "lucide-react";

export default function GlobalHRPage() {
  return (
    <div className="bg-[#050507] text-slate-200">
      {/* Hero Section */}
      <section className="pt-44 pb-20 px-4 border-b border-slate-900 relative overflow-hidden">
        {/* Technical grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a04_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg/5 text-cyan-400 border border-[#ea580c]/15 text-xs font-bold uppercase tracking-wider mb-6">
            <Globe className="w-4 h-4" /> Compliance Hub Product
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            The single source of truth for field compliance.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Verify, schedule, and payroll active crane operators, riggers, and field technicians in one unified dashboard.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg hover:from-cyan-400 hover:to-violet-400 text-white font-bold px-8 py-4 rounded transition-colors text-lg shadow-lg shadow-cyan-500/10 cursor-pointer">
              Get a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Feature 1 */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg/5 text-cyan-400 border border-[#ea580c]/15 flex items-center justify-center mb-6">
                <FileCheck className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-extrabold text-white leading-tight">Compliance-cleared labor agreements.</h2>
              <p className="text-lg text-slate-450 font-medium">
                MyCrestMind automatically matches and generates compliant labor contracts tailored to specific unions, crane operator requirements, and local safety rules.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3 text-slate-750 font-semibold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" /> Syncs automatically when local labor agreements update
                </li>
                <li className="flex items-center gap-3 text-slate-750 font-semibold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" /> e-signatures built-in for rapid mobilization
                </li>
                <li className="flex items-center gap-3 text-slate-750 font-semibold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" /> Secure digital safety document storage
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg/5 blur-3xl rounded-full" />
              <div className="bg-black rounded-xl shadow-lg border border-slate-900 p-6 relative">
                <div className="flex items-center justify-between border-b border-slate-900 pb-4 mb-4">
                  <div className="font-extrabold text-base text-white font-logo">Union dispatch agreement</div>
                  <div className="text-green-700 border border-green-200 bg-green-50 text-xs px-2.5 py-0.5 rounded font-bold uppercase tracking-wider text-[10px]">CBA Cleared: Texas IUOE</div>
                </div>
                <div className="space-y-3 opacity-60">
                  <div className="h-3 bg-slate-200 rounded w-full animate-pulse" />
                  <div className="h-3 bg-slate-200 rounded w-5/6 animate-pulse" />
                  <div className="h-3 bg-slate-200 rounded w-4/6" />
                  <div className="h-3 bg-slate-200 rounded w-full" />
                  <div className="h-3 bg-slate-200 rounded w-3/4" />
                </div>
                <div className="mt-8 p-4 bg-black rounded-lg border border-slate-900">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg text-white rounded-full flex items-center justify-center font-bold">JD</div>
                    <div>
                      <div className="text-xs font-bold text-white">Signed by John Doe (Rigging Supervisor)</div>
                      <div className="text-[10px] text-slate-500 font-semibold">Today at 10:42 AM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="py-24 px-4 bg-black border-y border-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="flex-1 w-full relative">
              <div className="bg-black rounded-xl shadow-lg border border-slate-900 p-6 relative z-10">
                <div className="grid grid-cols-7 gap-2 mb-4 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 31 }).map((_, i) => (
                    <div key={i} className={`h-10 rounded flex items-center justify-center text-xs font-bold ${i > 11 && i < 26 ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg/5 text-cyan-400 border border-[#ea580c]/25' : 'bg-black border border-slate-900 text-slate-400'}`}>
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg/5 text-cyan-400 border border-[#ea580c]/15 flex items-center justify-center mb-6">
                <CalendarClock className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-extrabold text-white leading-tight">Shift Rotations & hitch schedules.</h2>
              <p className="text-lg text-slate-450 font-medium">
                Manage 2-and-2 or custom shift hitches for crews of any size. MyCrestMind automatically calculates required break periods and checks backup operator availability for rotative slots.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3 text-slate-750 font-semibold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" /> Automatic rotation calendars synced with field logs
                </li>
                <li className="flex items-center gap-3 text-slate-750 font-semibold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" /> Custom hitch duration templates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-white font-logo">Ready to unify your field crewing?</h2>
        <Link href="/contact" className="inline-flex bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-lg hover:from-cyan-400 hover:to-violet-400 text-white font-bold px-8 py-4 rounded transition-colors text-lg shadow-lg shadow-cyan-500/10 cursor-pointer">
          Get Started Today
        </Link>
      </section>
    </div>
  );
}
