"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    // Only on pointer:fine (desktop) devices
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (prefersReduced) return;

    document.documentElement.classList.add("cursor-active");

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId: number;
    let isHovering = false;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animateRing);
    };
    rafId = requestAnimationFrame(animateRing);

    const onEnterLink = () => {
      isHovering = true;
      ring.classList.add("scale-[2]", "!bg-[#A020F0]", "opacity-80");
      dot.classList.add("scale-[1.5]");
    };
    const onLeaveLink = () => {
      isHovering = false;
      ring.classList.remove("scale-[2]", "!bg-[#A020F0]", "opacity-80");
      dot.classList.remove("scale-[1.5]");
    };

    document.addEventListener("mousemove", onMove);

    const bindHoverables = () => {
      document.querySelectorAll("a, button, [role='button'], input, select, textarea, label")
        .forEach((el) => {
          el.addEventListener("mouseenter", onEnterLink);
          el.addEventListener("mouseleave", onLeaveLink);
        });
    };
    bindHoverables();

    // Rebind on DOM changes for dynamically added elements
    const observer = new MutationObserver(bindHoverables);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
      document.documentElement.classList.remove("cursor-active");
    };
  }, [prefersReduced]);

  if (prefersReduced) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-[#A020F0] transition-transform duration-100 will-change-transform"
        style={{ transform: "translate(-100px, -100px) translate(-50%, -50%)" }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 rounded-full border-2 border-[#A020F0] opacity-50 transition-all duration-300 will-change-transform"
        style={{ transform: "translate(-100px, -100px) translate(-50%, -50%)" }}
      />
    </>
  );
}
