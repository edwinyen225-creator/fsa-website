"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { type Locale, localeLabels, localeNames } from "@/lib/i18n";
import { useTT } from "@/lib/team-i18n";

function LanguageSwitcher({ locale, onChange }: { locale: Locale; onChange: (l: Locale) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div ref={ref} className="relative">
      <button id="team-lang-btn" onClick={() => setOpen(o => !o)} aria-haspopup="listbox" aria-expanded={open} aria-label="Select language"
        className="flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-[#C9A84C] hover:text-[#C9A84C]">
        <svg className="h-3.5 w-3.5 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.93 4.93a.75.75 0 011.06.01 6.5 6.5 0 008.98 0 .75.75 0 011.07 1.04A8 8 0 016 6a8 8 0 01-1.07-1.07zM3 10a7 7 0 0014 0c0 1.72-.62 3.3-1.64 4.53A7 7 0 013 10z" clipRule="evenodd" /></svg>
        <span>{localeLabels[locale]}</span>
        <svg className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}><path d="M2 4l4 4 4-4" /></svg>
      </button>
      {open && (
        <ul role="listbox" className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1833] shadow-2xl backdrop-blur-xl z-[60]">
          {(Object.keys(localeLabels) as Locale[]).map(l => (
            <li key={l} role="option" aria-selected={l === locale}>
              <button id={`team-lang-${l}`} onClick={() => { onChange(l); setOpen(false); }}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-white/8 ${l === locale ? "text-[#C9A84C]" : "text-white/75 hover:text-white"}`}>
                <span className="w-8 font-mono text-xs opacity-60">{localeLabels[l]}</span>
                <span>{localeNames[l]}</span>
                {l === locale && <svg className="ml-auto h-3.5 w-3.5 text-[#C9A84C]" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M2 6l3 3 5-5" /></svg>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// SVG icons
const IconGlobe = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>);
const IconCpu  = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg>);
const IconLayers = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>);
const IconMic  = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 10a7 7 0 0014 0M12 21v-4M8 21h8"/></svg>);
const IconCheck = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M20 6L9 17l-5-5"/></svg>);
const IconUsers = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>);
const IconHeart = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>);

import { useLanguage } from "@/hooks/useLanguage";

export default function TeamPage() {
  const { locale, setLocale } = useLanguage();
  const m = useTT(locale);

  useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  const coaches = [
    {
      id: "communication-coach", initials: "CC", icon: <IconMic />,
      role: m.coach1_role, helps: m.coach1_helps,
      skills: [m.coach1_s1, m.coach1_s2, m.coach1_s3],
      accent: "from-[#0B2352] to-[#0C1B36]",
    },
    {
      id: "ai-research-coach", initials: "AI", icon: <IconCpu />,
      role: m.coach2_role, helps: m.coach2_helps,
      skills: [m.coach2_s1, m.coach2_s2, m.coach2_s3],
      accent: "from-[#0C1B36] to-[#071226]",
    },
    {
      id: "portfolio-mentor", initials: "PM", icon: <IconLayers />,
      role: m.coach3_role, helps: m.coach3_helps,
      skills: [m.coach3_s1, m.coach3_s2, m.coach3_s3],
      accent: "from-[#071226] to-[#0B2352]",
    },
  ];

  const standards = [
    { icon: <IconGlobe />,  title: m.std1_title, desc: m.std1_desc },
    { icon: <IconCheck />,  title: m.std2_title, desc: m.std2_desc },
    { icon: <IconMic />,    title: m.std3_title, desc: m.std3_desc },
    { icon: <IconHeart />,  title: m.std4_title, desc: m.std4_desc },
  ];

  return (
    <main className="min-h-screen bg-[#071226] text-white">

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 pointer-events-none">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#061128]/70 px-6 py-3 backdrop-blur-xl animate-navbar-float ring-1 ring-white/5 pointer-events-auto">
          <Link href="/" className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A84C]/50 bg-[#081327]">
              <span className="font-serif text-sm text-[#C9A84C]">FSA</span>
            </div>
            <div>
              <div className="font-serif text-xl tracking-wide">Future Skill Academy</div>
              <div className="text-xs uppercase tracking-[0.35em] text-white/45">{m.tagline}</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-9 text-sm text-white/70 md:flex">
            <Link href="/#why-fsa"  className="hover:text-[#C9A84C] transition-colors">{m.nav_why}</Link>
            <Link href="/programs"  className="hover:text-[#C9A84C] transition-colors">{m.nav_programs}</Link>
            <Link href="/#parents"  className="hover:text-[#C9A84C] transition-colors">{m.nav_parents}</Link>
            <Link href="/team"      className="text-[#C9A84C]">{m.nav_team}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} onChange={setLocale} />
            <Link href="/signup" id="team-nav-cta" className="rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#06101F] transition hover:bg-[#E4C261]">{m.nav_cta}</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[55vh] bg-gradient-to-b from-[#0B1833] via-[#081327] to-[#071226] px-6 pt-48 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(201,168,76,0.15),transparent_40%),radial-gradient(circle_at_20%_75%,rgba(37,99,235,0.12),transparent_40%)]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-[#C9A84C]/35 px-5 py-2 text-xs uppercase tracking-[0.28em] text-[#C9A84C]">{m.badge}</div>
          <h1 className="font-sans text-4xl font-medium leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[4rem]">{m.h1}</h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">{m.sub}</p>
        </div>
      </section>

      {/* Program Lead */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{m.lead_label}</div>
          <div className="overflow-hidden rounded-[42px] border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="grid gap-0 lg:grid-cols-[360px_1fr]">
              {/* Avatar panel */}
              <div className="flex flex-col items-center justify-center gap-6 border-b border-white/10 bg-gradient-to-br from-[#0B2352] to-[#071226] p-12 lg:border-b-0 lg:border-r">
                <div className="flex h-36 w-36 items-center justify-center rounded-full border-2 border-[#C9A84C]/40 bg-[#071226]/80">
                  <span className="font-serif text-4xl text-[#C9A84C]">EY</span>
                </div>
                <div className="text-center">
                  <div className="font-serif text-2xl text-white">{m.lead_name}</div>
                  <div className="mt-1 text-sm text-[#C9A84C] uppercase tracking-[0.2em]">{m.lead_role}</div>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {[m.lead_tag1, m.lead_tag2, m.lead_tag3].map(tag => (
                    <span key={tag} className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-white/60">{tag}</span>
                  ))}
                </div>
              </div>
              {/* Bio panel */}
              <div className="flex flex-col justify-center p-10 md:p-14">
                <div className="mb-3 text-xs uppercase tracking-[0.3em] text-white/35">About</div>
                <p className="text-xl leading-relaxed text-white/75">{m.lead_bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coach cards */}
      <section className="bg-[#F4F7FA] px-6 py-20 md:py-24 text-[#071226]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{m.coaches_eyebrow}</div>
          <div className="mb-16 grid gap-8 lg:grid-cols-2">
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">{m.coaches_h2}</h2>
            <p className="self-end text-xl leading-relaxed text-slate-600">{m.coaches_desc}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {coaches.map(coach => (
              <div key={coach.id} className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition hover:shadow-lg hover:-translate-y-1 duration-300">
                {/* Placeholder image area */}
                <div className={`flex flex-col items-center justify-center gap-4 bg-gradient-to-br ${coach.accent} p-10`}>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A84C]/30 bg-[#071226]/60 text-[#C9A84C]">
                    {coach.icon}
                  </div>
                  <div className="text-center">
                    <div className="font-serif text-xl text-white">{coach.role}</div>
                    <div className="mt-2 text-xs text-white/40">{m.coach_placeholder}</div>
                  </div>
                </div>
                {/* Info */}
                <div className="p-7">
                  <div className="mb-2 text-xs uppercase tracking-[0.25em] text-[#C9A84C]">{m.coach_helps_label}</div>
                  <p className="text-sm leading-relaxed text-slate-600">{coach.helps}</p>
                  <div className="mt-5 mb-2 text-xs uppercase tracking-[0.25em] text-slate-400">{m.coach_skills_label}</div>
                  <ul className="space-y-1.5">
                    {coach.skills.map(skill => (
                      <li key={skill} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching standards */}
      <section className="bg-white px-6 py-20 md:py-24 text-[#071226]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{m.std_eyebrow}</div>
          <div className="mb-16 grid gap-8 lg:grid-cols-2">
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">{m.std_h2}</h2>
            <p className="self-end text-xl leading-relaxed text-slate-600">{m.std_desc}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((s, i) => (
              <div key={i} className="rounded-[28px] border border-slate-200 bg-[#F4F7FA] p-8 transition hover:shadow-md hover:-translate-y-0.5 duration-300">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#071226] text-[#C9A84C]">{s.icon}</div>
                <h3 className="font-serif text-xl text-[#071226]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071226] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl rounded-[42px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl md:p-20">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{m.cta_eyebrow}</div>
          <h2 className="font-serif text-5xl leading-tight text-white md:text-6xl">{m.cta_h2}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65">{m.cta_desc}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/signup" id="team-cta-btn" className="rounded-full bg-[#C9A84C] px-9 py-4 font-semibold text-[#071226] transition hover:bg-[#E4C261] hover:scale-[1.02]">{m.cta_btn}</Link>
            <Link href="/programs" className="rounded-full border border-white/20 px-9 py-4 font-semibold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]">{m.cta_btn2}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
