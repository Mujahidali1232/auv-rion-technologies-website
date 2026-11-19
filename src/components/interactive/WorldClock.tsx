"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { company } from "@/lib/content";

type HubTime = {
  city: string;
  region: string;
  timeStr: string;
  badge: string;
  isWorkingHours: boolean;
};

export function WorldClock() {
  const [times, setTimes] = useState<HubTime[]>([]);

  useEffect(() => {
    function updateTimes() {
      const now = new Date();
      const timeZoneMap: Record<string, string> = {
        Riyadh: "Asia/Riyadh",
        Dubai: "Asia/Dubai",
        London: "Europe/London",
        "New York": "America/New_York",
      };

      const computed: HubTime[] = company.hubs.map((hub) => {
        const tz = timeZoneMap[hub.city] || "UTC";
        try {
          const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: tz,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          });
          const hourFormatter = new Intl.DateTimeFormat("en-US", {
            timeZone: tz,
            hour: "numeric",
            hour12: false,
          });
          const hourNum = parseInt(hourFormatter.format(now), 10);
          const isWorking = hourNum >= 8 && hourNum < 19;

          return {
            city: hub.city,
            region: hub.region,
            timeStr: formatter.format(now),
            badge: hub.badge,
            isWorkingHours: isWorking,
          };
        } catch {
          return {
            city: hub.city,
            region: hub.region,
            timeStr: "--:--:--",
            badge: hub.badge,
            isWorkingHours: true,
          };
        }
      });

      setTimes(computed);
    }

    updateTimes();
    const timer = setInterval(updateTimes, 1000);
    return () => clearInterval(timer);
  }, []);

  if (times.length === 0) return null;

  return (
    <div className="w-full rounded-2xl border border-line/80 bg-white/70 p-4 shadow-sm backdrop-blur-md sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-line/50 pb-3">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-brand" />
          <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-navy">
            Synchronized Global Delivery Mesh
          </span>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-2.5 py-1 text-[0.7rem] font-semibold text-emerald-700">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Live Distributed Operations · 24/7 SRE
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {times.map((hub) => (
          <div
            key={hub.city}
            className="group rounded-xl border border-line/60 bg-white/90 p-3.5 transition-all duration-300 hover:border-brand/40 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xs font-bold uppercase tracking-wider text-muted">
                {hub.city}
              </span>
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  hub.isWorkingHours ? "bg-emerald-500" : "bg-brand/50"
                }`}
                title={hub.isWorkingHours ? "In-Office Collaboration" : "On-Call Engineering"}
              />
            </div>
            <p className="font-display mt-1 text-lg font-bold tracking-tight text-navy sm:text-xl">
              {hub.timeStr}
            </p>
            <p className="mt-0.5 truncate text-[0.7rem] text-muted">{hub.badge}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
