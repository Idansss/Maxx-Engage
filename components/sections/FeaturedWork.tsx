import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { getFeaturedProjects } from "@/lib/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedWork() {
  const featured = getFeaturedProjects();

  return (
    <section id="work" aria-labelledby="work-heading" className="bg-[var(--bg-secondary)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Selected work"
          heading="Live. In production. Earning."
          subheading="Five projects that ship real value for real clients — not award submissions."
          align="left"
        />

        <div className="space-y-24 sm:space-y-32">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} layout="row" />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] px-8 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[#A020F0] hover:text-[#A020F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0]"
          >
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
