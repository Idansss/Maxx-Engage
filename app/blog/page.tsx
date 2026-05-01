import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { formatReadingTime } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing from the Maxx Engage team on web development, design, data, and the Lagos tech scene.",
};

// Placeholder posts — pull real content from Hashnode/Medium API in production
const posts = [
  {
    slug: "building-trading-dashboards",
    title: "What we learned building a real-time crypto trading dashboard",
    excerpt: "WebSockets, P&L math, and why your users don't want one more chart — they want fewer, better ones.",
    date: "2026-03-14",
    author: "Abass Ibrahim",
    body: "A full-stack crypto trading command center with live feeds requires careful thought about data architecture, state management, and UI density. Here's what we learned building The Thesis Desk for a 500+ member community.",
    readingTime: "8 min read",
    tags: ["Next.js", "WebSocket", "Dashboard"],
  },
  {
    slug: "nigerian-ecommerce-design",
    title: "Designing luxury e-commerce for Nigerian fashion brands",
    excerpt: "Nigerian fashion deserves digital storefronts that match the craft. Here's how we approach it.",
    date: "2026-02-28",
    author: "Abass Ibrahim",
    body: "When you're building for brands like Wearables Atelier and 9thluxe, the design bar is set by the garments and scents themselves. Generic Shopify themes don't cut it — you need editorial thinking from pixel one.",
    readingTime: "6 min read",
    tags: ["E-Commerce", "Design", "Nigeria"],
  },
  {
    slug: "wordpress-rescue-guide",
    title: "The honest guide to rescuing a WordPress disaster",
    excerpt: "Plugin conflicts, broken caches, unmaintained themes — we've seen it all. Here's the triage protocol we actually use.",
    date: "2026-02-10",
    author: "Olaoluwa Olagbemi",
    body: "When clients come to us with a broken WordPress site, the first thing we do is not touch anything. Diagnosis before treatment. Here's the systematic approach we use to go from 'site is down' to 'site is hardened'.",
    readingTime: "10 min read",
    tags: ["WordPress", "PHP", "Web Rescue"],
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow mb-4">The blog</p>
        <h1 className="display-lg mb-4 text-[var(--text-primary)]">
          Things we&apos;ve <span className="text-[#A020F0]">learned and shipped.</span>
        </h1>
        <p className="mb-16 max-w-xl text-lg text-[var(--text-secondary)]">
          Writing from the studio — on code, design, data, and the Lagos tech scene.
        </p>

        <div className="space-y-12">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border-b border-[var(--border-subtle)] pb-12 last:border-none"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <time
                  dateTime={post.date}
                  className="font-mono text-xs text-[var(--text-muted)]"
                >
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </time>
                <span className="font-mono text-[10px] text-[var(--text-muted)]">·</span>
                <span className="inline-flex items-center gap-1 font-mono text-xs text-[var(--text-muted)]">
                  <Clock className="h-3 w-3" />
                  {formatReadingTime(post.body)}
                </span>
                <span className="font-mono text-[10px] text-[var(--text-muted)]">·</span>
                <span className="font-mono text-xs text-[var(--text-secondary)]">{post.author}</span>
              </div>

              <h2 className="heading-3 mb-3 text-[var(--text-primary)] group-hover:text-[#A020F0] transition-colors">
                {post.title}
              </h2>
              <p className="mb-4 text-base leading-relaxed text-[var(--text-secondary)]">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-3">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-[var(--bg-tertiary)] px-2.5 py-0.5 font-mono text-xs text-[var(--text-muted)]">
                    {tag}
                  </span>
                ))}
                <a
                  href={`https://hashnode.com/@ghost69`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-1.5 font-mono text-xs text-[#A020F0] transition-all hover:gap-2.5"
                >
                  Read on Hashnode <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-8 text-center">
          <p className="mb-4 text-[var(--text-secondary)]">
            More articles on{" "}
            <a href="https://hashnode.com/@ghost69" target="_blank" rel="noopener noreferrer" className="text-[#A020F0] hover:underline">
              Hashnode
            </a>{" "}
            and{" "}
            <a href="https://medium.com/@Ghost69" target="_blank" rel="noopener noreferrer" className="text-[#A020F0] hover:underline">
              Medium
            </a>
          </p>
          <p className="font-mono text-xs text-[var(--text-muted)]">
            Full blog integration coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
