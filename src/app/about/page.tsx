import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { WorldClock } from "@/components/interactive/WorldClock";
import { company, principles, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Auvrion Technologies",
  description:
    "Auvrion Technologies is an international corporate software engineering company serving clients across Saudi Arabia, the UAE, the UK, and the USA.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-canvas to-white py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <span className="eyebrow">About Auvrion Technologies</span>
          <h1 className="font-display mt-4 max-w-4xl text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-6xl">
            A software company built for international standards.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {company.description}
          </p>

          <div className="mt-12">
            <WorldClock />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-line bg-navy text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 sm:grid-cols-4 sm:px-8">
          {stats.map((item) => (
            <div key={item.label} className="border-l border-white/10 pl-6">
              <p className="font-display text-3xl font-extrabold sm:text-4xl">{item.value}</p>
              <p className="mt-1 font-display text-sm font-bold text-brand">{item.label}</p>
              <p className="mt-0.5 text-xs text-white/60">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Brand Philosophy */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">Our Foundation</span>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy sm:text-5xl">
                Closing the gap between promise and production.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
                <p>
                  Auvrion Technologies was established to solve an endemic failure in international software
                  procurement: enterprise contracts sold by senior partners, but handed to outsourced junior benches
                  who lack domain fluency and architectural discipline.
                </p>
                <p>
                  We operate as a high-caliber cross-functional engineering studio.
                  Our senior architects and product leads remain on your codebase from first commit to multi-region launch.
                  We build systems that withstand regulatory scrutiny, sovereign security reviews, and extreme traffic concurrency.
                </p>
                <p>
                  Our focus on <strong className="font-semibold text-navy">Saudi Arabia, the UAE, the UK, and the USA</strong> is
                  intentional. We combine the rapid iteration velocity of Silicon Valley with the deep institutional knowledge
                  required for Saudi Vision 2030 transformations, DIFC fintech compliance, and European privacy governance.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-[2.5rem] border border-line bg-white p-8 shadow-xl sm:p-10 text-center">
                <Logo href={null} variant="full" className="mx-auto h-auto w-full max-w-xs" />
                <h3 className="font-display mt-6 text-xl font-bold text-navy">
                  Technology Beyond Limits.
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Official registered brand mark of Auvrion Technologies.
                  Preserving engineering excellence and architectural rigor across global borders.
                </p>

                <div className="mt-6 border-t border-line pt-6 text-left space-y-3 text-xs">
                  <div className="flex items-center gap-2 text-navy font-semibold">
                    <CheckCircle2 size={15} className="text-brand shrink-0" />
                    <span>Zero junior bench handoffs</span>
                  </div>
                  <div className="flex items-center gap-2 text-navy font-semibold">
                    <CheckCircle2 size={15} className="text-brand shrink-0" />
                    <span>100% IP & source code ownership</span>
                  </div>
                  <div className="flex items-center gap-2 text-navy font-semibold">
                    <CheckCircle2 size={15} className="text-brand shrink-0" />
                    <span>Sovereign in-country data deployment</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Strategic Hubs */}
      <section className="bg-canvas py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <span className="eyebrow">Strategic Footprint</span>
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy sm:text-5xl">
            Global Presence, Local Alignment.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Our offices are situated in leading financial and technology capitals, providing in-person senior governance and continuous delivery.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {company.hubs.map((hub) => (
              <article
                key={hub.city}
                className="rounded-3xl border border-line bg-white p-7 shadow-sm transition-all hover:border-brand/40 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[0.68rem] font-bold text-brand-deep">
                    {hub.badge}
                  </span>
                  <span className="text-xs font-semibold text-brand">{hub.timezone}</span>
                </div>
                <h3 className="font-display mt-4 text-2xl font-bold text-navy">{hub.city}</h3>
                <p className="mt-1 text-sm font-semibold text-muted">{hub.region}</p>
                <p className="mt-3 text-xs text-muted/80">{hub.address}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <span className="eyebrow">Guiding Operating Principles</span>
        <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.03em] text-navy sm:text-5xl">
          How Auvrion Delivers Value.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="rounded-3xl border border-line bg-white p-8 sm:p-10 shadow-sm">
              <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{p.copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button href="/contact">
            Schedule a Consultation with a Partner <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  );
}
