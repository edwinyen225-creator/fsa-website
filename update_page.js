const fs = require('fs');

const pageContent = `"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { homepageTranslations } from "@/lib/homepage-i18n";
import { useLanguage } from "@/hooks/useLanguage";

// ─── FAQ Item Component ─────────────────────────────────────────────────────
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between py-6 text-left transition hover:text-[#C9A84C]">
        <span className="font-serif text-xl">{question}</span>
        <svg className={\`h-5 w-5 transition-transform \${isOpen ? "rotate-180 text-[#C9A84C]" : "text-white/40"}\`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-6 pr-8 text-white/60 leading-relaxed text-lg">
          {answer}
        </div>
      )}
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function Home() {
  const { locale } = useLanguage();
  const t = homepageTranslations[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const classSteps = [
    { num: "01", title: t.class_step1_title, desc: t.class_step1_desc },
    { num: "02", title: t.class_step2_title, desc: t.class_step2_desc },
    { num: "03", title: t.class_step3_title, desc: t.class_step3_desc },
    { num: "04", title: t.class_step4_title, desc: t.class_step4_desc },
    { num: "05", title: t.class_step5_title, desc: t.class_step5_desc },
    { num: "06", title: t.class_step6_title, desc: t.class_step6_desc },
    { num: "07", title: t.class_step7_title, desc: t.class_step7_desc },
  ];

  const creations = [
    { img: "/images/placeholder-create-1.jpg", title: t.create_item1_title, desc: t.create_item1_desc },
    { img: "/images/placeholder-create-2.jpg", title: t.create_item2_title, desc: t.create_item2_desc },
    { img: "/images/placeholder-create-3.jpg", title: t.create_item3_title, desc: t.create_item3_desc },
    { img: "/images/placeholder-create-4.jpg", title: t.create_item4_title, desc: t.create_item4_desc },
    { img: "/images/placeholder-create-5.jpg", title: t.create_item5_title, desc: t.create_item5_desc },
    { img: "/images/placeholder-create-6.jpg", title: t.create_item6_title, desc: t.create_item6_desc },
  ];

  const programs = [
    { id: "prog1", name: t.prog1_name, ages: t.prog1_ages, skills: [t.prog1_skill1, t.prog1_skill2, t.prog1_skill3], accent: "border-slate-500/20 hover:border-slate-400", isActive: true },
    { id: "prog2", name: t.prog2_name, ages: t.prog2_ages, skills: [t.prog2_skill1, t.prog2_skill2, t.prog2_skill3], accent: "border-blue-500/20 hover:border-blue-500", isActive: true },
    { id: "prog3", name: t.prog3_name, ages: t.prog3_ages, skills: [t.prog3_skill1, t.prog3_skill2, t.prog3_skill3], accent: "border-emerald-500/20 hover:border-emerald-500", isActive: true },
    { id: "prog4", name: t.prog4_name, ages: t.prog4_ages, skills: [t.prog4_skill1, t.prog4_skill2, t.prog4_skill3], accent: "border-[#C9A84C]/30 hover:border-[#C9A84C]", isActive: true },
    { id: "prog5", name: t.prog5_name, ages: t.prog5_ages, skills: [t.prog5_skill1, t.prog5_skill2, t.prog5_skill3], accent: "border-white/5 opacity-70", isActive: false },
  ];

  return (
    <main className="min-h-screen bg-[#071226] text-white overflow-hidden">
      
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen overflow-hidden flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/hero-background.jpg")' }}
      >
        {/* Full-section readability overlay */}
        <div className="absolute inset-0 z-0 bg-[#040A14]/35" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#040A14]/85 via-[#040A14]/40 to-[#040A14]/10" />

        {/* Bottom gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#040A14]/65 via-transparent to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-4xl px-8 pt-32 pb-20 md:px-14 md:pt-36 md:pb-24 lg:px-20 flex flex-col items-start justify-center">

          {/* FSA Badge */}
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/20 px-5 py-2 backdrop-blur-md">
            <div className="h-2 w-2 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.28em] text-white/90">{t.hero_badge}</span>
          </div>

          <h1 className="max-w-4xl font-sans text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-[3.25rem]">
            <span className="text-white/95">{t.hero_h1_line1}</span> <br className="hidden md:block" />
            <span className="gold-headline-text block md:inline-block py-1">{t.hero_h1_highlight}</span> <br className="hidden md:block" />
            <span className="text-white/95">{t.hero_h1_line2}</span>
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg font-light">
            {t.hero_desc}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/signup" className="rounded-full bg-[#C9A84C] px-8 py-4 font-semibold text-[#071226] transition hover:scale-[1.02] hover:bg-[#E4C261] shadow-[0_4px_20px_rgba(201,168,76,0.2)]">
              {t.hero_cta_primary}
            </Link>
            <Link href="/programs" className="rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 font-semibold text-white transition hover:border-[#C9A84C] hover:bg-white/10">
              {t.hero_cta_secondary}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 1. Not a normal language class ────────────────────────────────── */}
      <section className="home-section premium-light-section text-[#071226]">
        <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div>
            <div className="section-label">{t.who_eyebrow}</div>
            <h2 className="section-heading text-[#071226]">
              {t.who_h2}
            </h2>
            <p className="section-copy text-slate-700 mt-6">{t.who_p1}</p>
          </div>
          <div className="light-editorial-list space-y-5">
            <div className="flex items-start gap-4">
              <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
              <p className="section-copy text-slate-700">{t.who_p2}</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
              <p className="section-copy text-slate-700">{t.who_p3}</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
              <p className="section-copy text-slate-700">{t.who_p4}</p>
            </div>
          </div>
        </div>

        {/* Image Panel */}
        <div className="mx-auto max-w-7xl mt-14">
          <div className="cinematic-image-panel">
            <div className="cinematic-image-media" style={{ backgroundImage: 'url("/images/placeholder-who.jpg")' }} />
            <div className="cinematic-image-overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="cinematic-image-label">{t.img_label_who}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. What actually happens in class (Process) ───────────────────── */}
      <section className="home-section premium-light-section-soft text-[#071226]">
        <div className="mx-auto max-w-7xl">
          <div className="section-label text-center">{t.class_eyebrow}</div>
          <h2 className="section-heading mb-14 text-center text-[#071226]">
            {t.class_h2}
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {classSteps.map((step, idx) => (
              <div key={idx} className="premium-card premium-card-light relative transition-shadow hover:shadow-md h-full flex flex-col">
                <div className="premium-step-number absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-[#C9A84C]">
                  {step.num}
                </div>
                <h3 className="light-card-title mt-4 mb-3 font-serif text-[#071226]">{step.title}</h3>
                <p className="light-card-body text-slate-600 flex-grow">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Image Panel */}
          <div className="cinematic-image-panel mt-14">
            <div className="cinematic-image-media" style={{ backgroundImage: 'url("/images/placeholder-class.jpg")' }} />
            <div className="cinematic-image-overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="cinematic-image-label">{t.img_label_class}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. What learners create ───────────────────────────── */}
      <section className="home-section-compact bg-[#071226] relative">
        <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div className="order-2 lg:order-1 grid gap-6 sm:grid-cols-2">
            {creations.map((item, idx) => (
              <div key={idx} className="cinematic-image-card flex flex-col transition-colors hover:border-[#C9A84C]/30 group">
                <div className="cinematic-image-card-media h-36" style={{ backgroundImage: \`url(\${item.img})\` }} />
                <div className="p-6 flex flex-col justify-start">
                  <h3 className="font-sans text-lg font-semibold tracking-tight text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="order-1 lg:order-2 lg:pl-8 sticky top-32">
            <div className="section-label">{t.create_eyebrow}</div>
            <h2 className="section-heading text-white">
              {t.create_h2}
            </h2>
            <div className="mt-8 flex gap-4">
              <Link href="/programs" className="rounded-full bg-[#C9A84C] px-8 py-3.5 font-semibold text-[#071226] transition hover:bg-[#E4C261]">
                {t.hero_cta_secondary}
              </Link>
            </div>
          </div>
        </div>

        {/* Image Panel */}
        <div className="mx-auto max-w-7xl mt-14">
          <div className="cinematic-image-panel">
            <div className="cinematic-image-media" style={{ backgroundImage: 'url("/images/placeholder-create.jpg")' }} />
            <div className="cinematic-image-overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="cinematic-image-label">{t.img_label_create}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Programs ───────────────────────────────────────────────────── */}
      <section className="home-section-compact bg-[#0B1833]">
        <div className="mx-auto max-w-7xl">
          <div className="section-label text-center">{t.prog_eyebrow}</div>
          <h2 className="section-heading mb-5 text-center text-white">
            {t.prog_h2}
          </h2>
          <p className="section-copy mx-auto mb-14 max-w-2xl text-center text-white/60">
            {t.prog_desc}
          </p>

          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
            {programs.map((prog) => (
              <div key={prog.id} className={\`premium-card premium-card-dark group flex flex-col justify-between border \${prog.accent} transition-all duration-300 relative\`}>
                {!prog.isActive && (
                  <div className="absolute inset-0 bg-[#071226]/40 rounded-[24px] pointer-events-none" />
                )}
                <div className={!prog.isActive ? "opacity-80" : ""}>
                  <div className={\`mb-4 inline-flex rounded-full px-4 py-1.5 text-xs tracking-widest uppercase \${prog.isActive ? 'bg-white/5 text-[#C9A84C]' : 'bg-white/5 text-white/50'}\`}>
                    {prog.ages}
                  </div>
                  <h3 className="mb-7 font-serif text-[1.5rem] leading-tight text-white">{prog.name}</h3>
                  <ul className="space-y-4">
                    {prog.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/80">
                        <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
                        <span className="text-[0.95rem] leading-relaxed">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {prog.isActive ? (
                  <Link href="/signup" className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-[#C9A84C] hover:text-white transition-colors">
                    {t.prog_learn_more} →
                  </Link>
                ) : (
                  <div className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-white/40">
                    {t.join_waitlist} →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. How enrollment works ───────────────────────────────────────── */}
      <section className="home-section premium-light-section-soft text-[#071226]">
        <div className="mx-auto max-w-7xl text-center">
          <div className="section-label">{t.enroll_eyebrow}</div>
          <h2 className="section-heading section-heading-compact mb-14 text-[#071226]">
            {t.enroll_h2}
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {[t.enroll_step1, t.enroll_step2, t.enroll_step3, t.enroll_step4, t.enroll_step5, t.enroll_step6, t.enroll_step7].map((step, idx) => (
              <div key={idx} className="premium-card premium-card-light flex items-center gap-4 py-4 px-5">
                <div className="premium-step-number flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-serif text-sm text-[#C9A84C]">
                  {idx + 1}
                </div>
                <div className="text-[0.92rem] font-medium leading-tight text-slate-800">{step.replace(/^\\d+\\.\\s*/, '')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Parent FAQ ─────────────────────────────────────────────────── */}
      <section className="home-section-compact bg-[#071226]">
        <div className="mx-auto max-w-3xl">
          <div className="section-label text-center">{t.faq_eyebrow}</div>
          <h2 className="section-heading section-heading-compact mb-10 text-center text-white">
            {t.faq_h2}
          </h2>
          <div className="space-y-2">
            <FaqItem question={t.faq_q1} answer={t.faq_a1} />
            <FaqItem question={t.faq_q2} answer={t.faq_a2} />
            <FaqItem question={t.faq_q3} answer={t.faq_a3} />
            <FaqItem question={t.faq_q4} answer={t.faq_a4} />
            <FaqItem question={t.faq_q5} answer={t.faq_a5} />
            <FaqItem question={t.faq_q6} answer={t.faq_a6} />
            <FaqItem question={t.faq_q7} answer={t.faq_a7} />
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="home-section-compact bg-[#0B1833]">
        <div className="premium-card premium-card-dark mx-auto max-w-4xl border-[#C9A84C]/20 p-10 text-center md:p-16 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C9A84C] opacity-5 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#3b82f6] opacity-5 blur-3xl" />
          
          <div className="relative z-10">
            <div className="section-label">{t.cta_eyebrow}</div>
            <h2 className="section-heading section-heading-compact text-white">
              {t.cta_h2}
            </h2>
            <p className="section-copy mx-auto mt-6 max-w-xl text-white/60">
              {t.cta_desc}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/signup" className="rounded-full bg-[#C9A84C] px-8 py-4 font-semibold text-[#071226] transition hover:bg-[#E4C261] hover:scale-[1.02]">
                {t.cta_btn1}
              </Link>
              <Link href="/programs" className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]">
                {t.cta_btn2}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
`;

fs.writeFileSync('src/app/page.tsx', pageContent);
console.log('Successfully updated src/app/page.tsx');
