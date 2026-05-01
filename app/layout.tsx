import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { ClientEffects } from "@/components/layout/ClientEffects";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://maxxengage.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Maxx Engage — We build the web. We fix the web. We engineer what's next.",
    template: "%s | Maxx Engage",
  },
  description:
    "Maxx Engage is a 3-person Lagos-based studio shipping production websites, web apps, and data tools for clients worldwide. Full-stack development, e-commerce, dashboards, and UI/UX.",
  keywords: [
    "web development", "Lagos", "Nigeria", "full-stack", "Next.js", "React",
    "e-commerce", "dashboard", "UI/UX design", "data analytics", "WordPress", "Laravel",
  ],
  authors: [{ name: "Maxx Engage", url: siteUrl }],
  creator: "Maxx Engage",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Maxx Engage",
    title: "Maxx Engage — We build the web. We fix the web. We engineer what's next.",
    description:
      "3-person Lagos studio. Full-stack development, e-commerce, dashboards, UI/UX, and data tools. Production-grade, shipped on time.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Maxx Engage — Lagos Web Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxx Engage — We build the web. We fix the web.",
    description: "3-person Lagos studio building production websites, web apps, and data tools.",
    images: ["/og-image.png"],
    creator: "@Ghost912932",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "512x512", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Client-only effects (cursor, loading screen, command palette, easter egg) */}
          <ClientEffects />
          {/* Scroll progress bar — renders server-side safely */}
          <ScrollProgress />

          <Header />
          <main id="main-content" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />

          {/* Analytics placeholder — swap in Vercel Analytics or Plausible here */}
          {/* <Analytics /> */}

          {/* JSON-LD Organization schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Maxx Engage",
                url: siteUrl,
                logo: `${siteUrl}/logos/maxx-engage-dark.png`,
                description:
                  "Lagos-based web development studio specialising in full-stack development, e-commerce, dashboards, UI/UX, and data analytics.",
                foundingLocation: { "@type": "Place", name: "Lagos, Nigeria" },
                sameAs: [
                  "https://github.com/Lingz450",
                  "https://linkedin.com/in/abass-ibrahim",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  email: "abassibrahim591@gmail.com",
                  contactType: "customer service",
                },
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
