"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send, ShieldCheck } from "lucide-react";
import { services } from "@/lib/content";

const countries = [
  "Saudi Arabia (KSA)",
  "United Arab Emirates (UAE)",
  "United Kingdom (UK)",
  "United States (USA)",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "European Union",
  "Other International",
];

const budgetTiers = [
  "$50,000 – $100,000",
  "$100,000 – $250,000",
  "$250,000 – $500,000",
  "$500,000+ (Enterprise Program)",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState(() => {
    let initialBrief = "";
    let initialInterest = "";

    if (typeof window !== "undefined") {
      try {
        const params = new URLSearchParams(window.location.search);
        const interestParam = params.get("interest");
        const marketParam = params.get("market");
        const cadenceParam = params.get("cadence");

        if (interestParam) initialInterest = interestParam;
        if (interestParam || marketParam || cadenceParam) {
          initialBrief = `Scope inquiry configured via Estimator:\n• Domain: ${interestParam || "General"}\n• Target Region: ${marketParam || "Unspecified"}\n• Squad Cadence: ${cadenceParam || "Default"}\n\nAdditional requirements: `;
        }
      } catch {
        // ignore
      }
    }

    return {
      name: "",
      email: "",
      organization: "",
      phone: "",
      country: "",
      interest: initialInterest,
      budget: "",
      ndaRequired: true,
      brief: initialBrief,
    };
  });

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-[2.5rem] border border-line bg-white p-8 shadow-xl sm:p-12">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
          <CheckCircle2 size={28} />
        </div>
        <span className="eyebrow mt-6">Enterprise Brief Received</span>
        <h2 className="font-display mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
          Thank you. A senior partner will respond within 24 hours.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          We review every brief personally with our senior architecture leads.
          Your inquiry is protected under our strict bilateral non-disclosure protocols.
          {formData.ndaRequired
            ? " A bilateral mutual NDA will be countersigned and dispatched to your email before our initial technical review."
            : ""}
        </p>

        <div className="mt-8 rounded-2xl border border-line bg-canvas p-6 space-y-2 text-xs">
          <p className="font-bold text-navy">Direct Global Channels:</p>
          <p className="text-muted">Saudi Arabia: +966 11 480 3210 · UAE: +971 4 288 9120</p>
          <p className="text-muted">United Kingdom: +44 20 7946 0920 · USA: +1 212 901 8430</p>
        </div>

        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 font-display text-xs font-bold uppercase tracking-wider text-brand hover:text-brand-deep"
        >
          Submit another brief
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[2.5rem] border border-line bg-white p-8 shadow-xl sm:p-12"
    >
      <div className="flex items-center justify-between border-b border-line pb-6">
        <div>
          <span className="eyebrow">Confidential RFP & Scope Submission</span>
          <h3 className="font-display mt-1 text-2xl font-bold text-navy sm:text-3xl">
            Initiate Project Brief
          </h3>
        </div>
        <span className="hidden items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 sm:inline-flex">
          <ShieldCheck size={14} /> NDA Guaranteed
        </span>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-navy">
          Full Name *
          <input
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Eng. Fahad Al-Saud / John Smith"
            className="mt-2 w-full rounded-2xl border border-line bg-canvas px-4 py-3.5 text-sm font-normal text-navy outline-none ring-brand/30 focus:bg-white focus:ring-2"
          />
        </label>

        <label className="block text-xs font-bold uppercase tracking-wider text-navy">
          Corporate Work Email *
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@organization.com"
            className="mt-2 w-full rounded-2xl border border-line bg-canvas px-4 py-3.5 text-sm font-normal text-navy outline-none ring-brand/30 focus:bg-white focus:ring-2"
          />
        </label>

        <label className="block text-xs font-bold uppercase tracking-wider text-navy">
          Organization / Entity *
          <input
            name="organization"
            type="text"
            required
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            placeholder="Ministry / Enterprise / FinTech Name"
            className="mt-2 w-full rounded-2xl border border-line bg-canvas px-4 py-3.5 text-sm font-normal text-navy outline-none ring-brand/30 focus:bg-white focus:ring-2"
          />
        </label>

        <label className="block text-xs font-bold uppercase tracking-wider text-navy">
          Direct Phone / WhatsApp
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+966 / +971 / +44 / +1 ..."
            className="mt-2 w-full rounded-2xl border border-line bg-canvas px-4 py-3.5 text-sm font-normal text-navy outline-none ring-brand/30 focus:bg-white focus:ring-2"
          />
        </label>

        <label className="block text-xs font-bold uppercase tracking-wider text-navy">
          Target Country / Jurisdiction *
          <select
            name="country"
            required
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="mt-2 w-full rounded-2xl border border-line bg-canvas px-4 py-3.5 text-sm font-normal text-navy outline-none ring-brand/30 focus:bg-white focus:ring-2"
          >
            <option value="" disabled>
              Select Country
            </option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-xs font-bold uppercase tracking-wider text-navy">
          Practice Area / Capability *
          <select
            name="interest"
            required
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className="mt-2 w-full rounded-2xl border border-line bg-canvas px-4 py-3.5 text-sm font-normal text-navy outline-none ring-brand/30 focus:bg-white focus:ring-2"
          >
            <option value="" disabled>
              Select Capability
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Complete Turnkey Solution">Complete Turnkey Solution</option>
            <option value="Architecture Advisory / Audit">Architecture Advisory / Audit</option>
          </select>
        </label>

        <label className="block text-xs font-bold uppercase tracking-wider text-navy sm:col-span-2">
          Estimated Budget Allocation
          <select
            name="budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="mt-2 w-full rounded-2xl border border-line bg-canvas px-4 py-3.5 text-sm font-normal text-navy outline-none ring-brand/30 focus:bg-white focus:ring-2"
          >
            <option value="">Select Estimated Range (Optional)</option>
            {budgetTiers.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-xs font-bold uppercase tracking-wider text-navy sm:col-span-2">
          Project Context, Constraints & Timeline *
          <textarea
            name="brief"
            required
            rows={5}
            value={formData.brief}
            onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
            placeholder="Describe your system objectives, target launch date, sovereign data requirements, or current architectural bottlenecks..."
            className="mt-2 w-full resize-y rounded-2xl border border-line bg-canvas px-4 py-3.5 text-sm font-normal text-navy outline-none ring-brand/30 placeholder:text-muted/60 focus:bg-white focus:ring-2"
          />
        </label>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <input
          type="checkbox"
          id="ndaRequired"
          checked={formData.ndaRequired}
          onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
          className="h-4 w-4 rounded border-line text-brand focus:ring-brand"
        />
        <label htmlFor="ndaRequired" className="text-xs text-navy font-semibold cursor-pointer">
          Require standard mutual bilateral Non-Disclosure Agreement (NDA) before detailed discovery
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted max-w-sm">
          Protected under international commercial privacy laws. Your brief is never shared with third parties.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-8 py-3.5 font-display text-sm font-bold text-white shadow-lg transition-all hover:bg-brand-deep hover:shadow-brand/30"
        >
          Submit Enterprise Brief <Send size={15} />
        </button>
      </div>
    </form>
  );
}
