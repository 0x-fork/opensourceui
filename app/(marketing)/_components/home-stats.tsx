import type { ReactNode } from "react";

import { Clock, Eye, Users } from "lucide-react";

import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

const VISITOR_INITIALS = ["N", "B", "S"] as const;

const VISITOR_BARS = [
  { id: "w1", height: "h-8" },
  { id: "w2", height: "h-10" },
  { id: "w3", height: "h-9" },
  { id: "w4", height: "h-12" },
  { id: "w5", height: "h-11" },
  { id: "w6", height: "h-14" },
  { id: "w7", height: "h-16" },
] as const;

type HomeStatsProps = Readonly<{
  className?: string;
}>;

function StatCardShell({
  icon: Icon,
  note,
  children,
  value,
  label,
}: Readonly<{
  icon: typeof Eye;
  note: string;
  children: ReactNode;
  value: string;
  label: string;
}>) {
  return (
    <article className="flex w-full flex-col rounded-2xl border border-neutral-100 bg-white p-4 md:h-full md:min-w-0">
      <div className="mb-4 flex items-start justify-between gap-2">
        <span className="inline-flex size-9 items-center justify-center rounded-full border border-neutral-100 bg-white text-neutral-500">
          <Icon size={14} strokeWidth={1.75} aria-hidden />
        </span>
        <span className="font-sans text-[11px] text-neutral-400">{note}</span>
      </div>

      <div className="flex flex-1 flex-col justify-center">{children}</div>

      <footer className="mt-4 border-t border-neutral-100 pt-3 md:mt-auto">
        <p className="font-serif text-2xl leading-none text-neutral-900 tabular-nums">
          {value}
        </p>
        <p className="mt-1 font-sans text-xs text-neutral-500">{label}</p>
      </footer>
    </article>
  );
}

function PageViewsCard() {
  return (
    <StatCardShell
      icon={Eye}
      note="Since launch"
      value={siteConfig.stats.pageViews}
      label="Page views"
    >
      <svg
        viewBox="0 0 320 120"
        preserveAspectRatio="none"
        className="h-32 w-full text-neutral-400"
        aria-hidden
      >
        <path
          d="M0 100 L70 72 L70 72 L150 72 L230 36 L320 18 V120 H0 Z"
          className="fill-neutral-100"
        />
        <polyline
          points="0,100 70,72 150,72 230,36 320,18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </StatCardShell>
  );
}

function VisitorsCard() {
  return (
    <StatCardShell
      icon={Users}
      note="Unique people"
      value={siteConfig.stats.visitors}
      label="Visitors"
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-center">
          {VISITOR_INITIALS.map((initial, index) => (
            <span
              key={initial}
              aria-hidden
              className={cn(
                "relative flex size-8 shrink-0 items-center justify-center rounded-full border border-neutral-200/80 bg-neutral-50 font-sans text-[11px] font-medium text-neutral-600 ring-2 ring-white",
                index > 0 && "-ml-2.5",
              )}
              style={{ zIndex: index + 1 }}
            >
              {initial}
            </span>
          ))}
          <span
            aria-hidden
            className="relative -ml-2.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-neutral-200 font-sans text-xs font-medium text-neutral-600 ring-2 ring-white"
            style={{ zIndex: VISITOR_INITIALS.length + 1 }}
          >
            +
          </span>
        </div>

        <div className="flex h-18 items-end gap-1">
          {VISITOR_BARS.map((bar, index) => (
            <span
              key={bar.id}
              aria-hidden
              className={cn(
                "flex-1 rounded-sm",
                bar.height,
                index === VISITOR_BARS.length - 1
                  ? "bg-neutral-400"
                  : "bg-neutral-100",
              )}
            />
          ))}
        </div>
      </div>
    </StatCardShell>
  );
}

function AvgVisitCard() {
  return (
    <StatCardShell
      icon={Clock}
      note="Per session"
      value={`${siteConfig.stats.avgVisitMinutes} min`}
      label="Avg. visit"
    >
      <div className="flex h-18 flex-col justify-center gap-3">
        <div className="relative px-1">
          <span
            aria-hidden
            className="absolute inset-x-1 top-1/2 h-px -translate-y-1/2 bg-neutral-100"
          />
          <div className="relative flex justify-between">
            {[0, 1, 2, 3, 4].map((minute) => (
              <span
                key={minute}
                aria-hidden
                className={cn(
                  "size-2 rounded-full",
                  minute >= 2 ? "bg-neutral-700" : "bg-neutral-200",
                )}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between font-sans text-[10px] text-neutral-400">
          <span>0</span>
          <span>5 min</span>
        </div>
      </div>
    </StatCardShell>
  );
}

export function HomeStats({ className }: HomeStatsProps) {
  return (
    <section
      aria-label="Site usage statistics"
      className={cn("mt-10 w-full min-w-0", className)}
    >
      <div className="flex w-full flex-col gap-3 md:grid md:grid-cols-3 md:items-stretch">
        <PageViewsCard />
        <VisitorsCard />
        <AvgVisitCard />
      </div>
    </section>
  );
}
