"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { type Locale, localeLabels, localeNames } from "@/lib/i18n";
import { useST } from "@/lib/signup-i18n";

const FORM_URL = "https://forms.gle/REPLACE_THIS_WITH_REAL_FORM_LINK";

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
      <button id="signup-lang-btn" onClick={() => setOpen(o => !o)} aria-haspopup="listbox" aria-expanded={open} aria-label="Select language"
        className="flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-[#C9A84C] hover:text-[#C9A84C]">
        <svg className="h-3.5 w-3.5 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.93 4.93a.75.75 0 011.06.01 6.5 6.5 0 008.98 0 .75.75 0 011.07 1.04A8 8 0 016 6a8 8 0 01-1.07-1.07zM3 10a7 7 0 0014 0c0 1.72-.62 3.3-1.64 4.53A7 7 0 013 10z" clipRule="evenodd" /></svg>
        <span>{localeLabels[locale]}</span>
        <svg className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}><path d="M2 4l4 4 4-4" /></svg>
      </button>
      {open && (
        <ul role="listbox" className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1833] shadow-2xl backdrop-blur-xl">
          {(Object.keys(localeLabels) as Locale[]).map(l => (
            <li key={l} role="option" aria-selected={l === locale}>
              <button id={`signup-lang-${l}`} onClick={() => { onChange(l); setOpen(false); }}
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
const IconForm = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>);
const IconChat = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>);
const IconPlay = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>);
const IconCheck = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5"><path d="M20 6L9 17l-5-5"/></svg>);
const IconExternal = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>);

export default function SignupPage() {
  const [locale, setLocale] = useState<Locale>("en");
  const s = useST(locale);

  useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  const steps = [
    { number: "01", icon: <IconForm />, label: s.step1_label, title: s.step1_title, desc: s.step1_desc },
    { number: "02", icon: <IconChat />, label: s.step2_label, title: s.step2_title, desc: s.step2_desc },
    { number: "03", icon: <IconPlay />, label: s.step3_label, title: s.step3_title, desc: s.step3_desc },
  ];
  const benefits = [s.benefit1, s.benefit2, s.benefit3, s.benefit4];

  return (
    <main className="min-h-screen bg-[#071226] text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/8 px-7 py-4 backdrop-blur-xl shadow-2xl">
          <Link href="/" className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A84C]/50 bg-[#081327]">
              <span className="font-serif text-sm text-[#C9A84C]">FSA</span>
            </div>
            <div>
              <div className="font-serif text-xl tracking-wide">Future Skill Academy</div>
              <div className="text-xs uppercase tracking-[0.35em] text-white/45">{s.tagline}</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-9 text-sm text-white/70 md:flex">
            <Link href="/#why-fsa" className="hover:text-[#C9A84C] transition-colors">{s.nav_why}</Link>
            <Link href="/programs" className="hover:text-[#C9A84C] transition-colors">{s.nav_programs}</Link>
            <Link href="/#parents" className="hover:text-[#C9A84C] transition-colors">{s.nav_parents}</Link>
            <Link href="/#coaches" className="hover:text-[#C9A84C] transition-colors">{s.nav_team}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} onChange={setLocale} />
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" id="signup-nav-cta"
              className="rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#06101F] transition hover:bg-[#E4C261]">{s.nav_cta}</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[55vh] bg-gradient-to-b from-[#0B1833] via-[#081327] to-[#071226] px-6 pt-48 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(201,168,76,0.18),transparent_40%),radial-gradient(circle_at_20%_75%,rgba(37,99,235,0.13),transparent_40%)]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-[#C9A84C]/35 px-5 py-2 text-xs uppercase tracking-[0.28em] text-[#C9A84C]">{s.badge}</div>
          <h1 className="font-serif text-5xl leading-tight tracking-tight md:text-7xl">
            {s.h1a} <span className="text-[#C9A84C]">{s.gold}</span> {s.h1b}
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">{s.sub}</p>
          <div className="mt-10">
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" id="hero-open-form-btn"
              className="inline-flex items-center gap-3 rounded-full bg-[#C9A84C] px-10 py-4 text-lg font-semibold text-[#071226] transition hover:bg-[#E4C261] hover:scale-[1.02]">
              {s.open_form} <IconExternal />
            </a>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{s.proc_eyebrow}</div>
          <h2 className="mb-16 font-serif text-5xl leading-tight md:text-6xl">{s.proc_h2}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
                <div className="absolute top-6 right-8 font-serif text-7xl text-white/5 leading-none select-none">{step.number}</div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C9A84C]/30 bg-[#0B2352] text-[#C9A84C]">{step.icon}</div>
                <div className="mb-2 text-xs uppercase tracking-[0.3em] text-[#C9A84C]">{step.label}</div>
                <h3 className="font-serif text-2xl text-white leading-snug">{step.title}</h3>
                <p className="mt-4 leading-relaxed text-white/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + CTA card */}
      <section className="bg-[#F4F7FA] px-6 py-28 text-[#071226]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{s.ben_eyebrow}</div>
              <h2 className="font-serif text-5xl leading-tight md:text-6xl">{s.ben_h2}</h2>
              <ul className="mt-10 space-y-5">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#071226] text-[#C9A84C]"><IconCheck /></div>
                    <span className="text-lg leading-relaxed text-slate-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[36px] bg-[#071226] p-10 md:p-14 text-white">
              <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{s.card_eyebrow}</div>
              <h3 className="font-serif text-4xl leading-tight text-white md:text-5xl">{s.card_h3}</h3>
              <p className="mt-5 leading-relaxed text-white/60">{s.card_desc}</p>
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer" id="benefits-open-form-btn"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#C9A84C] px-8 py-4 text-base font-semibold text-[#071226] transition hover:bg-[#E4C261] hover:scale-[1.01]">
                {s.open_form} <IconExternal />
              </a>
              <Link href="/programs" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]">
                {s.explore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact note */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="text-white/50 leading-relaxed">{s.contact}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/25">{s.footer}</p>
        </div>
      </section>
    </main>
  );
}
