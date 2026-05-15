"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import MotionButton from '@/components/ui/motion-button';
import { useLanguage } from '@/hooks/useLanguage';
import { homepageTranslations } from '@/lib/homepage-i18n';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-[#C9A84C] shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconTrustBadge = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-7 h-7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4l3 3"/></svg>);
const IconTrustUsers = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-7 h-7"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>);
const IconTrustChart = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-7 h-7"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>);
const IconTrustLock = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-7 h-7"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>);

interface SlidePanel {
  bgColor?: string;
  bgImage?: string;
  leftFade?: string;
  content: React.ReactNode;
}

interface Slide {
  left: SlidePanel;
  right: SlidePanel;
  isDark?: boolean;
}

export default function AnimatedScroll() {
  const { locale } = useLanguage();
  const t = homepageTranslations[locale];

  const slides = useMemo((): Slide[] => [
    // ── 1. Flagship Program ──
    {
      isDark: false,
      left: {
        bgColor: '#fbfaf6',
        content: (
          <div className="flex flex-col h-full px-10 lg:px-16 xl:px-20 py-16 justify-center">
            <div className="mb-4 text-[#8E7A4E] text-xs font-bold uppercase tracking-[0.2em]">Flagship Program</div>
            <h2 className="font-serif text-4xl lg:text-[3rem] leading-[1.1] mb-2 text-[#040A14] tracking-tight">
              Future Skills Portfolio
            </h2>
            <h3 className="font-sans text-base text-[#040A14]/55 mb-6 tracking-wide font-medium">
              Future Skills · Portfolio
            </h3>
            <p className="text-[14px] text-[#071226]/70 leading-[1.8] mb-7 max-w-sm">
              Focused on English communication, integrating AI, data analysis, design thinking, and presentations. We nurture the &apos;ability to convey&apos; and &apos;ability to create&apos; by tackling real-world challenges.
            </p>
            <div className="space-y-3 mb-8 border-l border-[#C9A84C]/30 pl-5">
              {[
                'Thorough strengthening of thinking and expression in English',
                'Practice research, analysis, and design',
                'Learning that leverages AI and technology',
                'Create an original portfolio',
              ].map((bullet, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-[13.5px] font-medium text-[#040A14]/75">{bullet}</span>
                </div>
              ))}
            </div>
            <div>
              <MotionButton href="/programs" className="text-sm">
                View Program Details
              </MotionButton>
            </div>
          </div>
        ),
      },
      right: {
        bgColor: '#fbfaf6',
        bgImage: '/images/placeholder-class.jpg',
        leftFade: '#fbfaf6',
        content: null,
      },
    },

    // ── 2. Student Works ──
    {
      isDark: true,
      left: {
        bgColor: '#040A14',
        content: (
          <div className="flex flex-col h-full px-10 lg:px-16 xl:px-20 py-16 justify-center">
            <div className="mb-4 text-[#C9A84C] text-xs font-bold uppercase tracking-[0.2em]">Student Works</div>
            <h2 className="font-serif text-3xl lg:text-[2.75rem] text-white mb-5 leading-[1.2]">
              Learning becomes<br />visible outcomes.
            </h2>
            <p className="text-[14px] text-white/55 font-light leading-[1.8] mb-8 max-w-xs">
              From research to planning, analysis, and expression. Students tackle projects assuming real-world society, producing deliverables that resonate globally.
            </p>
            <MotionButton href="/programs" className="text-sm">
              View Case Studies
            </MotionButton>
          </div>
        ),
      },
      right: {
        bgColor: '#040A14',
        content: (
          <div className="flex flex-col h-full px-10 lg:px-14 py-16 justify-center gap-4">
            {[
              { title: 'Sustainable Product Dev', desc: 'From market research to brand proposition', img: '/images/placeholder-create-1.jpg' },
              { title: 'Data Analysis Report', desc: 'Visualizing challenges from data', img: '/images/placeholder-create-2.jpg' },
              { title: 'English Presentation', desc: 'Structuring and presenting ideas in English', img: '/images/placeholder-create-3.jpg' },
            ].map((card, i) => (
              <div key={i} className="bg-[#0B1833] rounded-xl overflow-hidden border border-white/5 group shadow-xl flex flex-row h-[110px]">
                <div className="w-[130px] shrink-0 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url("${card.img}")` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B1833]/50" />
                </div>
                <div className="flex flex-col justify-center px-5">
                  <h3 className="font-sans text-white font-bold text-[14px] mb-1.5">{card.title}</h3>
                  <p className="text-[12px] text-white/55 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ),
      },
    },

    // ── 3. Two-Coach Support ──
    {
      isDark: false,
      left: {
        bgColor: '#f6f8fa',
        content: (
          <div className="flex flex-col h-full px-10 lg:px-14 py-16 gap-5">
            {[
              { title: 'Japanese Coach', desc: 'Learning design · Goal setting · Thinking support', img: '/images/placeholder-who.jpg' },
              { title: 'Native Coach', desc: 'Practical English · Expression guidance · Output support', img: '/images/placeholder-who.jpg' },
            ].map((coach, i) => (
              <div key={i} className="relative flex-1 min-h-0 rounded-2xl overflow-hidden border border-[#040A14]/10 shadow-md">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-90"
                  style={{ backgroundImage: `url("${coach.img}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040A14] via-[#040A14]/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-white font-bold text-[15px] mb-1.5">{coach.title}</h3>
                  <p className="text-white/70 text-[12px] leading-relaxed">{coach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ),
      },
      right: {
        bgColor: '#f6f8fa',
        content: (
          <div className="flex flex-col h-full px-10 lg:px-16 py-16 justify-center max-w-md">
            <div className="mb-4 text-[#8E7A4E] text-xs font-bold uppercase tracking-[0.2em]">Two-Coach Support</div>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#040A14] mb-8 leading-[1.2]">
              Supporting your future, together.
            </h2>
            <p className="text-[#040A14]/80 text-[15px] leading-[1.8] font-medium mb-4">
              A Japanese coach and a Native coach accompany you from both the learning and practical sides.
            </p>
            <p className="text-[#040A14]/55 text-[14px] leading-[1.8] mb-8">
              Through continuous dialogue, we support you until you achieve your goals.
            </p>
            <MotionButton href="/team" className="text-sm">
              View Coaches
            </MotionButton>
          </div>
        ),
      },
    },

    // ── 4. Our Programs ──
    {
      isDark: false,
      left: {
        bgColor: '#fbfaf6',
        content: (
          <div className="flex flex-col h-full px-10 lg:px-14 py-16">
            <div className="mb-3 text-[#8E7A4E] text-xs font-bold uppercase tracking-[0.2em]">Our Programs</div>
            <h2 className="font-serif text-2xl lg:text-3xl text-[#040A14] mb-7 leading-[1.25]">
              Three programs tailored to your goals
            </h2>
            <div className="flex-1 min-h-0 bg-[#040A14] text-white rounded-2xl p-8 flex flex-col border-t-4 border-[#C9A84C] shadow-xl overflow-hidden">
              <div className="mb-5 text-[#C9A84C]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-7 h-7">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="font-serif text-xl lg:text-2xl mb-1.5">Future Skills Portfolio</h3>
              <h4 className="text-[12px] tracking-wide text-[#C9A84C] mb-4 font-bold">Future Skills · Portfolio</h4>
              <p className="text-white/65 text-[13px] leading-[1.8] flex-1">
                Build a portfolio applicable worldwide through exploratory projects × English practice.
              </p>
              <div className="text-right mt-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 inline-block text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        ),
      },
      right: {
        bgColor: '#fbfaf6',
        content: (
          <div className="flex flex-col h-full px-8 lg:px-12 py-16 gap-5">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-7 h-7">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                ),
                title: 'General English Path',
                sub: 'Comprehensive English Path',
                desc: 'From basics to application of academic English, writing, and speaking.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-7 h-7">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                ),
                title: 'Chinese Communication Path',
                sub: 'Chinese Communication Path',
                desc: 'Enhance Chinese communication skills and broaden your global perspective.',
              },
            ].map((prog, i) => (
              <div
                key={i}
                className="bg-white text-[#040A14] rounded-2xl p-7 flex flex-col flex-1 min-h-0 border border-[#040A14]/5 shadow-[0_4px_16px_rgba(4,10,20,0.05),0_1px_4px_rgba(4,10,20,0.04)] hover:shadow-[0_16px_48px_rgba(4,10,20,0.10)] transition-shadow duration-300 ease-out"
              >
                <div className="mb-4 text-[#040A14]/25">{prog.icon}</div>
                <h3 className="font-serif text-lg lg:text-xl mb-1.5">{prog.title}</h3>
                <h4 className="text-[12px] tracking-wide text-[#040A14]/40 mb-3 font-bold">{prog.sub}</h4>
                <p className="text-[#040A14]/65 text-[13px] leading-[1.8] flex-1">{prog.desc}</p>
                <div className="text-right text-[#C9A84C] mt-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        ),
      },
    },

    // ── 5. Learning Journey ──
    {
      isDark: true,
      left: {
        bgColor: '#040A14',
        content: (
          <div className="flex flex-col h-full px-10 lg:px-16 xl:px-20 py-16 justify-center">
            <div className="mb-3 text-[#C9A84C] text-xs font-bold uppercase tracking-[0.2em]">{t.journey_eyebrow}</div>
            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-10 leading-[1.15]">{t.journey_h2}</h2>
            <div className="relative">
              <div className="space-y-7 pl-14">
                {[
                  { title: t.journey_s1_title, desc: t.journey_s1_desc },
                  { title: t.journey_s2_title, desc: t.journey_s2_desc },
                  { title: t.journey_s3_title, desc: t.journey_s3_desc },
                  { title: t.journey_s4_title, desc: t.journey_s4_desc },
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-14 top-0 w-10 h-10 rounded-full bg-[#040A14] border border-[#C9A84C]/50 text-[#C9A84C] text-[11px] font-mono flex items-center justify-center">
                      0{i + 1}
                    </div>
                    <div className="text-white font-bold text-[14px] mb-1">{step.title}</div>
                    <div className="text-white/45 text-[12px] leading-[1.7]">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ),
      },
      right: {
        bgColor: '#040A14',
        content: (
          <div className="flex flex-col h-full px-10 lg:px-14 py-16 justify-center">
            <div className="relative mb-10">
              <div className="space-y-7 pl-14">
                {[
                  { title: t.journey_s5_title, desc: t.journey_s5_desc },
                  { title: t.journey_s6_title, desc: t.journey_s6_desc },
                  { title: t.journey_s7_title, desc: t.journey_s7_desc },
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-14 top-0 w-10 h-10 rounded-full bg-[#040A14] border-2 border-[#C9A84C] text-[#C9A84C] text-[11px] font-mono flex items-center justify-center shadow-[0_0_12px_rgba(201,168,76,0.3)]">
                      0{i + 5}
                    </div>
                    <div className="text-white font-bold text-[14px] mb-1">{step.title}</div>
                    <div className="text-white/45 text-[12px] leading-[1.7]">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pl-1">
              <MotionButton href="/signup" className="text-sm">
                {t.hero_cta_primary}
              </MotionButton>
            </div>
          </div>
        ),
      },
    },

    // ── 6. For Parents / Trust ──
    {
      isDark: false,
      left: {
        bgColor: '#fbfaf6',
        content: (
          <div className="flex flex-col h-full px-10 lg:px-16 xl:px-20 py-16 justify-center">
            <div className="mb-4 text-[#8E7A4E] text-xs font-bold uppercase tracking-[0.2em]">{t.trust_eyebrow}</div>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#040A14] mb-10 leading-[1.2]">{t.trust_h2}</h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {[
                { title: t.trust_i1_title, desc: t.trust_i1_desc, icon: <IconTrustBadge /> },
                { title: t.trust_i2_title, desc: t.trust_i2_desc, icon: <IconTrustUsers /> },
                { title: t.trust_i3_title, desc: t.trust_i3_desc, icon: <IconTrustChart /> },
                { title: t.trust_i4_title, desc: t.trust_i4_desc, icon: <IconTrustLock /> },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2.5">
                  <div className="text-[#C9A84C]">{item.icon}</div>
                  <h3 className="text-[#040A14] font-bold text-[15px]">{item.title}</h3>
                  <p className="text-[#040A14]/60 text-[13px] leading-[1.8]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      right: {
        bgColor: '#fbfaf6',
        bgImage: '/images/placeholder-who.jpg',
        leftFade: '#fbfaf6',
        content: null,
      },
    },

    // ── 7. Final CTA ──
    {
      isDark: true,
      left: {
        bgColor: '#040A14',
        content: (
          <div className="relative flex flex-col h-full px-10 lg:px-16 xl:px-20 py-16 justify-center overflow-hidden">
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full bg-[#C9A84C]/6 blur-[90px] pointer-events-none" />
            <h2 className="font-serif text-4xl lg:text-[3.25rem] text-white leading-[1.15] tracking-tight relative z-10">
              {t.final_h2}
            </h2>
          </div>
        ),
      },
      right: {
        bgColor: '#040A14',
        content: (
          <div className="relative flex flex-col h-full px-10 lg:px-14 py-16 justify-center gap-8 overflow-hidden">
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#C9A84C]/5 blur-[100px] pointer-events-none" />
            <p className="text-white/60 text-[15px] font-light leading-[1.9] max-w-xs relative z-10">{t.final_sub}</p>
            <div className="relative z-10">
              <MotionButton href="/signup">
                {t.final_btn}
              </MotionButton>
            </div>
          </div>
        ),
      },
    },
  ], [t]);

  const [currentPage, setCurrentPage] = useState(1);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrolling = useRef(false);
  const exitingToTop = useRef(false);
  const numOfPages = slides.length;
  const animTime = 1000;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.intersectionRatio >= 0.95),
      { threshold: 0.95 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const navigateUp = useCallback(() => {
    if (currentPage > 1) setCurrentPage(p => p - 1);
  }, [currentPage]);

  const navigateDown = useCallback(() => {
    if (currentPage < numOfPages) setCurrentPage(p => p + 1);
  }, [currentPage, numOfPages]);

  useEffect(() => {
    if (!isInView) return;

    const exitToTop = () => {
      scrolling.current = true;
      exitingToTop.current = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        scrolling.current = false;
        exitingToTop.current = false;
      }, animTime);
    };

    const handleWheel = (e: WheelEvent) => {
      // While exiting, block all wheel events so smooth scroll isn't cancelled
      if (exitingToTop.current) { e.preventDefault(); return; }
      if (scrolling.current) { e.preventDefault(); return; }
      if (currentPage === numOfPages && e.deltaY > 0) return;
      if (currentPage === 1 && e.deltaY < 0) {
        e.preventDefault();
        exitToTop();
        return;
      }
      e.preventDefault();
      scrolling.current = true;
      if (e.deltaY > 0) navigateDown(); else navigateUp();
      setTimeout(() => (scrolling.current = false), animTime);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (scrolling.current) return;
      if (e.key === 'ArrowDown') {
        if (currentPage === numOfPages) return;
        e.preventDefault();
        scrolling.current = true;
        navigateDown();
        setTimeout(() => (scrolling.current = false), animTime);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentPage === 1) { exitToTop(); return; }
        scrolling.current = true;
        navigateUp();
        setTimeout(() => (scrolling.current = false), animTime);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isInView, currentPage, navigateUp, navigateDown, numOfPages]);

  const isDark = slides[currentPage - 1]?.isDark === true;

  return (
    <div ref={containerRef} className="relative overflow-hidden h-screen">
      {slides.map((slide, i) => {
        const idx = i + 1;
        const isActive = currentPage === idx;
        const leftTrans = isActive ? 'translateY(0)' : 'translateY(100%)';
        const rightTrans = isActive ? 'translateY(0)' : 'translateY(-100%)';

        return (
          <div key={idx} className="absolute inset-0 pointer-events-none">
            {/* Left Half */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] duration-[1000ms] pointer-events-auto overflow-hidden"
              style={{ transform: leftTrans, backgroundColor: slide.left.bgColor || '#040A14' }}
            >
              {slide.left.bgImage && (
                <>
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.left.bgImage})` }} />
                  <div className="absolute inset-0 bg-[#040A14]/40" />
                </>
              )}
              <div className="relative z-10 h-full">
                {slide.left.content}
              </div>
            </div>

            {/* Right Half */}
            <div
              className="absolute top-0 left-1/2 w-1/2 h-full transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] duration-[1000ms] pointer-events-auto overflow-hidden"
              style={{ transform: rightTrans, backgroundColor: slide.right.bgColor || '#040A14' }}
            >
              {slide.right.bgImage && (
                <>
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.right.bgImage})` }} />
                  <div className="absolute inset-0 bg-[#040A14]/20" />
                  {slide.right.leftFade && (
                    <div
                      className="absolute inset-y-0 left-0 w-40 z-[1] pointer-events-none"
                      style={{ background: `linear-gradient(to right, ${slide.right.leftFade}, transparent)` }}
                    />
                  )}
                </>
              )}
              <div className="relative z-10 h-full">
                {slide.right.content}
              </div>
            </div>
          </div>
        );
      })}

      {/* Vertical divider */}
      <div className={`absolute top-0 left-1/2 w-px h-full z-20 pointer-events-none transition-colors duration-700 ${isDark ? 'bg-white/8' : 'bg-[#040A14]/8'}`} />

      {/* Page indicator dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] ${
              currentPage === i + 1
                ? 'w-1.5 h-6 bg-[#C9A84C]'
                : isDark
                  ? 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'
                  : 'w-1.5 h-1.5 bg-[#040A14]/25 hover:bg-[#040A14]/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll hint on last page */}
      {currentPage === numOfPages && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 animate-bounce">
          <span className={`text-[11px] uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-[#040A14]/30'}`}>Continue</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={`w-4 h-4 ${isDark ? 'text-white/30' : 'text-[#040A14]/30'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      )}
    </div>
  );
}
