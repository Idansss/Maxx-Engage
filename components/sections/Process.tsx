"use client";
import { motion } from "framer-motion";
import { Search, Pencil, Code2, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

const steps = [
  { number: "01", icon: Search, title: "Discover", desc: "A scoped call, a business audit, and a look at your existing setup — before a single line is written." },
  { number: "02", icon: Pencil, title: "Design", desc: "Wireframes, interactive prototypes, and a clear sign-off before we open a code editor." },
  { number: "03", icon: Code2, title: "Build", desc: "Focused sprints with weekly demos and transparent commit history. No black-box development." },
  { number: "04", icon: Rocket, title: "Ship & support", desc: "Launch, monitoring, and a post-launch window. We don't disappear when the invoice is paid." },
];

export function Process() {
  return (
    <section aria-labelledby="process-heading" className="bg-[var(--bg-secondary)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How we work"
          heading="From first call to going live."
          subheading="A process built for clarity, not theatre."
        />

        <div className="relative">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute left-0 right-0 top-8 hidden h-px origin-left bg-gradient-to-r from-[#A020F0] via-[#B83AFF] to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative"
                >
                  {/* Step number + icon */}
                  <div className="mb-4 flex items-start gap-3">
                    <span className="font-mono text-4xl font-bold text-[rgba(160,32,240,0.2)]">{step.number}</span>
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(160,32,240,0.3)] bg-[rgba(160,32,240,0.08)]">
                      <Icon className="h-5 w-5 text-[#A020F0]" />
                    </div>
                  </div>
                  <h3 className="mb-2 font-semibold text-[var(--text-primary)]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
