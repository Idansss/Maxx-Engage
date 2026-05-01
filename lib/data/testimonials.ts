// TODO: Replace with real client quotes before launch
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Maxx Engage didn't just build our site — they understood our business first. The dashboard they shipped runs our entire ops floor.",
    name: "Chidi Okafor",
    title: "Operations Lead",
    company: "Lagos retail brand",
  },
  {
    id: "t2",
    quote:
      "Three people, but the output of a 10-person agency. Communication was tight, deadlines were met, code is clean.",
    name: "Adaeze Nwosu",
    title: "Founder",
    company: "Nigerian fashion atelier",
  },
  {
    id: "t3",
    quote:
      "We needed a rescue, not a rebuild. They diagnosed our WordPress mess in 48 hours and had us stable in a week.",
    name: "Emeka Eze",
    title: "Marketing Director",
    company: "EdTech startup",
  },
];
