"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ eyebrow, heading, subheading, align = "center", className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "mx-auto mb-14",
        align === "center" ? "text-center" : "text-left",
        align === "center" && "max-w-3xl",
        className
      )}
    >
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="heading-2 text-[var(--text-primary)]">{heading}</h2>
      {subheading && (
        <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
          {subheading}
        </p>
      )}
    </motion.div>
  );
}
