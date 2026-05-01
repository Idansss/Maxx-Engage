export interface FAQItem {
  question: string;
  answer: string;
}

export const faq: FAQItem[] = [
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely. While we're based in Lagos, Nigeria, we work with clients worldwide. We operate across time zones and use async-first communication — Loom videos, detailed Notion docs, and weekly syncs over Zoom. Distance has never been a blocker for us.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A focused landing page or portfolio: 1–2 weeks. A full e-commerce store or web app: 4–8 weeks. A complex multi-role platform: 8–16 weeks. We give you a specific timeline before any work starts — no vague estimates.",
  },
  {
    question: "Do you do retainers or only project-based work?",
    answer:
      "Both. We take on fixed-scope projects and we offer monthly retainers for clients who need ongoing development, maintenance, or data work. Retainer clients get priority response times and a dedicated Slack channel.",
  },
  {
    question: "Can you take over a project another agency started?",
    answer:
      "Yes — it's one of our specialties. We'll audit the existing codebase, document what we find (the good, the bad, and the 'who approved this'), give you an honest assessment, and take it from there. No judgment. We've seen it all.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We work on fixed project fees, not hourly billing. You know the cost upfront, scope changes are discussed openly, and there are no surprise invoices. Reach out with your project brief and we'll send a proposal within 48 hours.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. If your project involves sensitive business information, proprietary processes, or pre-launch products, we're happy to sign an NDA before the first call. Send us yours or we can provide a standard template.",
  },
  {
    question: "Do you build mobile apps?",
    answer:
      "Not yet — we focus entirely on the web. That means we go very deep rather than wide. If you need a React Native or Flutter app, we'll tell you honestly and point you in the right direction rather than take the project and learn on your dime.",
  },
  {
    question: "What if we just need a small fix, not a full build?",
    answer:
      "We do those too. Got a specific bug, a slow page, or a broken feature? Send us a description. Small jobs get scoped and priced quickly — usually same-day. We don't have a minimum engagement size.",
  },
];
