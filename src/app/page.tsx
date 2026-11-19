import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Globe2,
  Lock,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { WorldClock } from "@/components/interactive/WorldClock";
import { ProjectEstimator } from "@/components/interactive/ProjectEstimator";
import { TechRadar } from "@/components/interactive/TechRadar";
import { FaqAccordion } from "@/components/interactive/FaqAccordion";
import {
  company,
  industries,
  principles,
  process,
  services,
  stats,
  testimonials,
  work,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-canvas to-white pb-20 pt-8 sm:pb-28 sm:pt-12">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-70" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-brand/12 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-10 left-1/4 h-80 w-80 rounded-full bg-navy/6 blur-[90px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Value Prop */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1.5 text-xs font-bold text-brand-deep">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                International Software Engineering & Platform Architecture
              </div>

              <h1 className="font-display mt-6 text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-navy sm:text-6xl lg:text-7xl">
                {company.tagline}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                Auvrion Technologies engineers high-consequence digital platforms,
                mission-critical cloud architectures, and sovereign AI systems for enterprises
                and governmental entities in <strong className="font-semibold text-navy">Saudi Arabia, the UAE, the UK, and the USA</strong>.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/contact">
                  Initiate Project Brief <ArrowRight size={16} />
                </Button>
                <Button href="/work" variant="secondary">
                  Explore Case Studies
                </Button>
              </div>

              {/* Target Markets */}
              <div className="mt-10 border-t border-line/60 pt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-muted">
                  Active International Practice Markets:
                </p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {company.markets.map((market) => (
                    <span
                      key={market.code}
                      className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-3 py-1.5 text-xs font-semibold text-navy shadow-sm transition-transform hover:-translate-y-0.5"
                    >
                      <span className="text-sm">{market.flag}</span>
                      <span>{market.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Official Brand Spotlight Card */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative mx-auto max-w-md rounded-[2.5rem] border border-line bg-white/95 p-8 shadow-[0_32px_80px_-24px_rgba(11,30,51,0.22)] backdrop-blur-xl sm:p-10">
                  <div className="absolute -top-3 right-8 rounded-full border border-brand/20 bg-brand-light px-3 py-1 text-[0.68rem] font-bold tracking-wider uppercase text-brand-deep">
                    Official Brand Identity
                  </div>

                  {/* Official Logo Full Display */}
                  <div className="py-4">
                    <Logo href={null} variant="full" priority className="mx-auto h-auto w-full max-w-xs" />
                  </div>

                  {/* Feature Badges below logo */}
                  <div className="mt-6 space-y-2.5 border-t border-line/80 pt-6 text-xs">
                    <div className="flex items-center justify-between text-navy font-semibold">
                      <span className="flex items-center gap-2 text-muted">
                        <ShieldCheck size={16} className="text-emerald-500" /> Security Standard:
                      </span>
                      <span>ISO 27001 & SOC 2 Ready</span>
                    </div>
                    <div className="flex items-center justify-between text-navy font-semibold">
                      <span className="flex items-center gap-2 text-muted">
                        <Globe2 size={16} className="text-brand" /> Regional Hubs:
                      </span>
                      <span>Riyadh · Dubai · London · NYC</span>
                    </div>
                    <div className="flex items-center justify-between text-navy font-semibold">
                      <span className="flex items-center gap-2 text-muted">
                        <Lock size={16} className="text-brand-deep" /> Data Sovereignty:
                      </span>
                      <span>Saudi NCA ECC & In-Kingdom</span>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl bg-canvas p-3.5 text-center">
                    <p className="font-display text-xs font-bold tracking-widest uppercase text-navy">
                      Technology Beyond Limits.
                    </p>
                    <p className="mt-0.5 text-[0.7rem] text-muted">
                      Enterprise Architecture · International Delivery
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Synchronized World Clock Bar */}
          <div className="mt-14">
            <WorldClock />
          </div>
        </div>
      </section>

      {/* 2. STATS & RELIABILITY STRIP */}
      <section className="border-y border-line bg-navy text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 sm:px-8 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="border-l border-white/10 pl-6">
              <p className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {item.value}
              </p>
              <p className="mt-1 font-display text-sm font-bold text-brand">{item.label}</p>
              <p className="mt-0.5 text-xs text-white/60">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY AUVRION — THE ENTERPRISE STANDARD */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow">Enterprise Delivery Standard</span>
              <h2 className="font-display mt-3 max-w-3xl text-3xl font-extrabold tracking-[-0.03em] text-navy sm:text-5xl">
                Software engineered for institutional resilience.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              We bridge the gap between high-velocity Silicon Valley product studios
              and the compliance requirements of sovereign governments and tier-1 banks.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {principles.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="group h-full rounded-[2rem] border border-line bg-white p-8 transition-all hover:border-brand/40 hover:shadow-xl sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand-deep transition-colors group-hover:bg-brand group-hover:text-white">
                  {i === 0 ? (
                    <Cpu size={24} />
                  ) : i === 1 ? (
                    <Globe2 size={24} />
                  ) : i === 2 ? (
                    <Workflow size={24} />
                  ) : (
                    <Lock size={24} />
                  )}
                </div>
                <h3 className="font-display mt-6 text-xl font-bold text-navy sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE PROJECT ESTIMATOR */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <Reveal>
          <ProjectEstimator />
        </Reveal>
      </section>

      {/* 5. CORE CAPABILITIES */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Capabilities & Practices</span>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy sm:text-5xl">
                What We Architect & Build.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-deep transition-colors hover:text-navy"
            >
              Explore all 6 practice areas <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.06}>
                <article className="group flex h-full flex-col justify-between rounded-3xl border border-line bg-canvas p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xs font-bold tracking-[0.2em] text-brand-deep">
                        PRACTICE 0{i + 1}
                      </span>
                      <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[0.68rem] font-bold text-brand-deep">
                        {service.metrics}
                      </span>
                    </div>

                    <h3 className="font-display mt-5 text-xl font-bold text-navy sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>

                    <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line/60 pt-4">
                      {service.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-line bg-white px-2 py-0.5 text-[0.7rem] font-medium text-navy/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand transition-colors group-hover:text-brand-deep"
                    >
                      View Capabilities <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FLAGSHIP CASE STUDIES */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Proven Impact</span>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy sm:text-5xl">
              High-Consequence Engagements.
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-deep transition-colors hover:text-navy"
          >
            Review all client case studies <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-14 space-y-8">
          {work.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.08}>
              <article className="overflow-hidden rounded-[2.5rem] border border-line bg-white shadow-sm transition-all hover:shadow-xl lg:grid lg:grid-cols-12">
                {/* Left: Case study content */}
                <div className="p-8 sm:p-10 lg:col-span-8 lg:p-12">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand-deep">
                      {item.sector}
                    </span>
                    <span className="text-xs font-semibold text-muted">
                      {item.location}
                    </span>
                  </div>

                  <h3 className="font-display mt-4 text-2xl font-bold text-navy sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{item.summary}</p>

                  {/* Challenge & Solution */}
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-line bg-canvas p-4">
                      <p className="font-display text-xs font-bold uppercase tracking-wider text-navy">
                        The Challenge
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{item.challenge}</p>
                    </div>
                    <div className="rounded-2xl border border-line bg-canvas p-4">
                      <p className="font-display text-xs font-bold uppercase tracking-wider text-navy">
                        The Architecture
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{item.solution}</p>
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="mt-6 border-t border-line pt-4">
                    <p className="text-xs font-semibold text-navy">
                      <strong className="text-brand-deep">Verified Result:</strong> {item.outcome}
                    </p>
                  </div>
                </div>

                {/* Right: Metrics & Tech column */}
                <div className="flex flex-col justify-between border-t border-line bg-navy p-8 text-white sm:p-10 lg:col-span-4 lg:border-l lg:border-t-0 lg:p-12">
                  <div>
                    <span className="font-display text-xs font-bold tracking-widest uppercase text-brand">
                      Measurable Impact
                    </span>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      {item.metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className="font-display text-2xl font-extrabold text-white">
                            {metric.value}
                          </p>
                          <p className="mt-0.5 text-xs text-white/60">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="text-xs font-semibold text-white/70">Delivered Stack:</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-white/10 px-2 py-0.5 text-[0.7rem] font-medium text-white"
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
      </section>

      {/* 7. TECH RADAR */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <Reveal>
          <TechRadar />
        </Reveal>
      </section>

      {/* 8. DELIVERY PROCESS (METHODOLOGY) */}
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="font-display text-xs font-bold tracking-[0.25em] uppercase text-brand">
              Methodology & Governance
            </span>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.03em] sm:text-5xl">
              An institutional delivery cadence built for accountability.
            </h2>
            <p className="mt-4 text-base text-white/70">
              Clear milestones, bi-weekly functional staging demos, zero-downtime releases,
              and 100% intellectual property transfer to your organization.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.step}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-navy-deep p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-extrabold text-brand">
                      {step.step}
                    </span>
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-[0.68rem] font-medium text-white/80">
                      {step.timeline}
                    </span>
                  </div>
                  <h3 className="font-display mt-6 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-white/70">{step.copy}</p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-[0.68rem] uppercase tracking-wider text-white/40">
                    Key Deliverables:
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-white/80">
                    {step.deliverables.slice(0, 3).map((d) => (
                      <li key={d} className="flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-brand shrink-0" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES SERVED */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <span className="eyebrow">Industry Domains</span>
        <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy sm:text-5xl">
          Deep Sector Competency.
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <article
              key={item.title}
              className="flex flex-col justify-between rounded-2xl border border-line bg-white p-7 shadow-sm transition-all hover:border-brand/40 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[0.68rem] font-bold text-brand-deep">
                    {item.badge}
                  </span>
                  <span className="text-[0.7rem] text-muted">{item.region}</span>
                </div>
                <h3 className="font-display mt-4 text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 10. CLIENT VOICES */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <span className="eyebrow">Executive Testimonials</span>
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy sm:text-5xl">
            Trusted by Leaders Across Borders.
          </h2>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="flex flex-col justify-between rounded-[2rem] border border-line bg-canvas p-8 shadow-sm"
              >
                <p className="text-base leading-relaxed text-navy sm:text-lg">
                  “{item.quote}”
                </p>
                <footer className="mt-8 border-t border-line pt-4">
                  <p className="font-display font-bold text-navy">{item.name}</p>
                  <p className="text-xs font-semibold text-brand-deep">{item.role}</p>
                  <p className="text-xs text-muted">{item.org} · {item.country}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION */}
      <section className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
        <div className="text-center">
          <span className="eyebrow mx-auto">Executive Inquiries</span>
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy sm:text-5xl">
            Frequently Asked Questions.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
            Key questions procurement directors, CTOs, and founders ask before engaging with Auvrion Technologies.
          </p>
        </div>

        <div className="mt-12">
          <FaqAccordion />
        </div>
      </section>

      {/* 12. FINAL CALL TO ACTION */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-navy px-8 py-20 text-white shadow-2xl sm:px-16">
          <div className="pointer-events-none absolute inset-0 grid-overlay-dark opacity-40" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <span className="font-display text-xs font-bold tracking-[0.25em] uppercase text-brand">
              Initiate Engagement
            </span>
            <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.03em] sm:text-6xl">
              Ready to build software without limits?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Tell us about your product roadmap, sovereign requirements, or mission-critical
              system constraint. A senior partner will review your brief under NDA and respond within 24 hours.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/contact">
                Initiate Confidential Brief <ArrowRight size={16} />
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore All Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
