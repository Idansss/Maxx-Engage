// components/shared/Logo.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface LogoProps {
  href?: string;          // wrap in Link if provided. Default "/".
  width?: number;         // pixel width. Default 140.
  height?: number;        // pixel height. Default 40.
  className?: string;
  priority?: boolean;     // pass true for above-fold (header, hero). Default false.
  forceVariant?: "light" | "dark"; // override theme. Useful for the press kit grid.
}

export function Logo({
  href = "/",
  width = 140,
  height = 40,
  className = "",
  priority = false,
  forceVariant,
}: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // While hydrating, render a transparent placeholder of the same dimensions
  // to avoid CLS and SSR/CSR mismatch flicker.
  if (!mounted) {
    return (
      <div
        style={{ width, height }}
        className={className}
        aria-hidden="true"
      />
    );
  }

  // Pick the right asset based on the active theme.
  // Logo uses light variant on light bg, dark variant on dark bg.
  const variant = forceVariant ?? (resolvedTheme === "dark" ? "dark" : "light");
  const src = variant === "dark" ? "/logos/maxx-engage-dark.png" : "/logos/maxx-engage-light.png";

  const img = (
    <Image
      src={src}
      alt="Maxx Engage"
      width={width}
      height={height}
      priority={priority}
      unoptimized
      className={`block ${className}`}
      style={{ width, height }}
    />
  );

  if (href) {
    return (
      <Link href={href} aria-label="Maxx Engage — home" className="inline-flex items-center">
        {img}
      </Link>
    );
  }
  return img;
}
