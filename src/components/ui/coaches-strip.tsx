"use client";

import { Mic, Cpu, Layers } from "lucide-react";
import MotionButton from "@/components/ui/motion-button";
import { useLanguage } from "@/hooks/useLanguage";
import { useTT } from "@/lib/team-i18n";

/**
 * Coaches teaser on the homepage — faces-of-the-academy proof section,
 * linking through to the full /team page.
 */
export function CoachesStrip() {
  const { locale } = useLanguage();
  const m = useTT(locale);

  const coaches = [
    { icon: Mic,    role: m.coach1_role, helps: m.coach1_helps },
    { icon: Cpu,    role: m.coach2_role, helps: m.coach2_helps },
    { icon: Layers, role: m.coach3_role, helps: m.coach3_helps },
  ];

  return (
    <section className="relative home-section bg-[#040A14] text-white overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,168,76,0.10),transparent_45%),radial-gradient(circle_at_15%_85%,rgba(37,99,235,0.08),transparent_40%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        {/* Asymmetric split: sticky intro left, ruled coach rows right */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="section-label">{m.coaches_eyebrow}</div>
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight md:text-6xl">{m.coaches_h2}</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/60">{m.coaches_desc}</p>
            <div className="mt-10">
              <MotionButton href="/team">{m.cta_h2}</MotionButton>
            </div>
          </div>

          <div>
            {coaches.map(({ icon: Icon, role, helps }, i) => (
              <div
                key={role}
                className={`group flex items-start gap-6 border-t border-white/10 py-9 md:gap-8 md:py-11 ${
                  i === coaches.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#C9A84C]/35 bg-[#071226] text-[#C9A84C]">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-white mb-2.5 transition-transform duration-300 group-hover:translate-x-1">
                    {role}
                  </h3>
                  <p className="leading-relaxed text-white/55">{helps}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoachesStrip;
