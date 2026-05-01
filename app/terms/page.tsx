import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="heading-2 mb-8 text-[var(--text-primary)]">Terms of Service</h1>
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <p><strong className="text-[var(--text-primary)]">Last updated:</strong> May 2026</p>
          <p>By engaging Maxx Engage for services, you agree to pay the agreed project fee as outlined in your proposal. Work begins after a signed proposal and initial payment are received.</p>
          <p>All code and designs produced for your project are your property upon full payment. We retain the right to display the work in our portfolio unless you request otherwise in writing.</p>
          <p>We are not liable for losses arising from site downtime, data loss, or third-party service failures after a project is handed over.</p>
          <p>For full contract terms, refer to the signed project proposal. Questions: <a href="mailto:abassibrahim591@gmail.com" className="text-[#A020F0]">abassibrahim591@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}
