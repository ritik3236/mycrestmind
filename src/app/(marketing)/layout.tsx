import Link from "next/link";
import { Zap, ChevronDown } from "lucide-react";
import { MobileNav } from "@/components/MobileNav";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 bg-[#050507] text-slate-100">
      {/* Navigation - Global Mega Menu */}
      <header className="absolute top-0 w-full z-50 border-b border-slate-900 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse glow-shadow-cyan"></span>
            <span className="font-extrabold text-2xl tracking-tight text-white font-logo group-hover:text-cyan-400 transition-colors">MyCrestMind</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-400 h-full">
            
            {/* Mega Menu Dropdown */}
            <div className="group h-full flex items-center">
              <button className="flex items-center gap-1 hover:text-white transition-colors py-8 cursor-pointer">
                Platform <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Mega Menu Panel */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-slate-950/95 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-slate-900 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden text-slate-200 flex">
                {/* Left Side: Product Categories */}
                <div className="flex-[2] p-8 grid grid-cols-2 gap-x-8 gap-y-10">
                  
                  {/* HR & Payroll */}
                  <div>
                    <h4 className="font-bold text-xs text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Zap className="w-3 h-3 text-cyan-400" /> Dispatch & Crewing
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/global-payroll" className="block hover:bg-slate-900/60 p-2 -ml-2 rounded-lg transition-colors group/link">
                          <div className="font-bold text-sm text-slate-200 group-hover/link:text-cyan-400 transition-colors">Operations Payroll</div>
                          <div className="text-xs text-slate-500 font-medium mt-0.5">Automate union, hourly, & project-based payroll.</div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/core-hr" className="block hover:bg-slate-900/60 p-2 -ml-2 rounded-lg transition-colors group/link">
                          <div className="font-bold text-sm text-slate-200 group-hover/link:text-cyan-400 transition-colors">Compliance Hub</div>
                          <div className="text-xs text-slate-500 font-medium mt-0.5">Track safety certifications, drug screens, and training.</div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/mycrestmind-hire" className="block hover:bg-slate-900/60 p-2 -ml-2 rounded-lg transition-colors group/link">
                          <div className="font-bold text-sm text-slate-200 group-hover/link:text-cyan-400 transition-colors">MyCrestMind Dispatch</div>
                          <div className="text-xs text-slate-500 font-medium mt-0.5">Mobilize certified operators and riggers in minutes.</div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* IT & Benefits */}
                  <div>
                    <h4 className="font-bold text-xs text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Zap className="w-3 h-3 text-violet-400" /> Equipment & Benefits
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/it-devices" className="block hover:bg-slate-900/60 p-2 -ml-2 rounded-lg transition-colors group/link">
                          <div className="font-bold text-sm text-slate-200 group-hover/link:text-violet-400 transition-colors">PPE & Telematics</div>
                          <div className="text-xs text-slate-500 font-medium mt-0.5">Manage safety gear and field-ready device distribution.</div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/benefits" className="block hover:bg-slate-900/60 p-2 -ml-2 rounded-lg transition-colors group/link">
                          <div className="font-bold text-sm text-slate-200 group-hover/link:text-violet-400 transition-colors">Union & Field Benefits</div>
                          <div className="text-xs text-slate-500 font-medium mt-0.5">Health coverage built for heavy industrial environments.</div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                </div>

                {/* Right Side: Featured/Highlight */}
                <div className="flex-[1] bg-slate-900/40 p-8 border-l border-slate-900 flex flex-col">
                  <h4 className="font-bold text-xs text-slate-500 uppercase tracking-widest mb-4">Real-Time Pulse</h4>
                  <div className="flex-1 bg-slate-950 rounded-xl border border-slate-900 p-4 flex flex-col group/feature cursor-pointer hover:border-cyan-500/40 transition-colors">
                    <div className="w-full h-24 bg-slate-900 rounded-lg mb-4 overflow-hidden relative border border-slate-800">
                       <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-violet-500/10 animate-pulse"></div>
                       <div className="absolute inset-0 flex items-center justify-center">
                         <span className="font-bold text-sm text-cyan-300 font-logo">Crestmind WebSocket</span>
                       </div>
                    </div>
                    <h5 className="font-bold text-sm text-slate-200 group-hover/feature:text-cyan-400 transition-colors">Smart Dispatch Scheduling</h5>
                    <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">Match qualified crews by certification status automatically.</p>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className="hover:text-white transition-colors py-8">Solutions</Link>
            <Link href="/pricing" className="hover:text-white transition-colors py-8">Pricing</Link>
          </nav>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/login" className="text-sm font-semibold text-slate-400 hover:text-white hidden lg:block">
              Log in
            </Link>
            <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-black text-sm font-bold px-6 py-2.5 rounded-lg transition-colors duration-150 hidden lg:block shadow-md shadow-cyan-500/10">
              Get a demo
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-[#050507]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-slate-900 pt-24 pb-12 overflow-hidden relative">
        <div className="max-w-[1312px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-10 mb-20">
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
                <span className="font-extrabold text-3xl tracking-tight text-white font-logo">MyCrestMind</span>
              </Link>
              <p className="text-slate-400 max-w-sm mb-8 font-medium leading-relaxed text-sm">
                The real-time orchestration layer to simplify crewing, compliance, payroll, and benefits for modern industrial and energy workforces.
              </p>
              
              {/* Newsletter */}
              <div className="bg-slate-950 p-1.5 rounded-xl border border-slate-800 flex items-center max-w-sm focus-within:border-cyan-500 transition-all duration-300">
                <input type="email" placeholder="Get industry updates" className="bg-transparent border-none outline-none px-4 w-full text-xs font-semibold placeholder:text-slate-500 text-slate-200" />
                <button className="bg-slate-900 hover:bg-cyan-500 hover:text-black text-slate-300 text-[10px] font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-colors duration-300 whitespace-nowrap shadow-sm cursor-pointer border border-slate-800">Subscribe</button>
              </div>
            </div>
            
            {/* Link Columns */}
            <div className="col-span-1">
              <h4 className="font-bold text-slate-500 mb-6 uppercase tracking-widest text-xs">Platform</h4>
              <ul className="space-y-4 text-sm text-slate-400 font-medium">
                <li><Link href="/global-payroll" className="hover:text-cyan-400 hover:translate-x-1 transition-all inline-block">Union Payroll</Link></li>
                <li><Link href="/core-hr" className="hover:text-cyan-400 hover:translate-x-1 transition-all inline-block">Compliance Hub</Link></li>
                <li><Link href="/mycrestmind-hire" className="hover:text-cyan-400 hover:translate-x-1 transition-all inline-block">MyCrestMind Dispatch</Link></li>
                <li><Link href="/it-devices" className="hover:text-cyan-400 hover:translate-x-1 transition-all inline-block">PPE Management</Link></li>
                <li><Link href="/benefits" className="hover:text-cyan-400 hover:translate-x-1 transition-all inline-block">Field Benefits</Link></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="font-bold text-slate-500 mb-6 uppercase tracking-widest text-xs">Resources</h4>
              <ul className="space-y-4 text-sm text-slate-400 font-medium">
                <li><Link href="#" className="hover:text-cyan-400 hover:translate-x-1 transition-all inline-block">Dispatch Blog</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 hover:translate-x-1 transition-all inline-block">Field Case Studies</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 hover:translate-x-1 transition-all inline-block">Safety Library</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 hover:translate-x-1 transition-all inline-block">Developer API</Link></li>
                <li><Link href="#" className="flex items-center gap-2 hover:text-cyan-400 hover:translate-x-1 transition-all w-fit">Community <span className="bg-cyan-500/20 text-cyan-300 text-[9px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wide border border-cyan-500/30">New</span></Link></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="font-bold text-slate-500 mb-6 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-4 text-sm text-slate-400 font-medium">
                <li><Link href="/about" className="hover:text-cyan-400 hover:translate-x-1 transition-all inline-block">About Us</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 hover:translate-x-1 transition-all inline-block">Careers</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 hover:translate-x-1 transition-all inline-block">Safety Integrity</Link></li>
                <li><Link href="/contact" className="hover:text-cyan-400 hover:translate-x-1 transition-all inline-block">Contact dispatch</Link></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="font-bold text-slate-500 mb-6 uppercase tracking-widest text-xs">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-400 font-medium">
                <li><Link href="#" className="hover:text-cyan-400 hover:translate-x-1 transition-all inline-block">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 hover:translate-x-1 transition-all inline-block">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 hover:translate-x-1 transition-all inline-block">Compliance Guarantee</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500 font-medium relative">
            <p>© {new Date().getFullYear()} MyCrestMind Technical Services Inc. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-cyan-400 transition-colors">Safety Board</Link>
              <Link href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</Link>
              <Link href="#" className="hover:text-cyan-400 transition-colors">System Status</Link>
            </div>
          </div>
        </div>

        {/* Massive Background Text */}
        <div className="w-full flex justify-center mt-4 md:-mt-8 select-none pointer-events-none opacity-[0.01] overflow-hidden">
          <h1 className="text-[12vw] leading-none font-bold tracking-tighter whitespace-nowrap text-white font-logo">MYCRESTMIND PLATFORM</h1>
        </div>
      </footer>
    </div>
  );
}
