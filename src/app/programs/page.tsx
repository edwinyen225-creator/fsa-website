"use client";

import { useEffect } from "react";
import Link from "next/link";

import { usePT } from "@/lib/programs-i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { homepageTranslations } from "@/lib/homepage-i18n";

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

export default function ProgramsPage() {
  const { locale } = useLanguage();
  const p = usePT(locale);
  const ht = homepageTranslations[locale];

  useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  const programs = [
    { id: "general-language",     number: "01", icon: <IconMic />,    name: ht.prog1_name, ages: ht.prog1_status, tagline: p.p1_tagline, focus: [p.p1_f1,p.p1_f2,p.p1_f3,p.p1_f4,p.p1_f5], outcome: p.p1_outcome, accent: "from-[#0B2352] via-[#0C1B36] to-[#071226]" },
    { id: "toeic-prep",           number: "02", icon: <IconTarget />, name: ht.prog2_name, ages: ht.prog2_status, tagline: p.p2_tagline, focus: [p.p2_f1,p.p2_f2,p.p2_f3,p.p2_f4,p.p2_f5], outcome: p.p2_outcome, accent: "from-[#071226] via-[#0C1F3A] to-[#0B2352]" },
    { id: "ai-practical",         number: "03", icon: <IconCpu />,    name: ht.prog3_name, ages: ht.prog3_status, tagline: p.p3_tagline, focus: [p.p3_f1,p.p3_f2,p.p3_f3,p.p3_f4,p.p3_f5], outcome: p.p3_outcome, accent: "from-[#0B2352] via-[#0A1A30] to-[#071226]" },
    { id: "future-portfolio",     number: "04", icon: <IconLayers />, name: ht.prog4_name, ages: ht.prog4_status, tagline: p.p4_tagline, focus: [p.p4_f1,p.p4_f2,p.p4_f3,p.p4_f4,p.p4_f5], outcome: p.p4_outcome, accent: "from-[#071226] via-[#102A4A] to-[#0C1B36]" },
    { id: "future-cohort",        number: "05", icon: <IconUsers />,  name: ht.prog5_name, ages: ht.prog5_status, tagline: p.p5_tagline, focus: [p.p5_f1,p.p5_f2,p.p5_f3,p.p5_f4,p.p5_f5], outcome: p.p5_outcome, accent: "from-[#0B1833] via-[#071226] to-[#0B1833]" },
  ];
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

  return (
    <main className="min-h-screen bg-[#071226] text-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-gradient-to-b from-[#0B1833] via-[#081327] to-[#071226] px-6 pt-48 pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(201,168,76,0.15),transparent_40%),radial-gradient(circle_at_15%_70%,rgba(37,99,235,0.12),transparent_40%)]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-[#C9A84C]/35 px-5 py-2 text-xs uppercase tracking-[0.28em] text-[#C9A84C]">{p.badge}</div>
          <h1 className="font-sans text-4xl font-medium leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[4rem]">
            {p.h1a} <span className="text-[#C9A84C]">{p.gold}</span> {p.h1b}
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/65 md:text-xl">{p.sub}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#programs-list" className="rounded-full bg-white px-8 py-4 font-semibold text-[#071226] transition hover:scale-[1.02]">{p.btn1}</a>
            <Link href="/signup" className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]">{p.btn2}</Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs-list" className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{p.sec_eyebrow}</div>
          <h2 className="mb-16 font-serif text-4xl leading-tight md:text-6xl">{p.sec_h2a}<br />{p.sec_h2b}</h2>
          <div className="space-y-10">
            {programs.map((prog) => (
              <div key={prog.id} id={prog.id} className={`overflow-hidden rounded-[36px] bg-gradient-to-br ${prog.accent} border border-white/10`}>
                <div className="grid gap-0 lg:grid-cols-[1fr_1.2fr]">
                  <div className="flex flex-col justify-between p-10 md:p-14 border-b border-white/10 lg:border-b-0 lg:border-r">
                    <div>
                      <div className="mb-6 flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C9A84C]/30 bg-[#071226]/60 text-[#C9A84C]">{prog.icon}</div>
                        <span className="font-serif text-6xl text-white/10 leading-none">{prog.number}</span>
                      </div>
                      <div className="mb-2 text-xs uppercase tracking-[0.3em] text-[#C9A84C]">{prog.ages}</div>
                      <h3 className="font-serif text-4xl text-white md:text-5xl">{prog.name}</h3>
                      <p className="mt-4 text-lg leading-relaxed text-white/60">{prog.tagline}</p>
                    </div>
                    <div className="mt-10 rounded-[20px] border border-[#C9A84C]/20 bg-[#071226]/40 p-6">
                      <div className="mb-2 text-xs uppercase tracking-[0.3em] text-[#C9A84C]">{p.outcome_label}</div>
                      <p className="text-white/80 leading-relaxed">{prog.outcome}</p>
                    </div>
                  </div>
                  <div className="p-10 md:p-14">
                    <div className="mb-6 text-xs uppercase tracking-[0.3em] text-white/40">{p.focus_label}</div>
                    <ul className="space-y-4">
                      {prog.focus.map((item) => (
                        <li key={item} className="flex items-start gap-4">
                          <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                          <span className="text-white/75 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-12">
                      <Link href="/signup" id={`cta-${prog.id}`} className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C] px-7 py-3.5 text-sm font-semibold text-[#071226] transition hover:bg-[#E4C261] hover:scale-[1.02]">{p.trial_btn}</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What students create */}
      <section className="bg-[#F4F7FA] px-6 py-20 md:py-24 text-[#071226]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{p.out_eyebrow}</div>
          <div className="mb-16 grid gap-8 lg:grid-cols-2">
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">{p.out_h2}</h2>
            <p className="self-end text-xl leading-relaxed text-slate-600">{p.out_desc}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {outputs.map((item, i) => (
              <div key={i} className="rounded-[28px] border border-[#C9A84C]/20 bg-gradient-to-br from-[#0B2352] to-[#071226] p-8 transition hover:shadow-lg hover:-translate-y-1 duration-300">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#C9A84C]">{item.icon}</div>
                <p className="font-serif text-xl text-white">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="bg-white px-6 py-20 md:py-24 text-[#071226]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{p.fmt_eyebrow}</div>
          <div className="mb-16 grid gap-8 lg:grid-cols-2">
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">{p.fmt_h2}</h2>
            <p className="self-end text-xl leading-relaxed text-slate-600">{p.fmt_desc}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {format.map((item, i) => (
              <div key={i} className="rounded-[28px] border border-[#C9A84C]/20 bg-gradient-to-br from-[#0B2352] to-[#071226] p-8 transition hover:shadow-md hover:-translate-y-0.5 duration-300">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#C9A84C]">{item.icon}</div>
                <h3 className="font-serif text-xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071226] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl rounded-[42px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl md:p-20">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{p.cta_eyebrow}</div>
          <h2 className="font-serif text-5xl leading-tight text-white md:text-6xl">{p.cta_h2a}<br />{p.cta_h2b}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65">{p.cta_desc}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/signup" id="prog-final-cta" className="rounded-full bg-[#C9A84C] px-9 py-4 font-semibold text-[#071226] transition hover:bg-[#E4C261] hover:scale-[1.02]">{p.cta_btn1}</Link>
            <Link href="/" className="rounded-full border border-white/20 px-9 py-4 font-semibold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]">{p.cta_btn2}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
