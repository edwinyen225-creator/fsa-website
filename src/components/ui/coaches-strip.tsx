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
        <div className="section-label">{m.coaches_eyebrow}</div>
        <div className="mb-14 grid gap-8 lg:grid-cols-2">
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight md:text-6xl">{m.coaches_h2}</h2>
          <p className="self-end text-lg md:text-xl leading-relaxed text-white/60">{m.coaches_desc}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {coaches.map(({ icon: Icon, role, helps }) => (
            <div
              key={role}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A84C]/35 bg-[#071226] text-[#C9A84C]">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">{role}</h3>
              <p className="text-sm leading-relaxed text-white/55">{helps}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <MotionButton href="/team">{m.cta_h2}</MotionButton>
        </div>
      </div>
    </section>
  );
}

export default CoachesStrip;
