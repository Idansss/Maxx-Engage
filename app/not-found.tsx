"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/effects/MagneticButton";

function BrokenPhoneSVG() {
  return (
    <svg
      viewBox="0 0 200 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-64 w-auto"
      aria-hidden="true"
    >
      {/* Phone body */}
      <rect x="20" y="10" width="160" height="340" rx="32" stroke="rgba(160,32,240,0.5)" strokeWidth="3" fill="rgba(160,32,240,0.04)" />
      {/* Notch */}
      <rect x="70" y="18" width="60" height="8" rx="4" fill="rgba(160,32,240,0.3)" />
      {/* Screen cracks */}
      <motion.path
        d="M100 80 L70 140 L90 140 L60 220"
        stroke="#A020F0"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      />
      <motion.path
        d="M100 80 L130 130 L110 130 L145 200"
        stroke="#A020F0"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      />
      <motion.path
        d="M90 140 L75 165 L85 165 L65 195"
        stroke="#B83AFF"
        strokeWidth="1"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
      />
      {/* 404 text on screen */}
      <motion.text
        x="100" y="270"
        textAnchor="middle"
        fill="rgba(160,32,240,0.6)"
        fontFamily="monospace"
        fontSize="14"
        fontWeight="bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        404
      </motion.text>
      {/* Home button */}
      <circle cx="100" cy="330" r="12" stroke="rgba(160,32,240,0.4)" strokeWidth="2" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--bg-primary)] px-4 pt-20 text-center">
      <BrokenPhoneSVG />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8"
      >
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="heading-2 mb-4 text-[var(--text-primary)]">
          Screen&apos;s cracked. Page not found.
        </h1>
        <p className="mb-10 text-[var(--text-secondary)]">
          This URL doesn&apos;t exist — but our contact form does.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <MagneticButton>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[#A020F0] px-8 text-base font-semibold text-white transition-colors hover:bg-[#B83AFF]"
            >
              Take me home
            </Link>
          </MagneticButton>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-[var(--border-strong)] px-8 text-base font-medium text-[var(--text-primary)] transition-all hover:border-[#A020F0] hover:text-[#A020F0]"
          >
            Start a project
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
