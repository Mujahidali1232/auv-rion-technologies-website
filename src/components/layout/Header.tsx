"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Globe, Mail, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { company, nav } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line/80 bg-white/95 shadow-[0_12px_36px_-20px_rgba(11,30,51,0.25)] backdrop-blur-xl"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo priority />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-line/60 bg-canvas/80 p-1.5 backdrop-blur-md md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-1.5 text-xs font-semibold tracking-tight transition-all duration-200 ${
                  active
                    ? "bg-navy text-white shadow-sm"
                    : "text-navy/70 hover:bg-white hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Global Market indicator + CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-3 py-1 text-[0.7rem] font-semibold text-navy/80">
            <Globe size={13} className="text-brand" />
            <span>SA · AE · UK · US</span>
          </div>
          <Button href="/contact">
            Start a Program <ArrowRight size={14} />
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white text-navy shadow-sm transition-colors hover:bg-canvas"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-white shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              <div className="mb-2 flex items-center justify-between rounded-xl bg-canvas p-3">
                <span className="text-xs font-semibold text-muted">Global Operations</span>
                <span className="text-xs font-bold text-navy">Riyadh · Dubai · London · NYC</span>
              </div>

              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    pathname === item.href
                      ? "bg-navy text-white"
                      : "text-navy hover:bg-canvas"
                  }`}
                >
                  {item.label}
                  <ArrowRight size={14} className="opacity-50" />
                </Link>
              ))}

              <div className="mt-4 border-t border-line pt-4 space-y-2 text-xs text-muted">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-brand" />
                  <a href={`mailto:${company.email}`} className="text-navy font-medium">
                    {company.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-brand" />
                  <span className="text-navy font-medium">{company.saudiPhone}</span>
                  <span className="text-muted">(KSA)</span>
                </div>
              </div>

              <div onClick={() => setOpen(false)}>
                <Button href="/contact" className="mt-4 w-full">
                  Initiate Project Brief
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
