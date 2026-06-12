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

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.number}
              href="/programs"
              className="premium-card-light group block border p-8 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A84C]"
            >
              <div className="premium-step-number mb-7 flex h-11 w-11 items-center justify-center rounded-full font-serif text-sm text-[#E3D1A9]">
                {card.number}
              </div>
              <div className="mb-1.5 text-[0.65rem] uppercase tracking-[0.3em] text-[#C9A84C]">{card.sub}</div>
              <h3 className="light-card-title font-serif mb-3">{card.title}</h3>
              <p className="light-card-body text-slate-600">{card.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-[#8E7A4E] transition-transform duration-300 group-hover:translate-x-1">
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-3.5 w-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </div>
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
