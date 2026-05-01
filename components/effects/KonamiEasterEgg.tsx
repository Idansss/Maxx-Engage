"use client";
import { useEffect } from "react";
import confetti from "canvas-confetti";

const KONAMI = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a",
];

export function KonamiEasterEgg() {
  useEffect(() => {
    let seq: string[] = [];

    const onKey = (e: KeyboardEvent) => {
      seq.push(e.key);
      if (seq.length > KONAMI.length) seq.shift();
      if (seq.join(",") === KONAMI.join(",")) {
        seq = [];
        // Brand-purple confetti burst
        confetti({
          particleCount: 180,
          spread: 100,
          startVelocity: 55,
          colors: ["#A020F0", "#B83AFF", "#E9D5FF", "#7C3AED", "#FAFAFA"],
          origin: { y: 0.55 },
        });
        confetti({
          particleCount: 80,
          angle: 60,
          spread: 70,
          origin: { x: 0, y: 0.6 },
          colors: ["#A020F0", "#B83AFF"],
        });
        confetti({
          particleCount: 80,
          angle: 120,
          spread: 70,
          origin: { x: 1, y: 0.6 },
          colors: ["#A020F0", "#B83AFF"],
        });
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return null;
}
