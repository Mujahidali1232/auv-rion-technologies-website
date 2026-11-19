import Link from "next/link";
import { ArrowUpRight, Globe, Lock, Mail, Phone, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { certifications, company, nav, services } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-navy-deep bg-navy text-white">
      {/* Top Banner with Tagline & Brief CTA */}
      <div className="border-b border-white/10 bg-navy-deep/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-12 sm:flex-row sm:items-center sm:px-8">
          <div>
            <span className="font-display text-xs font-bold tracking-[0.25em] text-brand uppercase">
              International Delivery
            </span>
            <p className="font-display mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {company.tagline}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-display text-xs font-bold tracking-wider uppercase text-white shadow-lg transition-all hover:bg-brand-deep hover:shadow-brand/30"
          >
            Initiate Enterprise Brief <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        {/* Brand Column */}
        <div className="lg:col-span-4">
          <Logo variant="full" theme="dark" className="h-auto w-52" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
            Auvrion Technologies is an international software development partner for
            enterprises, sovereign institutions, and high-growth firms across Saudi Arabia,
            the UAE, the United Kingdom, and the United States.
          </p>

          <div className="mt-6 space-y-2 text-xs text-white/80">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-brand shrink-0" />
              <a href={`mailto:${company.email}`} className="hover:text-white underline-offset-2 hover:underline">
                {company.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-brand shrink-0" />
              <span>{company.saudiPhone} (KSA) · {company.phone} (UAE)</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-brand shrink-0" />
              <span>{company.ukPhone} (UK) · {company.usPhone} (US)</span>
            </div>
          </div>
        </div>

        {/* Global Hubs */}
        <div className="lg:col-span-4">
          <p className="font-display text-xs font-bold tracking-[0.2em] uppercase text-brand">
            Strategic Regional Hubs
          </p>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {company.hubs.map((hub) => (
              <div
                key={hub.city}
                className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="font-display text-sm font-bold text-white">{hub.city}</p>
                  <span className="text-[0.65rem] font-semibold text-brand">{hub.timezone.split(" ")[0]}</span>
                </div>
                <p className="mt-1 text-xs text-white/70">{hub.region}</p>
                <p className="mt-1 text-[0.7rem] text-white/50">{hub.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities & Navigation */}
        <div className="grid grid-cols-2 gap-8 lg:col-span-4">
          <div>
            <p className="font-display text-xs font-bold tracking-[0.2em] uppercase text-brand">
              Capabilities
            </p>
            <ul className="mt-5 space-y-2.5 text-xs text-white/70">
              {services.map((item) => (
                <li key={item.slug}>
                  <Link href="/services" className="transition-colors hover:text-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs font-bold tracking-[0.2em] uppercase text-brand">
              Navigation
            </p>
            <ul className="mt-5 space-y-2.5 text-xs text-white/70">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Security & Compliance Certifications Strip */}
      <div className="border-t border-white/10 bg-navy-deep py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 sm:px-8">
          <div className="flex items-center gap-2 text-xs text-white/80">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span className="font-bold">Enterprise Compliance Standards:</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {certifications.map((cert) => (
              <span
                key={cert.name}
                className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[0.7rem] font-medium text-white/80"
                title={cert.description}
              >
                <Lock size={10} className="text-brand" /> {cert.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Auvrion Technologies. All rights reserved. Registered across international jurisdictions.</p>
          <div className="flex items-center gap-6">
            <span className="text-white/40">Saudi Arabia · UAE · United Kingdom · United States</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
