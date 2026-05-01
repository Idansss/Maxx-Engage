"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Copy, Check, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XTwitterIcon } from "@/components/shared/SocialIcons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MagneticButton } from "@/components/effects/MagneticButton";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});
type FormData = z.infer<typeof schema>;

const EMAIL = "abassibrahim591@gmail.com";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (data: FormData) => {
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setServerError(body.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setServerError("Network error. Please try again.");
    }
  };

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen pt-32 pb-24 print:pt-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left — info */}
          <div>
            <p className="eyebrow mb-4">Contact</p>
            <h1 className="heading-2 mb-6 text-[var(--text-primary)]">
              Let&apos;s talk about <span className="text-[#A020F0]">your project.</span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-[var(--text-secondary)]">
              Tell us what you&apos;re building or what&apos;s broken. We&apos;ll give you a straight answer
              — no sales pitch, no NDAs before hello.
            </p>

            {/* Email with copy */}
            <div className="mb-8 flex items-center gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-4">
              <Mail className="h-5 w-5 shrink-0 text-[#A020F0]" />
              <span className="flex-1 font-mono text-sm text-[var(--text-secondary)]">{EMAIL}</span>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={copied ? "Email copied" : "Copy email address"}
                className="flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] px-3 py-1.5 font-mono text-xs text-[var(--text-secondary)] transition-colors hover:border-[#A020F0] hover:text-[#A020F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0]"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-[#10B981]" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Socials */}
            <div className="mb-8">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)]">Find us on</p>
              <div className="flex gap-3">
                {[
                  { href: "https://github.com/Lingz450", icon: GithubIcon, label: "GitHub" },
                  { href: "https://twitter.com/Ghost912932", icon: XTwitterIcon, label: "X / Twitter" },
                  { href: "https://linkedin.com/in/abass-ibrahim", icon: LinkedinIcon, label: "LinkedIn" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors hover:border-[#A020F0] hover:text-[#A020F0]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
                </span>
                <span className="font-mono text-xs font-medium text-[#10B981]">Available for new projects</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                We typically respond within 24 hours on weekdays.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center rounded-2xl border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.05)] p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.1 } }}
                  >
                    <CheckCircle className="mx-auto mb-4 h-16 w-16 text-[#10B981]" />
                  </motion.div>
                  <h2 className="mb-3 text-2xl font-bold text-[var(--text-primary)]">Message received.</h2>
                  <p className="text-[var(--text-secondary)]">
                    We&apos;ll reply within 24 hours. Check your inbox — or your spam, just in case.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  aria-label="Contact form"
                  noValidate
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your name *</Label>
                      <Input id="name" placeholder="Chidi Okafor" {...register("name")} aria-invalid={errors.name ? "true" : undefined} aria-describedby={errors.name ? "name-error" : undefined} />
                      {errors.name && <p id="name-error" className="text-sm text-[#EF4444]" role="alert">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email address *</Label>
                      <Input id="email" type="email" placeholder="chidi@company.com" {...register("email")} aria-invalid={errors.email ? "true" : undefined} aria-describedby={errors.email ? "email-error" : undefined} />
                      {errors.email && <p id="email-error" className="text-sm text-[#EF4444]" role="alert">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company / project name</Label>
                    <Input id="company" placeholder="Acme Corp (optional)" {...register("company")} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget range *</Label>
                    <select
                      id="budget"
                      {...register("budget")}
                      aria-invalid={errors.budget ? "true" : undefined}
                      className="flex h-10 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-3 py-2 text-sm text-[var(--text-primary)] transition-colors focus-visible:outline-none focus-visible:border-[#A020F0] focus-visible:ring-1 focus-visible:ring-[#A020F0]"
                    >
                      <option value="">Select a range…</option>
                      <option value="<500">Under $500 (quick fix)</option>
                      <option value="500-1500">$500 – $1,500</option>
                      <option value="1500-5000">$1,500 – $5,000</option>
                      <option value="5000-15000">$5,000 – $15,000</option>
                      <option value="15000+">$15,000+</option>
                      <option value="retainer">Monthly retainer</option>
                    </select>
                    {errors.budget && <p className="text-sm text-[#EF4444]" role="alert">{errors.budget.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">What are you building? *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your project, the problem you're solving, and any relevant links or context…"
                      {...register("message")}
                      aria-invalid={errors.message ? "true" : undefined}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && <p id="message-error" className="text-sm text-[#EF4444]" role="alert">{errors.message.message}</p>}
                  </div>

                  {serverError && (
                    <p className="rounded-lg border border-[rgba(239,68,68,0.3)] bg-[rgba(239,68,68,0.05)] p-3 text-sm text-[#EF4444]" role="alert">
                      {serverError}
                    </p>
                  )}

                  <MagneticButton>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl bg-[#A020F0] py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#B83AFF] disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0]"
                    >
                      {isSubmitting ? "Sending…" : "Send message →"}
                    </button>
                  </MagneticButton>

                  <p className="text-center text-xs text-[var(--text-muted)]">
                    No spam. Just a reply from a real human within 24 hours.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
