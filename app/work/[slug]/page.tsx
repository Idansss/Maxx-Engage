import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { getProjectBySlug, projects } from "@/lib/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: `${project.name} — Maxx Engage`,
      description: project.tagline,
      images: [{ url: `/api/og?title=${encodeURIComponent(project.name)}&category=${project.category}` }],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const sections = [
    { label: "Overview", content: project.overview },
    { label: "Challenge", content: project.challenge },
    { label: "Approach", content: project.approach },
    { label: "Outcome", content: project.outcome },
  ];

  return (
    <article className="bg-[var(--bg-primary)] min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden pt-28 pb-16">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})` }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/work"
            className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] transition-colors hover:text-[#A020F0]"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to work
          </Link>
          <p className="eyebrow mb-4">{project.category}</p>
          <h1 className="display-lg mb-4 text-[var(--text-primary)]">{project.name}</h1>
          <p className="text-xl text-[var(--text-secondary)]">{project.tagline}</p>

          {/* Stack */}
          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-3 py-1 font-mono text-xs text-[var(--text-secondary)]">
                {tech}
              </span>
            ))}
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-medium text-[#A020F0] transition-colors hover:text-[#B83AFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0] rounded"
            >
              Visit live site <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          )}
        </div>
      </div>

      {/* Hero screenshot */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 -mt-4 mb-16">
        <div
          className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)]"
          style={
            project.image
              ? undefined
              : { background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})` }
          }
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} — product screenshot`}
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 1024px, 100vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex min-h-[12rem] flex-col items-center justify-center p-8">
              <p className="mb-3 font-mono text-xs tracking-widest text-white/40 uppercase">Screenshot placeholder</p>
              <p className="text-2xl font-bold text-white/80">{project.name}</p>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_280px]">
          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.label} aria-label={section.label}>
                <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-[#A020F0]">
                  {section.label}
                </h2>
                <p className="text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                  {section.content}
                </p>
                {/* TODO: real content from client */}
              </section>
            ))}
          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-24 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-6">
              <h3 className="mb-4 font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)]">Project info</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-[var(--text-muted)]">Category</dt>
                  <dd className="font-medium text-[var(--text-primary)] capitalize">{project.category}</dd>
                </div>
                <div>
                  <dt className="text-[var(--text-muted)]">Built by</dt>
                  <dd className="font-medium text-[var(--text-primary)] capitalize">{project.author}</dd>
                </div>
                <div>
                  <dt className="text-[var(--text-muted)]">Stack</dt>
                  <dd className="font-medium text-[var(--text-primary)]">{project.stack.slice(0, 3).join(", ")}</dd>
                </div>
              </dl>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#A020F0] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B83AFF]"
                >
                  Visit live site <ExternalLink className="h-4 w-4" />
                </a>
              )}

              <Link
                href="/contact"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--border-subtle)] py-3 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:border-[#A020F0] hover:text-[#A020F0]"
              >
                Start a similar project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
