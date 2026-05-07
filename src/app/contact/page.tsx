"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { type Locale, localeLabels, localeNames } from "@/lib/i18n";

const ct = {
  en: {
    badge: "Contact FSA", h1: "Get in touch.", sub: "Have a question about programs, scheduling, or pricing? We'd love to hear from you.",
    methods_eyebrow: "Reach Us", methods_h2: "How to contact FSA.",
    email_label: "Email", email_val: "hello@futureskillacademy.com", email_desc: "For general enquiries, program questions, and parent consultations.",
    line_label: "LINE", line_val: "@futureskillacademy", line_desc: "Prefer messaging? Reach us on LINE — we respond within 1 business day.",
    location_label: "Location", location_val: "Tokyo, Japan", location_desc: "Remote-first. In-person pilot cohort forming in Tokyo.",
    response_note: "We respond to all enquiries within 1 business day.",
    cta_eyebrow: "Ready to start?", cta_h2: "Book a free trial class.", cta_desc: "The easiest way to experience FSA is to join a free trial. No forms, no commitment — just real coaching.",
    cta_btn: "Book a Free Trial →", cta_btn2: "Explore Programs",
    nav_why: "Why FSA", nav_programs: "Programs", nav_parents: "For Parents", nav_team: "Team", nav_contact: "Contact", nav_cta: "Free Trial →",
    tagline: "Tokyo · Global",
  },
  ja: {
    badge: "FSAへのお問い合わせ", h1: "お気軽にご連絡ください。", sub: "プログラム・スケジュール・料金についてのご質問をお待ちしています。",
    methods_eyebrow: "連絡方法", methods_h2: "FSAへの連絡方法。",
    email_label: "メール", email_val: "hello@futureskillacademy.com", email_desc: "一般的なお問い合わせ、プログラムに関するご質問、保護者相談はこちら。",
    line_label: "LINE", line_val: "@futureskillacademy", line_desc: "メッセージをご希望の方はLINEでどうぞ — 1営業日以内に返信します。",
    location_label: "所在地", location_val: "東京、日本", location_desc: "リモートファースト。東京では対面コホートも準備中です。",
    response_note: "すべてのお問い合わせに1営業日以内に返信いたします。",
    cta_eyebrow: "まずはここから", cta_h2: "無料体験クラスを予約する。", cta_desc: "FSAを体験する一番の方法は、無料体験に参加することです。コミットメント不要。",
    cta_btn: "無料体験を予約する →", cta_btn2: "プログラムを見る",
    nav_why: "なぜFSA", nav_programs: "プログラム", nav_parents: "保護者の方へ", nav_team: "チーム", nav_contact: "お問い合わせ", nav_cta: "無料体験 →",
    tagline: "東京 · グローバル",
  },
  "zh-TW": {
    badge: "聯絡FSA", h1: "與我們聯繫。", sub: "有關課程、時間安排或費用的問題，歡迎隨時聯絡我們。",
    methods_eyebrow: "聯絡方式", methods_h2: "如何聯繫FSA。",
    email_label: "電子郵件", email_val: "hello@futureskillacademy.com", email_desc: "一般詢問、課程問題及家長諮詢請發送至此。",
    line_label: "LINE", line_val: "@futureskillacademy", line_desc: "喜歡傳訊息？透過LINE聯繫我們——我們在1個工作日內回覆。",
    location_label: "所在地", location_val: "日本東京", location_desc: "以遠端為主。東京也正在組建試點小組進行面對面課程。",
    response_note: "我們將在1個工作日內回覆所有詢問。",
    cta_eyebrow: "從這裡開始", cta_h2: "預約免費體驗課。", cta_desc: "體驗FSA最好的方式就是參加免費體驗課。無需承諾——只有真實的指導。",
    cta_btn: "預約免費體驗 →", cta_btn2: "探索課程",
    nav_why: "為什麼FSA", nav_programs: "課程", nav_parents: "給家長", nav_team: "團隊", nav_contact: "聯絡我們", nav_cta: "免費體驗 →",
    tagline: "東京 · 全球",
  },
  "zh-CN": {
    badge: "联系FSA", h1: "与我们联系。", sub: "有关课程、时间安排或费用的问题，欢迎随时联系我们。",
    methods_eyebrow: "联系方式", methods_h2: "如何联系FSA。",
    email_label: "电子邮件", email_val: "hello@futureskillacademy.com", email_desc: "一般询问、课程问题及家长咨询请发送至此。",
    line_label: "LINE", line_val: "@futureskillacademy", line_desc: "喜欢发消息？通过LINE联系我们——我们在1个工作日内回复。",
    location_label: "所在地", location_val: "日本东京", location_desc: "以远端为主。东京也正在组建试点小组进行面对面课程。",
    response_note: "我们将在1个工作日内回复所有询问。",
    cta_eyebrow: "从这里开始", cta_h2: "预约免费体验课。", cta_desc: "体验FSA最好的方式就是参加免费体验课。无需承诺——只有真实的指导。",
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
      <button id="contact-lang-btn" onClick={() => setOpen(o => !o)} aria-haspopup="listbox" aria-expanded={open} aria-label="Select language"
        className="flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-[#C9A84C] hover:text-[#C9A84C]">
        <svg className="h-3.5 w-3.5 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.93 4.93a.75.75 0 011.06.01 6.5 6.5 0 008.98 0 .75.75 0 011.07 1.04A8 8 0 016 6a8 8 0 01-1.07-1.07zM3 10a7 7 0 0014 0c0 1.72-.62 3.3-1.64 4.53A7 7 0 013 10z" clipRule="evenodd" /></svg>
        <span>{localeLabels[locale]}</span>
        <svg className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}><path d="M2 4l4 4 4-4" /></svg>
      </button>
      {open && (
        <ul role="listbox" className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1833] shadow-2xl backdrop-blur-xl">
          {(Object.keys(localeLabels) as Locale[]).map(l => (
            <li key={l} role="option" aria-selected={l === locale}>
              <button id={`contact-lang-${l}`} onClick={() => { onChange(l); setOpen(false); }}
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

const IconEmail = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>);
const IconLine  = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>);
const IconMap   = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>);

import { useLanguage } from "@/hooks/useLanguage";

export default function ContactPage() {
  const { locale, setLocale } = useLanguage();
  const c = ct[locale];
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  const contacts = [
    { icon: <IconEmail />, label: c.email_label, val: c.email_val, desc: c.email_desc, href: `mailto:${c.email_val}` },
    { icon: <IconLine  />, label: c.line_label,  val: c.line_val,  desc: c.line_desc,  href: "https://line.me/R/" },
    { icon: <IconMap   />, label: c.location_label, val: c.location_val, desc: c.location_desc, href: "#" },
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
              <div className="text-xs uppercase tracking-[0.35em] text-white/45">{c.tagline}</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-9 text-sm text-white/70 md:flex">
            <Link href="/#why-fsa"  className="hover:text-[#C9A84C] transition-colors">{c.nav_why}</Link>
            <Link href="/programs"  className="hover:text-[#C9A84C] transition-colors">{c.nav_programs}</Link>
            <Link href="/parents"   className="hover:text-[#C9A84C] transition-colors">{c.nav_parents}</Link>
            <Link href="/contact"   className="text-[#C9A84C]">{c.nav_contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} onChange={setLocale} />
            <Link href="/signup" id="contact-nav-cta" className="rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#06101F] transition hover:bg-[#E4C261]">{c.nav_cta}</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[50vh] bg-gradient-to-b from-[#0B1833] via-[#081327] to-[#071226] px-6 pt-48 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(201,168,76,0.15),transparent_40%)]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-[#C9A84C]/35 px-5 py-2 text-xs uppercase tracking-[0.28em] text-[#C9A84C]">{c.badge}</div>
          <h1 className="font-serif text-5xl leading-tight md:text-7xl">{c.h1}</h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/65">{c.sub}</p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{c.methods_eyebrow}</div>
          <h2 className="mb-16 font-serif text-5xl leading-tight md:text-6xl">{c.methods_h2}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {contacts.map((item, i) => (
              <a key={i} href={item.href} target={item.href.startsWith("mailto") || item.href.startsWith("https") ? "_blank" : undefined}
                rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                className="group block overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition hover:border-[#C9A84C]/40 duration-300">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C9A84C]/30 bg-[#0B2352] text-[#C9A84C]">{item.icon}</div>
                <div className="mb-1 text-xs uppercase tracking-[0.3em] text-[#C9A84C]">{item.label}</div>
                <div className="font-serif text-xl text-white">{item.val}</div>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{item.desc}</p>
              </a>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-white/35">{c.response_note}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071226] px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[42px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl md:p-20">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{c.cta_eyebrow}</div>
          <h2 className="font-serif text-5xl leading-tight text-white md:text-6xl">{c.cta_h2}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65">{c.cta_desc}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/signup" id="contact-cta-btn" className="rounded-full bg-[#C9A84C] px-9 py-4 font-semibold text-[#071226] transition hover:bg-[#E4C261] hover:scale-[1.02]">{c.cta_btn}</Link>
            <Link href="/programs" className="rounded-full border border-white/20 px-9 py-4 font-semibold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]">{c.cta_btn2}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
