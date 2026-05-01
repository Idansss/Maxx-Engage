const ITEMS = [
  "NEXT.JS","LARAVEL","TYPESCRIPT","WORDPRESS","REACT","PYTHON",
  "TAILWIND","NODE.JS","POSTGRESQL","WEB3","UI/UX","DATA ANALYSIS",
  "STRIPE","SUPABASE","FIGMA",
];

function MarqueeItem({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-4">
      <span className="font-mono text-xs font-medium tracking-widest text-[var(--text-muted)]">{text}</span>
      <span className="font-mono text-[#A020F0]" aria-hidden="true">✦</span>
    </span>
  );
}

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      aria-label="Technologies we work with"
      className="marquee-fade overflow-hidden border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-4"
    >
      <div className="marquee-track" aria-hidden="true">
        {doubled.map((item, i) => (
          <MarqueeItem key={i} text={item} />
        ))}
      </div>
    </div>
  );
}
