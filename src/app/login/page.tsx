"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        toast.error("Invalid credentials", {
          description: "Please use the required password to login.",
        });
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex font-sans bg-[#050507]">
      {/* Left Side - Visual (Stunning 3D Render) */}
      <div className="hidden lg:flex lg:w-[45%] relative overflow-hidden flex-col justify-between p-12 bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/login-bg.png" 
            alt="Abstract dark glass 3D render" 
            fill 
            className="object-cover scale-105 opacity-80" 
            priority 
            quality={100}
          />
          {/* Subtle gradient overlay to ensure text is perfectly readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg/5 mix-blend-color"></div>
        </div>

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-12">
              <span className="font-extrabold text-3xl text-white tracking-tight drop-shadow-lg" style={{ fontFamily: 'var(--font-logo)' }}>MyCrestMind</span>
            </Link>
          </div>

          <div className="relative z-10 mt-auto mb-8 max-w-lg">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight drop-shadow-2xl">
              Elevate your field workforce.
            </h1>
            <p className="text-lg text-slate-300 font-semibold drop-shadow-xl">
              Securely manage dispatch, compliance, and union payroll from a single unified platform.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form (Light Brutalist) */}
      <div className="w-full lg:w-[55%] flex items-center justify-center bg-[#050507] p-8 sm:p-12 relative border-l border-slate-900">
        <div className="w-full max-w-[400px] space-y-8 relative z-10">
          <div className="text-center lg:text-left">
            <Link href="/" className="inline-block lg:hidden mb-8">
              <span className="font-extrabold text-3xl text-white tracking-tight" style={{ fontFamily: 'var(--font-logo)' }}>MyCrestMind</span>
            </Link>
            <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight font-logo">Welcome back</h2>
            <p className="text-slate-500 font-semibold text-sm">Sign in to your account to continue.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wider">
                  Work Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-900 bg-black text-slate-200 font-semibold text-sm focus:bg-slate-950 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Password
                  </label>
                  <a href="#" className="text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer">
                    Forgot?
                  </a>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-900 bg-black text-slate-200 font-semibold text-sm focus:bg-slate-950 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg hover:from-cyan-400 hover:to-violet-400 disabled:bg-slate-900 disabled:text-slate-400 text-white font-bold py-3.5 rounded transition-all flex items-center justify-center gap-2 shadow-sm text-sm cursor-pointer"
            >
              {loading ? (
                <>Signing in... <Loader2 className="w-4 h-4 animate-spin" /></>
              ) : (
                <>Sign In <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-900"></div>
            </div>
            <div className="relative flex justify-center text-xs font-bold">
              <span className="px-4 bg-[#050507] text-slate-400 uppercase tracking-wider text-[10px]">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-2.5 bg-black border border-slate-900 rounded-lg hover:border-slate-350 transition-colors font-bold text-slate-400 shadow-sm text-sm cursor-pointer">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 bg-black border border-slate-900 rounded-lg hover:border-slate-350 transition-colors font-bold text-slate-400 shadow-sm text-sm cursor-pointer">
              <svg className="w-4 h-4" viewBox="0 0 21 21">
                <path fill="#f25022" d="M0 0h10v10H0z" />
                <path fill="#7fba00" d="M11 0h10v10H11z" />
                <path fill="#00a4ef" d="M0 11h10v10H0z" />
                <path fill="#ffb900" d="M11 11h10v10H11z" />
              </svg>
              Microsoft
            </button>
          </div>
          
          <p className="text-center text-xs font-bold text-slate-450 mt-10">
            Trouble logging in? <a href="#" className="text-slate-200 hover:underline cursor-pointer">Contact your Dispatcher</a>
          </p>
        </div>
      </div>
    </div>
  );
}
