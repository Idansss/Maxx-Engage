"use client";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setCurrent(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <section aria-labelledby="testimonials-heading" className="bg-[var(--bg-secondary)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What clients say"
          heading="Words from the people we built for."
        />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 touch-pan-y">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_60%]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-8 sm:p-10"
                >
                  <Quote className="mb-6 h-8 w-8 text-[rgba(160,32,240,0.4)]" aria-hidden="true" />
                  <blockquote className="mb-6 text-lg font-medium italic leading-relaxed text-[var(--text-primary)] sm:text-xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <footer>
                    <p className="font-semibold text-[var(--text-primary)]">{t.name}</p>
                    <p className="mt-1 font-mono text-xs text-[var(--text-muted)]">
                      {t.title} · {t.company}
                    </p>
                  </footer>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors hover:border-[#A020F0] hover:text-[#A020F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0]"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === current}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? "w-6 bg-[#A020F0]" : "w-1.5 bg-[var(--border-strong)]"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors hover:border-[#A020F0] hover:text-[#A020F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0]"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
