// components/effects/MagneticButton.tsx
"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;       // how strongly the button follows the cursor (0–1). Default 0.25.
  radius?: number;         // activation radius in pixels. Default 80.
  onClick?: () => void;
  as?: "button" | "a" | "div";
  href?: string;
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.12,
  radius = 80,
  onClick,
  as = "div",
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Tight spring — button settles fast, no rubber-banding
  const springX = useSpring(x, { stiffness: 350, damping: 25, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 350, damping: 25, mass: 0.4 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Disable on touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Only activate when cursor is within radius of button CENTER
      if (distance < radius) {
        // POSITIVE strength = button moves TOWARD cursor. This is the fix.
        x.set(dx * strength);
        y.set(dy * strength);
        setIsHovered(true);
      } else {
        x.set(0);
        y.set(0);
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
      setIsHovered(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y, radius, strength]);

  const Component = motion[as] as any;

  return (
    <motion.div ref={ref} style={{ x: springX, y: springY }} className="inline-block">
      <Component
        href={href}
        onClick={onClick}
        className={className}
        data-magnetic-hovered={isHovered}
      >
        {children}
      </Component>
    </motion.div>
  );
}
