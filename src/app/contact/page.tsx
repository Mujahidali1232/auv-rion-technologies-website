import type { Metadata } from "next";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import { company } from "@/lib/content";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact & Enterprise Brief Submission",
  description:
    "Initiate an enterprise software project brief with Auvrion Technologies. Serving Saudi Arabia, UAE, UK, and USA under bilateral NDA.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-canvas to-white py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Left Column: Direct Regional Contacts */}
        <div>
          <span className="eyebrow">Enterprise Procurement & Inquiries</span>
          <h1 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
            Start a project with Auvrion.
          </h1>
          <p className="mt-4 leading-relaxed text-muted sm:text-lg">
            Share your platform roadmap, system constraints, or sovereign compliance needs.
            Every brief is evaluated directly by a senior engineering partner — never an automated sales funnel.
          </p>

          <div className="mt-10 rounded-3xl border border-line bg-white p-6 shadow-sm space-y-6">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-wider text-brand-deep">
                Official Correspondence
              </p>
              <div className="mt-2 flex items-center gap-2">
                <Mail size={16} className="text-brand shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="font-display text-base font-bold text-navy hover:text-brand-deep"
                >
                  {company.email}
                </a>
              </div>
            </div>

            <div className="border-t border-line/60 pt-6">
              <p className="font-display text-xs font-bold uppercase tracking-wider text-brand-deep">
                Direct Regional Desk Lines
              </p>
              <div className="mt-3 space-y-2.5 text-xs text-navy font-semibold">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-muted">
                    <Phone size={14} className="text-brand" /> Saudi Arabia (KSA):
                  </span>
                  <span>{company.saudiPhone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-muted">
                    <Phone size={14} className="text-brand" /> United Arab Emirates:
                  </span>
                  <span>{company.phone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-muted">
                    <Phone size={14} className="text-brand" /> United Kingdom:
                  </span>
                  <span>{company.ukPhone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-muted">
                    <Phone size={14} className="text-brand" /> United States:
                  </span>
                  <span>{company.usPhone}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-line/60 pt-6">
              <p className="font-display text-xs font-bold uppercase tracking-wider text-brand-deep">
                Regional Hub Locations
              </p>
              <div className="mt-3 space-y-2 text-xs">
                {company.hubs.map((hub) => (
                  <div key={hub.city} className="flex items-center justify-between">
                    <span className="font-bold text-navy">{hub.city}</span>
                    <span className="text-muted">{hub.address}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-muted">
            <ShieldCheck size={16} className="text-emerald-600" />
            <span>All communications protected by strict mutual non-disclosure.</span>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
