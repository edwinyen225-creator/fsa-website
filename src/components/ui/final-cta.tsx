"use client";

import MotionButton from "@/components/ui/motion-button";
import LineButton from "@/components/ui/line-button";
import { useLanguage } from "@/hooks/useLanguage";
import { homepageTranslations } from "@/lib/homepage-i18n";

/** Closing CTA — the one decision we ask of the visitor: start the conversation. */
export function FinalCTA() {
  const { locale } = useLanguage();
  const t = homepageTranslations[locale];

  return (
    <section className="relative home-section bg-[#071226] text-white overflow-hidden">
      {/* Gold horizon line + glow */}
      <div className="absolute top-0 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,168,76,0.13),transparent_55%)] pointer-events-none" />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight">
          {t.final_h2}
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/60">
          {t.final_sub}
        </p>
        <div className="mt-11 flex flex-col sm:flex-row items-center justify-center gap-4">
          <LineButton id="home-final-line">{t.nav_line_chat}</LineButton>
          <MotionButton href="/signup" id="home-final-cta">{t.final_btn}</MotionButton>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
