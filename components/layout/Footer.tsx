"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XTwitterIcon } from "@/components/shared/SocialIcons";
import { ThemeToggle } from "./ThemeToggle";

export function Footer() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  useEffect(() => setMounted(true), []);

  const isLight = mounted && theme === "light";
  const logoSrc = isLight ? "/logos/maxx-engage-light.png" : "/logos/maxx-engage-dark.png";
  const logoBlend = isLight ? "mix-blend-multiply" : "mix-blend-screen";

  return (
    <footer className="relative border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Divider */}
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-[var(--border-subtle)]" />
          <span className="font-mono text-[#A020F0]">✦</span>
          <div className="h-px flex-1 bg-[var(--border-subtle)]" />
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="relative mb-4 h-8 w-36">
              <Image src={logoSrc} alt="Maxx Engage" fill className={`object-contain object-left ${logoBlend}`} sizes="144px" />
            </div>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              We build the web. We fix the web. We engineer what&apos;s next.
            </p>
            <p className="mt-3 font-mono text-xs text-[var(--text-muted)]">Lagos, Nigeria · Remote globally</p>

            {/* Live status */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
              </span>
              <span className="font-mono text-[10px] text-[var(--text-secondary)]">
                Available · responds within 24h
              </span>
            </div>
          </div>

          {/* Studio */}
          <div>
            <h3 className="mb-4 font-mono text-[10px] font-medium uppercase tracking-widest text-[var(--text-muted)]">
              Studio
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/work", label: "Work" },
                { href: "/services", label: "Services" },
                { href: "/team", label: "Team" },
                { href: "/blog", label: "Blog" },
                { href: "/press-kit", label: "Press Kit" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[#A020F0]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 font-mono text-[10px] font-medium uppercase tracking-widest text-[var(--text-muted)]">
              Connect
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:abassibrahim591@gmail.com" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[#A020F0]">
                  <Mail className="h-3.5 w-3.5" /> Email us
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Ghost912932" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[#A020F0]">
                  <XTwitterIcon className="h-3.5 w-3.5" /> X / Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/Lingz450" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[#A020F0]">
                  <GithubIcon className="h-3.5 w-3.5" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/abass-ibrahim" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[#A020F0]">
                  <LinkedinIcon className="h-3.5 w-3.5" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-mono text-[10px] font-medium uppercase tracking-widest text-[var(--text-muted)]">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[#A020F0]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-8 sm:flex-row">
          <p className="font-mono text-xs text-[var(--text-muted)]">
            © 2026 Maxx Engage.{" "}
            <span className="text-[var(--text-muted)]">Built in Lagos.</span>
            {" "}
            <span className="font-mono text-[#A020F0]">✦</span>
          </p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
