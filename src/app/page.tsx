"use client";

import { useState, useRef, useEffect } from "react";
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
        <svg
          className="h-3.5 w-3.5 opacity-70"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.93 4.93a.75.75 0 011.06.01 6.5 6.5 0 008.98 0 .75.75 0 011.07 1.04A8 8 0 016 6a8 8 0 01-1.07-1.07zM3 10a7 7 0 0114 0c0 1.72-.62 3.3-1.64 4.53A7 7 0 013 10z"
            clipRule="evenodd"
          />
        </svg>
        <span>{localeLabels[locale]}</span>
        <svg
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Language options"
          className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1833] shadow-2xl backdrop-blur-xl"
        >
          {(Object.keys(localeLabels) as Locale[]).map((l) => (
            <li key={l} role="option" aria-selected={l === locale}>
              <button
                id={`lang-option-${l}`}
                onClick={() => {
                  onChange(l);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-white/8 ${
                  l === locale
                    ? "text-[#C9A84C]"
                    : "text-white/75 hover:text-white"
                }`}
              >
                <span className="w-8 font-mono text-xs opacity-60">
                  {localeLabels[l]}
                </span>
                <span>{localeNames[l]}</span>
                {l === locale && (
                  <svg
                    className="ml-auto h-3.5 w-3.5 text-[#C9A84C]"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
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
export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = translations[locale];

  // Update <html lang> attribute on locale change
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

  return (
    <main className="min-h-screen bg-[#071226] text-white overflow-hidden">
      {/* ── Hero section ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-gradient-to-b from-[#0B1833] via-[#081327] to-[#050B16]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(201,168,76,0.18),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.16),transparent_35%)]" />

        {/* Navbar */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/8 px-7 py-4 backdrop-blur-xl shadow-2xl">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A84C]/50 bg-[#081327]">
                <span className="font-serif text-sm text-[#C9A84C]">FSA</span>
              </div>
              <div>
                <div className="font-serif text-xl tracking-wide">
                  Future Skill Academy
                </div>
                <div className="text-xs uppercase tracking-[0.35em] text-white/45">
                  {t.nav_tagline}
                </div>
              </div>
            </div>

            {/* Nav links */}
            <nav className="hidden items-center gap-9 text-sm text-white/70 md:flex">
              <a className="hover:text-[#C9A84C] transition-colors" href="#programs">
                {t.nav_programs}
              </a>
              <a className="hover:text-[#C9A84C] transition-colors" href="#philosophy">
                {t.nav_philosophy}
              </a>
              <a className="hover:text-[#C9A84C] transition-colors" href="#parents">
                {t.nav_parents}
              </a>
              <a className="hover:text-[#C9A84C] transition-colors" href="#contact">
                {t.nav_contact}
              </a>
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher locale={locale} onChange={setLocale} />
              <button
                id="nav-cta-btn"
                className="rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#06101F] transition hover:bg-[#E4C261]"
              >
                {t.nav_cta}
              </button>
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

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              {t.hero_desc}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                id="hero-cta-primary"
                className="rounded-full bg-white px-8 py-4 font-semibold text-[#071226] transition hover:scale-[1.02]"
              >
                {t.hero_cta_primary}
              </button>
              <button
                id="hero-cta-secondary"
                className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]"
              >
                {t.hero_cta_secondary}
              </button>
            </div>

            <div className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="font-serif text-4xl text-white">
                  {t.hero_stat1_val}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/45">
                  {t.hero_stat1_label}
                </div>
              </div>
              <div>
                <div className="font-serif text-4xl text-white">
                  {t.hero_stat2_val}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/45">
                  {t.hero_stat2_label}
                </div>
              </div>
              <div>
                <div className="font-serif text-4xl text-white">
                  {t.hero_stat3_val}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/45">
                  {t.hero_stat3_label}
                </div>
              </div>
            </div>
          </div>

          {/* Hero card */}
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
                      <span className="font-serif text-3xl text-[#C9A84C]">
                        FSA
                      </span>
                    </div>
                    <h2 className="font-serif text-4xl leading-tight">
                      {t.hero_card_h2}
                    </h2>
                    <p className="mt-5 text-white/60">{t.hero_card_desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Programs / Why FSA ──────────────────────────────────────────── */}
      <section
        id="programs"
        className="bg-[#F4F7FA] px-6 py-28 text-[#071226]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">
                {t.section01_eyebrow}
              </div>
              <h2 className="font-serif text-5xl leading-tight md:text-7xl">
                {t.section01_h2}
              </h2>
            </div>
            <p className="self-end text-xl leading-relaxed text-slate-600">
              {t.section01_desc}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(([title, text]) => (
              <div
                key={title}
                className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-[#071226] text-[#C9A84C]">
                  ◆
                </div>
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="mt-4 leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ──────────────────────────────────────────────────── */}
      <section id="philosophy" className="bg-white px-6 py-28 text-[#071226]">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div className="rounded-[36px] bg-gradient-to-br from-[#DDE8F5] to-[#F7FAFC] p-10">
            <div className="h-[520px] rounded-[30px] bg-gradient-to-br from-[#9CB6C9] via-[#DCE7EF] to-[#0B4E8A]" />
          </div>

          <div className="self-center">
            <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">
              {t.section02_eyebrow}
            </div>
            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              {t.section02_h2}
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-slate-600">
              {t.section02_desc}
            </p>

            <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-[28px] border border-slate-200">
              {pillars.map((item) => (
                <div key={item} className="border border-slate-200 p-7">
                  <h3 className="font-serif text-xl">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact / CTA ───────────────────────────────────────────────── */}
      <section id="contact" className="bg-[#071226] px-6 py-28 text-white">
        <div className="mx-auto max-w-5xl rounded-[42px] border border-white/10 bg-white/6 p-12 text-center backdrop-blur-xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">
            {t.contact_eyebrow}
          </div>
          <h2 className="font-serif text-5xl leading-tight md:text-7xl">
            {t.contact_h2}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            {t.contact_desc}
          </p>
          <button
            id="contact-cta-btn"
            className="mt-10 rounded-full bg-[#C9A84C] px-9 py-4 font-semibold text-[#071226]"
          >
            {t.contact_cta}
          </button>
        </div>
      </section>
    </main>
  );
}
