"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  type Locale,
  localeLabels,
  localeNames,
  translations,
} from "@/lib/i18n";

// ─── Language switcher component ────────────────────────────────────────────
function LanguageSwitcher({
  locale,
  onChange,
}: {
  locale: Locale;
  onChange: (l: Locale) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
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
        <ul role="listbox" aria-label="Language options" className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1833] shadow-2xl backdrop-blur-xl">
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

// ─── Page ───────────────────────────────────────────────────────────────────
import { useLanguage } from "@/hooks/useLanguage";

export default function Home() {
  const { locale, setLocale } = useLanguage();
  const t = translations[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const features: [string, string][] = [
    [t.feature1_title, t.feature1_desc],
    [t.feature2_title, t.feature2_desc],
    [t.feature3_title, t.feature3_desc],
    [t.feature4_title, t.feature4_desc],
    [t.feature5_title, t.feature5_desc],
    [t.feature6_title, t.feature6_desc],
  ];

  const pillars = [t.pillar1, t.pillar2, t.pillar3, t.pillar4];

  // ── SVG icon helpers ──────────────────────────────────────────────────────
  const IconGlobe = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>);
  const IconCpu  = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg>);
  const IconLayers = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>);
  const IconMic  = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 10a7 7 0 0014 0M12 21v-4M8 21h8"/></svg>);
  const IconSearch = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>);
  const IconFile = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg>);
  const IconMsg  = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>);
  const IconUsers = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>);
  const IconBook = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>);
  const IconTarget = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>);
  const IconCheck = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>);

  // ── Section data (fully translated) ──────────────────────────────────────
  const whyCards = [
    { icon: <IconGlobe />, title: t.why_card1_title, desc: t.why_card1_desc },
    { icon: <IconCpu  />, title: t.why_card2_title, desc: t.why_card2_desc },
    { icon: <IconLayers />, title: t.why_card3_title, desc: t.why_card3_desc },
  ];

  const programs = [
    { id: "future-communicator",    name: t.prog1_name, ages: t.prog1_ages, skills: [t.prog1_skill1, t.prog1_skill2, t.prog1_skill3], accent: "from-[#0B2352] to-[#0C1B36]" },
    { id: "ai-research-builder",    name: t.prog2_name, ages: t.prog2_ages, skills: [t.prog2_skill1, t.prog2_skill2, t.prog2_skill3], accent: "from-[#0C1B36] to-[#071226]" },
    { id: "portfolio-project-studio", name: t.prog3_name, ages: t.prog3_ages, skills: [t.prog3_skill1, t.prog3_skill2, t.prog3_skill3], accent: "from-[#071226] to-[#0B2352]" },
  ];

  const outcomes = [
    { icon: <IconMic    />, text: t.outcome1 },
    { icon: <IconCpu    />, text: t.outcome2 },
    { icon: <IconSearch />, text: t.outcome3 },
    { icon: <IconFile   />, text: t.outcome4 },
    { icon: <IconMsg    />, text: t.outcome5 },
  ];

  const coaches = [
    { id: "program-lead",       role: t.coach1_role, title: t.coach1_desc, initials: "PL" },
    { id: "communication-coach", role: t.coach2_role, title: t.coach2_desc, initials: "CC" },
    { id: "ai-research-coach",  role: t.coach3_role, title: t.coach3_desc, initials: "AR" },
  ];

  const parentReasons = [
    { icon: <IconUsers  />, title: t.parent1_title, desc: t.parent1_desc },
    { icon: <IconMsg    />, title: t.parent2_title, desc: t.parent2_desc },
    { icon: <IconTarget />, title: t.parent3_title, desc: t.parent3_desc },
    { icon: <IconCheck  />, title: t.parent4_title, desc: t.parent4_desc },
  ];

  return (
    <main className="min-h-screen bg-[#071226] text-white overflow-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-gradient-to-b from-[#0B1833] via-[#081327] to-[#050B16]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(201,168,76,0.18),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.16),transparent_35%)]" />

        {/* Navbar */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/8 px-7 py-4 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A84C]/50 bg-[#081327]">
                <span className="font-serif text-sm text-[#C9A84C]">FSA</span>
              </div>
              <div>
                <div className="font-serif text-xl tracking-wide">Future Skill Academy</div>
                <div className="text-xs uppercase tracking-[0.35em] text-white/45">{t.nav_tagline}</div>
              </div>
            </div>

            <nav className="hidden items-center gap-9 text-sm text-white/70 md:flex">
              <Link className="hover:text-[#C9A84C] transition-colors" href="/programs">{t.nav_programs}</Link>
              <Link className="hover:text-[#C9A84C] transition-colors" href="/#why-fsa">{t.nav_philosophy}</Link>
              <Link className="hover:text-[#C9A84C] transition-colors" href="/parents">{t.nav_parents}</Link>
              <Link className="hover:text-[#C9A84C] transition-colors" href="/contact">{t.nav_contact}</Link>
            </nav>

            <div className="flex items-center gap-3">
              <LanguageSwitcher locale={locale} onChange={setLocale} />
              <a href="/signup" id="nav-cta-btn" className="rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#06101F] transition hover:bg-[#E4C261]">
                {t.nav_cta}
              </a>
            </div>
          </div>
        </header>

        {/* Hero body */}
        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pt-36 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-8 inline-flex rounded-full border border-[#C9A84C]/35 px-5 py-2 text-xs uppercase tracking-[0.28em] text-[#C9A84C]">
              {t.hero_badge}
            </div>
            <h1 className="max-w-5xl font-serif text-6xl leading-[0.92] tracking-tight md:text-8xl lg:text-9xl">
              {t.hero_h1_line1}{" "}
              <span className="text-[#C9A84C]">{t.hero_h1_highlight}</span>{" "}
              {t.hero_h1_line2}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">{t.hero_desc}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/signup" id="hero-cta-primary" className="rounded-full bg-white px-8 py-4 font-semibold text-[#071226] transition hover:scale-[1.02]">
                {t.hero_cta_primary}
              </a>
              <a href="/programs" id="hero-cta-secondary" className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]">
                {t.hero_cta_secondary}
              </a>
            </div>
            <div className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="font-serif text-4xl text-white">{t.hero_stat1_val}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/45">{t.hero_stat1_label}</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-white">{t.hero_stat2_val}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/45">{t.hero_stat2_label}</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-white">{t.hero_stat3_val}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/45">{t.hero_stat3_label}</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/6 p-8 shadow-2xl backdrop-blur-xl">
              <div className="aspect-[4/5] rounded-[32px] bg-gradient-to-br from-[#133263] via-[#0C1B36] to-[#050B16] p-10">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex justify-end">
                    <div className="rounded-full border border-[#C9A84C]/30 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#C9A84C]">
                      {t.hero_card_badge}
                    </div>
                  </div>
                  <div>
                    <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#C9A84C]/40 bg-[#071226]/80">
                      <span className="font-serif text-3xl text-[#C9A84C]">FSA</span>
                    </div>
                    <h2 className="font-serif text-4xl leading-tight">{t.hero_card_h2}</h2>
                    <p className="mt-5 text-white/60">{t.hero_card_desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1. Why FSA ────────────────────────────────────────────────────── */}
      <section id="why-fsa" className="bg-[#F4F7FA] px-6 py-28 text-[#071226]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{t.why_eyebrow}</div>
          <div className="mb-16 grid gap-10 lg:grid-cols-2">
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">
              {t.why_h2}
            </h2>
            <p className="self-end text-xl leading-relaxed text-slate-600">
              {t.why_desc}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {whyCards.map((card) => (
              <div key={card.title} className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg hover:-translate-y-1 duration-300">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071226] text-[#C9A84C]">
                  {card.icon}
                </div>
                <h3 className="font-serif text-2xl text-[#071226]">{card.title}</h3>
                <p className="mt-4 leading-relaxed text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Programs Preview ───────────────────────────────────────────── */}
      <section id="programs" className="bg-[#071226] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{t.prog_eyebrow}</div>
          <div className="mb-16 grid gap-10 lg:grid-cols-2">
            <h2 className="font-serif text-5xl leading-tight text-white md:text-6xl">
              {t.prog_h2}
            </h2>
            <p className="self-end text-xl leading-relaxed text-white/60">
              {t.prog_desc}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {programs.map((prog) => (
              <div key={prog.id} className={`group relative overflow-hidden rounded-[32px] bg-gradient-to-br ${prog.accent} border border-white/10 p-8 transition hover:border-[#C9A84C]/40 duration-300`}>
                <div className="mb-3 text-xs uppercase tracking-[0.3em] text-[#C9A84C]">{prog.ages}</div>
                <h3 className="font-serif text-2xl text-white">{prog.name}</h3>
                <ul className="mt-6 space-y-2">
                  {prog.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
                <a
                  href="/programs"
                  id={`program-learn-more-${prog.id}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm text-white/80 transition hover:border-[#C9A84C] hover:text-[#C9A84C]"
                >
                  {t.prog_learn_more}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Student Outcomes ───────────────────────────────────────────── */}
      <section id="outcomes" className="bg-[#F4F7FA] px-6 py-28 text-[#071226]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{t.outcomes_eyebrow}</div>
          <div className="mb-16 max-w-3xl">
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">
              {t.outcomes_h2}
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-600">
              {t.outcomes_desc}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {outcomes.map((item, i) => (
              <div key={i} className="flex flex-col items-start gap-4 rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md hover:-translate-y-0.5 duration-300">
                <span className="text-[#C9A84C]">{item.icon}</span>
                <p className="font-serif text-lg leading-snug text-[#071226]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Coaches Preview ────────────────────────────────────────────── */}
      <section id="coaches" className="bg-[#071226] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{t.coaches_eyebrow}</div>
          <div className="mb-16 grid gap-10 lg:grid-cols-2">
            <h2 className="font-serif text-5xl leading-tight text-white md:text-6xl">
              {t.coaches_h2}
            </h2>
            <p className="self-end text-xl leading-relaxed text-white/60">
              {t.coaches_desc}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {coaches.map((coach) => (
              <div key={coach.id} className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-[#C9A84C]/30 duration-300">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A84C]/30 bg-[#0B2352]">
                  <span className="font-serif text-xl text-[#C9A84C]">{coach.initials}</span>
                </div>
                <div className="mb-1 text-xs uppercase tracking-[0.3em] text-[#C9A84C]">{coach.role}</div>
                <p className="mt-3 text-white/65 leading-relaxed text-sm">{coach.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="/team"
              id="coaches-meet-team-btn"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]"
            >
              {t.coaches_cta}
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. Parent Trust ───────────────────────────────────────────────── */}
      <section id="parents" className="bg-white px-6 py-28 text-[#071226]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{t.parents_eyebrow}</div>
          <div className="mb-16 max-w-3xl">
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">
              {t.parents_h2}
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-600">
              {t.parents_desc}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {parentReasons.map((reason, i) => (
              <div key={i} className="rounded-[28px] border border-slate-200 bg-[#F4F7FA] p-8 transition hover:shadow-md hover:-translate-y-0.5 duration-300">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#071226] text-[#C9A84C]">
                  {reason.icon}
                </div>
                <h3 className="font-serif text-xl text-[#071226]">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Final CTA ──────────────────────────────────────────────────── */}
      <section id="contact" className="bg-[#071226] px-6 py-28">
        <div className="mx-auto max-w-5xl rounded-[42px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl md:p-20">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{t.cta_eyebrow}</div>
          <h2 className="font-serif text-5xl leading-tight text-white md:text-7xl">
            {t.cta_h2}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            {t.cta_desc}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/signup"
              id="final-cta-trial-btn"
              className="rounded-full bg-[#C9A84C] px-9 py-4 font-semibold text-[#071226] transition hover:bg-[#E4C261] hover:scale-[1.02]"
            >
              {t.cta_btn1}
            </a>
            <a
              href="/programs"
              id="final-cta-programs-btn"
              className="rounded-full border border-white/20 px-9 py-4 font-semibold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]"
            >
              {t.cta_btn2}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
