"use client";
import { motion } from "framer-motion";
import { ArrowRight, Code2, ShoppingBag, LayoutDashboard, Wrench, Palette, BarChart3 } from "lucide-react";
import type { Service } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, ShoppingBag, LayoutDashboard, Wrench, Palette, BarChart3,
};

interface ServiceCardProps {
  service: Service;
  index: number;
  large?: boolean;
}

export function ServiceCard({ service, index, large = false }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-6 transition-all duration-300 hover:border-[rgba(160,32,240,0.5)] hover:shadow-[0_0_30px_rgba(160,32,240,0.12)]",
        large && "lg:p-8"
      )}
    >
      {/* Icon */}
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(160,32,240,0.2)] bg-[rgba(160,32,240,0.08)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[rgba(160,32,240,0.15)]">
        <Icon className="h-5 w-5 text-[#A020F0]" />
      </div>

      {/* Title + arrow */}
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className={cn("font-semibold text-[var(--text-primary)]", large ? "text-xl" : "text-base")}>
          {service.title}
        </h3>
        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--text-muted)] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#A020F0]" />
      </div>

      <p className="mb-5 text-sm leading-relaxed text-[var(--text-secondary)]">{service.desc}</p>

      {/* Deliverables */}
      <ul className="space-y-1.5">
        {service.deliverables.map((d) => (
          <li key={d} className="flex items-center gap-2 font-mono text-[11px] text-[var(--text-muted)]">
            <span className="h-1 w-1 rounded-full bg-[#A020F0]" aria-hidden="true" />
            {d}
          </li>
        ))}
      </ul>

      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top_left,rgba(160,32,240,0.05),transparent_60%)]" />
    </motion.div>
  );
}
