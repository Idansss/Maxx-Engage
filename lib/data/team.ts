export interface TeamMember {
  id: string;
  name: string;
  role: string;
  rank: number;
  bio: string;
  expertise: string[];
  location: string;
  socials: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    portfolio?: string;
    email?: string;
    hashnode?: string;
    medium?: string;
  };
  featuredWork: Array<string | { name: string; desc: string }>;
  initials: string;
  avatarColor: string;
}

export const team: TeamMember[] = [
  {
    id: "tunde",
    name: "Tunde Aremu",
    role: "Head of Studio · Data & Strategy Lead",
    rank: 1,
    bio: "Tunde leads Maxx Engage with a sharp analytical mind. A data enthusiast at heart, he turns messy business questions into clean, queryable answers — then makes sure every project we ship is grounded in real numbers, not vibes.",
    expertise: ["Data Analysis", "SQL", "Python", "Jupyter", "Strategy", "Client Discovery"],
    location: "Nigeria",
    socials: {
      github: "https://github.com/tundebizz",
      twitter: "https://twitter.com/tundebizz",
    },
    featuredWork: [
      "Jewelry-Store-Python-Project",
      "AirbnbPython-Project",
      "Breweries-SQL-Project",
      "KMS-Store-SQL-Project",
      "Spotify-Songs-EDA-Python-Project",
      "Buy-Buy-Ecom-Analysis-SQL",
    ],
    initials: "TA",
    avatarColor: "#A020F0",
  },
  {
    id: "olaoluwa",
    name: "Olaoluwa Olagbemi",
    role: "Lead Engineer · Backend & CMS Specialist",
    rank: 2,
    bio: "Olaoluwa (a.k.a. Webczar) is the engine room. He's shipped production PHP, Laravel, CodeIgniter, and WordPress builds for over a decade, and crosses comfortably into ReactJS and VueJS on the frontend. If a site needs to talk to a database, a payment processor, or an API — he's already done it.",
    expertise: ["PHP", "Laravel", "CodeIgniter", "WordPress", "ReactJS", "VueJS", "MySQL", "Stripe Integration"],
    location: "Lagos, Nigeria",
    socials: {
      github: "https://github.com/thewebczar",
      twitter: "https://twitter.com/_beatbeast_",
      linkedin: "https://linkedin.com/in/olaoluwa-olagbemi",
      email: "bolagbemi@gmail.com",
    },
    featuredWork: [
      "DRPCC",
      "NACOSS-ACU — Voting platform",
      "LSS-ACU — Voting platform",
      "Yoodule-Stripe — WordPress + Stripe plugin",
      "s14.local — WordPress for Studio14",
    ],
    initials: "OO",
    avatarColor: "#7C3AED",
  },
  {
    id: "abass",
    name: "Abass Ibrahim",
    role: "Full-Stack Developer · UI/UX & Web3",
    rank: 3,
    bio: "Abass — also known as Ghost — builds clean, fast, end-to-end products. From luxury e-commerce to crypto trading dashboards to multi-portal school management systems, his work ships and stays shipped. He pairs full-stack engineering with a designer's eye, and quietly maintains business-critical systems for two oil & gas companies on the side.",
    expertise: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Web3", "UI/UX Design", "Technical Writing"],
    location: "Lagos, Nigeria · Open to remote globally",
    socials: {
      github: "https://github.com/Lingz450",
      twitter: "https://twitter.com/Ghost912932",
      linkedin: "https://linkedin.com/in/abass-ibrahim",
      portfolio: "https://abass-rho.vercel.app",
      email: "abassibrahim591@gmail.com",
      hashnode: "https://hashnode.com/@ghost69",
      medium: "https://medium.com/@Ghost69",
    },
    featuredWork: [
      { name: "The Thesis Desk", desc: "Full-stack crypto trading command center with live BTC/ETH/SOL/BNB/XRP feeds, P&L tracking, signal review, journaling. Built for a 500+ member trading community." },
      { name: "Wearables Atelier", desc: "Premium Nigerian womenswear e-commerce — Iro & Buba, Aso Oke, Kaftan, Boubou, Turbans & Jewellery. Editorial design, multi-category nav, wholesale flow." },
      { name: "Fàdè — 9thluxe Store", desc: "Luxury perfume e-commerce with curated collections, cart, drops, journal, dark/light mode. Editorial-grade UI, mobile-first." },
      { name: "The Helping Tribe Academy", desc: "School management platform for a Counselling & Positive Psychology program. Three role-based portals (Student, Facilitator, Admin), matric-number + email auth, public application form." },
      { name: "Aureo", desc: "Trust-first hiring marketplace where candidates build verified profiles with trust scores and employers post transparent opportunities." },
    ],
    initials: "AI",
    avatarColor: "#6D28D9",
  },
];
