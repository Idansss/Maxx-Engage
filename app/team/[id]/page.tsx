import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XTwitterIcon, GlobeIcon } from "@/components/shared/SocialIcons";
import { team } from "@/lib/data/team";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return team.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const member = team.find((m) => m.id === id);
  if (!member) return { title: "Team member not found" };
  return {
    title: member.name,
    description: `${member.role} at Maxx Engage. ${member.bio.slice(0, 120)}…`,
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { id } = await params;
  const member = team.find((m) => m.id === id);
  if (!member) notFound();

  const socialLinks = [
    { href: member.socials.github, icon: GithubIcon, label: "GitHub" },
    { href: member.socials.twitter, icon: XTwitterIcon, label: "X / Twitter" },
    { href: member.socials.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
    { href: member.socials.portfolio, icon: GlobeIcon, label: "Portfolio" },
    { href: member.socials.email ? `mailto:${member.socials.email}` : undefined, icon: Mail, label: "Email" },
  ].filter((s) => s.href);

  return (
    <article className="bg-[var(--bg-primary)] min-h-screen">
      <div className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/team"
            className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] transition-colors hover:text-[#A020F0]"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to team
          </Link>

          {/* Profile header */}
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-start">
            <div
              className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl text-2xl font-bold text-white ring-4 ring-[rgba(160,32,240,0.3)]"
              style={{ background: `linear-gradient(135deg, ${member.avatarColor}, ${member.avatarColor}88)` }}
              aria-hidden="true"
            >
              {member.initials}
            </div>
            <div>
              <h1 className="heading-2 text-[var(--text-primary)]">{member.name}</h1>
              <p className="mt-1 font-mono text-sm text-[#A020F0]">{member.role}</p>
              <p className="mt-1 font-mono text-xs text-[var(--text-muted)]">{member.location}</p>
              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href?.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-[var(--text-muted)] transition-colors hover:text-[#A020F0]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px]">
            <div>
              <h2 className="mb-4 font-mono text-[10px] uppercase tracking-widest text-[#A020F0]">Bio</h2>
              <p className="text-lg leading-relaxed text-[var(--text-secondary)]">{member.bio}</p>

              <h2 className="mt-10 mb-4 font-mono text-[10px] uppercase tracking-widest text-[#A020F0]">Featured work</h2>
              <ul className="space-y-3">
                {member.featuredWork.map((work, i) => {
                  const name = typeof work === "string" ? work : work.name;
                  const desc = typeof work === "object" ? work.desc : null;
                  return (
                    <li key={i} className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-4">
                      <p className="font-medium text-[var(--text-primary)]">{name}</p>
                      {desc && <p className="mt-1 text-sm text-[var(--text-secondary)]">{desc}</p>}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Expertise sidebar */}
            <aside>
              <div className="sticky top-24 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-6">
                <h3 className="mb-4 font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)]">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[rgba(160,32,240,0.25)] bg-[rgba(160,32,240,0.08)] px-2.5 py-1 font-mono text-xs text-[#A020F0]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-[var(--border-subtle)] pt-6">
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center rounded-xl bg-[#A020F0] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B83AFF]"
                  >
                    Work with us
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </article>
  );
}
