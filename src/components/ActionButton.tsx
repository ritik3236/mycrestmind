"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  loadingLabel?: string;
  successMessage?: string;
  className?: string;
}

export function ActionButton({ 
  icon, 
  label, 
  loadingLabel = "Loading...", 
  successMessage = "Success!",
  className = "bg-primary-600 hover:bg-primary-700 text-white"
}: ActionButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    // Start infinite loading screen takeover
    setIsLoading(true);
  };

  return (
    <>
      <button 
        onClick={handleClick}
        className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${className}`}
      >
        {icon}
        {label}
      </button>

      {/* Infinite Screen Takeover Loading - Small Variant */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/20 dark:bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 px-5 py-3 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <Loader2 className="w-5 h-5 text-primary-600 animate-spin" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}
