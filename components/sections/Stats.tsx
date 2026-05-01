"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/lib/hooks/useCountUp";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  enabled: boolean;
}

function StatItem({ value, suffix, label, enabled }: StatProps) {
  const count = useCountUp(value, 2000, enabled);
  const prefersReduced = useReducedMotion();
  const display = prefersReduced ? value : count;

  return (
    <div className="flex flex-col items-center text-center">
      <span className="font-mono text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">
        {display}{suffix}
      </span>
      <span className="mt-2 text-sm text-[var(--text-secondary)]">{label}</span>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { value: 20, suffix: "+", label: "Projects shipped" },
    { value: 5, suffix: "+", label: "Years combined experience" },
    { value: 3, suffix: "", label: "Specialists, zero middle-management" },
    { value: 100, suffix: "%", label: "Code we own and ship" },
  ];

  return (
    <section aria-label="Studio statistics" className="bg-[var(--bg-primary)] py-20 border-y border-[var(--border-subtle)]">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} enabled={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
