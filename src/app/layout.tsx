import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://auvrion.tech"),
  title: {
    default: `${company.name} — ${company.tagline.replace(".", "")}`,
    template: `%s — ${company.name}`,
  },
  description: company.description,
  keywords: [
    "software development company",
    "custom software",
    "Saudi Arabia",
    "UAE",
    "UK",
    "USA",
    "enterprise software",
    "Auvrion Technologies",
    "fintech development",
    "AI engineering",
    "cloud architecture",
  ],
  icons: {
    icon: "/brand/favicon-32x32.png",
    apple: "/brand/icon-192.png",
  },
  openGraph: {
    title: `${company.name} — ${company.tagline}`,
    description: company.description,
    type: "website",
    locale: "en_US",
    siteName: company.name,
    images: [
      {
        url: "/brand/auvrion-logo.jpg",
        width: 1024,
        height: 1024,
        alt: `${company.name} — ${company.tagline}`,
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full bg-canvas font-sans text-ink selection:bg-brand/20 selection:text-navy">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex min-h-screen flex-col pt-[4.5rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
