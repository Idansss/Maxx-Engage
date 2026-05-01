"use client";

import { type CSSProperties, useState } from "react";

// ─────────────────────────────────────────────
//  CONFIG  ← Change these two lines
// ─────────────────────────────────────────────
const EMAIL_TO = "abassibrahim591@gmail.com";
const AGENCY_NAME = "Maxx Engage";

// ─────────────────────────────────────────────
//  COLOUR TOKENS
// ─────────────────────────────────────────────
const CLR = {
  accent: "#A020F0",
  accentLight: "rgba(160, 32, 240, 0.08)",
  accentMid: "rgba(160, 32, 240, 0.14)",
  success: "#10B981",
  successLight: "rgba(16, 185, 129, 0.08)",
  danger: "#EF4444",
};

type QuestionType = "text" | "email" | "tel" | "textarea" | "radio" | "checkbox";

type BriefQuestion = {
  id: string;
  label: string;
  type: QuestionType;
  req?: boolean;
  ph?: string;
  opts?: string[];
};

type Section = {
  id: string;
  title: string;
  desc: string;
  qs: BriefQuestion[];
};

type AnswerValue = string | string[];
type Answers = Record<string, AnswerValue>;
type View = "intro" | "form" | "summary" | "success" | "dashboard";

type Submission = {
  id: number;
  name: string;
  business: string;
  email: string;
  siteType: string;
  date: string;
  answers: Answers;
};

type QuestionProps = {
  q: BriefQuestion;
  value?: AnswerValue;
  onChange: (id: string, value: AnswerValue) => void;
  error: boolean;
};

// ─────────────────────────────────────────────
//  QUESTIONS  (7 sections · 36 questions)
// ─────────────────────────────────────────────
const SECTIONS: Section[] = [
  {
    id: "contact", title: "Contact Information", desc: "Let's start with who you are",
    qs: [
      { id: "name",     label: "Full Name",                        type: "text",  req: true,  ph: "e.g. Amara Nwosu" },
      { id: "business", label: "Business / Organization Name",     type: "text",  req: true,  ph: "e.g. Apex Creative Studio" },
      { id: "email",    label: "Email Address",                    type: "email", req: true,  ph: "hello@yourcompany.com" },
      { id: "phone",    label: "Phone Number",                     type: "tel",   req: false, ph: "+234 812 345 6789 (optional)" },
      { id: "role",     label: "Your Role / Title",                type: "text",  req: false, ph: "e.g. CEO, Founder, Marketing Manager" },
    ],
  },
  {
    id: "project", title: "Project Overview", desc: "Help us understand your project",
    qs: [
      { id: "site_type",    label: "What type of website do you need?", type: "radio", req: true,
        opts: ["Portfolio / Personal Brand","E-commerce / Online Shop","Corporate / Business Website","Blog / Magazine","Landing Page (single-page)","Non-profit / NGO","Restaurant / Food Business","Real Estate","SaaS / Web Application","Other"] },
      { id: "description",  label: "Briefly describe your business or project",          type: "textarea", req: true,  ph: "What do you do? Who do you serve? What makes you different from competitors?" },
      { id: "goal",         label: "What is the primary goal of this website?",          type: "radio",    req: true,
        opts: ["Generate leads or client inquiries","Sell products or services online","Showcase my portfolio or work","Build brand awareness","Share information or content","Accept bookings or appointments","Build a community or membership","Other"] },
      { id: "existing",     label: "Do you currently have a website?",                   type: "radio",    req: true,
        opts: ["Yes – it needs a full redesign","Yes – it just needs some updates","No – this is a brand new site"] },
      { id: "domain",       label: "Do you have a domain name already? (e.g. yourname.com)", type: "radio", req: true,
        opts: ["Yes – already purchased","No – need help getting one","Not sure what this is"] },
      { id: "platform",     label: "Do you have a platform / technology preference?",    type: "checkbox",
        opts: ["WordPress (flexible, most popular)","Shopify (e-commerce focused)","Webflow (design-forward)","Custom code (React / Next.js)","No preference – please recommend","Other"] },
    ],
  },
  {
    id: "audience", title: "Target Audience", desc: "Who are you trying to reach?",
    qs: [
      { id: "aud_type", label: "Who is your primary audience? (select all that apply)",  type: "checkbox", req: true,
        opts: ["Businesses (B2B)","Individual consumers (B2C)","Government / NGO","Students / Academia","General public","Professionals in a specific industry"] },
      { id: "age",      label: "Age range of your main audience?",                       type: "radio",
        opts: ["Under 18","18–24","25–34","35–54","55 and above","All ages (mixed)"] },
      { id: "geo",      label: "Where is your audience primarily located?",              type: "radio",
        opts: ["Local (specific city or region)","Nigeria-wide","Africa-wide","International","All of the above"] },
      { id: "tech",     label: "How tech-savvy is your target audience?",                type: "radio",
        opts: ["Very tech-savvy","Average / Mixed","Not very tech-savvy","I'm not sure"] },
    ],
  },
  {
    id: "design", title: "Design & Branding", desc: "Your look and feel",
    qs: [
      { id: "branding_status", label: "Do you have an existing brand identity?",       type: "radio", req: true,
        opts: ["Yes – full brand kit (logo, colors, fonts, guidelines)","Yes – logo only","Yes – some color preferences only","No – need complete branding created","No – but I will provide creative direction"] },
      { id: "style",           label: "What design style appeals to you most?",        type: "radio",
        opts: ["Modern & Minimalist","Bold & Vibrant / Colorful","Professional & Corporate","Creative & Artistic","Elegant & Luxury","Warm & Friendly","Dark & Dramatic","Other"] },
      { id: "mood",            label: "What feeling should the site convey? (select all that apply)", type: "checkbox",
        opts: ["Trustworthy & Reliable","Energetic & Bold","Calm & Peaceful","Innovative & Tech-forward","Friendly & Approachable","Authoritative & Expert","Playful & Fun","Exclusive & Premium"] },
      { id: "inspiration",     label: "Share 2–3 websites you admire and what you like about them",   type: "textarea", req: false, ph: "e.g. apple.com – clean minimal; airbnb.com – great user flow; tesla.com – bold hero images..." },
      { id: "logo_need",       label: "Do you need a logo designed or redesigned?",   type: "radio",
        opts: ["Yes – design a logo from scratch","Yes – my logo needs updating","No – happy with existing logo","Not sure yet"] },
      { id: "brand_colors",    label: "Do you have brand colors? (HEX codes or a description)", type: "text", req: false, ph: "e.g. Navy Blue #0D1B5E and Gold #D4A853 — or just 'deep green and white'" },
    ],
  },
  {
    id: "content", title: "Content & Pages", desc: "What goes on your site",
    qs: [
      { id: "pages",        label: "Which pages do you need? (select all that apply)",   type: "checkbox", req: true,
        opts: ["Home","About Us","Services","Products / Shop","Portfolio / Gallery","Blog / News","Contact","FAQ","Testimonials / Reviews","Our Team","Pricing","Terms & Privacy Policy","Other"] },
      { id: "content_src",  label: "Who will write and provide your website content?",   type: "radio", req: true,
        opts: ["I will provide everything (text, images, etc.)","I need help with copywriting","A mix – I will provide some, you fill the gaps","Not sure yet"] },
      { id: "photos",       label: "Do you have professional photos or images ready?",   type: "radio",
        opts: ["Yes – high-quality photos ready to use","Yes – but they may need editing","No – please use stock photography","No – I need a professional photoshoot","A mix of my own + stock"] },
      { id: "blog",         label: "Do you need a blog or news section?",               type: "radio",
        opts: ["Yes – I will publish frequently (weekly or more)","Yes – occasionally (monthly or less)","No – not needed"] },
      { id: "lang",         label: "What language(s) should the website support?",       type: "radio",
        opts: ["English only","English + Yoruba / Igbo / Hausa","English + French","Multiple international languages","Other"] },
    ],
  },
  {
    id: "features", title: "Features & Functionality", desc: "What should your site do?",
    qs: [
      { id: "feats",        label: "Which features do you need? (select all that apply)", type: "checkbox",
        opts: ["Contact form","Online booking / scheduling","E-commerce (sell online)","Membership / user login accounts","Live chat widget","Newsletter / email signup","Social media feeds display","Search functionality","Google Maps / location embed","File downloads / document library","Photo or video gallery","Event calendar","None of the above"] },
      { id: "ecomm",        label: "Will you sell anything directly through the website?",type: "radio",
        opts: ["Yes – physical products","Yes – digital products / downloads","Yes – services or appointments","Yes – a mix of these","No","Not sure yet"] },
      { id: "cms",          label: "Do you want to manage your own website content?",     type: "radio",
        opts: ["Yes – I want to update text, images, and blog posts myself","No – you handle all updates for me","Maybe – depends on how easy it is"] },
      { id: "integrations", label: "Which integrations do you need? (select all that apply)", type: "checkbox",
        opts: ["Google Analytics (track visitors)","Email marketing (Mailchimp, Klaviyo, etc.)","Payment gateway (Paystack, Flutterwave, Stripe)","CRM (Salesforce, HubSpot, etc.)","WhatsApp chat button","Google Maps embed","Calendly / booking tool","Social media sharing buttons","None","Other"] },
      { id: "seo",          label: "Do you need SEO to help people find you on Google?", type: "radio",
        opts: ["Yes – full SEO setup (keywords, on-page, technical)","Yes – just the basics (meta tags, sitemap, speed)","No","What is SEO? (I would like to understand this)"] },
      { id: "support",      label: "After launch, what ongoing support do you expect?",  type: "radio",
        opts: ["Monthly maintenance plan","Quarterly check-ins","I will handle it myself","I will reach out when needed","Let us discuss later"] },
    ],
  },
  {
    id: "timeline", title: "Timeline & Budget", desc: "Let's talk practicalities",
    qs: [
      { id: "launch",   label: "When do you need the website to go live?",              type: "radio", req: true,
        opts: ["As soon as possible (1–2 weeks)","Within 1 month","1–2 months","2–3 months","3–6 months","No fixed deadline – let's do it right"] },
      { id: "budget",   label: "What is your approximate budget for this project?",     type: "radio", req: true,
        opts: ["Under ₦200,000","₦200,000 – ₦500,000","₦500,000 – ₦1,000,000","₦1M – ₦3M","Above ₦3M","Prefer a quote first","Budget is flexible"] },
      { id: "referral", label: "How did you hear about us?",                            type: "radio",
        opts: ["Google / web search","Instagram","Facebook","LinkedIn","Twitter / X","Referral from someone I know","I am an existing client","Other"] },
      { id: "extras",   label: "Any additional information or questions for us?",       type: "textarea", req: false, ph: "Share anything else we should know, or ask us anything at all..." },
    ],
  },
];

// ─────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────
function fmt(val?: AnswerValue) {
  if (!val) return "—";
  if (Array.isArray(val)) return val.length ? val.join(", ") : "—";
  return String(val).trim() || "—";
}

function answerToText(val: AnswerValue | undefined, fallback: string) {
  if (Array.isArray(val)) return val.join(", ") || fallback;
  return val?.trim() || fallback;
}

function generatePDF(ans: Answers) {
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
<title>Website Brief — ${ans.business || "New Project"}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Georgia', serif; color: #111; padding: 40px 48px; font-size: 13px; line-height: 1.6; }
  header { border-bottom: 3px solid #A020F0; padding-bottom: 18px; margin-bottom: 32px; }
  header h1 { font-size: 22px; color: #A020F0; margin-bottom: 4px; }
  header p { color: #555; font-size: 12px; }
  .section { margin-bottom: 28px; page-break-inside: avoid; }
  .section-title { font-size: 11px; font-weight: bold; color: #A020F0; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 1px solid rgba(160, 32, 240, 0.35); padding-bottom: 6px; margin-bottom: 12px; }
  .row { display: flex; gap: 0; border-bottom: 1px solid #F1F5F9; }
  .row:last-child { border-bottom: none; }
  .label { width: 42%; padding: 7px 10px 7px 0; color: #555; font-size: 12px; }
  .value { width: 58%; padding: 7px 0; font-size: 12px; font-weight: 600; color: #111; }
  footer { margin-top: 40px; padding-top: 14px; border-top: 1px solid #E2E8F0; font-size: 11px; color: #999; text-align: center; }
  @media print { body { padding: 20px 28px; } }
</style></head><body>
<header>
  <h1>Website Discovery Brief</h1>
  <p>Client: <strong>${ans.name || "—"}</strong> &nbsp;|&nbsp; Business: <strong>${ans.business || "—"}</strong> &nbsp;|&nbsp; Submitted: <strong>${new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}</strong></p>
</header>
${SECTIONS.map(s => `
<div class="section">
  <div class="section-title">${s.title}</div>
  ${s.qs.map(q => `<div class="row"><div class="label">${q.label}</div><div class="value">${fmt(ans[q.id])}</div></div>`).join("")}
</div>`).join("")}
<footer>Generated by ${AGENCY_NAME} · Website Discovery Questionnaire</footer>
</body></html>`;

  const win = window.open("", "_blank");
  if (!win) { alert("Please allow popups to download the PDF."); return; }
  win.document.write(html);
  win.document.close();
  setTimeout(() => win.print(), 600);
}

function buildMailto(ans: Answers) {
  const subject = `Website Project Brief — ${ans.business || "New Enquiry"}`;
  const lines = SECTIONS.flatMap(s => [
    `\n===== ${s.title.toUpperCase()} =====`,
    ...s.qs.map(q => `${q.label}:\n  ${fmt(ans[q.id])}`),
  ]);
  return `mailto:${EMAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

// ─────────────────────────────────────────────
//  QUESTION COMPONENT
// ─────────────────────────────────────────────
function Question({ q, value, onChange, error }: QuestionProps) {
  const val = value ?? (q.type === "checkbox" ? [] : "");
  const textValue = typeof val === "string" ? val : "";
  const checkboxValue = Array.isArray(val) ? val : [];

  const baseInput: CSSProperties = {
    width: "100%", padding: "10px 14px",
    border: `1.5px solid ${error ? CLR.danger : "var(--border-strong)"}`,
    borderRadius: 8, fontSize: 14, fontFamily: "var(--font-sans)",
    background: "var(--bg-tertiary)",
    color: "var(--text-primary)", outline: "none", boxSizing: "border-box",
    transition: "border-color 0.15s, box-shadow 0.15s",
    boxShadow: error ? `0 0 0 1px ${CLR.danger}` : "none",
  };

  const optStyle = (sel: boolean): CSSProperties => ({
    display: "flex", alignItems: "center", gap: 10,
    padding: "10px 14px",
    border: `1.5px solid ${sel ? CLR.accent : "var(--border-subtle)"}`,
    borderRadius: 8,
    background: sel ? CLR.accentLight : "var(--bg-tertiary)",
    cursor: "pointer", fontSize: 13.5,
    color: sel ? CLR.accent : "var(--text-primary)",
    transition: "all 0.12s", userSelect: "none",
  });

  return (
    <div style={{ marginBottom: 28 }}>
      <label style={{ display: "block", fontSize: 14, fontWeight: 500, marginBottom: 10, color: "var(--text-primary)", lineHeight: 1.5 }}>
        {q.label}
        {q.req && <span style={{ color: CLR.danger, marginLeft: 3 }}>*</span>}
        {q.type === "checkbox" && <span style={{ fontSize: 12, color: "var(--text-muted)", marginLeft: 6, fontWeight: 400 }}>(select all that apply)</span>}
      </label>

      {(q.type === "text" || q.type === "email" || q.type === "tel") && (
        <input type={q.type} value={textValue} placeholder={q.ph}
          onChange={e => onChange(q.id, e.target.value)}
          onFocus={e => { e.currentTarget.style.borderColor = CLR.accent; e.currentTarget.style.boxShadow = `0 0 0 1px ${CLR.accent}, 0 0 0 4px ${CLR.accentLight}`; }}
          onBlur={e => { e.currentTarget.style.borderColor = error ? CLR.danger : "var(--border-strong)"; e.currentTarget.style.boxShadow = error ? `0 0 0 1px ${CLR.danger}` : "none"; }}
          style={baseInput} />
      )}

      {q.type === "textarea" && (
        <textarea value={textValue} placeholder={q.ph} rows={4}
          onChange={e => onChange(q.id, e.target.value)}
          onFocus={e => { e.currentTarget.style.borderColor = CLR.accent; e.currentTarget.style.boxShadow = `0 0 0 1px ${CLR.accent}, 0 0 0 4px ${CLR.accentLight}`; }}
          onBlur={e => { e.currentTarget.style.borderColor = error ? CLR.danger : "var(--border-strong)"; e.currentTarget.style.boxShadow = error ? `0 0 0 1px ${CLR.danger}` : "none"; }}
          style={{ ...baseInput, resize: "vertical", lineHeight: 1.6 }} />
      )}

      {q.type === "radio" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          {q.opts?.map(opt => {
            const sel = val === opt;
            return (
              <div key={opt} style={optStyle(sel)} onClick={() => onChange(q.id, opt)}>
                <div style={{
                  width: 16, height: 16, borderRadius: "50%", flexShrink: 0,
                  border: `2px solid ${sel ? CLR.accent : "var(--border-strong)"}`,
                  background: sel ? CLR.accent : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {sel && <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#fff" }} />}
                </div>
                <span>{opt}</span>
              </div>
            );
          })}
        </div>
      )}

      {q.type === "checkbox" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          {q.opts?.map(opt => {
            const sel = checkboxValue.includes(opt);
            return (
              <div key={opt} style={optStyle(sel)} onClick={() => {
                const next = sel ? checkboxValue.filter(v => v !== opt) : [...checkboxValue, opt];
                onChange(q.id, next);
              }}>
                <div style={{
                  width: 16, height: 16, borderRadius: 4, flexShrink: 0,
                  border: `2px solid ${sel ? CLR.accent : "var(--border-strong)"}`,
                  background: sel ? CLR.accent : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {sel && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span>{opt}</span>
              </div>
            );
          })}
        </div>
      )}

      {error && <div style={{ fontSize: 12, color: CLR.danger, marginTop: 6 }}>This field is required.</div>}
    </div>
  );
}

// ─────────────────────────────────────────────
//  SHARED STYLES
// ─────────────────────────────────────────────
const S = {
  wrap: { maxWidth: 700, margin: "0 auto", padding: "0 16px 80px", fontFamily: "var(--font-sans)" },
  btnPrimary: {
    padding: "12px 26px", background: CLR.accent, color: "#fff",
    border: "none", borderRadius: 8, fontSize: 14, fontWeight: 500,
    cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6,
    textDecoration: "none",
  },
  btnSecondary: {
    padding: "12px 22px", background: "transparent",
    color: "var(--text-secondary)",
    border: "1.5px solid var(--border-strong)",
    borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: "pointer",
    display: "inline-flex", alignItems: "center", gap: 6,
  },
} satisfies Record<string, CSSProperties>;

// ─────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────
export default function WebsiteQuestionnaire() {
  const [view, setView]           = useState<View>("intro");
  const [step, setStep]           = useState(0);
  const [answers, setAnswers]     = useState<Answers>({});
  const [submissions, setSubs]    = useState<Submission[]>([]);
  const [errors, setErrors]       = useState<string[]>([]);
  const [expanded, setExpanded]   = useState<number | null>(null);

  const section    = SECTIONS[step];
  const totalSteps = SECTIONS.length;

  function setAns(id: string, val: AnswerValue) {
    setAnswers(prev => ({ ...prev, [id]: val }));
    setErrors(prev => prev.filter(e => e !== id));
  }

  function validate() {
    const missing = section.qs
      .filter(q => q.req)
      .filter(q => {
        const v = answers[q.id];
        if (!v) return true;
        if (Array.isArray(v) && v.length === 0) return true;
        if (typeof v === "string" && !v.trim()) return true;
        return false;
      })
      .map(q => q.id);
    setErrors(missing);
    return missing.length === 0;
  }

  function goNext() {
    if (!validate()) return;
    if (step < totalSteps - 1) { setStep(s => s + 1); scrollUp(); }
    else { setView("summary"); scrollUp(); }
  }

  function goBack() {
    setErrors([]);
    if (view === "form" && step > 0) { setStep(s => s - 1); scrollUp(); }
    else if (view === "form" && step === 0) setView("intro");
    else if (view === "summary") { setStep(totalSteps - 1); setView("form"); scrollUp(); }
    else setView("intro");
  }

  function scrollUp() { try { window.scrollTo(0, 0); } catch {} }

  function handleSubmit() {
    const sub = {
      id: Date.now(),
      name: answerToText(answers.name, "Unknown"),
      business: answerToText(answers.business, "—"),
      email: answerToText(answers.email, ""),
      siteType: answerToText(answers.site_type, "—"),
      date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
      answers: { ...answers },
    };
    window.location.href = buildMailto(answers);
    generatePDF(answers);
    setSubs(prev => [sub, ...prev]);
    setView("success");
    scrollUp();
  }

  // ── INTRO ──────────────────────────────────────────────────────
  if (view === "intro") return (
    <div style={S.wrap}>
      <div style={{ textAlign: "center", padding: "52px 0 44px" }}>
        <div style={{ display: "inline-flex", width: 60, height: 60, borderRadius: 16, background: CLR.accentLight, alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <rect x="3" y="3" width="20" height="20" rx="3" stroke={CLR.accent} strokeWidth="1.8" />
            <path d="M8 10h10M8 13.5h7M8 17h5" stroke={CLR.accent} strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 500, margin: "0 0 14px", color: "var(--text-primary)" }}>
          Website Discovery Brief
        </h1>
        <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: 500, margin: "0 auto 36px" }}>
          This questionnaire helps us understand exactly what you need so we can build your perfect website.
          It takes about <strong style={{ color: "var(--text-primary)" }}>10–15 minutes</strong> and covers everything from your goals to your budget.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
          {["7 sections", "36 questions", "~15 minutes"].map(t => (
            <span key={t} style={{ padding: "6px 14px", background: CLR.accentLight, borderRadius: 20, fontSize: 13, color: CLR.accent, fontWeight: 500 }}>{t}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button style={S.btnPrimary} onClick={() => { setView("form"); setStep(0); setAnswers({}); setErrors([]); }}>
            Start the Questionnaire →
          </button>
          {submissions.length > 0 && (
            <button style={S.btnSecondary} onClick={() => setView("dashboard")}>
              View Dashboard ({submissions.length})
            </button>
          )}
        </div>
      </div>

      {/* Section cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 10 }}>
        {SECTIONS.map((s, i) => (
          <div key={s.id} style={{ padding: "14px 16px", background: "var(--bg-secondary)", borderRadius: 10, border: "0.5px solid var(--border-subtle)" }}>
            <div style={{ fontSize: 11, color: CLR.accent, fontWeight: 700, marginBottom: 5, letterSpacing: "0.06em" }}>0{i + 1}</div>
            <div style={{ fontSize: 13.5, fontWeight: 500, color: "var(--text-primary)", marginBottom: 3 }}>{s.title}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{s.qs.length} questions · {s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // ── DASHBOARD ──────────────────────────────────────────────────
  if (view === "dashboard") return (
    <div style={S.wrap}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "32px 0 24px", flexWrap: "wrap" }}>
        <button style={S.btnSecondary} onClick={() => setView("intro")}>← Back</button>
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 500, flex: 1 }}>Submissions Dashboard</h2>
        <div style={{ background: CLR.accent, color: "#fff", borderRadius: 20, padding: "2px 12px", fontSize: 12, fontWeight: 600 }}>
          {submissions.length} brief{submissions.length !== 1 ? "s" : ""}
        </div>
      </div>

      {submissions.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text-muted)" }}>No submissions saved yet.</div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {submissions.map(sub => (
            <div key={sub.id}>
              <div style={{
                padding: "14px 18px", background: "var(--bg-tertiary)",
                border: `0.5px solid ${expanded === sub.id ? CLR.accent : "var(--border-subtle)"}`,
                borderRadius: expanded === sub.id ? "10px 10px 0 0" : 10,
                display: "flex", alignItems: "center", gap: 14, cursor: "pointer",
              }} onClick={() => setExpanded(expanded === sub.id ? null : sub.id)}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: CLR.accentMid, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: CLR.accent, flexShrink: 0 }}>
                  {(sub.name[0] || "?").toUpperCase()}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 500, fontSize: 14 }}>{sub.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {sub.business} · {sub.siteType}
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", flexShrink: 0 }}>{sub.date}</div>
                <button style={{ ...S.btnSecondary, padding: "6px 14px", fontSize: 12 }}
                  onClick={e => { e.stopPropagation(); generatePDF(sub.answers); }}>PDF</button>
                <a href={buildMailto(sub.answers)} style={{ ...S.btnPrimary, padding: "6px 14px", fontSize: 12 }}
                  onClick={e => e.stopPropagation()}>Email</a>
              </div>

              {expanded === sub.id && (
                <div style={{ background: "var(--bg-secondary)", border: `0.5px solid ${CLR.accent}`, borderTop: "none", borderRadius: "0 0 10px 10px", padding: "16px 20px" }}>
                  {SECTIONS.map(s => (
                    <div key={s.id} style={{ marginBottom: 20 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: CLR.accent, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8 }}>{s.title}</div>
                      {s.qs.map(q => (
                        <div key={q.id} style={{ display: "flex", gap: 12, padding: "6px 0", borderBottom: "0.5px solid var(--border-subtle)" }}>
                          <div style={{ fontSize: 12, color: "var(--text-secondary)", width: "44%", flexShrink: 0, lineHeight: 1.5 }}>{q.label}</div>
                          <div style={{ fontSize: 12, color: "var(--text-primary)", fontWeight: 500, lineHeight: 1.5 }}>{fmt(sub.answers[q.id])}</div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // ── SUCCESS ────────────────────────────────────────────────────
  if (view === "success") {
    const latest = submissions[0];
    const latestAnswers: Answers = latest?.answers ?? {};
    return (
      <div style={{ ...S.wrap, textAlign: "center", paddingTop: 64 }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: CLR.successLight, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 22px" }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M6 14l5.5 5.5L22 8" stroke={CLR.success} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 12px", color: "var(--text-primary)" }}>
          Brief Saved Successfully
        </h2>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 40, maxWidth: 420, margin: "0 auto 40px" }}>
          The website discovery brief for <strong>{latest?.business}</strong> has been saved to the dashboard.
          Use the buttons below to send it or download a PDF copy.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={buildMailto(latestAnswers)} style={{ ...S.btnPrimary, textDecoration: "none" }}>
            Send via Email
          </a>
          <button style={S.btnPrimary} onClick={() => generatePDF(latestAnswers)}>
            Download PDF
          </button>
          <button style={S.btnSecondary} onClick={() => setView("dashboard")}>
            View Dashboard
          </button>
          <button style={S.btnSecondary} onClick={() => { setView("intro"); setStep(0); setAnswers({}); setErrors([]); }}>
            New Submission
          </button>
        </div>
      </div>
    );
  }

  // ── SUMMARY ────────────────────────────────────────────────────
  if (view === "summary") return (
    <div style={S.wrap}>
      <div style={{ padding: "32px 0 8px" }}>
        <h2 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 8px", color: "var(--text-primary)" }}>Review Your Brief</h2>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 32 }}>Check everything looks right before we save and send.</p>

        {SECTIONS.map((s, si) => (
          <div key={s.id} style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div style={{ width: 26, height: 26, borderRadius: "50%", background: CLR.accentMid, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: CLR.accent, flexShrink: 0 }}>
                {si + 1}
              </div>
              <h3 style={{ margin: 0, fontSize: 14, fontWeight: 500, flex: 1 }}>{s.title}</h3>
              <button style={{ fontSize: 12, color: CLR.accent, background: "transparent", border: "none", cursor: "pointer", textDecoration: "underline" }}
                onClick={() => { setStep(si); setView("form"); }}>Edit</button>
            </div>
            <div style={{ background: "var(--bg-secondary)", borderRadius: 10, padding: "4px 16px", border: "0.5px solid var(--border-subtle)" }}>
              {s.qs.map(q => (
                <div key={q.id} style={{ display: "flex", gap: 16, padding: "9px 0", borderBottom: "0.5px solid var(--border-subtle)" }}>
                  <div style={{ fontSize: 12.5, color: "var(--text-secondary)", width: "44%", flexShrink: 0, lineHeight: 1.5 }}>{q.label}</div>
                  <div style={{ fontSize: 12.5, color: "var(--text-primary)", fontWeight: 500, lineHeight: 1.5 }}>{fmt(answers[q.id])}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ display: "flex", gap: 12, justifyContent: "space-between", marginTop: 36, paddingTop: 24, borderTop: "0.5px solid var(--border-subtle)", flexWrap: "wrap" }}>
          <button style={S.btnSecondary} onClick={goBack}>← Back to Edit</button>
          <button style={S.btnPrimary} onClick={handleSubmit}>Save & Submit Brief →</button>
        </div>
      </div>
    </div>
  );

  // ── FORM ───────────────────────────────────────────────────────
  return (
    <div style={S.wrap}>
      {/* Progress bar */}
      <div style={{ padding: "24px 0 32px" }}>
        <div style={{ display: "flex", gap: 4, marginBottom: 14 }}>
          {SECTIONS.map((s, i) => (
            <div key={s.id} style={{
              flex: 1, height: 4, borderRadius: 2, transition: "background 0.3s",
              background: i <= step ? CLR.accent : "var(--border-subtle)",
            }} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Step {step + 1} of {totalSteps}</span>
          <button style={{ fontSize: 12, color: CLR.accent, background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}
            onClick={() => setView("dashboard")}>
            Saved Submissions ({submissions.length})
          </button>
        </div>
      </div>

      {/* Section header */}
      <div style={{ marginBottom: 36 }}>
        <div style={{ fontSize: 11, color: CLR.accent, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
          0{step + 1} — {section.title}
        </div>
        <h2 style={{ margin: 0, fontSize: 21, fontWeight: 500, color: "var(--text-primary)" }}>{section.desc}</h2>
      </div>

      {/* Questions */}
      {section.qs.map(q => (
        <Question
          key={q.id} q={q}
          value={answers[q.id]}
          onChange={setAns}
          error={errors.includes(q.id)}
        />
      ))}

      {/* Navigation */}
      <div style={{ display: "flex", gap: 12, justifyContent: "space-between", marginTop: 44, paddingTop: 24, borderTop: "0.5px solid var(--border-subtle)" }}>
        <button style={S.btnSecondary} onClick={goBack}>← Back</button>
        <button style={S.btnPrimary} onClick={goNext}>
          {step === totalSteps - 1 ? "Review & Submit →" : `Continue to ${SECTIONS[step + 1]?.title} →`}
        </button>
      </div>
    </div>
  );
}
