"use client";

import Link from "next/link";
import MotionButton from "@/components/ui/motion-button";
import { useLanguage } from "@/hooks/useLanguage";
import { homepageTranslations } from "@/lib/homepage-i18n";
import { usePT } from "@/lib/programs-i18n";

/**
 * Compact programs teaser — replaces the full-screen scroll deep-dive on the
 * homepage. Three cards, one destination: /programs.
 */
export function ProgramsTeaser() {
  const { locale } = useLanguage();
  const t = homepageTranslations[locale];
  const pt = usePT(locale);

  // Same featured trio (and names) as the /programs panels — no naming drift
  const cards = [
    { number: "01", title: t.prog1_name, sub: t.prog1_status, desc: pt.p1_tagline },
    { number: "02", title: t.prog4_name, sub: t.prog4_status, desc: pt.p4_tagline },
    { number: "03", title: t.prog3_name, sub: t.prog3_status, desc: pt.p3_tagline },
  ];

  return (
    <section className="premium-light-section-soft home-section text-[#071226]">
      <div className="mx-auto max-w-7xl">
        <div className="section-label">{t.prog_eyebrow}</div>
        <div className="mb-14 grid gap-8 lg:grid-cols-2">
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight md:text-6xl">{t.prog_h2}</h2>
        </div>

        {/* Editorial menu — linked ruled rows instead of cards */}
        <div>
          {cards.map((card, i) => (
            <Link
              key={card.number}
              href="/programs"
              className={`group grid items-center gap-4 border-t border-[#040A14]/10 py-8 md:grid-cols-[110px_minmax(0,1.1fr)_minmax(0,1.5fr)_56px] md:gap-8 md:py-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A84C] ${
                i === cards.length - 1 ? "border-b border-[#040A14]/10" : ""
              }`}
            >
              <span className="font-serif text-3xl italic text-[#C9A84C] md:text-4xl">{card.number}</span>
              <div>
                <div className="mb-1.5 text-[0.65rem] uppercase tracking-[0.3em] text-[#C9A84C]">{card.sub}</div>
                <h3 className="font-serif text-2xl leading-snug text-[#071226] transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                  {card.title}
                </h3>
              </div>
              <p className="leading-relaxed text-slate-600">{card.desc}</p>
              <span className="hidden justify-self-end text-[#8E7A4E] transition-transform duration-300 group-hover:translate-x-1.5 md:block">
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <MotionButton href="/programs">{t.hero_cta_secondary}</MotionButton>
        </div>
      </div>
    </section>
  );
}

export default ProgramsTeaser;
