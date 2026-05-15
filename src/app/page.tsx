"use client";

import { useEffect } from "react";
import Link from "next/link";
import MotionButton from "@/components/ui/motion-button";
import { Globe, Cpu, Users, Layers, Map } from "lucide-react";
import { homepageTranslations } from "@/lib/homepage-i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { ShaderAnimation } from "@/components/ui/shader-lines";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import AnimatedScroll from "@/components/ui/animated-scroll";

export default function Home() {
  const { locale } = useLanguage();
  const t = homepageTranslations[locale];

  useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  return (
    <main className="min-h-screen bg-[#040A14] text-white selection:bg-[#C9A84C]/30 selection:text-white font-sans overflow-x-hidden">

      {/* ── 1. Hero Section ── */}
      <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ShaderAnimation />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#040A14] via-[#040A14]/80 to-[#040A14]/20" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full pt-20 flex items-center">
          {/* Left: text + CTAs */}
          <div className="w-full lg:w-1/2">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.15] text-white tracking-tight mb-8">
              {t.hero_eyebrow}<br />
              <span className="text-xl md:text-2xl lg:text-[1.75rem] font-medium leading-[1.6] text-white/90 mt-6 block">
                {t.hero_heading}
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-10">
              <MotionButton href="/signup">{t.hero_cta_primary}</MotionButton>
              <MotionButton href="/programs">{t.hero_cta_secondary}</MotionButton>
            </div>
          </div>

          {/* Right: orbital timeline */}
          <div className="hidden lg:block w-1/2 h-[90vh]">
            <RadialOrbitalTimeline
              timelineData={[
                { id: 1, title: t.strip_f1_title, content: t.strip_f1_desc, icon: Globe, relatedIds: [2, 3] },
                { id: 2, title: t.strip_f2_title, content: t.strip_f2_desc, icon: Cpu, relatedIds: [1, 3] },
                { id: 3, title: t.strip_f3_title, content: t.strip_f3_desc, icon: Users, relatedIds: [1, 2, 4] },
                { id: 4, title: t.strip_f4_title, content: t.strip_f4_desc, icon: Layers, relatedIds: [3, 5] },
                { id: 5, title: t.strip_f5_title, content: t.strip_f5_desc, icon: Map, relatedIds: [4, 1] },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── 2. Animated Features Scroll ── */}
      <section className="h-screen">
        <AnimatedScroll />
      </section>

    </main>
  );
}
