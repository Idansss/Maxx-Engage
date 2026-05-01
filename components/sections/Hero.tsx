"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { ArrowRight, Code2, Globe, Zap } from "lucide-react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const stats = [
  { value: "40+", label: "Projects shipped" },
  { value: "98%", label: "Client satisfaction" },
  { value: "<24h", label: "Response time" },
];

const services = [
  {
    icon: Code2,
    title: "Full-stack engineering",
    desc: "Next.js · Node · Postgres · TypeScript",
  },
  {
    icon: Globe,
    title: "E-commerce & storefronts",
    desc: "Shopify · Headless · Custom builds",
  },
  {
    icon: Zap,
    title: "Dashboards & data tools",
    desc: "Real-time · Analytics · REST & GraphQL",
  },
];

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="main-content"
      aria-label="Hero"
      className="relative flex min-h-svh items-center overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Subtle grid */}
      <div className="animated-grid absolute inset-0 opacity-30" aria-hidden="true" />

      {/* Glow blobs */}
      <div
        className="glow-blob pointer-events-none"
        aria-hidden="true"
        style={{ width: 480, height: 480, background: "rgba(160,32,240,0.15)", top: "-12%", left: "-6%" }}
      />
      <div
        className="glow-blob pointer-events-none"
        aria-hidden="true"
        style={{ width: 260, height: 260, background: "rgba(160,32,240,0.09)", bottom: "8%", right: "4%", animationDelay: "5s" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* ── Left: copy ─────────────────────────────────── */}
          <div>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease } }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
              </span>
              <span className="font-mono text-xs text-[var(--text-secondary)]">
                Available · Lagos &amp; Remote
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="mb-6" aria-label="We build digital products that work.">
              <motion.span
                initial={prefersReduced ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.6, ease } }}
                className="block text-[2.75rem] font-[760] leading-[1.04] tracking-normal text-[var(--text-primary)] sm:text-[3.75rem] lg:text-[4.5rem]"
              >
                We build digital
              </motion.span>
              <motion.span
                initial={prefersReduced ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.18, duration: 0.6, ease } }}
                className="block text-[2.75rem] font-[760] leading-[1.04] tracking-normal text-[var(--text-primary)] sm:text-[3.75rem] lg:text-[4.5rem]"
              >
                products that{" "}
                <span className="italic text-[#A020F0] drop-shadow-[0_0_32px_rgba(160,32,240,0.45)]">
                  work.
                </span>
              </motion.span>
            </h1>

            {/* Sub-copy */}
            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5, ease } }}
              className="mb-10 max-w-[480px] text-[1.0625rem] leading-relaxed text-[var(--text-secondary)]"
            >
              A 3-person studio in Lagos shipping production websites, web apps,
              and data tools for clients worldwide. No account managers — just
              the engineers who build your product.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.42, duration: 0.5, ease } }}
              className="mb-12 flex flex-wrap gap-3"
            >
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#A020F0] px-7 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-[#B83AFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0]"
                >
                  Start a project <ArrowRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/work"
                  className="inline-flex h-12 items-center rounded-xl border border-[var(--border-strong)] px-7 text-[0.9375rem] font-semibold text-[var(--text-primary)] transition-all hover:border-[#A020F0] hover:text-[#A020F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0]"
                >
                  See our work
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.58, duration: 0.5 } }}
              className="flex gap-8 border-t border-[var(--border-subtle)] pt-6"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-[0.6875rem] text-[var(--text-muted)]">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: service cards ───────────────────────── */}
          <div className="hidden lg:flex lg:flex-col lg:gap-3" aria-hidden="true">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={prefersReduced ? false : { opacity: 0, x: 36 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.28 + i * 0.1, duration: 0.6, ease } }}
                className="group flex items-start gap-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-5 transition-all duration-300 hover:border-[#A020F0]/40 hover:bg-[var(--bg-tertiary)] hover:shadow-[0_0_24px_rgba(160,32,240,0.08)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#A020F0]/10 text-[#A020F0] transition-colors duration-300 group-hover:bg-[#A020F0]/20">
                  <svc.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">{svc.title}</p>
                  <p className="mt-0.5 font-mono text-[0.6875rem] text-[var(--text-muted)]">{svc.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Bottom accent card */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.58, duration: 0.6, ease } }}
              className="mt-1 flex items-center justify-between rounded-2xl border border-[#A020F0]/20 bg-[#A020F0]/5 px-5 py-4"
            >
              <span className="text-sm text-[var(--text-secondary)]">
                Trusted by founders across{" "}
                <span className="font-semibold text-[var(--text-primary)]">12+ countries</span>
              </span>
              <span className="font-mono text-xs text-[#A020F0]">✦</span>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll pill */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.0, duration: 0.5 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <motion.div
          animate={prefersReduced ? undefined : { y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-[var(--border-strong)] pt-2"
        >
          <div className="h-1.5 w-1 rounded-full bg-[var(--text-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
