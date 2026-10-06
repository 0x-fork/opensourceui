import Link from "next/link";
import { ChevronRight, MoveRight } from "lucide-react";

import { siteConfig } from "@/lib/site";

const PLATINUM_SPOTS_LEFT = 5;

/** Compact in-flow sponsor slot — shown where the right-rail platinum card is hidden. */
export function DocsMobileSponsor() {
  return (
    <div className="xl:hidden">
      <Link
        href={siteConfig.sponsorship.path}
        className="group mt-5 flex items-center gap-3 overflow-hidden rounded-xl bg-[#FB7185] pr-2 pl-3 transition-colors hover:bg-[#f43f5e]"
      >
        <div
          aria-hidden
          className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/15"
        >
          <span className="font-mono text-[9px] tracking-wide text-white/90 uppercase">
            Logo
          </span>
        </div>

        <div className="min-w-0 flex-1 py-2.5">
          <p className="truncate font-sans text-[13px] font-medium text-white">
            Your logo on every docs page
          </p>
          <p className="mt-0.5 font-sans text-[11px] text-white/80">
            Platinum founding · {PLATINUM_SPOTS_LEFT} spots left
          </p>
        </div>

        <span className="inline-flex h-8 shrink-0 items-center gap-1 rounded-lg bg-white px-2.5 font-sans text-[11px] font-semibold text-neutral-900 transition-colors group-hover:bg-neutral-50">
          Claim
          <span className="relative inline-flex size-3 items-center justify-center">
            <ChevronRight
              size={12}
              strokeWidth={3}
              className="ease-smooth text-neutral-900 transition-[opacity,transform] duration-500 group-hover:translate-x-0.5 group-hover:scale-95 group-hover:opacity-0"
            />
            <MoveRight
              size={12}
              strokeWidth={2.5}
              className="ease-smooth absolute -translate-x-0.5 scale-95 text-neutral-900 opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
            />
          </span>
        </span>
      </Link>
    </div>
  );
}
