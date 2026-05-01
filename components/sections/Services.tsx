import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { services } from "@/lib/data/services";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-[var(--bg-primary)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What we do"
          heading="Built end-to-end. Fixed end-to-end."
          subheading="Six focused disciplines. Zero outsourcing. Every line of code written by the people on your call."
        />

        {/* Bento grid: 2 large + 4 medium */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* First two are large */}
          {services.slice(0, 2).map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} large />
          ))}
          {/* Next four are regular */}
          {services.slice(2).map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
