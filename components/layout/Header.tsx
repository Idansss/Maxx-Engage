"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = mounted && theme === "light";
  const logoSrc = isLight ? "/logos/maxx-engage-light.png" : "/logos/maxx-engage-dark.png";
  const logoBlend = isLight ? "mix-blend-multiply" : "mix-blend-screen";

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-[100] transition-all duration-300",
        scrolled
          ? "border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#A020F0] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to main content
      </a>

      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <Link href="/" aria-label="Maxx Engage — home" className="relative z-10 flex items-center">
          <div className="relative h-8 w-36">
            <Image
              src={logoSrc}
              alt="Maxx Engage"
              fill
              className={`object-contain object-left ${logoBlend}`}
              priority
              sizes="144px"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-[var(--text-primary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-3 right-3 h-px bg-[#A020F0]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden md:flex" />
          <MagneticButton className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-[#A020F0] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#B83AFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0]"
            >
              Start a project
            </Link>
          </MagneticButton>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
