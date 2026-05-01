"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { ArrowDown } from "lucide-react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const heroWords = [
  { text: "We", line: 0 }, { text: "build", line: 0 }, { text: "the", line: 0 }, { text: "web.", line: 0, accent: false },
  { text: "We", line: 1 }, { text: "fix", line: 1 }, { text: "the", line: 1 }, { text: "web.", line: 1 },
  { text: "We", line: 2 }, { text: "engineer", line: 2 }, { text: "what's", line: 2 }, { text: "next.", line: 2, accent: true },
];

const screenSlides = [
  { label: "Full-stack engineering", color: "#A020F0" },
  { label: "E-commerce storefronts", color: "#7C3AED" },
  { label: "Trading dashboards", color: "#6D28D9" },
  { label: "School portals", color: "#5B21B6" },
];

export function Hero() {
  const prefersReduced = useReducedMotion();
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (prefersReduced) return;
    const iv = setInterval(() => setSlideIndex((i) => (i + 1) % screenSlides.length), 3000);
    return () => clearInterval(iv);
  }, [prefersReduced]);

  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.04, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    }),
  };

  const lines = [
    heroWords.filter(w => w.line === 0),
    heroWords.filter(w => w.line === 1),
    heroWords.filter(w => w.line === 2),
  ];

  return (
    <section
      id="main-content"
      aria-label="Hero"
      className="relative flex min-h-svh items-center overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Background grid */}
      <div className="animated-grid absolute inset-0 opacity-40" aria-hidden="true" />

      {/* Purple glow blob */}
      <div
        className="glow-blob"
        aria-hidden="true"
        style={{ width: 600, height: 600, background: "rgba(160, 32, 240, 0.25)", top: "-10%", left: "-5%" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
          {/* Headline — 60% */}
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
              className="eyebrow mb-6"
            >
              Lagos · Remote globally
            </motion.p>

            <h1 className="display-xl mb-6 text-[var(--text-primary)]" aria-label="We build the web. We fix the web. We engineer what's next.">
              {lines.map((lineWords, li) => (
                <span key={li} className="block">
                  {lineWords.map((word, wi) => {
                    const globalIndex = lines.slice(0, li).reduce((s, l) => s + l.length, 0) + wi;
                    return (
                      <motion.span
                        key={wi}
                        custom={globalIndex}
                        variants={prefersReduced ? undefined : wordVariants}
                        initial="hidden"
                        animate="visible"
                        className={word.accent ? "text-[#A020F0] drop-shadow-[0_0_30px_rgba(160,32,240,0.6)]" : ""}
                        style={{ display: "inline-block", marginRight: "0.25em" }}
                      >
                        {word.text}
                      </motion.span>
                    );
                  })}
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.5 } }}
              className="mb-10 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]"
            >
              Maxx Engage is a 3-person Lagos-based studio shipping production websites, web apps,
              and data tools for clients worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.85, duration: 0.5 } }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton>
                <Link
                  href="/work"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-[#A020F0] px-8 text-base font-semibold text-white transition-colors hover:bg-[#B83AFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0]"
                >
                  See our work
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-transparent px-8 text-base font-semibold text-[var(--text-primary)] transition-all hover:border-[#A020F0] hover:text-[#A020F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0]"
                >
                  Start a project
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Phone mockup — 40% */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }}
            className="hidden lg:col-span-2 lg:flex lg:justify-center"
            aria-hidden="true"
          >
            <div className="phone-frame relative h-[480px] w-[240px] shadow-[0_0_80px_rgba(160,32,240,0.2)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 mt-8 flex flex-col items-center justify-center rounded-[calc(2.5rem-4px)] p-6"
                  style={{ background: `linear-gradient(135deg, ${screenSlides[slideIndex].color}20, ${screenSlides[slideIndex].color}05)` }}
                >
                  <div
                    className="mb-4 h-12 w-12 rounded-xl"
                    style={{ background: `linear-gradient(135deg, ${screenSlides[slideIndex].color}, ${screenSlides[slideIndex].color}88)` }}
                  />
                  <p className="text-center text-sm font-medium text-[var(--text-primary)]">
                    {screenSlides[slideIndex].label}
                  </p>
                  <div className="mt-6 w-full space-y-2">
                    {[40, 70, 55, 80].map((w, i) => (
                      <div key={i} className="h-1.5 rounded-full bg-[var(--border-subtle)]">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${w}%`, background: screenSlides[slideIndex].color }}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.2, duration: 0.5 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-[var(--text-muted)]" />
        </motion.div>
        <span className="font-mono text-[10px] tracking-widest text-[var(--text-muted)] uppercase">scroll</span>
      </motion.div>
    </section>
  );
}
