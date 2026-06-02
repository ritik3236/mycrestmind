"use client";

import { useState } from "react";
import { Users, FileText, Calendar, CheckCircle2, Clock, MapPin, Shield, Server, Terminal, Radio, Cpu, Network } from "lucide-react";

export default function DashboardPage() {
  const activeGateways = [
    {
      site: "refinery.baytown.gateway",
      local: "Local 450",
      hitch: "WebSocket Syncing",
      period: "Uptime: 99.99%",
      progress: 95,
      color: "bg-cyan-500 shadow-md shadow-cyan-500/10"
    },
    {
      site: "pipeline.odessa.gateway",
      local: "Local 15 & 450",
      hitch: "Active Handshake",
      period: "Uptime: 99.95%",
      progress: 80,
      color: "bg-cyan-500 shadow-md shadow-cyan-500/10"
    },
    {
      site: "offshore.block5.gateway",
      local: "Non-Union Nodes",
      hitch: "Streaming Telemetry",
      period: "Uptime: 99.90%",
      progress: 70,
      color: "bg-violet-500 shadow-md shadow-violet-500/10"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 bg-[#050507] text-slate-200">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2 font-logo flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span> Welcome back, Olivia!
        </h1>
        <p className="text-slate-450 font-semibold text-sm font-mono uppercase text-[10px] tracking-wider">Crestmind gateway API console: active and operational</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Metric Card 1 */}
        <div className="bg-slate-950 p-6 rounded-xl border border-slate-900 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl pointer-events-none rounded-full" />
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">WebSocket Connections</div>
              <div className="text-3xl font-black text-white font-logo flex items-baseline gap-2">
                1,420 <span className="text-xs text-cyan-400 font-mono">active</span>
              </div>
            </div>
            <div className="p-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg">
              <Network className="w-5 h-5" />
            </div>
          </div>
          <div className="text-[9px] font-mono font-bold text-cyan-400 bg-cyan-500/5 border border-cyan-500/10 px-2 py-0.5 rounded w-fit">+32 client nodes synchronized</div>
        </div>

        {/* Metric Card 2 */}
        <div className="bg-slate-950 p-6 rounded-xl border border-slate-900 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/5 blur-2xl pointer-events-none rounded-full" />
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">API Dispatch Volume</div>
              <div className="text-3xl font-black text-white font-logo">
                $612,450 <span className="text-xs text-slate-500 font-normal">CBA scale</span>
              </div>
            </div>
            <div className="p-3 bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
          </div>
          <div className="text-[9px] font-mono font-bold text-slate-500">Auto-allocated to 12 union funds</div>
        </div>

        {/* Metric Card 3 */}
        <div className="bg-slate-950 p-6 rounded-xl border border-slate-900 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 blur-2xl pointer-events-none rounded-full" />
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">Gateway Logs / Audits</div>
              <div className="text-3xl font-black text-white font-logo">
                0 <span className="text-sm font-normal text-cyan-400">conflicts</span>
              </div>
            </div>
            <div className="p-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg">
              <Cpu className="w-5 h-5" />
            </div>
          </div>
          <div className="text-[9px] font-mono font-bold text-cyan-400 bg-cyan-500/5 border border-cyan-500/10 px-2 py-0.5 rounded w-fit">100% SLA Audit Clear</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Dispatch Gantt Scheduler */}
        <div className="bg-slate-950 p-6 rounded-xl border border-slate-900 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5"><Terminal className="w-4 h-4 text-cyan-400" /> Active API Telemetry</h2>
            <div className="flex items-center gap-1.5 text-[9px] font-mono text-cyan-400 font-bold bg-cyan-500/5 border border-cyan-500/25 px-3 py-1 rounded-full">
              <Radio className="w-3.5 h-3.5 animate-pulse" /> Nodes Streaming
            </div>
          </div>
          <div className="space-y-6 flex-1 flex flex-col justify-center">
            {activeGateways.map((proj, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-[11px] font-mono font-bold">
                  <span className="text-slate-200 flex items-center gap-2"><Server className="w-3.5 h-3.5 text-cyan-400" /> {proj.site}</span>
                  <span className="text-slate-500">{proj.period}</span>
                </div>
                <div className="relative">
                  <div className="w-full bg-black h-6 rounded-lg overflow-hidden border border-slate-900 relative flex items-center px-3">
                    <div 
                      className={`absolute left-0 top-0 h-full rounded transition-all duration-1000 ${proj.color}`} 
                      style={{ width: `${proj.progress}%` }}
                    />
                    <span className="relative z-10 text-[9px] font-mono font-black text-black uppercase tracking-wider">{proj.hitch} ({proj.local})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audit checklists */}
        <div className="bg-slate-950 rounded-xl border border-slate-900 flex flex-col overflow-hidden">
          <div className="p-6 border-b border-slate-900">
            <h2 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Active Access Logs</h2>
          </div>
          <div className="flex-1 overflow-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap font-mono text-[10px]">
              <thead>
                <tr className="bg-black text-[9px] font-bold text-slate-500 border-b border-slate-900">
                  <th className="p-4 font-bold uppercase tracking-wider">Log Handshake</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Gateway Status</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Timestamp</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Assigned Node</th>
                </tr>
              </thead>
              <tbody className="text-slate-400">
                <tr className="border-b border-slate-900/60 hover:bg-slate-900/20">
                  <td className="p-4 text-slate-200 font-bold flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-cyan-400" /> OSHA-30 clear for Liam S.</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 font-bold text-[9px]">
                      COMPLETED
                    </span>
                  </td>
                  <td className="p-4 text-slate-500">06:42:10</td>
                  <td className="p-4 text-slate-400">Houston Terminal</td>
                </tr>
                <tr className="border-b border-slate-900/60 hover:bg-slate-900/20">
                  <td className="p-4 text-slate-200 font-bold flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-violet-400" /> NCCCO License audit (Maria G.)</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 font-bold text-[9px]">
                      RUNNING
                    </span>
                  </td>
                  <td className="p-4 text-slate-500">06:43:02</td>
                  <td className="p-4 text-slate-400">Odessa Terminal</td>
                </tr>
                <tr className="hover:bg-slate-900/20">
                  <td className="p-4 text-slate-200 font-bold flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-slate-600" /> CBA fringe scale report (James W.)</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-slate-800 bg-slate-900/40 text-slate-450 font-bold text-[9px]">
                      PENDING
                    </span>
                  </td>
                  <td className="p-4 text-slate-500">06:44:00</td>
                  <td className="p-4 text-slate-400">Houston Terminal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
