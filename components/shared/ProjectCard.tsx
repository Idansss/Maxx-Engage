"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  layout?: "row" | "grid";
}

export function ProjectCard({ project, index, layout = "grid" }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  if (layout === "row") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "group grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center",
          !isEven && "lg:grid-flow-dense"
        )}
      >
        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className={cn(!isEven && "lg:col-start-2")}
        >
          <Link href={`/work/${project.slug}`} className="block overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0]">
            <div
              className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--border-subtle)] transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              style={{ background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})` }}
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              )}
              {/* Overlay with project name */}
              <div className={cn("absolute inset-0 flex flex-col items-center justify-center p-8", project.image && "bg-black/35")}>
                <p className="font-mono text-xs tracking-widest text-white/40 uppercase mb-3">{project.category}</p>
                <h3 className="text-center text-2xl font-bold text-white/90">{project.name}</h3>
              </div>
              {/* Subtle grid */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px"
                }}
              />
            </div>
          </Link>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className={cn(!isEven && "lg:col-start-1 lg:row-start-1")}
        >
          <p className="eyebrow mb-3">0{index + 1}</p>
          <h3 className="heading-3 mb-3 text-[var(--text-primary)]">{project.name}</h3>
          <p className="mb-5 text-base leading-relaxed text-[var(--text-secondary)]">{project.tagline}</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-md bg-[var(--bg-tertiary)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-muted)]">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 font-medium text-[#A020F0] transition-all hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0] rounded"
            >
              View case study <ArrowUpRight className="h-4 w-4" />
            </Link>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-[var(--text-secondary)] underline-offset-4 transition-colors hover:text-[#A020F0] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0] rounded"
              >
                Live site <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            )}
          </div>
        </motion.div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] transition-colors hover:border-[rgba(160,32,240,0.4)]"
    >
      <Link href={`/work/${project.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0]">
        <div
          className="relative aspect-[16/9] overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})` }}
        >
          {project.image && (
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          )}
          <div className={cn("absolute inset-0 flex flex-col items-center justify-center p-6", project.image && "bg-black/35")}>
            <p className="font-mono text-xs tracking-widest text-white/40 uppercase mb-2">{project.category}</p>
            <h3 className="text-center text-xl font-bold text-white/90">{project.name}</h3>
          </div>
        </div>
        <div className="p-5">
          <div className="mb-2 flex items-start justify-between gap-2">
            <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[#A020F0] transition-colors">{project.name}</h3>
            <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--text-muted)] group-hover:text-[#A020F0] transition-colors" />
          </div>
          <p className="mb-3 text-sm text-[var(--text-secondary)]">{project.tagline}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 3).map((tech) => (
              <span key={tech} className="rounded bg-[var(--bg-tertiary)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-muted)]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
      {project.liveUrl && (
        <div className="border-t border-[var(--border-subtle)] px-5 py-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[#A020F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0] rounded"
          >
            Live site <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
          </a>
        </div>
      )}
    </motion.article>
  );
}
