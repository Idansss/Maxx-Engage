import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { TeamSection } from "@/components/sections/Team";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Maxx Engage — We build the web. We fix the web. We engineer what's next.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <FeaturedWork />
      <Stats />
      <TeamSection />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
