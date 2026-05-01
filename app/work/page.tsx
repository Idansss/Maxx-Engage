"use client";
import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/data/projects";
import { ProjectCard } from "@/components/shared/ProjectCard";

const categories: { label: string; value: Project["category"] | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "E-Commerce", value: "ecomm" },
  { label: "Dashboards", value: "dashboard" },
  { label: "Design", value: "design" },
  { label: "Data", value: "data" },
];

function WorkPageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [active, setActive] = useState<Project["category"] | "all">(
    (searchParams.get("category") as Project["category"] | "all") ?? "all"
  );

  const filtered = active === "all"
    ? projects.sort((a, b) => a.order - b.order)
    : projects.filter((p) => p.category === active).sort((a, b) => a.order - b.order);

  const setFilter = (cat: Project["category"] | "all") => {
    setActive(cat);
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "all") params.delete("category");
    else params.set("category", cat);
    router.replace(`/work?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      {/* Hero */}
      <div className="relative bg-[var(--bg-primary)] pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-4">Selected work</p>
            <h1 className="display-lg mb-6 text-[var(--text-primary)]">
              Built. Shipped. <span className="text-[#A020F0]">Running.</span>
            </h1>
            <p className="max-w-xl text-lg text-[var(--text-secondary)]">
              Every project here is in production, earning, and maintained. No concept pieces.
            </p>
          </motion.div>

          {/* Filter tabs — persisted to URL */}
          <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                aria-pressed={active === cat.value}
                className={`rounded-full border px-4 py-1.5 font-mono text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0] ${
                  active === cat.value
                    ? "border-[#A020F0] bg-[rgba(160,32,240,0.1)] text-[#A020F0]"
                    : "border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[rgba(160,32,240,0.4)] hover:text-[#A020F0]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="bg-[var(--bg-secondary)] pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} layout="grid" />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-24 text-center text-[var(--text-muted)]">
              No projects in this category yet.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default function WorkPage() {
  return (
    <Suspense>
      <WorkPageInner />
    </Suspense>
  );
}
