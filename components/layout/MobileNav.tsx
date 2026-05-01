"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { cn } from "@/lib/utils";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] md:hidden"
      >
        <Menu className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex flex-col bg-[var(--bg-primary)] md:hidden"
            aria-modal="true"
            role="dialog"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-6 py-4">
              <span className="font-mono text-xs tracking-widest text-[var(--text-muted)] uppercase">Menu</span>
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Links */}
            <nav className="flex flex-1 flex-col justify-center px-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: i * 0.07, duration: 0.3 } }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block border-b border-[var(--border-subtle)] py-5 text-3xl font-bold tracking-tight transition-colors",
                      pathname === link.href ? "text-[#A020F0]" : "text-[var(--text-primary)] hover:text-[#A020F0]"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.3 } }}
              className="p-8"
            >
              <MagneticButton>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex h-14 w-full items-center justify-center rounded-xl bg-[#A020F0] text-base font-semibold text-white transition-colors hover:bg-[#B83AFF]"
                >
                  Start a project
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
