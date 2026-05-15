"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import MotionButton from "@/components/ui/motion-button";
import { usePT } from "@/lib/programs-i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { homepageTranslations } from "@/lib/homepage-i18n";
import type { Locale } from "@/lib/i18n";

const FullScreenScrollFX = dynamic(
  () =>
    import("@/components/ui/full-screen-scroll-fx").then(
      (m) => m.FullScreenScrollFX
    ),
  { ssr: false }
);

const IconSlides = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>);
const IconDoc   = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg>);
const IconVideo = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>);
const IconFile  = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>);
const IconUsers = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>);
const IconGlobe = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>);
const IconTarget = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>);
const IconMap   = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6"/><path d="M9 3v15M15 6v15"/></svg>);
const IconTracks = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>);

const LEFT_LABELS: Record<string, string[]> = {
  en:    ["Language", "TOEIC", "AI Skills", "Portfolio", "Cohort"],
  ja:    ["言語", "TOEIC", "AI", "ポートフォリオ", "コホート"],
  "zh-TW": ["語言", "TOEIC", "AI", "作品集", "群組"],
  "zh-CN": ["语言", "TOEIC", "AI", "作品集", "群组"],
};
const RIGHT_LABELS: Record<string, string[]> = {
  en:    ["Communication", "Exam Prep", "Future Tech", "Flagship", "Group Class"],
  ja:    ["コミュニケーション", "試験対策", "未来技術", "フラッグシップ", "グループ"],
  "zh-TW": ["溝通", "考試準備", "未來技術", "精選課程", "群組班"],
  "zh-CN": ["沟通", "考试准备", "未来技术", "精选课程", "群组班"],
};
const BG_IMAGES = [
  "/images/placeholder-class.jpg",
  "/images/placeholder-create-1.jpg",
  "/images/placeholder-create-2.jpg",
  "/images/placeholder-create-3.jpg",
  "/images/placeholder-who.jpg",
];

export default function ProgramsPage() {
  const { locale } = useLanguage();
  const p   = usePT(locale);
  const ht  = homepageTranslations[locale];

  useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  const leftLabels  = LEFT_LABELS[locale]  ?? LEFT_LABELS.en;
  const rightLabels = RIGHT_LABELS[locale] ?? RIGHT_LABELS.en;

  const programNames = [
    ht.prog1_name, ht.prog2_name, ht.prog3_name, ht.prog4_name, ht.prog5_name,
  ];

  const fxSections = programNames.map((name, i) => ({
    id: ["general-language","toeic-prep","ai-practical","future-portfolio","future-cohort"][i],
    background: BG_IMAGES[i],
    leftLabel:  leftLabels[i],
    title:      name,
    rightLabel: rightLabels[i],
  }));

  const outputs = [
    { icon: <IconSlides />, label: p.out1 },
    { icon: <IconDoc />,    label: p.out2 },
    { icon: <IconVideo />,  label: p.out3 },
    { icon: <IconFile />,   label: p.out4 },
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
            <MotionButton href="/signup">{p.btn2}</MotionButton>
          </div>
        </div>
      </section>

      {/* Cinematic program scroll showcase */}
      <FullScreenScrollFX
        sections={fxSections}
        colors={{
          text:    "rgba(245, 235, 210, 0.95)",
          overlay: "rgba(4, 10, 20, 0.58)",
          pageBg:  "#071226",
          stageBg: "#071226",
        }}
        fontFamily="var(--font-inter), system-ui, sans-serif"
        showProgress
        durations={{ change: 0.7, snap: 800 }}
        bgTransition="fade"
        parallaxAmount={3}
        gap={1}
        gridPaddingX={4}
      />

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
            <MotionButton href="/signup" id="prog-final-cta">{p.cta_btn1}</MotionButton>
            <MotionButton href="/">{p.cta_btn2}</MotionButton>
          </div>
        </div>
      </section>
    </main>
  );
}
