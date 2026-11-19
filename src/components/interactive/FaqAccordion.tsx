"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className={`rounded-2xl border transition-all duration-200 ${
              isOpen
                ? "border-brand/40 bg-white shadow-md ring-1 ring-brand/20"
                : "border-line bg-white/70 hover:border-brand/30 hover:bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-bold text-navy sm:text-lg">
                {faq.question}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                  isOpen ? "rotate-180 bg-brand text-white" : "bg-canvas text-navy"
                }`}
              >
                <ChevronDown size={18} />
              </span>
            </button>
            {isOpen ? (
              <div className="border-t border-line/60 px-5 pb-6 pt-3 sm:px-6">
                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  {faq.answer}
                </p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
