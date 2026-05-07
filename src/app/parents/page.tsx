"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { type Locale, localeLabels, localeNames } from "@/lib/i18n";

const pt = {
  en: {
    badge: "For Parents", h1a: "FSA is built for", gold: "your child's", h1b: "future.",
    sub: "Future Skill Academy helps students aged 10–18 build practical communication, AI literacy, research, presentation, and portfolio project skills — in English.",
    why_eyebrow: "Why Parents Choose FSA", why_h2: "Skills that compound for decades.",
    reason1_t: "Small Group Learning", reason1_d: "Every student gets real attention, coaching, and feedback — not a seat in a classroom crowd.",
    reason2_t: "English-Based Environment", reason2_d: "Immersive English learning through real tasks — not rote drills or memorisation.",
    reason3_t: "Practical Future Skills", reason3_d: "Communication, AI literacy, research, and presentation — the skills schools don't teach.",
    reason4_t: "Clear Project Outcomes", reason4_d: "Portfolios, presentations, and tangible outputs that show measurable progress.",
    how_eyebrow: "How It Works", how_h2: "What to expect.",
    step1_t: "Free Trial First", step1_d: "Start with a free trial class. No forms, no obligation. Just one session to see if FSA fits your child.",
    step2_t: "Choose a Program", step2_d: "We'll recommend the right program based on your child's age, goals, and starting level.",
    step3_t: "Project-Based Sessions", step3_d: "Each program runs in small groups, producing real outputs students can keep and be proud of.",
    step4_t: "Regular Progress", step4_d: "Parents receive clear feedback on what their child is building and how they're developing.",
    ages: "Ages 10–18", lang: "100% English", base: "Tokyo · Global",
    stat_eyebrow: "At a glance",
    cta_eyebrow: "Start Here", cta_h2: "Book a free trial for your child.", cta_desc: "Experience an FSA session firsthand — real coaching, real feedback, no pressure.",
    cta_btn: "Book a Free Trial →", cta_btn2: "Explore Programs",
    nav_why: "Why FSA", nav_programs: "Programs", nav_parents: "For Parents", nav_team: "Team", nav_contact: "Contact", nav_cta: "Free Trial →",
    tagline: "Tokyo · Global",
  },
  ja: {
    badge: "保護者の方へ", h1a: "FSAは、お子さまの", gold: "未来", h1b: "のために。",
    sub: "Future Skill Academyは、10〜18歳の生徒が英語でコミュニケーション・AIリテラシー・リサーチ・プレゼン・ポートフォリオスキルを実践的に身につけられるよう支援します。",
    why_eyebrow: "なぜ保護者がFSAを選ぶのか", why_h2: "何十年も積み重なるスキル。",
    reason1_t: "少人数学習", reason1_d: "すべての生徒が本物の注目・コーチング・フィードバックを受けられます。",
    reason2_t: "英語環境", reason2_d: "実際のタスクを通じた没入型の英語学習で、自然に流暢さが身につきます。",
    reason3_t: "実践的な将来スキル", reason3_d: "コミュニケーション・AI・リサーチ・プレゼン — 学校が教えないスキルです。",
    reason4_t: "明確なプロジェクト成果", reason4_d: "ポートフォリオ・プレゼン・測定可能な進捗など、目に見える成果を確認できます。",
    how_eyebrow: "流れ", how_h2: "FSAの学習ステップ。",
    step1_t: "まず無料体験から", step1_d: "無料体験クラスからスタート。コミットメント不要。1回のセッションでFSAが合うか確かめられます。",
    step2_t: "プログラムを選ぶ", step2_d: "年齢・目標・レベルに合ったプログラムをご提案します。",
    step3_t: "プロジェクト型セッション", step3_d: "各プログラムは少人数グループで実施し、生徒が誇れる実際の成果物を制作します。",
    step4_t: "定期的な進捗確認", step4_d: "保護者は、お子さまが何を構築し、どのように成長しているか明確なフィードバックを受けられます。",
    ages: "10〜18歳", lang: "英語100%", base: "東京・グローバル",
    stat_eyebrow: "概要",
    cta_eyebrow: "まずはここから", cta_h2: "お子さまの無料体験を予約する。", cta_desc: "FSAのセッションを直接体験してください — リアルなコーチング、本物のフィードバック、プレッシャーなし。",
    cta_btn: "無料体験を予約する →", cta_btn2: "プログラムを見る",
    nav_why: "なぜFSA", nav_programs: "プログラム", nav_parents: "保護者の方へ", nav_team: "チーム", nav_contact: "お問い合わせ", nav_cta: "無料体験 →",
    tagline: "東京 · グローバル",
  },
  "zh-TW": {
    badge: "給家長", h1a: "FSA為您孩子的", gold: "未來", h1b: "而建。",
    sub: "Future Skill Academy幫助10–18歲的學生以英語建立實用的溝通、AI素養、研究、簡報及作品集技能。",
    why_eyebrow: "為什麼家長選擇FSA", why_h2: "數十年持續累積的技能。",
    reason1_t: "小班學習", reason1_d: "每位學生都能獲得真正的關注、指導與反饋，而不是淹沒在人群中。",
    reason2_t: "英語沉浸環境", reason2_d: "透過真實任務的沉浸式英語學習，自然建立流利度，而非依賴填鴨。",
    reason3_t: "實用的未來技能", reason3_d: "溝通、AI素養、研究與簡報——學校不教但未來至關重要的技能。",
    reason4_t: "清晰的專案成果", reason4_d: "作品集、簡報與可量化的學習進展，讓家長看到具體成果。",
    how_eyebrow: "學習流程", how_h2: "您可以期待什麼。",
    step1_t: "先免費體驗", step1_d: "從免費體驗課開始。無需承諾，一堂課就能了解FSA是否適合您的孩子。",
    step2_t: "選擇課程", step2_d: "我們將根據孩子的年齡、目標和程度推薦合適的課程。",
    step3_t: "專案導向課程", step3_d: "每個課程以小班形式進行，產出學生可以保留並引以為傲的真實成果。",
    step4_t: "定期進度回饋", step4_d: "家長將收到清晰的反饋，了解孩子在建立什麼技能及如何發展。",
    ages: "10–18歲", lang: "100%英語授課", base: "東京 · 全球",
    stat_eyebrow: "概覽",
    cta_eyebrow: "從這裡開始", cta_h2: "為您的孩子預約免費體驗。", cta_desc: "親身體驗FSA的課程——真實的指導、真實的反饋、沒有壓力。",
    cta_btn: "預約免費體驗 →", cta_btn2: "探索課程",
    nav_why: "為什麼FSA", nav_programs: "課程", nav_parents: "給家長", nav_team: "團隊", nav_contact: "聯絡我們", nav_cta: "免費體驗 →",
    tagline: "東京 · 全球",
  },
  "zh-CN": {
    badge: "给家长", h1a: "FSA为您孩子的", gold: "未来", h1b: "而建。",
    sub: "Future Skill Academy帮助10–18岁的学生以英语建立实用的沟通、AI素养、研究、演示及作品集技能。",
    why_eyebrow: "为什么家长选择FSA", why_h2: "数十年持续积累的技能。",
    reason1_t: "小班学习", reason1_d: "每位学生都能获得真正的关注、指导与反馈，而不是淹没在人群中。",
    reason2_t: "英语沉浸环境", reason2_d: "通过真实任务的沉浸式英语学习，自然建立流利度，而非依赖填鸭。",
    reason3_t: "实用的未来技能", reason3_d: "沟通、AI素养、研究与演示——学校不教但未来至关重要的技能。",
    reason4_t: "清晰的项目成果", reason4_d: "作品集、演示与可量化的学习进展，让家长看到具体成果。",
    how_eyebrow: "学习流程", how_h2: "您可以期待什么。",
    step1_t: "先免费体验", step1_d: "从免费体验课开始。无需承诺，一堂课就能了解FSA是否适合您的孩子。",
    step2_t: "选择课程", step2_d: "我们将根据孩子的年龄、目标和程度推荐合适的课程。",
    step3_t: "项目导向课程", step3_d: "每个课程以小班形式进行，产出学生可以保留并引以为傲的真实成果。",
    step4_t: "定期进度反馈", step4_d: "家长将收到清晰的反馈，了解孩子在建立什么技能及如何发展。",
    ages: "10–18岁", lang: "100%英语授课", base: "东京 · 全球",
    stat_eyebrow: "概览",
    cta_eyebrow: "从这里开始", cta_h2: "为您的孩子预约免费体验。", cta_desc: "亲身体验FSA的课程——真实的指导、真实的反馈、没有压力。",
    cta_btn: "预约免费体验 →", cta_btn2: "探索课程",
    nav_why: "为什么FSA", nav_programs: "课程", nav_parents: "给家长", nav_team: "团队", nav_contact: "联系我们", nav_cta: "免费体验 →",
    tagline: "东京 · 全球",
  },
} as const;

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
      <button id="parents-lang-btn" onClick={() => setOpen(o => !o)} aria-haspopup="listbox" aria-expanded={open} aria-label="Select language"
        className="flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-[#C9A84C] hover:text-[#C9A84C]">
        <svg className="h-3.5 w-3.5 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.93 4.93a.75.75 0 011.06.01 6.5 6.5 0 008.98 0 .75.75 0 011.07 1.04A8 8 0 016 6a8 8 0 01-1.07-1.07zM3 10a7 7 0 0014 0c0 1.72-.62 3.3-1.64 4.53A7 7 0 013 10z" clipRule="evenodd" /></svg>
        <span>{localeLabels[locale]}</span>
        <svg className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}><path d="M2 4l4 4 4-4" /></svg>
      </button>
      {open && (
        <ul role="listbox" className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1833] shadow-2xl backdrop-blur-xl">
          {(Object.keys(localeLabels) as Locale[]).map(l => (
            <li key={l} role="option" aria-selected={l === locale}>
              <button id={`parents-lang-${l}`} onClick={() => { onChange(l); setOpen(false); }}
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

const IconUsers = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>);
const IconGlobe = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>);
const IconTarget = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>);
const IconCheck = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>);

export default function ParentsPage() {
  const [locale, setLocale] = useState<Locale>("en");
  const p = pt[locale];
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  const reasons = [
    { icon: <IconUsers />,  title: p.reason1_t, desc: p.reason1_d },
    { icon: <IconGlobe />,  title: p.reason2_t, desc: p.reason2_d },
    { icon: <IconTarget />, title: p.reason3_t, desc: p.reason3_d },
    { icon: <IconCheck />,  title: p.reason4_t, desc: p.reason4_d },
  ];
  const steps = [
    { n: "01", title: p.step1_t, desc: p.step1_d },
    { n: "02", title: p.step2_t, desc: p.step2_d },
    { n: "03", title: p.step3_t, desc: p.step3_d },
    { n: "04", title: p.step4_t, desc: p.step4_d },
  ];

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
              <div className="text-xs uppercase tracking-[0.35em] text-white/45">{p.tagline}</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-9 text-sm text-white/70 md:flex">
            <Link href="/#why-fsa" className="hover:text-[#C9A84C] transition-colors">{p.nav_why}</Link>
            <Link href="/programs" className="hover:text-[#C9A84C] transition-colors">{p.nav_programs}</Link>
            <Link href="/parents"  className="text-[#C9A84C]">{p.nav_parents}</Link>
            <Link href="/contact"  className="hover:text-[#C9A84C] transition-colors">{p.nav_contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} onChange={setLocale} />
            <Link href="/signup" id="parents-nav-cta" className="rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#06101F] transition hover:bg-[#E4C261]">{p.nav_cta}</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[55vh] bg-gradient-to-b from-[#0B1833] via-[#081327] to-[#071226] px-6 pt-48 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(201,168,76,0.15),transparent_40%),radial-gradient(circle_at_20%_75%,rgba(37,99,235,0.12),transparent_40%)]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-[#C9A84C]/35 px-5 py-2 text-xs uppercase tracking-[0.28em] text-[#C9A84C]">{p.badge}</div>
          <h1 className="font-serif text-5xl leading-tight tracking-tight md:text-7xl lg:text-8xl">
            {p.h1a} <span className="text-[#C9A84C]">{p.gold}</span> {p.h1b}
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/65 md:text-xl">{p.sub}</p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl mx-auto border-t border-white/10 pt-8">
            {[p.ages, p.lang, p.base].map((v, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-xl text-white">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why parents */}
      <section className="bg-[#F4F7FA] px-6 py-28 text-[#071226]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{p.why_eyebrow}</div>
          <h2 className="mb-16 font-serif text-5xl leading-tight md:text-6xl">{p.why_h2}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <div key={i} className="rounded-[28px] border border-slate-200 bg-white p-8 transition hover:shadow-lg hover:-translate-y-1 duration-300">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#071226] text-[#C9A84C]">{r.icon}</div>
                <h3 className="font-serif text-xl text-[#071226]">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{p.how_eyebrow}</div>
          <h2 className="mb-16 font-serif text-5xl leading-tight md:text-6xl">{p.how_h2}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8">
                <div className="absolute top-4 right-6 font-serif text-6xl text-white/5 leading-none select-none">{s.n}</div>
                <div className="mb-3 text-xs uppercase tracking-[0.3em] text-[#C9A84C]">Step {s.n}</div>
                <h3 className="font-serif text-xl text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071226] px-6 py-28">
        <div className="mx-auto max-w-4xl rounded-[42px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl md:p-20">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{p.cta_eyebrow}</div>
          <h2 className="font-serif text-5xl leading-tight text-white md:text-6xl">{p.cta_h2}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65">{p.cta_desc}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/signup" id="parents-cta-btn" className="rounded-full bg-[#C9A84C] px-9 py-4 font-semibold text-[#071226] transition hover:bg-[#E4C261] hover:scale-[1.02]">{p.cta_btn}</Link>
            <Link href="/programs" className="rounded-full border border-white/20 px-9 py-4 font-semibold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]">{p.cta_btn2}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
