export interface Service {
  icon: string;
  title: string;
  desc: string;
  deliverables: string[];
  slug: string;
}

export const services: Service[] = [
  {
    icon: "Code2",
    slug: "custom-web-development",
    title: "Custom Web Development",
    desc: "Frontend, backend, full-stack — built from scratch to fit your exact business. No themes, no shortcuts.",
    deliverables: ["Frontend SPAs & SSR", "REST & GraphQL APIs", "Database design", "Auth & payments"],
  },
  {
    icon: "ShoppingBag",
    slug: "ecommerce-builds",
    title: "E-Commerce Builds",
    desc: "Storefronts that actually convert. From luxury fashion to perfume drops to digital products.",
    deliverables: ["Cart & checkout", "Stripe / Paystack / Flutterwave", "Inventory & admin", "Editorial CMS"],
  },
  {
    icon: "LayoutDashboard",
    slug: "web-apps-dashboards",
    title: "Web Apps & Dashboards",
    desc: "Multi-role platforms, internal tools, trading dashboards, school portals — anything that needs real logic.",
    deliverables: ["Role-based auth", "Real-time data", "Analytics dashboards", "Workflow automation"],
  },
  {
    icon: "Wrench",
    slug: "website-rescue",
    title: "Website Rescue & Fixes",
    desc: "Inherited a broken site? Plugin chaos? Slow load times? We diagnose, fix, and harden it.",
    deliverables: ["Performance audits", "Security patching", "Migration & rebuilds", "Bug triage"],
  },
  {
    icon: "Palette",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    desc: "Editorial-grade interfaces. We design with the same care we code with — Figma to Framer to production.",
    deliverables: ["User research", "Wireframes & prototypes", "Design systems", "Brand & visual identity"],
  },
  {
    icon: "BarChart3",
    slug: "data-analytics",
    title: "Data & Analytics",
    desc: "We don't just ship — we measure. SQL pipelines, dashboards, and the numbers that prove the build worked.",
    deliverables: ["Data analysis (Python/SQL)", "Custom dashboards", "Reporting automation", "EDA & insights"],
  },
];
