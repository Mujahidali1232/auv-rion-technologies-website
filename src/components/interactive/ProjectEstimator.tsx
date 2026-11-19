"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, Shield, Sparkles } from "lucide-react";

const projectTypes = [
  {
    id: "portal",
    title: "Sovereign / Enterprise Portal",
    desc: "Citizen or large-scale customer multi-tenant web platform with bilingual English/Arabic UX.",
    baseWeeks: 10,
    stack: ["Next.js", "Go", "PostgreSQL", "Kafka"],
  },
  {
    id: "fintech",
    title: "Fintech & Wealth Banking",
    desc: "PCI-DSS and SAMA/FCA compliant transactional engine, real-time portfolio data, and Open Banking APIs.",
    baseWeeks: 12,
    stack: ["React", "Go / Rust", "PostgreSQL", "HashiCorp Vault"],
  },
  {
    id: "ai-data",
    title: "Applied AI & Sovereign Data",
    desc: "Private enterprise RAG, intelligent document automation, and real-time streaming analytics.",
    baseWeeks: 8,
    stack: ["Python", "FastAPI", "Milvus", "Kafka", "ClickHouse"],
  },
  {
    id: "mobile",
    title: "High-Performance Mobile Suite",
    desc: "Bilingual iOS (Swift) & Android (Kotlin) or React Native with biometric security and offline sync.",
    baseWeeks: 10,
    stack: ["Swift", "Kotlin", "React Native", "Node.js"],
  },
  {
    id: "cloud-modernization",
    title: "Cloud & Legacy Modernization",
    desc: "Zero-downtime migration, Kubernetes containerization, and DevSecOps pipelines.",
    baseWeeks: 6,
    stack: ["AWS / Azure / GCP", "Kubernetes", "Terraform", "Prometheus"],
  },
];

const targetMarkets = [
  { id: "saudi", name: "Saudi Arabia (KSA)", note: "In-Kingdom data residency & NCA ECC compliance" },
  { id: "uae", name: "United Arab Emirates (UAE)", note: "DIFC / ADGM regulatory standards" },
  { id: "uk", name: "United Kingdom", note: "FCA guidelines & European GDPR compliance" },
  { id: "usa", name: "United States / Global", note: "SOC 2 Type II, HIPAA & high-concurrency cloud" },
];

const teamPaces = [
  { id: "pod", label: "Dedicated Senior Pod", detail: "Lead Architect + 3 Senior Full-Stack Engineers + QA", multiplier: 1 },
  { id: "turnkey", label: "Full Turnkey Squad", detail: "Principal Lead + 5 Engineers + UX Lead + DevOps + PM", multiplier: 0.75 },
  { id: "surge", label: "Architecture Audit & Sprint", detail: "Principal Architect + 2 Senior Leads for rapid turnaround", multiplier: 0.5 },
];

export function ProjectEstimator() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedMarket, setSelectedMarket] = useState(targetMarkets[0]);
  const [selectedTeam, setSelectedTeam] = useState(teamPaces[1]);

  const estimatedWeeks = Math.max(4, Math.round(selectedType.baseWeeks * selectedTeam.multiplier));

  return (
    <div className="rounded-[2.5rem] border border-line bg-gradient-to-b from-white to-canvas p-6 shadow-xl sm:p-10 lg:p-12">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
        <div>
          <span className="eyebrow">Enterprise Interactive Tool</span>
          <h3 className="font-display mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Interactive Scope & Architecture Estimator
          </h3>
          <p className="mt-1 text-sm text-muted">
            Configure your technical scope to preview delivery cadence and recommended stack.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-2 text-xs font-semibold text-brand-deep">
          <Sparkles size={15} />
          Guaranteed Senior Delivery
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          {/* 1. Platform Type */}
          <div>
            <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-navy">
              1. Select Platform Domain
            </label>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {projectTypes.map((type) => {
                const active = selectedType.id === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`rounded-2xl border p-4 text-left transition-all ${
                      active
                        ? "border-brand bg-white shadow-md ring-2 ring-brand/20"
                        : "border-line/70 bg-white/60 hover:border-brand/40 hover:bg-white"
                    }`}
                  >
                    <p className={`font-display text-sm font-bold ${active ? "text-brand-deep" : "text-navy"}`}>
                      {type.title}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">{type.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Target Market */}
          <div>
            <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-navy">
              2. Target Region & Regulatory Baseline
            </label>
            <div className="grid gap-2 sm:grid-cols-2">
              {targetMarkets.map((market) => {
                const active = selectedMarket.id === market.id;
                return (
                  <button
                    key={market.id}
                    type="button"
                    onClick={() => setSelectedMarket(market)}
                    className={`flex items-start gap-3 rounded-2xl border p-3.5 text-left transition-all ${
                      active
                        ? "border-brand bg-white shadow-sm ring-1 ring-brand/30"
                        : "border-line/60 bg-white/60 hover:bg-white"
                    }`}
                  >
                    <div
                      className={`mt-0.5 h-4 w-4 shrink-0 rounded-full border-2 ${
                        active ? "border-brand bg-brand" : "border-muted/40"
                      }`}
                    />
                    <div>
                      <p className="font-display text-xs font-bold text-navy">{market.name}</p>
                      <p className="text-[0.7rem] text-muted">{market.note}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Delivery Team Configuration */}
          <div>
            <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-navy">
              3. Delivery Squad Cadence
            </label>
            <div className="space-y-2">
              {teamPaces.map((team) => {
                const active = selectedTeam.id === team.id;
                return (
                  <button
                    key={team.id}
                    type="button"
                    onClick={() => setSelectedTeam(team)}
                    className={`flex w-full items-center justify-between rounded-xl border p-3 text-left transition-all ${
                      active
                        ? "border-brand bg-white shadow-sm ring-1 ring-brand/20"
                        : "border-line/60 bg-white/50 hover:bg-white"
                    }`}
                  >
                    <div>
                      <p className="font-display text-xs font-bold text-navy">{team.label}</p>
                      <p className="text-[0.7rem] text-muted">{team.detail}</p>
                    </div>
                    {active ? <CheckCircle2 size={16} className="shrink-0 text-brand" /> : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Blueprint Summary Card */}
        <div className="flex flex-col justify-between rounded-3xl border border-line bg-navy p-6 text-white shadow-2xl sm:p-8 lg:col-span-5">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-display text-xs font-semibold tracking-widest text-brand uppercase">
                Architecture Blueprint
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[0.68rem] font-medium text-white/90">
                <Shield size={12} className="text-emerald-400" /> Confirmed Fit
              </span>
            </div>

            <div className="mt-6">
              <p className="text-xs text-white/60">Estimated Time-to-Production</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                  {estimatedWeeks}–{estimatedWeeks + 4}
                </span>
                <span className="font-display text-lg text-brand font-semibold">Weeks</span>
              </div>
              <p className="mt-1 text-xs text-white/60">
                First functional staging release delivered by Week 2.
              </p>
            </div>

            <div className="mt-6 space-y-3.5 border-t border-white/10 pt-6">
              <div>
                <p className="text-[0.7rem] uppercase tracking-wider text-white/50">Jurisdiction & Compliance</p>
                <p className="font-display mt-0.5 text-sm font-semibold text-white">
                  {selectedMarket.name}
                </p>
                <p className="text-xs text-white/70">{selectedMarket.note}</p>
              </div>

              <div>
                <p className="text-[0.7rem] uppercase tracking-wider text-white/50">Squad Model</p>
                <p className="font-display mt-0.5 text-sm font-semibold text-white">
                  {selectedTeam.label}
                </p>
                <p className="text-xs text-white/70">{selectedTeam.detail}</p>
              </div>

              <div>
                <p className="text-[0.7rem] uppercase tracking-wider text-white/50">Core Recommended Stack</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {selectedType.stack.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-0.5 text-[0.7rem] font-medium text-white"
                    >
                      <Cpu size={11} className="text-brand" /> {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <Link
              href={`/contact?interest=${encodeURIComponent(selectedType.title)}&market=${encodeURIComponent(selectedMarket.name)}&cadence=${encodeURIComponent(selectedTeam.label)}`}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 text-center font-display text-sm font-bold text-white shadow-lg transition-all hover:bg-brand-deep hover:shadow-brand/30"
            >
              Discuss Scope with Senior Lead <ArrowRight size={16} />
            </Link>
            <p className="mt-2.5 text-center text-[0.7rem] text-white/50">
              Direct consultation under mutual NDA · Response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
