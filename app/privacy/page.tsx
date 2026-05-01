import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen pt-32 pb-24">
      <div className="prose prose-invert mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="heading-2 mb-8 text-[var(--text-primary)]">Privacy Policy</h1>
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <p><strong className="text-[var(--text-primary)]">Last updated:</strong> May 2026</p>
          <p>Maxx Engage (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects only the information you provide through the contact form: your name, email, and message. We use this solely to respond to your enquiry.</p>
          <p>We do not sell your data. We do not share it with third parties except Resend (our email delivery provider) for the sole purpose of delivering your message to us.</p>
          <p>Contact us at <a href="mailto:abassibrahim591@gmail.com" className="text-[#A020F0]">abassibrahim591@gmail.com</a> to request deletion of your data at any time.</p>
        </div>
      </div>
    </div>
  );
}
