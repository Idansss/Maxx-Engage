"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XTwitterIcon, GlobeIcon } from "@/components/shared/SocialIcons";
import type { TeamMember } from "@/lib/data/team";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-6 transition-colors hover:border-[rgba(160,32,240,0.4)]"
    >
      <Link href={`/team/${member.id}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0] rounded-xl">
        {/* Avatar */}
        <div className="mb-6 flex justify-start">
          <div
            className="relative flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-bold text-white ring-0 group-hover:ring-2 group-hover:ring-[#A020F0] group-hover:ring-offset-2 group-hover:ring-offset-[var(--surface-elevated)] transition-all duration-300"
            style={{ background: `linear-gradient(135deg, ${member.avatarColor}, ${member.avatarColor}99)` }}
          >
            {member.initials}
          </div>
        </div>

        {/* Info */}
        <h3 className="mb-1 font-semibold text-[var(--text-primary)] transition-colors group-hover:text-[#A020F0]">
          {member.name}
        </h3>
        <p className="mb-1 font-mono text-xs text-[#A020F0]">{member.role}</p>
        <p className="mb-4 font-mono text-[10px] text-[var(--text-muted)]">{member.location}</p>
        <p className="mb-5 text-sm leading-relaxed text-[var(--text-secondary)] line-clamp-3 group-hover:text-[var(--text-primary)] transition-colors">
          {member.bio}
        </p>

        {/* Expertise pills */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {member.expertise.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-[rgba(160,32,240,0.25)] bg-[rgba(160,32,240,0.08)] px-2 py-0.5 font-mono text-[10px] text-[#A020F0]"
            >
              {skill}
            </span>
          ))}
          {member.expertise.length > 4 && (
            <span className="rounded-md border border-[var(--border-subtle)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-muted)]">
              +{member.expertise.length - 4}
            </span>
          )}
        </div>
      </Link>

      {/* Socials */}
      <div className="flex items-center gap-3 border-t border-[var(--border-subtle)] pt-4">
        {member.socials.github && (
          <a href={member.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--text-muted)] transition-colors hover:text-[#A020F0]">
            <GithubIcon className="h-4 w-4" />
          </a>
        )}
        {member.socials.twitter && (
          <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="text-[var(--text-muted)] transition-colors hover:text-[#A020F0]">
            <XTwitterIcon className="h-4 w-4" />
          </a>
        )}
        {member.socials.linkedin && (
          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--text-muted)] transition-colors hover:text-[#A020F0]">
            <LinkedinIcon className="h-4 w-4" />
          </a>
        )}
        {member.socials.portfolio && (
          <a href={member.socials.portfolio} target="_blank" rel="noopener noreferrer" aria-label="Portfolio" className="text-[var(--text-muted)] transition-colors hover:text-[#A020F0]">
            <GlobeIcon className="h-4 w-4" />
          </a>
        )}
        {member.socials.email && (
          <a href={`mailto:${member.socials.email}`} aria-label="Email" className="text-[var(--text-muted)] transition-colors hover:text-[#A020F0]">
            <Mail className="h-4 w-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
