import type { Metadata } from "next";
import { motion } from "framer-motion";
import { services } from "@/lib/data/services";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack web development, e-commerce builds, web apps, dashboards, UI/UX design, and data analytics. Built end-to-end by Maxx Engage.",
};

const pricingTiers = [
  {
    name: "Fix & Rescue",
    price: "From $300",
    desc: "For existing sites that need diagnosis, fixing, or performance work.",
    features: ["Bug audit & triage", "Performance fixes", "Security patching", "Documentation handover"],
    cta: "Get a diagnosis",
  },
  {
    name: "Build",
    price: "From $1,500",
    desc: "For new products — storefronts, web apps, marketing sites, dashboards.",
    features: ["Discovery call & scoping", "Design + prototyping", "Full build & testing", "Launch support & 30-day warranty"],
    cta: "Start a project",
    highlight: true,
  },
  {
    name: "Retainer",
    price: "From $800/mo",
    desc: "For teams who need ongoing development, maintenance, or data work.",
    features: ["Priority response", "Dedicated Slack channel", "Monthly dev hours", "Quarterly strategy review"],
    cta: "Talk to us",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[var(--bg-primary)] pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-4">What we do</p>
          <h1 className="display-lg max-w-3xl text-[var(--text-primary)]">
            Six disciplines. <span className="text-[#A020F0]">No outsourcing.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--text-secondary)]">
            Every capability under one roof, delivered by the people on your call —
            not subcontracted out after the contract is signed.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <div className="bg-[var(--bg-secondary)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-[var(--bg-primary)] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Pricing"
            heading="Transparent. Fixed. No surprises."
            subheading="We work on fixed fees — you know the number before we start. No hourly billing, no scope creep invoices."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pricingTiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-8 ${
                  tier.highlight
                    ? "border-[rgba(160,32,240,0.5)] bg-[rgba(160,32,240,0.05)] shadow-[0_0_40px_rgba(160,32,240,0.1)]"
                    : "border-[var(--border-subtle)] bg-[var(--surface-elevated)]"
                }`}
              >
                {tier.highlight && (
                  <span className="mb-4 inline-block rounded-full bg-[rgba(160,32,240,0.15)] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#A020F0]">
                    Most popular
                  </span>
                )}
                <h3 className="mb-2 text-xl font-bold text-[var(--text-primary)]">{tier.name}</h3>
                <p className="mb-2 font-mono text-2xl font-bold text-[#A020F0]">{tier.price}</p>
                <p className="mb-6 text-sm text-[var(--text-secondary)]">{tier.desc}</p>
                <ul className="mb-8 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                      <Check className="h-4 w-4 shrink-0 text-[#10B981]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full rounded-xl py-3 text-center text-sm font-semibold transition-colors ${
                    tier.highlight
                      ? "bg-[#A020F0] text-white hover:bg-[#B83AFF]"
                      : "border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[#A020F0] hover:text-[#A020F0]"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FAQ />
      <ContactCTA />
    </>
  );
}
