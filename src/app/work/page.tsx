import type { Metadata } from "next";
import { ArrowRight, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { work } from "@/lib/content";

export const metadata: Metadata = {
  title: "Selected Engagements & Case Studies",
  description:
    "Enterprise software case studies by Auvrion Technologies across sovereign public sector, private banking, industrial telemetry, and healthcare.",
};

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-canvas to-white py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <span className="eyebrow">Proven Institutional Track Record</span>
          <h1 className="font-display mt-4 max-w-4xl text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-6xl">
            Selected Case Studies & Engagements.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            A cross-section of mission-critical systems engineered by Auvrion Technologies.
            Client identities are protected under strict bilateral NDAs where sovereign security requires it;
            the engineering fidelity is absolute.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-semibold text-navy">
              <Lock size={14} className="text-brand" /> Strict Bilateral Non-Disclosure
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-semibold text-navy">
              <ShieldCheck size={14} className="text-emerald-500" /> Bank & Sovereign Audited
            </span>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="space-y-12">
          {work.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.08}>
              <article className="overflow-hidden rounded-[2.5rem] border border-line bg-white shadow-md transition-all hover:shadow-2xl lg:grid lg:grid-cols-12">
                {/* Left: Deep Story */}
                <div className="p-8 sm:p-12 lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand-deep">
                      {item.sector}
                    </span>
                    <span className="text-xs font-medium text-muted">
                      {item.location}
                    </span>
                  </div>

                  <h2 className="font-display mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">{item.summary}</p>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <div className="rounded-2xl border border-line bg-canvas p-5">
                      <p className="font-display text-xs font-bold uppercase tracking-wider text-navy">
                        The Institutional Challenge
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                        {item.challenge}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-line bg-canvas p-5">
                      <p className="font-display text-xs font-bold uppercase tracking-wider text-navy">
                        Architectural Solution
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                        {item.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-line/80 pt-6">
                    <p className="text-sm font-semibold text-navy">
                      <strong className="text-brand-deep">Verified Outcome:</strong> {item.outcome}
                    </p>
                  </div>
                </div>

                {/* Right: Metrics & Tech column */}
                <div className="flex flex-col justify-between border-t border-line bg-navy p-8 text-white sm:p-12 lg:col-span-4 lg:border-l lg:border-t-0">
                  <div>
                    <span className="font-display text-xs font-bold tracking-widest uppercase text-brand">
                      Verified Metrics
                    </span>
                    <div className="mt-6 space-y-5">
                      {item.metrics.map((metric) => (
                        <div key={metric.label} className="border-b border-white/10 pb-3">
                          <p className="font-display text-3xl font-extrabold text-white">
                            {metric.value}
                          </p>
                          <p className="mt-0.5 text-xs text-white/70">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                      Technologies Deployed:
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-white/10 px-2 py-1 text-xs font-medium text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-16 rounded-[2.5rem] bg-navy px-8 py-16 text-white shadow-xl sm:px-14">
          <div className="max-w-2xl">
            <span className="font-display text-xs font-bold tracking-[0.25em] uppercase text-brand">
              Confidential Consultation
            </span>
            <h2 className="font-display mt-3 text-3xl font-extrabold sm:text-4xl">
              Have a high-consequence platform in flight?
            </h2>
            <p className="mt-4 text-base text-white/80">
              We join at the strategic architecture stage, step into stalled builds,
              or scale live platforms that have reached enterprise bottlenecks.
            </p>
            <div className="mt-8">
              <Button href="/contact">
                Brief Auvrion Under NDA <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
