"use client";

import { useState } from "react";
import { techStackCategories } from "@/lib/content";
import { Check, Code2, Database, Globe, Lock, Server } from "lucide-react";

const icons = [Code2, Server, Database, Globe, Lock];

export function TechRadar() {
  const [activeTab, setActiveTab] = useState(0);
  const current = techStackCategories[activeTab];

  return (
    <div className="rounded-[2.5rem] border border-line bg-white p-6 shadow-sm sm:p-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="eyebrow">Enterprise Tech Stack</span>
          <h3 className="font-display mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Modern, Resilient Architecture
          </h3>
        </div>
        <p className="text-xs text-muted">
          Battle-tested in high-throughput international production environments
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex flex-wrap gap-2 border-b border-line pb-4">
        {techStackCategories.map((category, index) => {
          const Icon = icons[index % icons.length];
          const active = activeTab === index;
          return (
            <button
              key={category.name}
              type="button"
              onClick={() => setActiveTab(index)}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                active
                  ? "bg-navy text-white shadow-md"
                  : "bg-canvas text-navy/70 hover:bg-line/40 hover:text-navy"
              }`}
            >
              <Icon size={15} className={active ? "text-brand" : "text-muted"} />
              {category.name}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h4 className="font-display text-xl font-bold text-navy sm:text-2xl">
            {current.name}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {current.description}
          </p>
          <div className="mt-6 rounded-2xl border border-line bg-canvas p-4">
            <p className="font-display text-xs font-bold uppercase tracking-wider text-navy">
              Engineering Guarantee
            </p>
            <p className="mt-1 text-xs text-muted">
              Zero-vulnerability static analysis, automated CI/CD gating, TypeScript strict-mode typing, and comprehensive end-to-end testing before any deployment.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3.5">
            {current.technologies.map((tech) => (
              <div
                key={tech}
                className="group flex flex-col justify-between rounded-xl border border-line/80 bg-canvas p-3.5 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  <Check size={14} className="text-muted/40 transition-colors group-hover:text-brand" />
                </div>
                <p className="font-display mt-3 text-xs font-bold text-navy sm:text-sm">
                  {tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
