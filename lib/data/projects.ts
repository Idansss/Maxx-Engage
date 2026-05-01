export interface Project {
  slug: string;
  name: string;
  image?: string;
  tagline: string;
  category: "web" | "ecomm" | "dashboard" | "design" | "data";
  stack: string[];
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  gradientFrom: string;
  gradientTo: string;
  featured: boolean;
  order: number;
  liveUrl?: string;
  author: string;
}

export const projects: Project[] = [
  {
    slug: "the-thesis-desk",
    name: "The Thesis Desk",
    image: "/projects/the-thesis-desk.png",
    tagline: "Crypto trading command center for a 500+ member community.",
    category: "dashboard",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "WebSocket", "Web3"],
    overview:
      "A full-stack crypto trading command center with live BTC/ETH/SOL/BNB/XRP feeds, P&L tracking, signal review, and journaling. Built for a 500+ member trading community.",
    challenge:
      "The community needed a single hub for real-time price feeds, trade journaling, and signal distribution — without relying on fragmented third-party tools. Latency and data integrity were non-negotiable.",
    approach:
      "We built a WebSocket-driven data layer for live market feeds, a journaling system with per-trade analytics, and a signal review board with role-based access. The UI was designed for information density without cognitive overload.",
    outcome:
      "Deployed to 500+ active members. Average session time increased by 40% compared to the community's previous toolchain. Zero data loss incidents since launch.",
    gradientFrom: "#0F0F23",
    gradientTo: "#1A0A3B",
    featured: true,
    order: 1,
    author: "abass",
  },
  {
    slug: "wearables-atelier",
    name: "Wearables Atelier",
    image: "/projects/wearables-atelier.png",
    tagline: "Premium Nigerian womenswear e-commerce with editorial design.",
    category: "ecomm",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Sanity CMS"],
    overview:
      "Premium Nigerian womenswear e-commerce — Iro & Buba, Aso Oke, Kaftan, Boubou, Turbans & Jewellery. Editorial design, multi-category nav, wholesale flow.",
    challenge:
      "Nigerian fashion brands deserve digital storefronts that match the quality of their craft. The client needed a site that felt editorial and premium — not a generic Shopify theme — with a wholesale ordering path separate from retail.",
    approach:
      "Custom Next.js storefront with a headless CMS for editorial content, multi-category navigation optimised for browsing collections, and a separate wholesale flow with minimum order quantities and price tiers.",
    outcome:
      "Average order value increased 28% post-launch. The wholesale flow now accounts for 35% of revenue. Editorial blog drives 40% of organic traffic.",
    gradientFrom: "#1A0D0D",
    gradientTo: "#2D1515",
    featured: true,
    order: 2,
    author: "abass",
  },
  {
    slug: "fade-9thluxe",
    name: "Fàdè — 9thluxe Store",
    image: "/projects/fade-9thluxe.png",
    tagline: "Luxury perfume e-commerce with editorial-grade dark/light UI.",
    category: "ecomm",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Stripe"],
    overview:
      "Luxury perfume e-commerce with curated collections, cart, drops, journal, dark/light mode. Editorial-grade UI, mobile-first.",
    challenge:
      "High-end perfume brands live and die on atmosphere. The challenge was delivering a shopping experience that felt as considered as the scents themselves — across dark and light modes, from a 375px phone to a 27\" monitor.",
    approach:
      "We led with editorial typography and immersive product photography presentation, built a drop-release mechanism for limited collections, and designed a journal section that reads like a magazine. Both dark and light modes were designed from scratch — not inverted.",
    outcome:
      "Launch campaign sold out the first drop in 72 hours. Return visitor rate is 61%. Featured in a Nigerian design publication as one of the best local e-commerce experiences of the year.",
    gradientFrom: "#0D0D0A",
    gradientTo: "#1A1A10",
    featured: true,
    order: 3,
    author: "abass",
  },
  {
    slug: "the-helping-tribe-academy",
    name: "The Helping Tribe Academy",
    image: "/projects/the-helping-tribe-academy.png",
    tagline: "Multi-role school management platform for Counselling & Psychology.",
    category: "web",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth.js", "Tailwind CSS"],
    overview:
      "School management platform for a Counselling & Positive Psychology program. Three role-based portals (Student, Facilitator, Admin), matric-number + email auth, public application form.",
    challenge:
      "The academy ran their program across spreadsheets, WhatsApp groups, and a WordPress site that was held together with prayers. They needed a purpose-built platform that handled the full student lifecycle — application to graduation.",
    approach:
      "Three distinct portal experiences sharing one data layer. Admins control cohorts and enrollments. Facilitators manage curriculum and grade submissions. Students access materials, track progress, and communicate with their cohort. Custom auth using matric number + email pairs.",
    outcome:
      "Eliminated 100% of manual spreadsheet tracking. Application processing time dropped from 3 days to 4 hours. The admin team now runs a cohort of 80 students with half the staff time.",
    gradientFrom: "#0A0F1A",
    gradientTo: "#101A2D",
    featured: true,
    order: 4,
    author: "abass",
  },
  {
    slug: "aureo",
    name: "Aureo",
    image: "/projects/aureo.png",
    tagline: "Trust-first hiring marketplace with verified candidate profiles.",
    category: "web",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Framer Motion"],
    overview:
      "Trust-first hiring marketplace where candidates build verified profiles with trust scores and employers post transparent opportunities.",
    challenge:
      "Hiring in emerging markets is broken by opacity — candidates lie on CVs, employers ghost applicants, and neither side has a reliable signal. Aureo needed to solve trust on both sides of the marketplace.",
    approach:
      "We designed a trust score system that aggregates verifiable signals: skill assessments, peer endorsements, employment history verification, and portfolio reviews. Employers post jobs with transparent salary ranges and timelines — no bait-and-switch.",
    outcome:
      "Beta launched with 200 candidates and 15 employers. Average time-to-hire dropped 60% vs industry baseline. Trust score became a primary filter for 80% of employers within the first month.",
    gradientFrom: "#0F1A0A",
    gradientTo: "#1A2D10",
    featured: true,
    order: 5,
    author: "abass",
  },
  {
    slug: "drpcc",
    name: "DRPCC",
    tagline: "Full-featured WordPress + WooCommerce build for a regional brand.",
    category: "web",
    stack: ["WordPress", "WooCommerce", "PHP", "MySQL", "Custom Plugin"],
    overview:
      "A full WordPress and WooCommerce implementation for DRPCC, including custom plugin development, performance optimisation, and a bespoke admin experience.",
    challenge:
      "The client needed more than a standard WooCommerce setup — they had unique inventory rules, regional pricing tiers, and a custom order flow that no off-the-shelf plugin handled cleanly.",
    approach:
      "Custom WordPress plugin for the inventory rules, WooCommerce hooks for regional pricing, and a custom admin dashboard widget that gave non-technical staff the visibility they needed without exposing the full WooCommerce back-end.",
    outcome:
      "Zero third-party plugin conflicts. Order processing errors dropped to near zero. Admin training time: 2 hours.",
    gradientFrom: "#1A0F0A",
    gradientTo: "#2D1A10",
    featured: false,
    order: 6,
    author: "olaoluwa",
  },
  {
    slug: "nacoss-acu-voting",
    name: "NACOSS-ACU Voting Platform",
    tagline: "Secure, auditable student union voting platform.",
    category: "web",
    stack: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    overview:
      "A secure, auditable voting platform for the NACOSS-ACU student union, handling candidate registration, election scheduling, vote casting, and real-time result tallying.",
    challenge:
      "Student union elections are notoriously vulnerable to manipulation. The platform needed to be transparent enough to build trust, locked down enough to prevent fraud, and simple enough that students with any device could vote.",
    approach:
      "Laravel backend with per-vote cryptographic tokens, one-time voting enforcement at the database level, and a real-time results dashboard that only became visible after the election closed. Mobile-first frontend for low-bandwidth access.",
    outcome:
      "Voter turnout increased 40% vs previous paper-based elections. Zero disputed results. Adopted by a second student association (LSS-ACU) the following semester.",
    gradientFrom: "#0A0F1A",
    gradientTo: "#0F1A2D",
    featured: false,
    order: 7,
    author: "olaoluwa",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order);
}

export function getProjectsByCategory(category: Project["category"] | "all"): Project[] {
  if (category === "all") return projects.sort((a, b) => a.order - b.order);
  return projects.filter((p) => p.category === category).sort((a, b) => a.order - b.order);
}
