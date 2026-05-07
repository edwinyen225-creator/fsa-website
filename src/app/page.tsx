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
export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
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

  // ── Static data for new sections ─────────────────────────────────────────
  const whyCards = [
    {
      icon: "🌐",
      title: "Global Communication",
      desc: "Students develop the confidence to speak, present, and collaborate in English — skills that open doors in any country or career.",
    },
    {
      icon: "🤖",
      title: "AI & Research Literacy",
      desc: "We teach students to use AI tools responsibly, frame research questions, and synthesise information like professionals.",
    },
    {
      icon: "📁",
      title: "Portfolio-Based Learning",
      desc: "Every course produces real outputs — slides, reports, videos, and pitches — that students keep and showcase.",
    },
  ];

  const programs = [
    {
      id: "future-communicator",
      name: "Future Communicator",
      ages: "Ages 10–13",
      skills: ["Public speaking", "Structured storytelling", "English fluency"],
      accent: "from-[#0B2352] to-[#0C1B36]",
    },
    {
      id: "ai-research-builder",
      name: "AI & Research Builder",
      ages: "Ages 12–16",
      skills: ["AI tool usage", "Research methodology", "Critical analysis"],
      accent: "from-[#0C1B36] to-[#071226]",
    },
    {
      id: "portfolio-project-studio",
      name: "Portfolio Project Studio",
      ages: "Ages 14–18",
      skills: ["Project management", "Presentation design", "Portfolio creation"],
      accent: "from-[#071226] to-[#0B2352]",
    },
  ];

  const outcomes = [
    { icon: "🎤", text: "Present confidently in English" },
    { icon: "🤖", text: "Use AI responsibly and effectively" },
    { icon: "🔬", text: "Research and structure ideas clearly" },
    { icon: "📂", text: "Create portfolio-ready projects" },
    { icon: "💬", text: "Communicate with global fluency" },
  ];

  const coaches = [
    {
      id: "founder-lead",
      role: "Founder / Program Lead",
      title: "Curriculum design, coaching philosophy, and program vision.",
      initials: "FL",
    },
    {
      id: "communication-coach",
      role: "Communication Coach",
      title: "Public speaking, English fluency, and presentation delivery.",
      initials: "CC",
    },
    {
      id: "ai-research-coach",
      role: "AI & Research Coach",
      title: "AI literacy, research methods, and structured critical thinking.",
      initials: "AR",
    },
  ];

  const parentReasons = [
    { icon: "👥", title: "Small Group Learning", desc: "Every student gets real attention, feedback, and coaching — not a seat in a crowd." },
    { icon: "🗣️", title: "English-Based Environment", desc: "Immersive English learning builds fluency naturally through real tasks, not drills." },
    { icon: "🚀", title: "Practical Future Skills", desc: "Communication, AI, research, and presentation — skills schools don't prioritise." },
    { icon: "✅", title: "Clear Project Outcomes", desc: "Parents see tangible results: portfolios, presentations, and measurable progress." },
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
              <a className="hover:text-[#C9A84C] transition-colors" href="#why-fsa">{t.nav_programs}</a>
              <a className="hover:text-[#C9A84C] transition-colors" href="#programs">{t.nav_philosophy}</a>
              <a className="hover:text-[#C9A84C] transition-colors" href="#parents">{t.nav_parents}</a>
              <a className="hover:text-[#C9A84C] transition-colors" href="#coaches">{t.nav_contact}</a>
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
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">01 — Why FSA</div>
          <div className="mb-16 grid gap-10 lg:grid-cols-2">
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">
              Built for the skills that matter most.
            </h2>
            <p className="self-end text-xl leading-relaxed text-slate-600">
              Future Skill Academy helps students build real-world communication, AI literacy, presentation, research, and project skills — through English-based, portfolio-driven learning.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {whyCards.map((card) => (
              <div key={card.title} className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg hover:-translate-y-1 duration-300">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071226] text-2xl">
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
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">02 — Programs</div>
          <div className="mb-16 grid gap-10 lg:grid-cols-2">
            <h2 className="font-serif text-5xl leading-tight text-white md:text-6xl">
              Three pathways. One clear direction.
            </h2>
            <p className="self-end text-xl leading-relaxed text-white/60">
              Each program is designed for a specific age group and skill set — progressing from communication foundations to advanced AI research and portfolio production.
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
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Student Outcomes ───────────────────────────────────────────── */}
      <section id="outcomes" className="bg-[#F4F7FA] px-6 py-28 text-[#071226]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">03 — Student Outcomes</div>
          <div className="mb-16 max-w-3xl">
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">
              What students leave with.
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-600">
              After completing an FSA program, students don&apos;t just gain knowledge — they gain capabilities they can demonstrate.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {outcomes.map((item, i) => (
              <div key={i} className="flex flex-col items-start gap-4 rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md hover:-translate-y-0.5 duration-300">
                <span className="text-3xl">{item.icon}</span>
                <p className="font-serif text-lg leading-snug text-[#071226]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Coaches Preview ────────────────────────────────────────────── */}
      <section id="coaches" className="bg-[#071226] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">04 — Our Coaches</div>
          <div className="mb-16 grid gap-10 lg:grid-cols-2">
            <h2 className="font-serif text-5xl leading-tight text-white md:text-6xl">
              Learn from international coaches and mentors.
            </h2>
            <p className="self-end text-xl leading-relaxed text-white/60">
              Every FSA coach brings real-world expertise and a passion for developing the next generation of communicators, researchers, and creators.
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
              Meet the Full Team →
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. Parent Trust ───────────────────────────────────────────────── */}
      <section id="parents" className="bg-white px-6 py-28 text-[#071226]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">05 — For Parents</div>
          <div className="mb-16 max-w-3xl">
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">
              Why parents choose FSA.
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-600">
              Families who choose FSA are investing in skills that compound — skills their children will use for decades, not just for the next exam.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {parentReasons.map((reason, i) => (
              <div key={i} className="rounded-[28px] border border-slate-200 bg-[#F4F7FA] p-8 transition hover:shadow-md hover:-translate-y-0.5 duration-300">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#071226] text-xl">
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
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">Start Here</div>
          <h2 className="font-serif text-5xl leading-tight text-white md:text-7xl">
            Book a Free Trial Class.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            See what FSA is about — in one free class. No commitment, no pressure. Just real learning, real feedback, and a clear sense of whether FSA is the right fit for your child.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/signup"
              id="final-cta-trial-btn"
              className="rounded-full bg-[#C9A84C] px-9 py-4 font-semibold text-[#071226] transition hover:bg-[#E4C261] hover:scale-[1.02]"
            >
              Book Free Trial →
            </a>
            <a
              href="/programs"
              id="final-cta-programs-btn"
              className="rounded-full border border-white/20 px-9 py-4 font-semibold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
