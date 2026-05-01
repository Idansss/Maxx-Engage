"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { Mail } from "lucide-react";

export function ContactCTA() {
  return (
    <section aria-label="Contact call to action" className="relative overflow-hidden bg-[var(--bg-secondary)] py-28 sm:py-36">
      {/* Purple gradient background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(160,32,240,0.15) 0%, transparent 60%, rgba(184,58,255,0.08) 100%)" }}
        aria-hidden="true"
      />
      <div className="glow-blob" aria-hidden="true"
        style={{ width: 500, height: 500, background: "rgba(160,32,240,0.2)", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="eyebrow mb-6">Let&apos;s talk</p>
          <h2 className="display-lg mb-6 text-[var(--text-primary)]">
            Have a project? Have a problem?{" "}
            <span className="text-[#A020F0]">Either way — let&apos;s talk.</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-[var(--text-secondary)]">
            We respond within 24 hours. No sales funnels, no forms to fill out,
            no account manager — just a direct conversation with the people who&apos;ll do the work.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-white px-10 text-base font-semibold text-black transition-all hover:bg-[var(--brand-purple-soft)] hover:text-[#A020F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Start a project
              </Link>
            </MagneticButton>
            <a
              href="mailto:abassibrahim591@gmail.com"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-white/20 px-8 text-base font-medium text-white/80 transition-all hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Mail className="h-4 w-4" /> Email us directly
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
