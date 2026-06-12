"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MotionButton from "@/components/ui/motion-button";
import { FloatingPaths } from "@/components/ui/background-paths";

import { usePT } from "@/lib/programs-i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { homepageTranslations } from "@/lib/homepage-i18n";
import { GlowCard } from "@/components/ui/spotlight-card";
import { EditorialList } from "@/components/ui/editorial-list";
import { GoldTicker } from "@/components/ui/gold-ticker";

// SVG icons
const IconMic = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7"><rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 10a7 7 0 0014 0M12 21v-4M8 21h8"/></svg>);
const IconCpu = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg>);
const IconLayers = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>);
const IconSlides = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>);
const IconDoc = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg>);
const IconVideo = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>);
const IconFile = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>);
const IconUsers = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>);
const IconGlobe = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>);
const IconTarget = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>);
const IconMap = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6"/><path d="M9 3v15M15 6v15"/></svg>);
const IconTracks = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>);
const IconChat = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>);

export default function ProgramsPage() {
  const { locale } = useLanguage();
  const p = usePT(locale);
  const ht = homepageTranslations[locale];
  const [selectedProgIdx, setSelectedProgIdx] = useState<number | null>(null);
  const programsSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  // Keep the programs section in view when toggling between panels and detail
  const selectProgram = (idx: number | null) => {
    setSelectedProgIdx(idx);
    requestAnimationFrame(() => {
      programsSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const programs = [
    { id: "general-language",   number: "01", icon: <IconMic />,    name: ht.prog1_name, ages: ht.prog1_status, tagline: p.p1_tagline, focus: [p.p1_f1,p.p1_f2,p.p1_f3,p.p1_f4,p.p1_f5], outcome: p.p1_outcome },
    { id: "toeic-prep",         number: "02", icon: <IconTarget />, name: ht.prog2_name, ages: ht.prog2_status, tagline: p.p2_tagline, focus: [p.p2_f1,p.p2_f2,p.p2_f3,p.p2_f4,p.p2_f5], outcome: p.p2_outcome },
    { id: "ai-practical",       number: "03", icon: <IconCpu />,    name: ht.prog3_name, ages: ht.prog3_status, tagline: p.p3_tagline, focus: [p.p3_f1,p.p3_f2,p.p3_f3,p.p3_f4,p.p3_f5], outcome: p.p3_outcome },
    { id: "future-portfolio",   number: "04", icon: <IconLayers />, name: ht.prog4_name, ages: ht.prog4_status, tagline: p.p4_tagline, focus: [p.p4_f1,p.p4_f2,p.p4_f3,p.p4_f4,p.p4_f5], outcome: p.p4_outcome },
    { id: "future-cohort",      number: "05", icon: <IconUsers />,  name: ht.prog5_name, ages: ht.prog5_status, tagline: p.p5_tagline, focus: [p.p5_f1,p.p5_f2,p.p5_f3,p.p5_f4,p.p5_f5], outcome: p.p5_outcome },
  ];

  // Featured programs shown in the image panel section (English, Portfolio, AI)
  const featuredPrograms = [programs[0], programs[3], programs[2]];

  const outputs = [
    { icon: <IconSlides />, label: p.out1 }, { icon: <IconDoc />, label: p.out2 },
    { icon: <IconVideo />, label: p.out3 }, { icon: <IconFile />, label: p.out4 },
  ];
  const format = [
    { icon: <IconUsers />,  title: p.fmt1_t, desc: p.fmt1_d },
    { icon: <IconGlobe />,  title: p.fmt2_t, desc: p.fmt2_d },
    { icon: <IconTarget />, title: p.fmt3_t, desc: p.fmt3_d },
    { icon: <IconMap />,    title: p.fmt4_t, desc: p.fmt4_d },
    { icon: <IconTracks />, title: p.fmt5_t, desc: p.fmt5_d },
  ];

  const selected = selectedProgIdx !== null ? featuredPrograms[selectedProgIdx] : null;

  return (
    <main className="min-h-screen bg-[#040A14] text-white">

      {/* Static Hero */}
      <section className="relative min-h-[55vh] bg-gradient-to-b from-[#0B1833] via-[#081327] to-[#071226] px-6 pt-48 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(201,168,76,0.18),transparent_40%),radial-gradient(circle_at_20%_75%,rgba(37,99,235,0.13),transparent_40%)]" />
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-[#C9A84C]/35 px-5 py-2 text-xs uppercase tracking-[0.28em] text-[#C9A84C]">{p.badge}</div>
          <h1 className="font-serif text-4xl leading-[1.1] tracking-[-0.02em] text-white md:text-5xl lg:text-[4.25rem]">
            {p.h1a} <span className="italic text-[#C9A84C]">{p.gold}</span>{p.h1b}
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">{p.sub}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <MotionButton href="/programs#scroll">{p.btn1}</MotionButton>
            <MotionButton href="/signup">{p.btn2}</MotionButton>
          </div>
        </div>
      </section>

      {/* Image Panel Programs Section */}
      <section id="scroll" ref={programsSectionRef} className="relative scroll-mt-20">
        <AnimatePresence mode="wait">
          {selectedProgIdx === null ? (
            /* ── Three panels ── */
            <motion.div
              key="panels"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col md:flex-row"
              style={{ height: "100svh" }}
            >
              {featuredPrograms.map((prog, i) => (
                <div
                  key={prog.id}
                  className="relative flex-1 overflow-hidden cursor-pointer group"
                  onClick={() => selectProgram(i)}
                >
                  {/* Divider — horizontal between stacked panels on mobile, vertical on desktop */}
                  {i > 0 && (
                    <div className="absolute left-0 top-0 right-0 h-px md:right-auto md:bottom-0 md:h-auto md:w-px bg-white/20 z-10" />
                  )}

                  {/* Image with zoom on hover */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/placeholder-class.jpg"
                    alt={prog.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />

                  {/* Class label */}
                  <div
                    className="absolute bottom-5 left-6 md:bottom-8 md:left-8 text-white font-light"
                    style={{
                      fontSize: "clamp(1.15rem, 1.8vw, 1.75rem)",
                      letterSpacing: "-0.01em",
                      textShadow: "0 1px 8px rgba(0,0,0,0.4)",
                    }}
                  >
                    {prog.name}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            /* ── Expanded program detail ── */
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Hero image */}
              <div className="relative" style={{ height: "42vh" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/placeholder-class.jpg"
                  alt={selected?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent pointer-events-none" />
                <div
                  className="absolute bottom-8 left-10 text-white font-light"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
                >
                  {selected?.name}
                </div>
                {/* Section counter */}
                <div className="absolute top-5 right-6 text-white/30 text-xs font-mono tracking-widest">
                  0.{(selectedProgIdx ?? 0) + 1}
                </div>
                {/* Back to panels */}
                <button
                  onClick={() => selectProgram(null)}
                  className="absolute top-5 left-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-4 py-2 text-[0.65rem] uppercase tracking-[0.25em] text-white/80 backdrop-blur-sm transition-colors duration-200 hover:border-white/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A84C] active:opacity-70"
                >
                  <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
                    <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Back
                </button>
              </div>

              {/* Detail content */}
              <div className="bg-[#fbfaf6] px-8 py-12 md:px-14" style={{ minHeight: "58vh" }}>
                <div className="mx-auto max-w-6xl">
                  {/* Eyebrow */}
                  <div className="flex items-center gap-3 mb-10 text-[0.65rem] uppercase tracking-[0.35em] text-[#C9A84C]">
                    <div className="h-px w-8 bg-[#C9A84C]" />
                    Our Programs
                  </div>

                  {/* Cards grid */}
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-[2fr_3fr]">
                    {/* Left: dark Materials card */}
                    <div
                      className="bg-[#040A14] rounded-2xl p-8 flex flex-col justify-between text-white"
                      style={{ minHeight: "220px" }}
                    >
                      <div className="text-[#C9A84C]">
                        <IconLayers />
                      </div>
                      <h3
                        className="font-light text-white"
                        style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
                      >
                        Materials
                      </h3>
                    </div>

                    {/* Right: two white info cards */}
                    <div className="flex flex-col gap-4">
                      <div className="bg-white rounded-2xl p-7 shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-slate-100/80">
                        <div className="text-slate-300 mb-4">
                          <IconDoc />
                        </div>
                        <p
                          className="font-light text-[#040A14] leading-snug"
                          style={{ fontSize: "clamp(1rem, 1.5vw, 1.3rem)" }}
                        >
                          {selected?.tagline}
                        </p>
                      </div>
                      <div className="bg-white rounded-2xl p-7 shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-slate-100/80">
                        <div className="text-slate-300 mb-4">
                          <IconChat />
                        </div>
                        <p
                          className="font-light text-[#040A14] leading-snug"
                          style={{ fontSize: "clamp(1rem, 1.5vw, 1.3rem)" }}
                        >
                          {selected?.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Continue — returns to panels */}
                <div className="text-center mt-14">
                  <button
                    onClick={() => selectProgram(null)}
                    className="group inline-flex flex-col items-center gap-1.5"
                  >
                    <span
                      className="text-[0.6rem] uppercase tracking-[0.38em] text-[#040A14]/40 transition-colors duration-200 group-hover:text-[#040A14]/70"
                    >
                      Continue
                    </span>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="h-3.5 w-3.5 text-[#040A14]/30 transition-colors duration-200 group-hover:text-[#040A14]/60"
                    >
                      <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* What students create */}
      <section className="bg-[#F4F7FA] px-6 py-20 md:py-24 text-[#071226]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{p.out_eyebrow}</div>
          <div className="mb-16 grid gap-8 lg:grid-cols-2">
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight md:text-6xl">{p.out_h2}</h2>
            <p className="self-end text-xl leading-relaxed text-slate-600">{p.out_desc}</p>
          </div>
          <GoldTicker items={outputs.map((o) => o.label)} />
        </div>
      </section>

      {/* Format */}
      <section className="bg-white px-6 py-20 md:py-24 text-[#071226]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{p.fmt_eyebrow}</div>
          <div className="mb-16 grid gap-8 lg:grid-cols-2">
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight md:text-6xl">{p.fmt_h2}</h2>
            <p className="self-end text-xl leading-relaxed text-slate-600">{p.fmt_desc}</p>
          </div>
          <EditorialList items={format.map(({ title, desc }) => ({ title, desc }))} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071226] px-6 py-20 md:py-24">
        <GlowCard glowColor="gold" customSize className="mx-auto max-w-4xl bg-[#071226] p-7 sm:p-10 md:p-12 lg:p-20 text-center">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{p.cta_eyebrow}</div>
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight text-white md:text-6xl">{p.cta_h2a}<br />{p.cta_h2b}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65">{p.cta_desc}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <MotionButton href="/signup" id="prog-final-cta">{p.cta_btn1}</MotionButton>
            <MotionButton href="/">{p.cta_btn2}</MotionButton>
          </div>
        </GlowCard>
      </section>
    </main>
  );
}
