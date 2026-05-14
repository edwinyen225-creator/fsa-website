"use client";

import { useEffect } from "react";
import Link from "next/link";
import { homepageTranslations } from "@/lib/homepage-i18n";
import { useLanguage } from "@/hooks/useLanguage";

// --- Elegant SVG Icons ---
const IconGlobe = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-6 h-6"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>);
const IconCpu = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-6 h-6"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg>);
const IconUsers = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-6 h-6"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>);
const IconLayers = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-6 h-6"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>);
const IconMap = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-6 h-6"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6"/><path d="M9 3v15M15 6v15"/></svg>);
const IconCheckCircle = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-[#C9A84C]"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const IconBook = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-8 h-8"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>);
const IconChat = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-8 h-8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>);
const IconArrowRight = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>);
const IconTrustBadge = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-7 h-7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4l3 3"/></svg>);
const IconTrustUsers = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-7 h-7"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>);
const IconTrustChart = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-7 h-7"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>);
const IconTrustLock = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-7 h-7"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>);

export default function Home() {
  const { locale } = useLanguage();
  const t = homepageTranslations[locale];

  useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  return (
    <main className="min-h-screen bg-[#040A14] text-white selection:bg-[#C9A84C]/30 selection:text-white font-sans overflow-x-hidden">
      
      {/* ── 1. Hero Section ── */}
      <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/images/hero-background.jpg")' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040A14] via-[#040A14]/70 to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full pt-20">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.15] text-white tracking-tight mb-8">
              {t.hero_eyebrow}<br />
              <span className="text-xl md:text-2xl lg:text-[1.75rem] font-medium leading-[1.6] text-white/90 mt-6 block">
                {t.hero_heading}
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-10">
              <Link href="/signup" className="group inline-flex items-center gap-3 rounded-full bg-[#C9A84C] px-9 py-4 font-bold text-[#040A14] transition hover:bg-[#E4C261]">
                <span>{t.hero_cta_primary}</span>
              </Link>
              <Link href="/programs" className="inline-flex items-center rounded-full border border-white/30 bg-[#040A14]/30 backdrop-blur-md px-9 py-4 font-bold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]">
                {t.hero_cta_secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Feature Strip ── */}
      <section className="bg-[#040A14] border-t border-white/10 py-10 relative z-20 -mt-1">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 xl:divide-x divide-white/10">
            {[
              { title: t.strip_f1_title, desc: t.strip_f1_desc, icon: <IconGlobe /> },
              { title: t.strip_f2_title, desc: t.strip_f2_desc, icon: <IconCpu /> },
              { title: t.strip_f3_title, desc: t.strip_f3_desc, icon: <IconUsers /> },
              { title: t.strip_f4_title, desc: t.strip_f4_desc, icon: <IconLayers /> },
              { title: t.strip_f5_title, desc: t.strip_f5_desc, icon: <IconMap /> },
            ].map((item, i) => (
              <div key={i} className="xl:pl-8 first:pl-0 flex flex-col gap-3">
                <div className="text-[#C9A84C]">{item.icon}</div>
                <div>
                  <h3 className="text-white text-[15px] font-bold mb-1 tracking-wide">{item.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Flagship Program ── */}
      <section className="bg-[#fbfaf6] text-[#071226] relative overflow-hidden border-t border-[#040A14]/10">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left Text Panel */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center py-24 px-6 lg:pl-16 xl:pl-32 pr-6 lg:pr-20">
            <div className="mb-4 text-[#8E7A4E] text-xs font-bold uppercase tracking-[0.2em]">{t.flagship_eyebrow}</div>
            <h2 className="font-serif text-4xl lg:text-[3.5rem] leading-[1.1] mb-2 text-[#040A14] tracking-tight">{t.flagship_title}</h2>
            <h3 className="font-sans text-lg text-[#040A14]/60 mb-8 tracking-wide font-medium">{t.flagship_subtitle}</h3>
            <p className="text-[15px] text-[#071226]/80 font-normal leading-[1.8] mb-10 max-w-xl">
              {t.flagship_desc}
            </p>
            
            <div className="space-y-4 mb-12 border-l border-[#C9A84C]/30 pl-5">
              {[t.flagship_bullet1, t.flagship_bullet2, t.flagship_bullet3, t.flagship_bullet4].map((bullet, i) => (
                <div key={i} className="flex items-center gap-3">
                  <IconCheckCircle />
                  <span className="text-[15px] font-medium text-[#040A14]/80">{bullet}</span>
                </div>
              ))}
            </div>

            <div>
              <Link href="/programs" className="inline-flex items-center gap-3 rounded-full bg-[#C9A84C] px-8 py-4 font-bold text-[#040A14] transition hover:bg-[#E4C261] shadow-lg shadow-[#C9A84C]/20">
                <span>{t.flagship_cta}</span>
              </Link>
            </div>
          </div>

          {/* Right Cinematic Image */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-auto">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/placeholder-class.jpg")' }} />
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#fbfaf6] to-transparent hidden lg:block" />
          </div>
        </div>
      </section>

      {/* ── 4. Student Works ── */}
      <section className="bg-[#040A14] py-28 border-t border-white/5 overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 flex flex-col xl:flex-row gap-16">
          <div className="w-full xl:w-1/4 pt-4 shrink-0">
            <div className="mb-4 text-[#C9A84C] text-xs font-bold uppercase tracking-[0.2em]">{t.works_eyebrow}</div>
            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-6 leading-[1.2]">{t.works_title}</h2>
            <p className="text-[15px] text-white/60 font-light leading-[1.8] mb-10">{t.works_subtext}</p>
            <Link href="/programs" className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C] px-8 py-3.5 text-sm font-bold text-[#C9A84C] transition hover:bg-[#C9A84C] hover:text-[#040A14]">
              {t.works_cta}
            </Link>
          </div>
          
          <div className="w-full xl:w-3/4 flex overflow-x-auto gap-5 pb-8 snap-x scrollbar-hide">
            {[
              { title: t.works_c1_title, desc: t.works_c1_desc, img: "/images/placeholder-create-1.jpg" },
              { title: t.works_c2_title, desc: t.works_c2_desc, img: "/images/placeholder-create-2.jpg" },
              { title: t.works_c3_title, desc: t.works_c3_desc, img: "/images/placeholder-create-3.jpg" },
              { title: t.works_c4_title, desc: t.works_c4_desc, img: "/images/placeholder-create-4.jpg" },
            ].map((card, i) => (
              <div key={i} className="snap-start shrink-0 w-[280px] sm:w-[300px] bg-[#0B1833] rounded-xl overflow-hidden border border-white/5 group shadow-xl">
                <div className="h-[200px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url("${card.img}")` }} />
                </div>
                <div className="p-6 h-[130px] flex flex-col justify-center">
                  <h3 className="font-sans text-white font-bold text-[15px] mb-2">{card.title}</h3>
                  <p className="text-[13px] text-white/60 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Two-Coach Support ── */}
      <section className="bg-[#f6f8fa] py-28 border-t border-[#040A14]/5">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="mb-4 text-[#8E7A4E] text-xs font-bold uppercase tracking-[0.2em]">{t.coach_eyebrow}</div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#040A14]">{t.coach_h2}</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 max-w-5xl mx-auto">
            <div className="w-full lg:w-3/5 grid sm:grid-cols-2 gap-5">
              {[
                { title: t.coach_c1_title, desc: t.coach_c1_desc, img: "/images/placeholder-who.jpg" },
                { title: t.coach_c2_title, desc: t.coach_c2_desc, img: "/images/placeholder-who.jpg" },
              ].map((coach, i) => (
                <div key={i} className="relative h-[260px] rounded-2xl overflow-hidden border border-[#040A14]/10 shadow-md">
                  <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: `url("${coach.img}")` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040A14] via-[#040A14]/40 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-white font-bold text-[15px] mb-1.5">{coach.title}</h3>
                    <p className="text-white/70 text-[12px] leading-relaxed">{coach.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-2/5 flex flex-col gap-8">
              <p className="text-[#040A14]/80 text-[15px] leading-[1.8] font-medium">{t.coach_p1}</p>
              <p className="text-[#040A14]/60 text-[14px] leading-[1.8]">{t.coach_p2}</p>
              <div>
                <Link href="/team" className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C] px-8 py-3.5 text-sm font-bold text-[#040A14] transition hover:bg-[#E4C261] shadow-lg shadow-[#C9A84C]/20">
                  {t.coach_btn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Program Overview ── */}
      <section className="bg-[#fbfaf6] py-28 border-t border-[#040A14]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="mb-4 text-[#8E7A4E] text-xs font-bold uppercase tracking-[0.2em]">{t.prog_eyebrow}</div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#040A14]">{t.prog_h2}</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-[#040A14] text-white rounded-2xl p-10 flex flex-col justify-between border-t-4 border-[#C9A84C] shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -top-10 opacity-5 text-[#C9A84C] w-48 h-48"><IconLayers /></div>
              <div className="relative z-10">
                <div className="mb-8 text-[#C9A84C]"><IconLayers /></div>
                <h3 className="font-serif text-2xl md:text-3xl mb-2">{t.prog_c1_title}</h3>
                <h4 className="text-[13px] tracking-wide text-[#C9A84C] mb-6 font-bold">{t.prog_c1_sub}</h4>
                <p className="text-white/70 text-[14px] leading-[1.8]">{t.prog_c1_desc}</p>
              </div>
              <div className="mt-10 text-right"><IconArrowRight /></div>
            </div>
            
            <div className="bg-white text-[#040A14] rounded-2xl p-10 flex flex-col justify-between border border-[#040A14]/5 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="mb-8 text-[#040A14]/30"><IconBook /></div>
                <h3 className="font-serif text-xl md:text-2xl mb-2">{t.prog_c2_title}</h3>
                <h4 className="text-[13px] tracking-wide text-[#040A14]/40 mb-6 font-bold">{t.prog_c2_sub}</h4>
                <p className="text-[#040A14]/70 text-[14px] leading-[1.8]">{t.prog_c2_desc}</p>
              </div>
              <div className="mt-10 text-right text-[#C9A84C]"><IconArrowRight /></div>
            </div>
            
            <div className="bg-white text-[#040A14] rounded-2xl p-10 flex flex-col justify-between border border-[#040A14]/5 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="mb-8 text-[#040A14]/30"><IconChat /></div>
                <h3 className="font-serif text-xl md:text-2xl mb-2">{t.prog_c3_title}</h3>
                <h4 className="text-[13px] tracking-wide text-[#040A14]/40 mb-6 font-bold">{t.prog_c3_sub}</h4>
                <p className="text-[#040A14]/70 text-[14px] leading-[1.8]">{t.prog_c3_desc}</p>
              </div>
              <div className="mt-10 text-right text-[#C9A84C]"><IconArrowRight /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Learning Journey ── */}
      <section className="relative py-28 bg-[#040A14] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-screen" style={{ backgroundImage: 'url("/images/placeholder-class.jpg")' }} />
        <div className="absolute inset-0 bg-[#040A14]/90" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-24">
            <div className="mb-4 text-[#C9A84C] text-xs font-bold uppercase tracking-[0.2em]">{t.journey_eyebrow}</div>
            <h2 className="font-serif text-3xl md:text-4xl text-white">{t.journey_h2}</h2>
          </div>
          
          <div className="relative">
            <div className="absolute top-5 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent hidden md:block" />
            <div className="grid grid-cols-2 md:grid-cols-7 gap-y-12 gap-x-4 text-center">
              {[
                { title: t.journey_s1_title, desc: t.journey_s1_desc },
                { title: t.journey_s2_title, desc: t.journey_s2_desc },
                { title: t.journey_s3_title, desc: t.journey_s3_desc },
                { title: t.journey_s4_title, desc: t.journey_s4_desc },
                { title: t.journey_s5_title, desc: t.journey_s5_desc },
                { title: t.journey_s6_title, desc: t.journey_s6_desc },
                { title: t.journey_s7_title, desc: t.journey_s7_desc },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#040A14] border-2 border-[#C9A84C] text-[#C9A84C] flex items-center justify-center font-mono text-[13px] mb-6 shadow-[0_0_15px_rgba(201,168,76,0.3)]">
                    0{i+1}
                  </div>
                  <h3 className="text-white text-[14px] font-bold mb-2">{step.title}</h3>
                  <p className="text-white/50 text-[12px] leading-snug px-2">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Parent Trust ── */}
      <section className="bg-[#fbfaf6] py-28 border-t border-[#040A14]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="mb-4 text-[#8E7A4E] text-xs font-bold uppercase tracking-[0.2em]">{t.trust_eyebrow}</div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#040A14] mb-12">{t.trust_h2}</h2>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {[
                { title: t.trust_i1_title, desc: t.trust_i1_desc, icon: <IconTrustBadge /> },
                { title: t.trust_i2_title, desc: t.trust_i2_desc, icon: <IconTrustUsers /> },
                { title: t.trust_i3_title, desc: t.trust_i3_desc, icon: <IconTrustChart /> },
                { title: t.trust_i4_title, desc: t.trust_i4_desc, icon: <IconTrustLock /> },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="text-[#C9A84C]">{item.icon}</div>
                  <h3 className="text-[#040A14] font-bold text-[15px]">{item.title}</h3>
                  <p className="text-[#040A14]/60 text-[13px] leading-[1.8]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#040A14]/5">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/placeholder-who.jpg")' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Final CTA ── */}
      <section className="relative py-40 bg-[#040A14] overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: 'url("/images/hero-background.jpg")' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040A14] via-[#040A14]/70 to-[#040A14]/30" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-8 leading-tight">{t.final_h2}</h2>
          <p className="text-white/70 text-[15px] font-light mb-12">{t.final_sub}</p>
          <Link href="/signup" className="inline-flex rounded-full bg-[#C9A84C] px-10 py-4 font-bold text-[#040A14] transition hover:bg-[#E4C261] shadow-[0_0_20px_rgba(201,168,76,0.2)]">
            {t.final_btn}
          </Link>
        </div>
      </section>
      
    </main>
  );
}
