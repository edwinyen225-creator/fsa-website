"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { type Locale, localeLabels, localeNames } from "@/lib/i18n";
import { usePar } from "@/lib/parents-i18n";

function LanguageSwitcher({ locale, onChange }: { locale: Locale; onChange: (l: Locale) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h); return () => document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div ref={ref} className="relative">
      <button id="par-lang-btn" onClick={() => setOpen(o => !o)} aria-haspopup="listbox" aria-expanded={open} aria-label="Select language"
        className="flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-[#C9A84C] hover:text-[#C9A84C]">
        <svg className="h-3.5 w-3.5 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.93 4.93a.75.75 0 011.06.01 6.5 6.5 0 008.98 0 .75.75 0 011.07 1.04A8 8 0 016 6a8 8 0 01-1.07-1.07zM3 10a7 7 0 0014 0c0 1.72-.62 3.3-1.64 4.53A7 7 0 013 10z" clipRule="evenodd" /></svg>
        <span>{localeLabels[locale]}</span>
        <svg className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}><path d="M2 4l4 4 4-4"/></svg>
      </button>
      {open && (
        <ul role="listbox" className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1833] shadow-2xl backdrop-blur-xl z-[60]">
          {(Object.keys(localeLabels) as Locale[]).map(l => (
            <li key={l} role="option" aria-selected={l === locale}>
              <button id={`par-lang-${l}`} onClick={() => { onChange(l); setOpen(false); }}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-white/8 ${l === locale ? "text-[#C9A84C]" : "text-white/75 hover:text-white"}`}>
                <span className="w-8 font-mono text-xs opacity-60">{localeLabels[l]}</span>
                <span>{localeNames[l]}</span>
                {l === locale && <svg className="ml-auto h-3.5 w-3.5 text-[#C9A84C]" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M2 6l3 3 5-5"/></svg>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const IC = (d: string) => () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d={d}/></svg>);
const IconTarget  = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>);
const IconGlobe   = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>);
const IconMic     = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 10a7 7 0 0014 0M12 21v-4M8 21h8"/></svg>);
const IconLayers  = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>);
const IconUsers   = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>);
const IconCheck   = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5"><path d="M20 6L9 17l-5-5"/></svg>);
const IconFile    = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>);
const IconChevron = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 transition-transform duration-200"><path d="M6 9l6 6 6-6"/></svg>);

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button onClick={() => setOpen(o => !o)} className="flex w-full items-center justify-between gap-4 py-6 text-left">
        <span className="font-serif text-xl text-white">{q}</span>
        <span className={`flex-shrink-0 text-[#C9A84C] ${open ? "rotate-180" : ""} transition-transform duration-200`}><IconChevron /></span>
      </button>
      {open && <p className="pb-6 leading-relaxed text-white/60">{a}</p>}
    </div>
  );
}

import { useLanguage } from "@/hooks/useLanguage";

export default function ParentsPage() {
  const { locale, setLocale } = useLanguage();
  const t = usePar(locale);
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  const whyCards = [
    { icon: <IconTarget />, title: t.w1_t, desc: t.w1_d },
    { icon: <IconGlobe />,  title: t.w2_t, desc: t.w2_d },
    { icon: <IconMic />,    title: t.w3_t, desc: t.w3_d },
    { icon: <IconLayers />, title: t.w4_t, desc: t.w4_d },
    { icon: <IconUsers />,  title: t.w5_t, desc: t.w5_d },
  ];
  const outputs = [t.out1, t.out2, t.out3, t.out4, t.out5];
  const faqs = [
    { q: t.q1, a: t.a1 }, { q: t.q2, a: t.a2 }, { q: t.q3, a: t.a3 },
    { q: t.q4, a: t.a4 }, { q: t.q5, a: t.a5 },
  ];
  const tradItems = t.cmp_trad.split(" · ");
  const fsaItems  = t.cmp_fsa.split(" · ");

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
              <div className="text-xs uppercase tracking-[0.35em] text-white/45">{t.tagline}</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-9 text-sm text-white/70 md:flex">
            <Link href="/#why-fsa"  className="hover:text-[#C9A84C] transition-colors">{t.nav_why}</Link>
            <Link href="/programs"  className="hover:text-[#C9A84C] transition-colors">{t.nav_programs}</Link>
            <Link href="/parents"   className="text-[#C9A84C]">{t.nav_parents}</Link>
            <Link href="/contact"   className="hover:text-[#C9A84C] transition-colors">{t.nav_contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} onChange={setLocale} />
            <Link href="/signup" id="par-nav-cta" className="rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#06101F] transition hover:bg-[#E4C261]">{t.nav_cta}</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[60vh] bg-gradient-to-b from-[#0B1833] via-[#081327] to-[#071226] px-6 pt-48 pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(201,168,76,0.14),transparent_40%),radial-gradient(circle_at_15%_70%,rgba(37,99,235,0.1),transparent_40%)]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-[#C9A84C]/35 px-5 py-2 text-xs uppercase tracking-[0.28em] text-[#C9A84C]">{t.badge}</div>
          <h1 className="font-serif text-5xl leading-tight tracking-tight md:text-7xl">{t.h1}</h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/65 md:text-xl">{t.sub}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/signup" id="par-hero-cta" className="rounded-full bg-[#C9A84C] px-9 py-4 font-semibold text-[#071226] transition hover:bg-[#E4C261] hover:scale-[1.02]">{t.cta_btn1}</Link>
            <Link href="/programs" className="rounded-full border border-white/20 px-9 py-4 font-semibold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]">{t.cta_btn2}</Link>
          </div>
        </div>
      </section>

      {/* Why cards */}
      <section className="bg-[#F4F7FA] px-6 py-28 text-[#071226]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{t.why_eyebrow}</div>
          <h2 className="mb-16 font-serif text-5xl leading-tight md:text-6xl">{t.why_h2}</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {whyCards.map((c, i) => (
              <div key={i} className="rounded-[28px] border border-slate-200 bg-white p-8 transition hover:shadow-lg hover:-translate-y-1 duration-300">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#071226] text-[#C9A84C]">{c.icon}</div>
                <h3 className="font-serif text-lg text-[#071226]">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{t.cmp_eyebrow}</div>
          <h2 className="mb-16 font-serif text-5xl leading-tight md:text-6xl">{t.cmp_h2}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Traditional */}
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10">
              <div className="mb-6 text-xs uppercase tracking-[0.3em] text-white/40">{t.cmp_trad_label}</div>
              <ul className="space-y-4">
                {tradItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/50">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/25" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* FSA */}
            <div className="rounded-[32px] border border-[#C9A84C]/30 bg-gradient-to-br from-[#0B2352] to-[#071226] p-10">
              <div className="mb-6 text-xs uppercase tracking-[0.3em] text-[#C9A84C]">{t.cmp_fsa_label}</div>
              <ul className="space-y-4">
                {fsaItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/20 text-[#C9A84C]"><IconCheck /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outputs */}
      <section className="bg-white px-6 py-28 text-[#071226]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{t.out_eyebrow}</div>
          <div className="mb-16 grid gap-8 lg:grid-cols-2">
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">{t.out_h2}</h2>
            <p className="self-end text-xl leading-relaxed text-slate-600">{t.out_desc}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {outputs.map((o, i) => (
              <div key={i} className="rounded-[28px] border border-slate-200 bg-[#F4F7FA] p-7 transition hover:shadow-md hover:-translate-y-0.5 duration-300">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#071226] text-[#C9A84C]"><IconFile /></div>
                <p className="font-serif text-base text-[#071226]">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{t.faq_eyebrow}</div>
          <h2 className="mb-12 font-serif text-5xl leading-tight md:text-6xl">{t.faq_h2}</h2>
          <div>
            {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071226] px-6 py-28">
        <div className="mx-auto max-w-4xl rounded-[42px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl md:p-20">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{t.cta_eyebrow}</div>
          <h2 className="font-serif text-5xl leading-tight text-white md:text-6xl">{t.cta_h2}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65">{t.cta_desc}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/signup" id="par-final-cta" className="rounded-full bg-[#C9A84C] px-9 py-4 font-semibold text-[#071226] transition hover:bg-[#E4C261] hover:scale-[1.02]">{t.cta_btn1}</Link>
            <Link href="/programs" className="rounded-full border border-white/20 px-9 py-4 font-semibold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]">{t.cta_btn2}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
