import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, Globe2, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TechRadar } from "@/components/interactive/TechRadar";
import { industries, process, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Enterprise Capabilities & Practices",
  description:
    "Product engineering, enterprise systems, cloud SRE, applied AI, fintech infrastructure, and technical advisory by Auvrion Technologies.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-canvas to-white py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <span className="eyebrow">Enterprise Engineering Capabilities</span>
          <h1 className="font-display mt-4 max-w-4xl text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-6xl">
            Software architectures designed for programs that cannot fail.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Auvrion Technologies covers the complete lifecycle: from technical discovery
            and sovereign architecture design to continuous production SRE. One accountable, senior-led team.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-navy">
              <ShieldCheck size={14} className="text-emerald-500" /> ISO 27001 & SOC 2 Ready
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-navy">
              <Globe2 size={14} className="text-brand" /> Bilingual Arabic/English UX
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-navy">
              <Lock size={14} className="text-brand-deep" /> In-Kingdom GCC Data Residency
            </span>
          </div>
        </div>
      </section>

      {/* Practices Deep Dive */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="space-y-10">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.05}>
              <article
                id={service.slug}
                className="overflow-hidden rounded-[2.5rem] border border-line bg-white p-8 shadow-sm transition-all hover:shadow-xl lg:p-12"
              >
                <div className="grid gap-10 lg:grid-cols-12">
                  {/* Left Practice Info */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-xs font-bold tracking-[0.2em] text-brand-deep">
                        PRACTICE 0{i + 1}
                      </span>
                      <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[0.68rem] font-bold text-brand-deep">
                        {service.metrics}
                      </span>
                    </div>

                    <h2 className="font-display mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm font-semibold text-brand-deep">{service.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                      {service.summary}
                    </p>

                    <div className="mt-8">
                      <p className="text-xs font-bold uppercase tracking-wider text-navy">
                        Primary Technologies:
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {service.tech.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center gap-1 rounded-lg border border-line bg-canvas px-2.5 py-1 text-xs font-medium text-navy"
                          >
                            <Cpu size={12} className="text-brand" /> {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href={`/contact?interest=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand"
                      >
                        Scope This Capability <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Scope Checklist */}
                  <div className="flex flex-col justify-between rounded-3xl border border-line bg-canvas p-6 sm:p-8 lg:col-span-7">
                    <div>
                      <p className="font-display text-xs font-bold uppercase tracking-wider text-navy">
                        Delivered Deliverables & Scope
                      </p>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {service.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-2.5 rounded-2xl border border-line/60 bg-white p-3.5 text-xs font-medium text-navy sm:text-sm"
                          >
                            <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 border-t border-line/60 pt-4 text-xs text-muted">
                      100% intellectual property ownership transferred upon deployment · Full automated test coverage.
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tech Radar Interactive Section */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <TechRadar />
      </section>

      {/* Delivery Process */}
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <span className="font-display text-xs font-bold tracking-[0.25em] uppercase text-brand">
              Execution Cadence
            </span>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.03em] sm:text-5xl">
              From Discovery to Global Production.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-navy-deep p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-extrabold text-brand">
                    {item.step}
                  </span>
                  <span className="text-xs text-white/60">{item.timeline}</span>
                </div>
                <h3 className="font-display mt-4 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/70">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <span className="eyebrow">Sector Fluency</span>
        <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy sm:text-5xl">
          Industries We Specialize In.
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <article key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[0.68rem] font-bold text-brand-deep">
                {item.badge}
              </span>
              <h3 className="font-display mt-3 text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{item.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-line bg-canvas p-8 sm:p-12 text-center">
          <h3 className="font-display text-2xl font-bold text-navy sm:text-3xl">
            Have a custom platform architecture requirement?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
            Our principal architects will evaluate your technical specifications and provide a preliminary engineering breakdown.
          </p>
          <div className="mt-6">
            <Button href="/contact">
              Initiate Architecture Discussion <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
