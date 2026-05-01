// components/effects/CustomCursor.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  // Raw cursor position — dot follows this exactly
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Trailing ring — tight spring so it catches up fast
  const ringX = useSpring(cursorX, { stiffness: 500, damping: 32, mass: 0.4 });
  const ringY = useSpring(cursorY, { stiffness: 500, damping: 32, mass: 0.4 });

  useEffect(() => {
    // Don't render on touch devices or when reduced motion is on
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReduced) {
      setIsEnabled(false);
      return;
    }
    setIsEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);

      // Detect if hovering over an interactive element
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a, button, [role='button'], input, textarea, select, [data-cursor='pointer']") !== null;
      setIsPointer(isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!isEnabled) return null;

  return (
    <>
      {/* Dot — follows cursor with zero delay */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-[var(--brand-purple)] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          width: isPointer ? 0 : 8,
          height: isPointer ? 0 : 8,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          transition: "width 0.2s, height 0.2s, opacity 0.2s",
        }}
      />
      {/* Ring — trails dot with tight spring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border-2 border-[var(--brand-purple)]"
        style={{
          x: ringX,
          y: ringY,
          width: isPointer ? 44 : 36,
          height: isPointer ? 44 : 36,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          backgroundColor: isPointer ? "var(--brand-purple)" : "transparent",
          transition: "width 0.25s, height 0.25s, background-color 0.25s, opacity 0.2s",
        }}
      />
    </>
  );
}
