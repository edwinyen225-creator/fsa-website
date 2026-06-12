"use client";

import { cn } from "@/lib/utils";

/**
 * Scrolling serif ticker with gold diamond separators — a kinetic
 * alternative to grids of small label cards. Duplicated row + the
 * existing `marquee` keyframes give a seamless loop.
 */
export function GoldTicker({
  items,
  dark = false,
  className,
}: {
  items: string[];
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn("relative flex overflow-hidden py-4", className)}
      style={{ "--duration": "36s", "--gap": "0px" } as React.CSSProperties}
    >
      {[0, 1].map((row) => (
        <div key={row} aria-hidden={row === 1} className="flex shrink-0 items-center animate-marquee">
          {items.map((item) => (
            <span key={item} className="flex items-center">
              <span
                className={cn(
                  "whitespace-nowrap px-10 font-serif text-3xl md:px-14 md:text-5xl",
                  dark ? "text-white/90" : "text-[#071226]"
                )}
              >
                {item}
              </span>
              <span className="text-sm text-[#C9A84C]">◆</span>
            </span>
          ))}
        </div>
      ))}
      {/* Edge fades */}
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r to-transparent",
          dark ? "from-[#071226]" : "from-white"
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l to-transparent",
          dark ? "from-[#071226]" : "from-white"
        )}
      />
    </div>
  );
}

export default GoldTicker;
