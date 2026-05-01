import type { Metadata } from "next";
import { team } from "@/lib/data/team";
import { TeamCard } from "@/components/shared/TeamCard";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the three-person studio behind Maxx Engage — Tunde Aremu, Olaoluwa Olagbemi, and Abass Ibrahim.",
};

export default function TeamPage() {
  const sorted = [...team].sort((a, b) => a.rank - b.rank);

  return (
    <>
      <div className="bg-[var(--bg-primary)] pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-4">The studio</p>
          <h1 className="display-lg max-w-2xl text-[var(--text-primary)]">
            Three people. <span className="text-[#A020F0]">No middle layer.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--text-secondary)]">
            When you hire Maxx Engage, you get the people writing the code — not an account manager
            who passes messages to developers you&apos;ll never meet.
          </p>
        </div>
      </div>

      <div className="bg-[var(--bg-secondary)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </div>

      <ContactCTA />
    </>
  );
}
