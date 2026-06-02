"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Shield, 
  Wrench, 
  Calendar, 
  Compass, 
  Award,
  AlertCircle,
  FileCheck,
  Zap,
  ChevronRight,
  TrendingUp,
  MapPin,
  Clock,
  Radio,
  FileText,
  Terminal,
  Code2,
  Lock,
  Workflow,
  Sparkles,
  Server
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SDK_EXAMPLES = {
  js: `// npm install @crestmind/sdk
import { CrestmindClient } from "@crestmind/sdk";

const client = new CrestmindClient({
  apiKey: process.env.CRESTMIND_API_KEY
});

// Mobilize a crew automatically
const crew = await client.crews.dispatch({
  project: "exxon-baytown-turnaround",
  requirements: {
    riggers: 12,
    craneOperators: 3,
    hseInspectors: 1
  },
  unionScale: "Local-450",
  mobilizeImmediately: true
});

console.log(\`Crew active: \${crew.id} (\${crew.activeWorkers} riggers dispatched)\`);`,
  python: `# pip install crestmind
from crestmind import Crestmind

client = Crestmind(api_key="cm_live_...")

# Monitor real-time credential compliance
compliance = client.compliance.verify_roster(
    site_id="permian-basin-odessa",
    checks=["OSHA-30", "NCCCO_LICENSE", "DRUG_SCREEN"]
)

for worker in compliance.active_stream:
    print(f"Status: {worker.name} -> {worker.status}")`,
  curl: `# Initialize gate verification via cURL
curl -X POST "https://api.crestmind.com/v1/gate/verify" \\
  -H "Authorization: Bearer $CRESTMIND_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "rfid_badge": "rfid_9821_alpha_gate",
    "site_id": "offshore-block-5",
    "required_cert": "OSHA-30"
  }'`,
  go: `// go get github.com/crestmind/crestmind-go
package main

import (
	"context"
	"fmt"
	"github.com/crestmind/crestmind-go"
)

func main() {
	client := crestmind.NewClient("cm_live_...")
	
	// Open WebSocket connection to live dispatch telemetry
	stream, _ := client.Telemetry.Subscribe(context.Background(), "gulf-coast-refinery")
	
	for log := range stream.Logs() {
		fmt.Printf("[%s] %s Access: %s\\n", log.Timestamp, log.OperatorName, log.Status)
	}
}`
};

const DEV_LOGS = [
  { time: "06:42:10", event: "WS_CONN", msg: "Establishing WebSocket handshake... Connected.", status: "ok" },
  { time: "06:42:12", event: "API_AUTH", msg: "Verifying client credentials for gate 'BAYTOWN_A'.", status: "info" },
  { time: "06:42:14", event: "CERT_AUDIT", msg: "OSHA-30 check passed for Sarah Jenkins (Local 450).", status: "ok" },
  { time: "06:42:15", event: "GATE_ACCESS", msg: "RFID Badge 4502 active. Access GRANTED.", status: "ok" },
  { time: "06:43:01", event: "WS_CONN", msg: "Telemetry sync completed: 420 active operators.", status: "info" },
  { time: "06:43:02", event: "CBA_SYNC", msg: "Updated Local 450 hourly fringe scale (+2.2%).", status: "warn" },
  { time: "06:43:10", event: "DRUG_SCREEN", msg: "Routine panel clear for John Davis (API Welder).", status: "ok" },
  { time: "06:43:15", event: "DISPATCH_ENG", msg: "Standby queue routed to Odessa Terminal Base.", status: "info" },
  { time: "06:44:00", event: "SYS_HEALTH", msg: "All gateway nodes operating at 99.98% SLA.", status: "ok" }
];

const DISPATCH_BOARD_DATA = {
  baytown: [
    { name: "Sarah Jenkins", role: "Rigging Supervisor", local: "Local 450", time: "06:42 AM", status: "Cleared", coordinate: "29.74° N, 94.97° W" },
    { name: "Marcus Kim", role: "Crane Operator", local: "Local 450", time: "07:15 AM", status: "En Route", coordinate: "29.75° N, 94.96° W" },
    { name: "John Davis", role: "Structural Welder", local: "Local 15", time: "08:00 AM", status: "Cleared", coordinate: "29.74° N, 94.99° W" },
  ],
  permian: [
    { name: "Carlos Reyes", role: "Heavy Welder (API)", local: "Local 15", time: "06:12 AM", status: "Cleared", coordinate: "31.88° N, 102.08° W" },
    { name: "Vilian Garner", role: "Rigging Lead", local: "Local 450", time: "06:30 AM", status: "Cleared", coordinate: "31.90° N, 102.10° W" },
    { name: "Donald Vance", role: "HSE Inspector", local: "Non-Union", time: "07:00 AM", status: "Standby", coordinate: "31.87° N, 102.05° W" },
  ],
  offshore: [
    { name: "Robert Miller", role: "Lattice Boom Op", local: "Local 450", time: "05:00 AM", status: "On-Site", coordinate: "28.12° N, 93.45° W" },
    { name: "Lucas Vance", role: "Tig Welder (API)", local: "Local 15", time: "05:30 AM", status: "On-Site", coordinate: "28.12° N, 93.45° W" },
    { name: "Elena Gomez", role: "HSE Auditor", local: "Non-Union", time: "06:00 AM", status: "On-Site", coordinate: "28.13° N, 93.46° W" },
  ]
};

const DISPATCH_ROLES = [
  { id: "riggers", name: "Rigging Supervisors", hourlyRate: 65, description: "NCCCO certified riggers & signalpersons", icon: Wrench },
  { id: "operators", name: "Heavy Crane Operators", hourlyRate: 78, description: "NCCCO mobile crane specialists", icon: Compass },
  { id: "welders", name: "Certified Welders (API)", hourlyRate: 58, description: "Structural pipe specialists", icon: Zap },
  { id: "safety", name: "HSE Officers (OSHA-30)", hourlyRate: 62, description: "OSHA audit & safety advisors", icon: Shield }
];

export default function MarketingHomePage() {
  const [activeBoardTab, setActiveBoardTab] = useState<"baytown" | "permian" | "offshore">("baytown");
  const [boardSearch, setBoardSearch] = useState("");
  const [sdkTab, setSdkTab] = useState<"js" | "python" | "curl" | "go">("js");
  const [logs, setLogs] = useState(DEV_LOGS.slice(0, 5));

  // Dispatch Calculator State
  const [crewCounts, setCrewCounts] = useState<Record<string, number>>({
    riggers: 5,
    operators: 2,
    welders: 6,
    safety: 1
  });
  const [unionRate, setUnionRate] = useState(true);
  const [durationWeeks, setDurationWeeks] = useState(6);
  const [isProposalGenerated, setIsProposalGenerated] = useState(false);

  // Live logs simulator effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const nextIndex = (DEV_LOGS.findIndex(l => l.msg === prev[prev.length - 1].msg) + 1) % DEV_LOGS.length;
        return [...prev.slice(1), DEV_LOGS[nextIndex]];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleIncrement = (roleId: string) => {
    setCrewCounts(prev => ({ ...prev, [roleId]: Math.min(prev[roleId] + 1, 20) }));
  };

  const handleDecrement = (roleId: string) => {
    setCrewCounts(prev => ({ ...prev, [roleId]: Math.max(prev[roleId] - 1, 0) }));
  };

  // Calculations
  const hourlySum = DISPATCH_ROLES.reduce((acc, role) => {
    return acc + (crewCounts[role.id] * role.hourlyRate);
  }, 0);

  const adjustedHourlySum = unionRate ? hourlySum * 1.22 : hourlySum;
  const weeklyPayroll = adjustedHourlySum * 40;
  const totalPayroll = weeklyPayroll * durationWeeks;
  const mobilizationCost = (crewCounts.riggers + crewCounts.operators + crewCounts.welders + crewCounts.safety) * 650;
  const estimateTotal = totalPayroll + mobilizationCost;
  const totalWorkers = Object.values(crewCounts).reduce((a, b) => a + b, 0);

  const activeBoardRows = DISPATCH_BOARD_DATA[activeBoardTab].filter(row => 
    row.name.toLowerCase().includes(boardSearch.toLowerCase()) || 
    row.role.toLowerCase().includes(boardSearch.toLowerCase())
  );

  return (
    <div className="bg-[#050507] text-slate-100 overflow-x-hidden font-sans">
      {/* 1. HERO SECTION: Asymmetric 2-Column Split Developer Hero */}
      <section className="pt-48 pb-32 px-6 relative border-b border-slate-900 overflow-hidden">
        {/* Neon glowing radial gradient backgrounds */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff03_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none" />
        <div className="absolute -top-40 left-1/3 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-[400px] h-[300px] bg-violet-600/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 text-left">
          {/* Left Column: Typography, bullets, action triggers */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-[10px] font-extrabold uppercase tracking-widest shadow-lg shadow-cyan-500/5 backdrop-blur-sm font-mono"
            >
              <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" /> Real-time HR Gateway Online
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] font-logo text-white"
            >
              The Real-Time <br/>
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent glow-text-cyan">Orchestration Layer</span> <br/>
              for Industrial Crews
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-base text-slate-400 leading-relaxed font-medium max-w-xl"
            >
              Verify credentials, sync collective bargaining agreements, and automate terminal gate dispatch networks via REST and WebSocket telemetry API.
            </motion.p>

            {/* Feature Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="space-y-3.5 text-xs font-semibold text-slate-350"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Direct Board Audits (OSHA & NCCCO checks in &lt; 15ms)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Union CBA Payroll Fringe Matching (100% automated calculations)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>RFID Badge cascade (instant gate access syncing on clearance)</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link href="/contact" className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-black font-extrabold rounded-lg shadow-lg shadow-cyan-500/10 text-xs text-center transition-all">
                Request API Key
              </Link>
              <a href="#playground" className="w-full sm:w-auto px-7 py-3.5 bg-slate-950/85 border border-slate-900 text-slate-350 font-bold rounded-lg hover:bg-slate-900/60 hover:text-white transition-all text-xs text-center backdrop-blur-sm">
                View Developer Docs
              </a>
            </motion.div>
          </div>

          {/* Right Column: Sleek Sandbox visualizer telemetry card */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-slate-950/90 rounded-2xl border border-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-md"
            >
              {/* Telemetry Header */}
              <div className="bg-black/90 px-6 py-4 flex justify-between items-center border-b border-slate-900">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-slate-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 font-mono flex items-center gap-1.5 ml-1">
                    <Server className="w-3.5 h-3.5" /> API Gateway Nodes
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[8px] font-mono text-cyan-400 font-bold bg-cyan-500/5 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                  WS_CONNECTED
                </div>
              </div>

              {/* Telemetry Endpoint List Table */}
              <div className="p-4 bg-slate-950/40 font-mono text-[10px]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-900 text-slate-550 font-bold uppercase text-[8px] tracking-wider pb-2">
                      <th className="pb-2 font-bold">Node Endpoint</th>
                      <th className="pb-2 font-bold">CBA Audit</th>
                      <th className="pb-2 font-bold">Latency</th>
                      <th className="pb-2 font-bold">HSE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-900/60 text-slate-400">
                    <tr className="hover:bg-slate-900/25 transition-colors">
                      <td className="py-2.5 font-bold text-slate-200">houston.gateway.node</td>
                      <td className="py-2.5">Local 450</td>
                      <td className="py-2.5 text-cyan-400">12ms</td>
                      <td className="py-2.5"><span className="text-cyan-400 bg-cyan-500/5 px-1.5 py-0.5 border border-cyan-500/10 rounded-full text-[8px]">OK</span></td>
                    </tr>
                    <tr className="hover:bg-slate-900/25 transition-colors">
                      <td className="py-2.5 font-bold text-slate-200">odessa.gateway.node</td>
                      <td className="py-2.5">Local 15</td>
                      <td className="py-2.5 text-cyan-400">15ms</td>
                      <td className="py-2.5"><span className="text-cyan-400 bg-cyan-500/5 px-1.5 py-0.5 border border-cyan-500/10 rounded-full text-[8px]">OK</span></td>
                    </tr>
                    <tr className="hover:bg-slate-900/25 transition-colors">
                      <td className="py-2.5 font-bold text-slate-200">lafayette.gateway.node</td>
                      <td className="py-2.5">Non-Union</td>
                      <td className="py-2.5 text-violet-400">19ms</td>
                      <td className="py-2.5"><span className="text-cyan-400 bg-cyan-500/5 px-1.5 py-0.5 border border-cyan-500/10 rounded-full text-[8px]">OK</span></td>
                    </tr>
                  </tbody>
                </table>

                {/* Animated wave telemetry line graph */}
                <div className="border-t border-slate-900 pt-4 mt-4">
                  <div className="flex justify-between items-center text-[8px] text-slate-550 font-bold uppercase tracking-wider mb-2 font-mono">
                    <span>Active Telemetry Signal Pulse</span>
                    <span className="text-cyan-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-cyan-450 animate-ping"></span> 99.98% SLA</span>
                  </div>
                  <div className="flex gap-0.5 items-end h-10 w-full px-1">
                    {[12, 24, 38, 16, 28, 48, 64, 32, 18, 40, 56, 84, 32, 44, 20, 12, 24, 76, 48, 16, 28, 40, 64, 8].map((h, idx) => (
                      <div 
                        key={idx} 
                        className="flex-1 bg-cyan-500/25 hover:bg-cyan-500/50 rounded-t transition-colors cursor-pointer" 
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

              </div>

              {/* Telemetry Footer */}
              <div className="bg-black/90 px-6 py-3.5 border-t border-slate-900 flex items-center justify-between text-[9px] font-mono font-bold text-slate-550">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" /> WebSocket streams active
                </div>
                <div>
                  Synced Nodes: <span className="text-cyan-400">4,820</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. BRAND LOGOS SCROLLER (Darkened) */}
      <section className="bg-black py-12 border-b border-slate-900 overflow-hidden relative" aria-label="Partner integrations scroller">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r to-transparent from-black via-black/80"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l to-transparent from-black via-black/80"></div>
        
        <div className="flex flex-col gap-8 w-full relative z-0">
          <div className="flex w-full overflow-hidden">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 35, ease: "linear", repeat: Infinity }}
              className="flex w-max items-center gap-24 pr-24 hover:[animation-play-state:paused]"
            >
              {[
                { name: "Caterpillar", domain: "cat.com" },
                { name: "Bechtel", domain: "bechtel.com" },
                { name: "Siemens", domain: "siemens.com" },
                { name: "General Electric", domain: "ge.com" },
                { name: "Shell", domain: "shell.com" },
                { name: "ExxonMobil", domain: "exxonmobil.com" },
                { name: "Chevron", domain: "chevron.com" },
                { name: "Schlumberger", domain: "slb.com" }
              ].map((logo, i) => (
                <div key={`logo-${i}`} className="flex items-center gap-3 shrink-0 group cursor-default">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://img.logo.dev/${logo.domain}?token=pk_KjubQJ-VS0K5ygwjPRKxOg`} alt={`${logo.name} logo`} className="w-6 h-6 object-contain filter grayscale invert opacity-30 group-hover:opacity-80 transition-all duration-300" />
                  <span className="font-logo text-sm font-bold text-slate-500 tracking-wider group-hover:text-slate-350 transition-colors duration-300">{logo.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. DEVELOPER PLAYGROUND: Tabbed code snippet box */}
      <section id="playground" className="py-24 px-6 border-b border-slate-900 bg-slate-950/20 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#00f0ff02_1px,transparent_1px)] bg-[size:10rem_10rem] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-cyan-400 font-extrabold uppercase tracking-widest text-[10px] bg-cyan-500/5 px-3 py-1 rounded-full border border-cyan-500/20">SDK integration</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-logo">Built for developers. <br/>Controlled by API.</h2>
            <p className="text-slate-400 text-sm font-semibold leading-relaxed">
              Programmatically dispatch operators, audit certs, and run CBA union payroll using a few lines of code. Instantly integrate with gateway terminals, OSHA databases, and access control hardware.
            </p>
            
            <div className="space-y-4 pt-6 border-t border-slate-900 text-xs">
              <div className="flex gap-3">
                <Workflow className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-200">Event-driven dispatch webhook</h4>
                  <p className="text-slate-500 font-medium leading-relaxed mt-0.5">Subscribe to gate check-ins, expiration alerts, and time-off rotations.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Lock className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-200">Military-grade audit verification</h4>
                  <p className="text-slate-500 font-medium leading-relaxed mt-0.5">Automated validation with the NCCCO, AWS, and state licensing boards.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-950 border border-slate-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* Playground Tabs */}
            <div className="bg-black/90 px-6 py-3.5 border-b border-slate-900 flex justify-between items-center">
              <div className="flex gap-2">
                {[
                  { id: "js", label: "Client SDK (JS)" },
                  { id: "python", label: "Crestmind (Py)" },
                  { id: "curl", label: "cURL REST" },
                  { id: "go", label: "Telemetry (Go)" }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setSdkTab(tab.id as any)}
                    className={`text-[10px] font-mono px-3 py-1.5 rounded transition-all cursor-pointer ${
                      sdkTab === tab.id 
                        ? "bg-slate-900 text-slate-100 border border-slate-800" 
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <Code2 className="w-4 h-4 text-slate-500" />
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-[11px] leading-relaxed bg-black/50 overflow-x-auto text-slate-350 max-h-[350px]">
              <pre className="text-cyan-400/90">
                {SDK_EXAMPLES[sdkTab]}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REAL-TIME LOGS WEB COMPONENT */}
      <section className="py-24 px-6 border-b border-slate-900">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <span className="text-violet-400 font-extrabold uppercase tracking-widest text-[10px] bg-violet-500/5 px-3 py-1 rounded-full border border-violet-500/20">Operational Telemetry</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-logo">Active Pipeline Stream</h2>
            <p className="text-slate-400 text-sm font-semibold leading-relaxed">
              Every badge scan, license renewal, and payroll change generates a secure telemetry event. Watch live logs pipe from the gateway server below.
            </p>
            <div className="flex gap-6 text-left pt-4">
              <div>
                <div className="text-3xl font-black text-white font-logo">99.98%</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Gateway Uptime (SLA)</div>
              </div>
              <div className="w-px bg-slate-900" />
              <div>
                <div className="text-3xl font-black text-white font-logo">&lt; 15ms</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Check-In Handshake</div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full bg-slate-950 border border-slate-900 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative font-mono text-[10px] space-y-4">
            <div className="flex items-center justify-between border-b border-slate-900 pb-3">
              <span className="text-slate-550 font-bold uppercase tracking-wider">gateway-stream-0</span>
              <span className="text-cyan-400 font-bold flex items-center gap-1"><Server className="w-3 h-3" /> Live Feed</span>
            </div>
            
            <div className="space-y-2 max-h-[220px] overflow-y-auto">
              <AnimatePresence initial={false}>
                {logs.map((log, index) => (
                  <motion.div 
                    key={log.time + index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-3 py-1 text-slate-450 border-b border-slate-900/40 last:border-0"
                  >
                    <span className="text-slate-600 font-medium shrink-0">{log.time}</span>
                    <span className={`font-bold shrink-0 ${
                      log.status === "ok" ? "text-cyan-400" : log.status === "warn" ? "text-violet-400" : "text-slate-500"
                    }`}>
                      [{log.event}]
                    </span>
                    <span className="text-slate-350 truncate">{log.msg}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CYBER-THEMED BUDGET & CREST ESTIMATOR */}
      <section id="planner" className="py-24 px-6 border-b border-slate-900 bg-[#050507] relative">
        <div className="absolute inset-0 bg-[radial-gradient(#00f0ff01_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 space-y-6">
            <span className="text-cyan-400 font-extrabold uppercase tracking-widest text-[10px] bg-cyan-500/5 px-3 py-1 rounded-full border border-cyan-500/20">Interactive Estimator</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-logo">Workforce Dispatch Planner</h2>
            <p className="text-slate-400 text-sm font-semibold leading-relaxed">
              Calculate union payroll base scales, pension benefits, and onboarding logistics in real-time. Adjust crew counts below to estimate mobilizations.
            </p>

            <div className="space-y-4 pt-6 border-t border-slate-900 text-xs">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-200">CBA Scales Auto-Applied</h4>
                  <p className="text-slate-500 font-semibold mt-0.5">Applies fringe rules, local union healthcare, and per diems automatically.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-200">OSHA/NCCCO Verification</h4>
                  <p className="text-slate-500 font-semibold mt-0.5">Every dispatched worker undergoes drug screens and credential audits.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full bg-slate-950 border border-slate-900 shadow-2xl rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-cyan-500/5 text-cyan-400 text-[9px] font-mono font-bold px-3.5 py-1.5 uppercase border-b border-l border-slate-900 rounded-bl-lg">LIVE ESTIMATE</div>

            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                <label className="block text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">Adjust Crew Size</label>
                {DISPATCH_ROLES.map((role) => {
                  const count = crewCounts[role.id] || 0;
                  return (
                    <div key={role.id} className="flex items-center justify-between p-3 bg-black/60 rounded-lg border border-slate-900">
                      <div>
                        <h4 className="font-bold text-slate-200 text-xs sm:text-sm flex items-center gap-1.5">
                          <role.icon className="w-4 h-4 text-cyan-400" /> {role.name}
                        </h4>
                        <span className="text-[9px] font-mono text-slate-550">${role.hourlyRate}/hr base scale</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => handleDecrement(role.id)}
                          className="w-7 h-7 rounded bg-slate-950 hover:bg-slate-900 border border-slate-900 flex items-center justify-center font-bold text-slate-300 cursor-pointer text-xs"
                        >-</button>
                        <span className="text-xs font-mono font-black text-white w-6 text-center">{count}</span>
                        <button 
                          onClick={() => handleIncrement(role.id)}
                          className="w-7 h-7 rounded bg-slate-950 hover:bg-slate-900 border border-slate-900 flex items-center justify-center font-bold text-slate-300 cursor-pointer text-xs"
                        >+</button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div>
                <div className="flex justify-between text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                  <span>Hitch Duration</span>
                  <span className="text-cyan-400 font-black">{durationWeeks} Weeks</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="16" 
                  value={durationWeeks}
                  onChange={(e) => setDurationWeeks(Number(e.target.value))}
                  className="w-full h-1 bg-slate-900 rounded appearance-none cursor-pointer accent-cyan-400 border border-slate-800"
                />
              </div>

              <div className="flex items-center justify-between p-3 border border-slate-900 bg-black/60 rounded-lg">
                <div>
                  <h4 className="font-bold text-slate-200 text-xs">CBA Fringe scale (+22%)</h4>
                  <p className="text-[9px] font-medium text-slate-500">Apply local union pension & benefits</p>
                </div>
                <button 
                  onClick={() => setUnionRate(!unionRate)}
                  className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-200 focus:outline-none cursor-pointer ${unionRate ? "bg-cyan-500" : "bg-slate-900"}`}
                >
                  <div className={`bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-200 ${unionRate ? "translate-x-5" : "translate-x-0"}`} />
                </button>
              </div>
            </div>

            {/* Bill Sheet */}
            <div className="w-full md:w-52 bg-black text-white rounded-xl p-5 flex flex-col justify-between border border-slate-900 shadow-inner">
              <div className="space-y-4">
                <div className="text-center pb-4 border-b border-slate-900">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Allocated Headcount</span>
                  <span className="text-3xl font-black text-white font-logo">{totalWorkers} Crew</span>
                  <span className="text-[9px] text-slate-500 font-mono block mt-0.5">{durationWeeks} weeks scheduled</span>
                </div>

                <div className="space-y-3 pt-2 font-mono text-[10px]">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Weekly Pay</span>
                    <span className="font-bold text-slate-300">${weeklyPayroll.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Mobe & HSE</span>
                    <span className="font-bold text-slate-300">${mobilizationCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="h-px bg-slate-900 w-full" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Est Total Cost</span>
                    <span className="text-2xl font-black text-cyan-400 font-logo">${estimateTotal.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button 
                  onClick={() => {
                    setIsProposalGenerated(true);
                    setTimeout(() => setIsProposalGenerated(false), 5000);
                  }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold py-2.5 rounded-lg text-xs transition-colors cursor-pointer shadow-md"
                >
                  Generate Proposal
                </button>
                <AnimatePresence>
                  {isProposalGenerated && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-cyan-500/10 text-cyan-400 text-[9px] font-mono font-bold p-2 rounded text-center border border-cyan-500/20"
                    >
                      Proposal Generated! Check your dashboard.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REAL-TIME CASCADING TRIGGERS */}
      <section className="py-24 px-6 border-b border-slate-900 bg-slate-950/20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <span className="text-cyan-400 font-extrabold uppercase tracking-widest text-[10px] bg-cyan-500/5 px-3 py-1 rounded-full border border-cyan-500/20">Automated Webhooks</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-logo">CBA Compliance Webhooks</h2>
            <p className="text-slate-400 text-sm font-semibold leading-relaxed">
              Set automated triggers when worker credentials update or union CBA rates shift. Crestmind cascades notifications across site gates and direct deposits in under 12ms.
            </p>
          </div>

          <div className="flex-1 w-full max-w-lg bg-slate-950 rounded-2xl p-8 border border-slate-900 shadow-lg relative">
            <div className="absolute inset-0 bg-[radial-gradient(#00f0ff03_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />
            <div className="relative z-10 space-y-5">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" /> Active Webhook Event
              </div>
              <div className="bg-black/60 p-5 rounded-lg border border-slate-900">
                <div className="text-[9px] font-mono font-bold text-slate-550 uppercase tracking-wider mb-1">Payload:</div>
                <div className="text-sm font-bold text-slate-200 flex items-center gap-2 font-mono">
                  <TrendingUp className="w-4 h-4 text-cyan-400" /> Local 450 Base Rate Adjustment (+$2.50)
                </div>
              </div>
              <div className="text-center text-slate-700 font-black">↓</div>
              <div className="bg-black/60 p-5 rounded-lg border border-slate-900 space-y-3 font-mono text-xs text-slate-450">
                <div className="text-[9px] font-bold text-slate-550 uppercase tracking-wider">Trigger Actions:</div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Recalculate weekly local union pension matching
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Synchronize V1 gate terminal badges
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Commit base scale adjustments to payroll ledger
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-24 px-6 border-b border-slate-900 bg-[#050507]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4 font-logo">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 font-semibold text-sm">Everything you need to know about MyCrestMind heavy crewing & APIs.</p>
          </div>
          
          <div className="space-y-2">
            {[
              { q: "What types of industrial roles do you supply?", a: "We specialize in heavy riggers, certified lattice-boom and mobile crane operators, structural and pressure vessel welders, pipefitters, and HSE/safety supervisors." },
              { q: "How does the credential API checking work?", a: "Crestmind runs automatic cron pipelines that query state licensing boards, NCCCO crane records, and OSHA directories. If an operator's credential expires or is revoked, they are flagged and gate badges are updated." },
              { q: "Do you support custom Collective Bargaining Agreements (CBAs)?", a: "Yes, our payroll engine natively supports layered union agreements, fringe calculations, shift differentials, and local health trust payouts." },
              { q: "Can we integrate this into our existing ERP?", a: "Absolutely. Our REST endpoints and webhook structures support bi-directional syncs with SAP, Workday, Deel, or internal crewing portals." }
            ].map((faq, idx) => (
              <details key={idx} className="group border-b border-slate-900 py-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none text-base font-bold text-slate-200">
                  {faq.q}
                  <span className="transition-transform duration-300 group-open:-rotate-180 text-slate-500">
                    <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-slate-400 mt-4 text-sm leading-relaxed animate-in slide-in-from-top-1 fade-in duration-200 font-medium">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA SECTION (Dark Sleek Banner) */}
      <section className="bg-black py-28 px-6 overflow-hidden relative border-t border-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-logo">
            Ready to integrate Crestmind?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium text-base">
            Create an account to access developer APIs, deploy sandbox environments, and configure union scale webhooks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg shadow-lg shadow-cyan-500/10 transition-all text-base cursor-pointer text-center">
              Request API Key
            </Link>
            <Link href="/login" className="w-full sm:w-auto px-8 py-4 bg-slate-900/60 border border-slate-800 text-slate-300 font-bold rounded-lg hover:bg-slate-900 hover:text-white transition-colors backdrop-blur-sm cursor-pointer text-center">
              Log in to Sandbox
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
