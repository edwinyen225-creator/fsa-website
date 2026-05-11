"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { type Locale, localeLabels, localeNames } from "@/lib/i18n";

const py = {
  en: {
    badge: "Fees & Payment", h1: "Program Fees & Payment.", sub: "FSA currently offers pilot program options. Final pricing depends on program format, student level, and schedule.",
    pricing_eyebrow: "Pricing Options", pricing_h2: "Clear, honest pricing.",
    p1_label: "Free Trial", p1_price: "Free", p1_status: "Available now", p1_desc: "Join a free trial class to experience FSA coaching firsthand before committing to any program.",
    p2_label: "Pilot Program", p2_price: "Consultation", p2_status: "Pricing after consultation", p2_desc: "Pilot program rates are shared after an initial consultation to match format, level, and schedule.",
    p3_label: "Custom / Small Group", p3_price: "Custom", p3_status: "Based on goals & schedule", p3_desc: "Small group or custom session pricing is agreed based on student goals, group size, and frequency.",
    payment_eyebrow: "Payment Methods", payment_h2: "How payments work.",
    m1_t: "Bank Transfer", m1_d: "Payment instructions including bank details are shared after enrollment confirmation.",
    m2_t: "Online Payment Link", m2_d: "A secure online payment link will be provided where applicable after scheduling is confirmed.",
    m3_t: "Other Methods", m3_d: "Additional payment options can be discussed during your consultation. We accommodate where possible.",
    note_eyebrow: "Important", note_title: "How enrollment is confirmed.",
    note_text: "Final enrollment in any FSA program is confirmed only after: (1) an initial consultation or free trial, (2) schedule confirmation, and (3) payment instructions have been shared and payment is received. We do not collect payment details on this website.",
    cta_eyebrow: "Start Here", cta_h2: "Begin with a free trial.", cta_desc: "The easiest next step is booking a free trial. From there we'll walk you through programs, scheduling, and pricing.",
    cta_btn1: "Book a Free Trial →", cta_btn2: "Contact Us",
    nav_why: "Why FSA", nav_programs: "Programs", nav_parents: "For Parents", nav_contact: "Contact", nav_cta: "Free Trial →", tagline: "Tokyo · Global",
  },
  ja: {
    badge: "料金・お支払い", h1: "プログラム料金と支払い。", sub: "FSAは現在パイロットプログラムを提供しています。最終的な料金は、プログラム形式・生徒のレベル・スケジュールによって異なります。",
    pricing_eyebrow: "料金オプション", pricing_h2: "明確で正直な料金体系。",
    p1_label: "無料体験", p1_price: "無料", p1_status: "今すぐ参加可能", p1_desc: "プログラムにコミットする前に、無料体験クラスでFSAのコーチングを直接体験できます。",
    p2_label: "パイロットプログラム", p2_price: "要相談", p2_status: "相談後に料金をご案内", p2_desc: "パイロットプログラムの料金は、形式・レベル・スケジュールを確認した後の初回相談でご案内します。",
    p3_label: "カスタム・少人数グループ", p3_price: "カスタム", p3_status: "目標・スケジュールに基づく", p3_desc: "少人数グループやカスタムセッションの料金は、目標・グループ規模・頻度に応じて決定します。",
    payment_eyebrow: "お支払い方法", payment_h2: "支払いの流れ。",
    m1_t: "銀行振込", m1_d: "銀行口座情報を含む支払い案内は、入学確認後にお送りします。",
    m2_t: "オンライン決済リンク", m2_d: "スケジュール確定後、該当する場合はセキュアなオンライン決済リンクを提供します。",
    m3_t: "その他の支払い方法", m3_d: "ご相談中に追加の支払いオプションについてご相談いただけます。できる限り対応いたします。",
    note_eyebrow: "重要事項", note_title: "入学確認の流れ。",
    note_text: "FSAプログラムへの最終的な入学確認は、(1)初回相談または無料体験、(2)スケジュール確認、(3)支払い案内の共有と入金確認の後に行われます。このウェブサイトでは支払い情報を収集しません。",
    cta_eyebrow: "まずはここから", cta_h2: "無料体験から始める。", cta_desc: "次のステップは無料体験の予約です。その後、プログラム・スケジュール・料金についてご案内します。",
    cta_btn1: "無料体験を予約する →", cta_btn2: "お問い合わせ",
    nav_why: "なぜFSA", nav_programs: "プログラム", nav_parents: "保護者の方へ", nav_contact: "お問い合わせ", nav_cta: "無料体験 →", tagline: "東京 · グローバル",
  },
  "zh-TW": {
    badge: "費用與付款", h1: "課程費用與付款。", sub: "FSA目前提供試點課程選項。最終定價取決於課程形式、學生程度與時間安排。",
    pricing_eyebrow: "定價選項", pricing_h2: "清晰、誠實的定價。",
    p1_label: "免費體驗", p1_price: "免費", p1_status: "現在即可參加", p1_desc: "在報名任何課程前，參加免費體驗課親身感受FSA的教學方式。",
    p2_label: "試點課程", p2_price: "諮詢後確定", p2_status: "諮詢後提供定價", p2_desc: "試點課程費用在初次諮詢後，根據形式、程度與時間安排提供。",
    p3_label: "客製化 / 小班", p3_price: "客製化", p3_status: "依目標與時間安排", p3_desc: "小班或客製化課程定價根據學生目標、小組規模與頻率協商確定。",
    payment_eyebrow: "付款方式", payment_h2: "付款流程。",
    m1_t: "銀行轉帳", m1_d: "包含銀行帳戶資訊的付款說明將在確認報名後提供。",
    m2_t: "線上付款連結", m2_d: "確認時間安排後，將在適用情況下提供安全的線上付款連結。",
    m3_t: "其他付款方式", m3_d: "其他付款選項可在諮詢期間討論。我們將盡力配合。",
    note_eyebrow: "重要說明", note_title: "如何確認報名。",
    note_text: "正式報名任何FSA課程須完成：(1)初次諮詢或免費體驗、(2)時間安排確認、(3)付款說明已分享並收到款項。我們不在此網站收集付款資訊。",
    cta_eyebrow: "從這裡開始", cta_h2: "從免費體驗開始。", cta_desc: "最簡單的下一步是預約免費體驗。之後我們將引導您了解課程、時間安排和費用。",
    cta_btn1: "預約免費體驗 →", cta_btn2: "聯絡我們",
    nav_why: "為什麼FSA", nav_programs: "課程", nav_parents: "給家長", nav_contact: "聯絡我們", nav_cta: "免費體驗 →", tagline: "東京 · 全球",
  },
  "zh-CN": {
    badge: "费用与付款", h1: "课程费用与付款。", sub: "FSA目前提供试点课程选项。最终定价取决于课程形式、学生程度与时间安排。",
    pricing_eyebrow: "定价选项", pricing_h2: "清晰、诚实的定价。",
    p1_label: "免费体验", p1_price: "免费", p1_status: "现在即可参加", p1_desc: "在报名任何课程前，参加免费体验课亲身感受FSA的教学方式。",
    p2_label: "试点课程", p2_price: "咨询后确定", p2_status: "咨询后提供定价", p2_desc: "试点课程费用在初次咨询后，根据形式、程度与时间安排提供。",
    p3_label: "定制化 / 小班", p3_price: "定制化", p3_status: "依目标与时间安排", p3_desc: "小班或定制化课程定价根据学生目标、小组规模与频率协商确定。",
    payment_eyebrow: "付款方式", payment_h2: "付款流程。",
    m1_t: "银行转账", m1_d: "包含银行账户信息的付款说明将在确认报名后提供。",
    m2_t: "线上付款链接", m2_d: "确认时间安排后，将在适用情况下提供安全的线上付款链接。",
    m3_t: "其他付款方式", m3_d: "其他付款选项可在咨询期间讨论。我们将尽力配合。",
    note_eyebrow: "重要说明", note_title: "如何确认报名。",
    note_text: "正式报名任何FSA课程须完成：(1)初次咨询或免费体验、(2)时间安排确认、(3)付款说明已分享并收到款项。我们不在此网站收集付款信息。",
    cta_eyebrow: "从这里开始", cta_h2: "从免费体验开始。", cta_desc: "最简单的下一步是预约免费体验。之后我们将引导您了解课程、时间安排和费用。",
    cta_btn1: "预约免费体验 →", cta_btn2: "联系我们",
    nav_why: "为什么FSA", nav_programs: "课程", nav_parents: "给家长", nav_contact: "联系我们", nav_cta: "免费体验 →", tagline: "东京 · 全球",
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
      <button id="pay-lang-btn" onClick={() => setOpen(o => !o)} aria-haspopup="listbox" aria-expanded={open} aria-label="Select language"
        className="flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-[#C9A84C] hover:text-[#C9A84C]">
        <svg className="h-3.5 w-3.5 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.93 4.93a.75.75 0 011.06.01 6.5 6.5 0 008.98 0 .75.75 0 011.07 1.04A8 8 0 016 6a8 8 0 01-1.07-1.07zM3 10a7 7 0 0014 0c0 1.72-.62 3.3-1.64 4.53A7 7 0 013 10z" clipRule="evenodd" /></svg>
        <span>{localeLabels[locale]}</span>
        <svg className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}><path d="M2 4l4 4 4-4"/></svg>
      </button>
      {open && (
        <ul role="listbox" className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1833] shadow-2xl backdrop-blur-xl z-[60]">
          {(Object.keys(localeLabels) as Locale[]).map(l => (
            <li key={l} role="option" aria-selected={l === locale}>
              <button id={`pay-lang-${l}`} onClick={() => { onChange(l); setOpen(false); }}
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

const IconStar   = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>);
const IconChat   = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>);
const IconSliders= () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>);
const IconBank   = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>);
const IconLink   = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>);
const IconDots   = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>);
const IconShield = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>);

import { useLanguage } from "@/hooks/useLanguage";
import { homepageTranslations } from "@/lib/homepage-i18n";

export default function PaymentPage() {
  const { locale, setLocale } = useLanguage();
  const t = py[locale];
  const ht = homepageTranslations[locale];
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  const plans = [
    { icon: <IconStar />,    label: t.p1_label, price: t.p1_price, status: t.p1_status, desc: t.p1_desc, highlight: false },
    { icon: <IconChat />,    label: t.p2_label, price: t.p2_price, status: t.p2_status, desc: t.p2_desc, highlight: true  },
    { icon: <IconSliders />, label: t.p3_label, price: t.p3_price, status: t.p3_status, desc: t.p3_desc, highlight: false },
  ];
  const methods = [
    { icon: <IconBank />, title: t.m1_t, desc: t.m1_d },
    { icon: <IconLink />, title: t.m2_t, desc: t.m2_d },
    { icon: <IconDots />, title: t.m3_t, desc: t.m3_d },
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
              <div className="text-xs uppercase tracking-[0.35em] text-white/45">{t.tagline}</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-9 text-sm text-white/70 lg:flex">
            <Link href="/programs" className="hover:text-[#C9A84C] transition-colors">{ht.nav_programs}</Link>
            <Link href="/parents" className="hover:text-[#C9A84C] transition-colors">{ht.nav_parents}</Link>
            <Link href="/team" className="hover:text-[#C9A84C] transition-colors">{ht.nav_team}</Link>
            <Link href="/contact" className="hover:text-[#C9A84C] transition-colors">{ht.nav_contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} onChange={setLocale} />
            <Link href="/signup" id="pay-nav-cta" className="hidden sm:block rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#06101F] transition hover:bg-[#E4C261]">{ht.nav_book_trial}</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[50vh] bg-gradient-to-b from-[#0B1833] via-[#081327] to-[#071226] px-6 pt-48 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(201,168,76,0.14),transparent_40%)]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-[#C9A84C]/35 px-5 py-2 text-xs uppercase tracking-[0.28em] text-[#C9A84C]">{t.badge}</div>
          <h1 className="font-sans text-4xl font-medium leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[4rem]">{t.h1}</h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/65">{t.sub}</p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{t.pricing_eyebrow}</div>
          <h2 className="mb-16 font-serif text-5xl leading-tight md:text-6xl">{t.pricing_h2}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <div key={i} className={`relative overflow-hidden rounded-[32px] p-10 flex flex-col transition hover:-translate-y-1 duration-300 ${plan.highlight ? "bg-gradient-to-br from-[#0B2352] to-[#071226] border border-[#C9A84C]/30" : "border border-white/10 bg-white/5"}`}>
                {plan.highlight && <div className="absolute top-5 right-5 rounded-full border border-[#C9A84C]/40 px-3 py-1 text-xs text-[#C9A84C] uppercase tracking-wider">Popular</div>}
                <div className="mb-6 text-[#C9A84C]">{plan.icon}</div>
                <div className="mb-1 text-xs uppercase tracking-[0.3em] text-white/40">{plan.label}</div>
                <div className="font-serif text-4xl text-white mb-2">{plan.price}</div>
                <div className="text-sm text-[#C9A84C] mb-5">{plan.status}</div>
                <p className="text-sm leading-relaxed text-white/60 flex-1">{plan.desc}</p>
                <Link href="/signup" id={`pay-plan-cta-${i}`}
                  className="mt-8 inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]">
                  {t.cta_btn1}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment methods */}
      <section className="bg-[#F4F7FA] px-6 py-20 md:py-24 text-[#071226]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{t.payment_eyebrow}</div>
          <h2 className="mb-16 font-serif text-5xl leading-tight md:text-6xl">{t.payment_h2}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {methods.map((m, i) => (
              <div key={i} className="rounded-[28px] border border-slate-200 bg-white p-8 transition hover:shadow-md duration-300">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#071226] text-[#C9A84C]">{m.icon}</div>
                <h3 className="font-serif text-xl text-[#071226]">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important note */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[32px] border border-[#C9A84C]/25 bg-white/5 p-10 md:p-14">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A84C]/30 bg-[#0B2352] text-[#C9A84C]"><IconShield /></div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-[#C9A84C]">{t.note_eyebrow}</div>
                <h3 className="font-serif text-2xl text-white mt-0.5">{t.note_title}</h3>
              </div>
            </div>
            <p className="leading-relaxed text-white/65">{t.note_text}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071226] px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[42px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl md:p-20">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{t.cta_eyebrow}</div>
          <h2 className="font-serif text-5xl leading-tight text-white md:text-6xl">{t.cta_h2}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65">{t.cta_desc}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/signup" id="pay-final-cta" className="rounded-full bg-[#C9A84C] px-9 py-4 font-semibold text-[#071226] transition hover:bg-[#E4C261] hover:scale-[1.02]">{t.cta_btn1}</Link>
            <Link href="/contact" className="rounded-full border border-white/20 px-9 py-4 font-semibold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]">{t.cta_btn2}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
