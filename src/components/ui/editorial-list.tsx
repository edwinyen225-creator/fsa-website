"use client";

import { cn } from "@/lib/utils";

interface EditorialItem {
  title: string;
  desc: string;
}

/**
 * Numbered editorial rows — an alternative to card grids.
 * Large italic serif numerals, ruled rows, three-column rhythm on desktop.
 */
export function EditorialList({
  items,
  dark = false,
  className,
}: {
  items: EditorialItem[];
  dark?: boolean;
  className?: string;
}) {
  const rule = dark ? "border-white/10" : "border-[#040A14]/10";
  return (
    <div className={className}>
      {items.map((item, i) => (
        <div
          key={item.title}
          className={cn(
            "group grid gap-2 border-t py-8 md:grid-cols-[110px_minmax(0,1fr)_minmax(0,1.5fr)] md:items-baseline md:gap-10 md:py-10",
            rule,
            i === items.length - 1 && cn("border-b", rule)
          )}
        >
          <span className="font-serif text-3xl italic text-[#C9A84C] md:text-4xl">
            0{i + 1}
          </span>
          <h3
            className={cn(
              "font-serif text-2xl leading-snug transition-transform duration-300 group-hover:translate-x-1",
              dark ? "text-white" : "text-[#071226]"
            )}
          >
            {item.title}
          </h3>
          <p className={cn("leading-relaxed", dark ? "text-white/55" : "text-slate-600")}>
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default EditorialList;
