"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { type Locale, localeLabels, localeNames } from "@/lib/i18n";
import { homepageTranslations } from "@/lib/homepage-i18n";
import { useLanguage } from "@/hooks/useLanguage";

// ─── Language switcher component ────────────────────────────────────────────
function LanguageSwitcher({ locale, onChange }: { locale: Locale; onChange: (l: Locale) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        id="lang-switcher-btn"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-[#C9A84C] hover:text-[#C9A84C]"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        <svg className="h-3.5 w-3.5 opacity-70" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.93 4.93a.75.75 0 011.06.01 6.5 6.5 0 008.98 0 .75.75 0 011.07 1.04A8 8 0 016 6a8 8 0 01-1.07-1.07zM3 10a7 7 0 0114 0c0 1.72-.62 3.3-1.64 4.53A7 7 0 013 10z" clipRule="evenodd" />
        </svg>
        <span>{localeLabels[locale]}</span>
        <svg className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>

      {open && (
        <ul role="listbox" aria-label="Language options" className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1833] shadow-2xl backdrop-blur-xl z-[60]">
          {(Object.keys(localeLabels) as Locale[]).map((l) => (
            <li key={l} role="option" aria-selected={l === locale}>
              <button
                id={`lang-option-${l}`}
                onClick={() => { onChange(l); setOpen(false); }}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-white/8 ${l === locale ? "text-[#C9A84C]" : "text-white/75 hover:text-white"}`}
              >
                <span className="w-8 font-mono text-xs opacity-60">{localeLabels[l]}</span>
                <span>{localeNames[l]}</span>
                {l === locale && (
                  <svg className="ml-auto h-3.5 w-3.5 text-[#C9A84C]" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M2 6l3 3 5-5" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── FAQ Item Component ─────────────────────────────────────────────────────
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between py-6 text-left transition hover:text-[#C9A84C]">
        <span className="font-serif text-xl">{question}</span>
        <svg className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180 text-[#C9A84C]" : "text-white/40"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
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
  const { locale, setLocale } = useLanguage();
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
  ];

  const creations = [
    { img: "/images/placeholder-create-1.jpg", text: t.create_item1 },
    { img: "/images/placeholder-create-2.jpg", text: t.create_item2 },
    { img: "/images/placeholder-create-3.jpg", text: t.create_item3 },
    { img: "/images/placeholder-create-4.jpg", text: t.create_item4 },
    { img: "/images/placeholder-create-5.jpg", text: t.create_item5 },
    { img: "/images/placeholder-create-6.jpg", text: t.create_item6 },
  ];

  const programs = [
    { id: "future-communicator", name: t.prog1_name, ages: t.prog1_ages, skills: [t.prog1_skill1, t.prog1_skill2, t.prog1_skill3], accent: "border-[#C9A84C]/20 hover:border-[#C9A84C]", isActive: true },
    { id: "portfolio-project-studio", name: t.prog2_name, ages: t.prog2_ages, skills: [t.prog2_skill1, t.prog2_skill2, t.prog2_skill3], accent: "border-blue-500/20 hover:border-blue-500", isActive: true },
    { id: "future-cohort", name: t.prog3_name, ages: t.prog3_ages, skills: [t.prog3_skill1, t.prog3_skill2, t.prog3_skill3], accent: "border-white/5 opacity-70", isActive: false },
  ];

  return (
    <main className="min-h-screen bg-[#071226] text-white overflow-hidden">
      
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] bg-[#071226] flex items-center overflow-hidden">
        {/* Cinematic Background Image Layer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
          style={{ backgroundImage: 'url("/images/hero-background.jpg")' }}
        />
        {/* Navy gradient overlay fallback / blending layer */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0B1833]/75 via-[#081327]/85 to-[#050B16]" />
        
        {/* Glow effects */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_35%,rgba(201,168,76,0.18),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.16),transparent_35%)]" />

        {/* Navbar */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#0B1833]/80 px-7 py-4 backdrop-blur-xl shadow-2xl">
            <Link href="/" className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A84C]/50 bg-[#081327]">
                <span className="font-serif text-sm text-[#C9A84C]">FSA</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-serif text-xl tracking-wide">Future Skill Academy</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-9 text-sm text-white/70 lg:flex">
              <Link className="hover:text-[#C9A84C] transition-colors" href="/programs">Programs</Link>
              <Link className="hover:text-[#C9A84C] transition-colors" href="/parents">For Parents</Link>
              <Link className="hover:text-[#C9A84C] transition-colors" href="/team">Team</Link>
              <Link className="hover:text-[#C9A84C] transition-colors" href="/contact">Contact</Link>
            </nav>

            <div className="flex items-center gap-3">
              <LanguageSwitcher locale={locale} onChange={setLocale} />
              <Link href="/signup" id="nav-cta-btn" className="hidden sm:block rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#06101F] transition hover:bg-[#E4C261]">
                Book Trial
              </Link>
            </div>
          </div>
        </header>

        {/* Hero body */}
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pt-32 pb-20 md:pt-40 md:pb-32 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <div className="mb-8 inline-flex rounded-full border border-[#C9A84C]/35 px-5 py-2 text-xs uppercase tracking-[0.28em] text-[#C9A84C]">
              {t.hero_badge}
            </div>
            <h1 className="max-w-4xl font-sans text-5xl font-semibold leading-[1.08] tracking-tighter text-white md:text-7xl lg:text-8xl">
              {t.hero_h1_line1} <br className="hidden md:block" />
              <span className="text-[#C9A84C] font-serif italic pr-2">{t.hero_h1_highlight}</span> <br className="hidden md:block" />
              {t.hero_h1_line2}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
              {t.hero_desc}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/signup" className="rounded-full bg-white px-8 py-4 font-semibold text-[#071226] transition hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                {t.hero_cta_primary}
              </Link>
              <Link href="/programs" className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]">
                {t.hero_cta_secondary}
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-[#C9A84C]/20 bg-[#0B1833]/80 p-10 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#071226] border border-white/10">
                  <span className="font-serif text-2xl text-[#C9A84C]">FSA</span>
                </div>
                <div className="rounded-full bg-[#C9A84C]/10 px-4 py-2 text-xs uppercase tracking-widest text-[#C9A84C]">
                  {t.hero_card_badge}
                </div>
              </div>
              <h2 className="font-serif text-3xl leading-tight text-white mb-4">
                {t.hero_card_h2}
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                {t.hero_card_desc}
              </p>
              <div className="space-y-4 border-t border-white/10 pt-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/40 uppercase tracking-widest">{t.hero_stat1_label}</span>
                  <span className="text-white font-medium">{t.hero_stat1_val}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/40 uppercase tracking-widest">{t.hero_stat2_label}</span>
                  <span className="text-white font-medium">{t.hero_stat2_val}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/40 uppercase tracking-widest">{t.hero_stat3_label}</span>
                  <span className="text-white font-medium">{t.hero_stat3_val}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1. Who this is for (Editorial) ────────────────────────────────── */}
      <section className="bg-white px-6 py-24 text-[#071226] md:py-32">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C] font-semibold">{t.who_eyebrow}</div>
            <h2 className="font-sans text-5xl font-semibold tracking-tighter text-[#071226] leading-tight md:text-6xl">
              {t.who_h2}
            </h2>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
              <p className="text-xl leading-relaxed text-slate-700">{t.who_p1}</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
              <p className="text-xl leading-relaxed text-slate-700">{t.who_p2}</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
              <p className="text-xl leading-relaxed text-slate-700">{t.who_p3}</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
              <p className="text-xl leading-relaxed text-slate-700">{t.who_p4}</p>
            </div>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="mx-auto max-w-7xl mt-16">
          <div className="w-full h-80 md:h-[500px] rounded-[32px] overflow-hidden bg-[#F4F7FA] border border-slate-200 relative group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("/images/placeholder-who.jpg")' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-[#071226] border border-slate-200 shadow-sm">Tokyo Learning Environment</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. What actually happens in class (Process) ───────────────────── */}
      <section className="bg-[#F4F7FA] px-6 py-24 text-[#071226] md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-center text-sm uppercase tracking-[0.35em] text-[#C9A84C] font-semibold">{t.class_eyebrow}</div>
          <h2 className="mb-20 text-center font-sans text-5xl font-semibold tracking-tighter text-[#071226] leading-tight md:text-6xl">
            {t.class_h2}
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {classSteps.map((step, idx) => (
              <div key={idx} className="relative rounded-[24px] border border-slate-200 bg-white p-10 shadow-sm transition-shadow hover:shadow-md">
                <div className="absolute -top-5 left-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#071226] text-sm font-bold text-[#C9A84C] shadow-lg">
                  {step.num}
                </div>
                <h3 className="mt-4 mb-3 font-serif text-2xl text-[#071226]">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Image Placeholder */}
          <div className="mt-16 w-full h-80 md:h-[500px] rounded-[32px] overflow-hidden bg-white border border-slate-200 relative group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("/images/placeholder-class.jpg")' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-[#071226]/80 backdrop-blur-md px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-[#C9A84C] border border-[#C9A84C]/20 shadow-xl">Coaching Session</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. What students create (Variation) ───────────────────────────── */}
      <section className="bg-[#071226] px-6 py-24 md:py-32 relative">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1 grid gap-6 sm:grid-cols-2">
            {creations.map((item, idx) => (
              <div key={idx} className="flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:border-[#C9A84C]/30 group">
                <div className="relative h-40 w-full bg-[#0B1833] overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${item.img})` }} />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="font-sans text-lg font-semibold tracking-tight text-white">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="order-1 lg:order-2 lg:pl-12">
            <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C] font-semibold">{t.create_eyebrow}</div>
            <h2 className="font-sans text-5xl font-semibold tracking-tighter text-white leading-tight md:text-6xl">
              {t.create_h2}
            </h2>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="mx-auto max-w-7xl mt-16">
          <div className="w-full h-80 md:h-[500px] rounded-[32px] overflow-hidden bg-[#0B1833] border border-white/10 relative group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("/images/placeholder-create.jpg")' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-[#071226]/80 backdrop-blur-md px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-[#C9A84C] border border-white/10 shadow-xl">Portfolio Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Programs ───────────────────────────────────────────────────── */}
      <section className="bg-[#0B1833] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-center text-sm uppercase tracking-[0.35em] text-[#C9A84C] font-semibold">{t.prog_eyebrow}</div>
          <h2 className="mb-6 text-center font-sans text-5xl font-semibold tracking-tighter text-white leading-tight md:text-6xl">
            {t.prog_h2}
          </h2>
          <p className="mx-auto mb-20 max-w-2xl text-center text-xl text-white/60 leading-relaxed">
            {t.prog_desc}
          </p>

          <div className="grid gap-6 lg:grid-cols-3">
            {programs.map((prog) => (
              <div key={prog.id} className={`group flex flex-col justify-between rounded-[32px] border ${prog.accent} bg-[#071226] p-10 transition-all duration-300 relative`}>
                {!prog.isActive && (
                  <div className="absolute inset-0 bg-[#071226]/40 rounded-[32px] pointer-events-none" />
                )}
                <div className={!prog.isActive ? "opacity-80" : ""}>
                  <div className={`mb-4 inline-flex rounded-full px-4 py-1.5 text-xs tracking-widest uppercase ${prog.isActive ? 'bg-white/5 text-[#C9A84C]' : 'bg-white/5 text-white/50'}`}>
                    {prog.ages}
                  </div>
                  <h3 className="mb-8 font-serif text-3xl text-white">{prog.name}</h3>
                  <ul className="space-y-4">
                    {prog.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-white/80">
                        <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {prog.isActive ? (
                  <Link href="/programs" className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-[#C9A84C] hover:text-white transition-colors">
                    {t.prog_learn_more}
                  </Link>
                ) : (
                  <div className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-white/40">
                    Join Waitlist →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. How enrollment works ───────────────────────────────────────── */}
      <section className="bg-[#F4F7FA] px-6 py-24 text-[#071226] md:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C] font-semibold">{t.enroll_eyebrow}</div>
          <h2 className="mb-20 font-serif text-5xl leading-tight md:text-6xl">
            {t.enroll_h2}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-left">
            {[t.enroll_step1, t.enroll_step2, t.enroll_step3, t.enroll_step4, t.enroll_step5, t.enroll_step6, t.enroll_step7].map((step, idx) => (
              <div key={idx} className="flex items-center gap-6 rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#071226] font-serif text-xl text-[#C9A84C]">
                  {idx + 1}
                </div>
                <div className="font-medium text-slate-800">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Parent FAQ ─────────────────────────────────────────────────── */}
      <section className="bg-[#071226] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-sm uppercase tracking-[0.35em] text-[#C9A84C] font-semibold">{t.faq_eyebrow}</div>
          <h2 className="mb-16 text-center font-serif text-5xl leading-tight text-white md:text-6xl">
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
      <section className="bg-[#0B1833] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl rounded-[40px] border border-[#C9A84C]/20 bg-[#071226] p-12 text-center shadow-2xl md:p-20 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C9A84C] opacity-5 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#3b82f6] opacity-5 blur-3xl" />
          
          <div className="relative z-10">
            <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C] font-semibold">{t.cta_eyebrow}</div>
            <h2 className="font-serif text-5xl leading-tight text-white md:text-6xl">
              {t.cta_h2}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60">
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
