"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    // Only show on first visit per session
    const seen = sessionStorage.getItem("maxx-loaded");
    if (seen) { setVisible(false); return; }

    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("maxx-loaded", "1");
    }, prefersReduced ? 0 : 1400);

    return () => clearTimeout(timer);
  }, [prefersReduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0A0A0B]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }}
            className="relative h-20 w-48"
          >
            <Image
              src="/logos/maxx-engage-dark.png"
              alt="Maxx Engage"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
            className="mt-4 font-mono text-xs tracking-[0.2em] text-[#71717A] uppercase"
          >
            We build the web.
          </motion.p>
          {/* Progress bar */}
          <motion.div
            className="absolute bottom-8 left-1/2 h-px w-48 -translate-x-1/2 overflow-hidden rounded-full bg-[#1A1A1F]"
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%", transition: { duration: 1.2, ease: "easeInOut" } }}
              className="h-full bg-gradient-to-r from-[#A020F0] to-[#B83AFF]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
