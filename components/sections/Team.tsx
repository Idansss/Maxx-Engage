import { SectionHeader } from "@/components/shared/SectionHeader";
import { TeamCard } from "@/components/shared/TeamCard";
import { team } from "@/lib/data/team";

export function TeamSection() {
  const sorted = [...team].sort((a, b) => a.rank - b.rank);

  return (
    <section id="team" aria-labelledby="team-heading" className="bg-[var(--bg-primary)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The studio"
          heading="Three people. No middle layer."
          subheading="When you hire Maxx Engage, you talk to the people writing the code."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
