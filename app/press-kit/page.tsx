import type { Metadata } from "next";
import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Press Kit",
  description: "Maxx Engage press kit — logos, brand colors, and company information for journalists and partners.",
  robots: { index: false },
};

const colors = [
  { name: "Brand Purple", hex: "#A020F0", usage: "Primary brand color, CTAs, accents" },
  { name: "Purple Hover", hex: "#B83AFF", usage: "Hover states, gradients" },
  { name: "Purple Soft", hex: "#E9D5FF", usage: "Soft backgrounds, light mode accents" },
  { name: "Dark BG", hex: "#0A0A0B", usage: "Primary dark background" },
  { name: "Light BG", hex: "#FFFFFF", usage: "Primary light background" },
  { name: "Success", hex: "#10B981", usage: "Availability indicator, success states" },
];

export default function PressKitPage() {
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow mb-4">Press kit</p>
        <h1 className="heading-2 mb-4 text-[var(--text-primary)]">Maxx Engage — Brand Assets</h1>
        <p className="mb-12 text-lg text-[var(--text-secondary)]">
          For journalists, partners, or anyone covering Maxx Engage. Use these assets
          as-is — don&apos;t modify the logo, recolor it, or add effects.
        </p>

        {/* About */}
        <section className="mb-12" aria-labelledby="about-heading">
          <h2 id="about-heading" className="mb-4 font-mono text-[10px] uppercase tracking-widest text-[#A020F0]">
            About Maxx Engage
          </h2>
          <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-6">
            <p className="leading-relaxed text-[var(--text-secondary)]">
              Maxx Engage is a three-person web development studio based in Lagos, Nigeria.
              Founded by Tunde Aremu (Data & Strategy), Olaoluwa Olagbemi (Backend & CMS),
              and Abass Ibrahim (Full-Stack & UI/UX), the studio ships production-grade websites,
              web applications, e-commerce storefronts, and data tools for clients in Nigeria
              and worldwide. The studio&apos;s name reflects its commitment to maximum engagement —
              with the craft, with clients, and with the problems worth solving.
            </p>
          </div>
        </section>

        {/* Logos */}
        <section className="mb-12" aria-labelledby="logos-heading">
          <h2 id="logos-heading" className="mb-4 font-mono text-[10px] uppercase tracking-widest text-[#A020F0]">
            Logo files
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[#0A0A0B] p-8 flex flex-col items-center gap-4">
              <div className="text-white text-lg font-bold">maxx engage</div>
              <p className="font-mono text-xs text-[var(--text-muted)]">Dark version (purple + white)</p>
              <a
                href="/logos/maxx-engage-dark.png"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] px-4 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:border-[#A020F0] hover:text-[#A020F0]"
              >
                <Download className="h-4 w-4" /> Download PNG
              </a>
            </div>
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-white p-8 flex flex-col items-center gap-4">
              <div className="text-[#09090B] text-lg font-bold">maxx engage</div>
              <p className="font-mono text-xs text-[#71717A]">Light version (purple + black)</p>
              <a
                href="/logos/maxx-engage-light.png"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-[rgba(0,0,0,0.15)] px-4 py-2 text-sm text-[#52525B] transition-colors hover:border-[#A020F0] hover:text-[#A020F0]"
              >
                <Download className="h-4 w-4" /> Download PNG
              </a>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section className="mb-12" aria-labelledby="colors-heading">
          <h2 id="colors-heading" className="mb-4 font-mono text-[10px] uppercase tracking-widest text-[#A020F0]">
            Brand colors
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {colors.map((color) => (
              <div key={color.hex} className="flex items-center gap-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-4">
                <div
                  className="h-10 w-10 shrink-0 rounded-lg border border-[var(--border-subtle)]"
                  style={{ background: color.hex }}
                />
                <div>
                  <p className="font-medium text-sm text-[var(--text-primary)]">{color.name}</p>
                  <p className="font-mono text-xs text-[#A020F0]">{color.hex}</p>
                  <p className="text-xs text-[var(--text-muted)]">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section aria-labelledby="press-contact-heading">
          <h2 id="press-contact-heading" className="mb-4 font-mono text-[10px] uppercase tracking-widest text-[#A020F0]">
            Press contact
          </h2>
          <p className="text-[var(--text-secondary)]">
            For interview requests, partnerships, or media enquiries:{" "}
            <a href="mailto:abassibrahim591@gmail.com" className="text-[#A020F0] hover:underline">
              abassibrahim591@gmail.com
            </a>
          </p>
          <Link href="/" className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[#A020F0] transition-colors">
            <ExternalLink className="h-3.5 w-3.5" /> Visit maxxengage.vercel.app
          </Link>
        </section>
      </div>
    </div>
  );
}
