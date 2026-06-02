"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail, Globe, Loader2, Sparkles, MapPin, Phone, Server, Terminal } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    companySize: "",
    topic: "API Sandbox Access",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Request received!", {
      description: "A gateway engineer will email your credentials shortly.",
    });
  };

  const activeEndpoints = [
    { name: "Gulf Coast Refinery API", endpoint: "houston.gateway.crestmind", coords: "29.74° N, 94.97° W", email: "houston@crestmind.com", status: "Active" },
    { name: "Delaware Basin Pipeline API", endpoint: "odessa.gateway.crestmind", coords: "31.88° N, 102.08° W", email: "odessa@crestmind.com", status: "Active" },
    { name: "Permian Grid Telemetry API", endpoint: "midland.gateway.crestmind", coords: "32.00° N, 102.07° W", email: "midland@crestmind.com", status: "Active" },
    { name: "Offshore Platform Socket API", endpoint: "lafayette.gateway.crestmind", coords: "30.22° N, 92.01° W", email: "lafayette@crestmind.com", status: "Active" }
  ];

  return (
    <div className="min-h-screen bg-[#050507] text-slate-100 font-sans flex flex-col">
      {/* Hero Header */}
      <div className="pt-44 pb-16 px-6 border-b border-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff02_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-4 text-center lg:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-[10px] font-extrabold uppercase tracking-widest font-mono">
            <Terminal className="w-3.5 h-3.5" /> API Handshake Gateway
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white font-logo">
            Request API Access
          </h1>
          <p className="text-base text-slate-450 max-w-2xl font-medium">
            Acquire sandbox API credentials, configure production webhooks, or request direct technical crewing support from our development engineers.
          </p>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16 w-full flex-1 relative z-10">
        
        {/* Left Column: API Gateways Endpoint Directory */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Active Endpoints</span>
            <h2 className="text-2xl font-extrabold text-white font-logo">Crestmind Gateway Nodes</h2>
            <p className="text-slate-400 text-xs font-semibold leading-relaxed">Each physical terminal base runs a telemetry node caching local union schedules and gate badge accesses.</p>
          </div>

          <div className="space-y-4">
            {activeEndpoints.map((term, i) => (
              <div key={i} className="bg-slate-950 p-5 rounded-xl border border-slate-900 space-y-3 hover:border-cyan-500/30 transition-all font-mono">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-extrabold text-xs text-slate-200">{term.name}</h3>
                    <span className="text-[9px] text-cyan-400 font-bold block mt-1">{term.endpoint}</span>
                  </div>
                  <span className="text-[9px] bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-cyan-400" /> {term.coords}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 border-t border-slate-900 pt-2">
                  <a href={`mailto:${term.email}`} className="hover:text-cyan-400 flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-cyan-400" /> {term.email}</a>
                  <span className="text-cyan-400/80 bg-cyan-500/5 px-2 py-0.5 border border-cyan-500/10 rounded-full text-[8px] flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-cyan-400 animate-ping"></span> {term.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Crewing Request Form */}
        <div className="lg:col-span-7">
          <div className="bg-slate-950/80 p-8 md:p-10 rounded-2xl border border-slate-900 shadow-2xl backdrop-blur-md">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-bold text-white tracking-tight font-logo">Submit API Intake</h2>
                  <p className="text-slate-500 text-xs font-semibold mb-6">
                    Fill out the sandbox configurations and an engineer will dispatch credentials shortly.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-mono font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
                        Developer Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-900 bg-black text-slate-200 font-semibold text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-650"
                        placeholder="Sarah Jenkins"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-mono font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-900 bg-black text-slate-200 font-semibold text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-650"
                        placeholder="s.jenkins@energycorp.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-mono font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
                        Company Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-900 bg-black text-slate-200 font-semibold text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-650"
                        placeholder="Acme Heavy Logistics"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-mono font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
                        Target Crew Size
                      </label>
                      <select
                        required
                        value={formData.companySize}
                        onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-900 bg-black text-slate-300 font-semibold text-sm appearance-none cursor-pointer focus:outline-none focus:border-cyan-500"
                      >
                        <option value="">Select size...</option>
                        <option value="1-10">1 - 10 crew members</option>
                        <option value="11-50">11 - 50 crew members</option>
                        <option value="51-200">51 - 200 crew members</option>
                        <option value="201-1000">201 - 1000 crew members</option>
                        <option value="1000+">1000+ crew members</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
                      Integration Scope
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-900 bg-black text-slate-300 font-semibold text-sm appearance-none cursor-pointer focus:outline-none focus:border-cyan-500"
                    >
                      <option value="API Sandbox Access">Deploy Sandbox API / SDK credentials</option>
                      <option value="Dispatch Webhooks">Configure Production Webhooks</option>
                      <option value="Compliance Logs">OSHA / Union CBA Verification Sync</option>
                      <option value="Custom Setup">Enterprise Technical Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
                      Describe Your System Scope
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-900 bg-black text-slate-200 font-semibold text-sm resize-none focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 placeholder:text-slate-650"
                      placeholder="We want to automate local union payroll syncs for 40 lattice boom operator nodes using the Crestmind SDK..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-black font-extrabold py-4 rounded-lg transition-all duration-150 flex items-center justify-center gap-2 shadow-lg text-base cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>Submitting Intake... <Loader2 className="w-5 h-5 animate-spin" /></>
                    ) : (
                      <>Initialize Handshake <ArrowRight className="w-4 h-4" /></>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 px-4 space-y-6"
                >
                  <div className="w-20 h-20 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/5">
                    <CheckCircle2 className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-extrabold text-white font-logo">Intake Initiated!</h3>
                    <p className="text-slate-450 font-medium text-base leading-relaxed max-w-sm mx-auto">
                      Thank you, {formData.name}. Our developer relations engineers are reviewing your credentials and will configure your API sandbox.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-sm font-bold text-cyan-400 hover:underline cursor-pointer"
                  >
                    Submit another handshake
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
