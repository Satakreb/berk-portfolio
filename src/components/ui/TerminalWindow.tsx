"use client";

import { ReactNode } from "react";

interface TerminalWindowProps {
  children: ReactNode;
  title?: string;
}

export default function TerminalWindow({
  children,
  title = "berk@portfolio",
}: TerminalWindowProps) {
  return (
    <div className="rounded-xl border border-border bg-[#0d0d0d] overflow-hidden shadow-2xl shadow-black/50">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-surface/50">
        {/* Window dots — no red, using gray/yellow/green */}
        <span className="w-3 h-3 rounded-full bg-muted/30" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/40" />
        <span className="w-3 h-3 rounded-full bg-emerald-500/40" />
        <span className="flex-1 text-center text-xs font-code text-muted/40 select-none">
          {title}
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 sm:p-6 min-h-[240px] font-code text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
