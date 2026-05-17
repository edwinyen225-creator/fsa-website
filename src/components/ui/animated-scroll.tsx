"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import MotionButton from '@/components/ui/motion-button';
import { useLanguage } from '@/hooks/useLanguage';
import { homepageTranslations } from '@/lib/homepage-i18n';
import { FloatingPaths } from '@/components/ui/background-paths';

// ─── Design tokens ────────────────────────────────────────────────────────────
const CREAM  = '#F4EFE4';
const CREAM2 = '#EDE8DC';
const NAVY   = '#040A14';
const GOLD   = '#C9A84C';

// ─── Shared primitives ────────────────────────────────────────────────────────

const Eyebrow = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-7">
    <div className="h-px w-5 shrink-0" style={{ background: GOLD }} />
    <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.35em', color: GOLD }}>
      {text}
    </span>
  </div>
);

const BgNum = ({ n, dark }: { n: string; dark: boolean }) => (
  <div
    aria-hidden
    className="absolute select-none pointer-events-none font-serif font-black leading-none"
    style={{
      fontSize: 'clamp(180px, 24vw, 360px)',
      color: dark ? 'rgba(255,255,255,0.025)' : 'rgba(4,10,20,0.04)',
      bottom: '-0.06em',
      right: '-0.04em',
    }}
  >
    {n}
  </div>
);

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

    // ── 1. Flagship Program ──────────────────────────────────────────────────
    {
      isDark: false,
      left: {
        bgColor: CREAM,
        content: (
          <div className="relative flex flex-col h-full px-8 sm:px-12 lg:px-16 xl:px-20 py-12 justify-center overflow-hidden">
            <BgNum n="01" dark={false} />
            <div className="relative z-10">
              <Eyebrow text={t.flagship_eyebrow} />
              <h2
                className="font-serif"
                style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', lineHeight: 1.05, letterSpacing: '-0.035em', color: NAVY, marginBottom: '0.75rem' }}
              >
                {t.flagship_title}
              </h2>
              <div style={{ height: 1, width: 40, background: `${GOLD}55`, marginBottom: '1rem' }} />
              <p className="font-sans" style={{ fontSize: 13, color: `${NAVY}75`, letterSpacing: '0.03em', marginBottom: '1.5rem' }}>
                {t.flagship_subtitle}
              </p>
              <p className="font-sans max-w-xs" style={{ fontSize: 13, lineHeight: 1.9, color: `${NAVY}65`, marginBottom: '1.75rem' }}>
                {t.flagship_desc}
              </p>
              <div style={{ borderLeft: `1px solid ${GOLD}30`, paddingLeft: '1.25rem', marginBottom: '2rem' }}>
                {[t.flagship_bullet1, t.flagship_bullet2, t.flagship_bullet3, t.flagship_bullet4].map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5" style={{ marginBottom: i < 3 ? '0.6rem' : 0 }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: GOLD, marginTop: 8, flexShrink: 0 }} />
                    <span className="font-sans" style={{ fontSize: 12.5, lineHeight: 1.75, color: `${NAVY}68` }}>{b}</span>
                  </div>
                ))}
              </div>
              <MotionButton href="/programs" className="text-sm">{t.flagship_cta}</MotionButton>
            </div>
          </div>
        ),
      },
      right: {
        bgColor: CREAM,
        bgImage: '/images/placeholder-class.jpg',
        leftFade: CREAM,
        content: null,
      },
    },

    // ── 2. Student Works ─────────────────────────────────────────────────────
    {
      isDark: true,
      left: {
        bgColor: NAVY,
        content: (
          <div className="relative flex flex-col h-full px-8 sm:px-12 lg:px-16 xl:px-20 py-12 justify-center overflow-hidden">
            <BgNum n="02" dark={true} />
            <div className="relative z-10">
              <Eyebrow text={t.works_eyebrow} />
              <h2
                className="font-serif text-white"
                style={{ fontSize: 'clamp(2rem, 3.4vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}
              >
                {t.works_title}
              </h2>
              <p className="font-sans max-w-xs" style={{ fontSize: 13.5, lineHeight: 1.85, color: 'rgba(255,255,255,0.48)', marginBottom: '2.25rem' }}>
                {t.works_subtext}
              </p>
              <MotionButton href="/programs" className="text-sm">{t.works_cta}</MotionButton>
            </div>
          </div>
        ),
      },
      right: {
        bgColor: NAVY,
        content: (
          <div className="relative h-full overflow-hidden">
            {/* Each image occupies its own vertical band; mask fades blend the seams */}
            {([
              {
                num: '01', title: t.works_c1_title, desc: t.works_c1_desc,
                img: '/images/placeholder-create-6.jpg', bgPos: 'center',
                top: '0%', height: '38%',
                mask: 'linear-gradient(to bottom, black 0%, black 65%, transparent 100%)',
                textVAlign: 'top' as const,
              },
              {
                num: '02', title: t.works_c2_title, desc: t.works_c2_desc,
                img: '/images/placeholder-create-2.jpg', bgPos: 'center',
                top: '28%', height: '44%',
                mask: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
                textVAlign: 'middle' as const,
              },
              {
                num: '03', title: t.works_c3_title, desc: t.works_c3_desc,
                img: '/images/placeholder-create-1.jpg', bgPos: '50% 30%',
                top: '62%', height: '38%',
                mask: 'linear-gradient(to bottom, transparent 0%, black 28%, black 100%)',
                textVAlign: 'bottom' as const,
              },
            ] as const).map((card, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: card.top,
                  left: 0,
                  right: 0,
                  height: card.height,
                  backgroundImage: `url("${card.img}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: card.bgPos,
                  WebkitMaskImage: card.mask,
                  maskImage: card.mask,
                }}
              >
                {/* dim overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(4,10,20,0.45)' }} />
                <div
                  style={{
                    position: 'absolute',
                    left: 20,
                    right: 20,
                    ...(card.textVAlign === 'top'
                      ? { top: '38%' }
                      : card.textVAlign === 'middle'
                      ? { top: '50%', transform: 'translateY(-50%)' }
                      : { bottom: '22%' }),
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      flexDirection: 'column',
                      background: 'rgba(4,10,20,0.55)',
                      backdropFilter: 'blur(14px)',
                      WebkitBackdropFilter: 'blur(14px)',
                      borderRadius: 9,
                      padding: '13px 18px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      maxWidth: '88%',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 5 }}>
                      <span style={{ fontFamily: 'monospace', fontSize: 11, color: GOLD, letterSpacing: '0.12em' }}>{card.num}</span>
                      <span className="font-serif" style={{ fontSize: 16, color: '#fff', letterSpacing: '-0.02em' }}>{card.title}</span>
                    </div>
                    <span className="font-sans" style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.55 }}>{card.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ),
      },
    },

    // ── 3. Two-Coach Support ─────────────────────────────────────────────────
    {
      isDark: false,
      left: {
        bgColor: CREAM,
        content: (
          <div className="flex flex-col h-full px-6 sm:px-10 lg:px-12 pt-20 pb-10 sm:pb-14 gap-4 justify-center">
            {[
              { title: t.coach_c1_title, desc: t.coach_c1_desc, img: '/images/placeholder-who.jpg' },
              { title: t.coach_c2_title, desc: t.coach_c2_desc, img: '/images/placeholder-who.jpg' },
            ].map((coach, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(4,10,20,0.09)', height: 'clamp(160px, 36vh, 300px)' }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url("${coach.img}")` }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(4,10,20,0.88) 0%, rgba(4,10,20,0.18) 55%, transparent 100%)' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div style={{ height: 1, width: 20, background: GOLD, marginBottom: 10 }} />
                  <h3 className="font-serif text-white" style={{ fontSize: 15, letterSpacing: '-0.02em', marginBottom: 5 }}>
                    {coach.title}
                  </h3>
                  <p className="font-sans" style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.58)', lineHeight: 1.6 }}>
                    {coach.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ),
      },
      right: {
        bgColor: CREAM,
        content: (
          <div className="relative flex flex-col h-full px-8 sm:px-12 lg:px-14 py-12 justify-center overflow-hidden">
            <BgNum n="03" dark={false} />
            <div className="relative z-10 max-w-sm">
              <Eyebrow text={t.coach_eyebrow} />
              <h2
                className="font-serif"
                style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.7rem)', lineHeight: 1.15, letterSpacing: '-0.03em', color: NAVY, marginBottom: '2rem' }}
              >
                {t.coach_h2}
              </h2>
              <p className="font-sans font-medium" style={{ fontSize: 14, lineHeight: 1.8, color: `${NAVY}85`, marginBottom: '1rem' }}>
                {t.coach_p1}
              </p>
              <p className="font-sans" style={{ fontSize: 13.5, lineHeight: 1.85, color: `${NAVY}50`, marginBottom: '2.25rem' }}>
                {t.coach_p2}
              </p>
              <MotionButton href="/team" className="text-sm">{t.coach_btn}</MotionButton>
            </div>
          </div>
        ),
      },
    },

    // ── 4. Our Programs ──────────────────────────────────────────────────────
    {
      isDark: false,
      left: {
        bgColor: CREAM,
        content: (
          <div className="relative flex flex-col h-full px-8 sm:px-12 lg:px-14 py-12 overflow-hidden">
            <BgNum n="04" dark={false} />
            <div className="relative z-10 flex flex-col h-full justify-center">
              <Eyebrow text={t.prog_eyebrow} />
              <h2
                className="font-serif"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', lineHeight: 1.2, letterSpacing: '-0.03em', color: NAVY, marginBottom: '2rem' }}
              >
                {t.prog_h2}
              </h2>
              <div
                className="rounded-2xl p-7 flex flex-col"
                style={{ height: 'clamp(160px, 36vh, 300px)', background: NAVY, borderTop: `3px solid ${GOLD}` }}
              >
                <div style={{ marginBottom: 18, color: GOLD }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} style={{ width: 22, height: 22 }}>
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="font-serif text-white" style={{ fontSize: 17, letterSpacing: '-0.02em', marginBottom: 5 }}>{t.prog_c1_title}</h3>
                <p style={{ fontSize: 10, color: GOLD, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>{t.prog_c1_sub}</p>
                <p className="font-sans flex-1" style={{ fontSize: 12.5, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)' }}>{t.prog_c1_desc}</p>
              </div>
            </div>
          </div>
        ),
      },
      right: {
        bgColor: CREAM2,
        content: (
          <div className="flex flex-col h-full px-6 sm:px-9 lg:px-11 pt-20 pb-12 justify-center gap-4">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} style={{ width: 18, height: 18 }}>
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                ),
                title: t.prog_c2_title, sub: t.prog_c2_sub, desc: t.prog_c2_desc,
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} style={{ width: 18, height: 18 }}>
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                ),
                title: t.prog_c3_title, sub: t.prog_c3_sub, desc: t.prog_c3_desc,
              },
            ].map((prog, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 flex flex-col"
                style={{ border: '1px solid rgba(4,10,20,0.06)', boxShadow: '0 2px 20px rgba(4,10,20,0.05)', height: 'clamp(160px, 36vh, 280px)' }}
              >
                <div style={{ marginBottom: 14, color: `${NAVY}28` }}>{prog.icon}</div>
                <h3 className="font-serif" style={{ fontSize: 15.5, letterSpacing: '-0.02em', color: NAVY, marginBottom: 5 }}>{prog.title}</h3>
                <p style={{ fontSize: 10, color: GOLD, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>{prog.sub}</p>
                <p className="font-sans flex-1" style={{ fontSize: 12.5, lineHeight: 1.8, color: `${NAVY}58` }}>{prog.desc}</p>
              </div>
            ))}
          </div>
        ),
      },
    },

    // ── 5. Learning Journey ──────────────────────────────────────────────────
    {
      isDark: true,
      left: {
        bgColor: NAVY,
        content: (
          <div className="relative flex flex-col h-full px-8 sm:px-12 lg:px-16 xl:px-20 py-12 justify-center overflow-hidden">
            <BgNum n="05" dark={true} />
            <div className="relative z-10">
              <Eyebrow text={t.journey_eyebrow} />
              <h2
                className="font-serif text-white"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.7rem)', lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '2.25rem' }}
              >
                {t.journey_h2}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {[
                  { title: t.journey_s1_title, desc: t.journey_s1_desc, n: '01' },
                  { title: t.journey_s2_title, desc: t.journey_s2_desc, n: '02' },
                  { title: t.journey_s3_title, desc: t.journey_s3_desc, n: '03' },
                  { title: t.journey_s4_title, desc: t.journey_s4_desc, n: '04' },
                ].map((step) => (
                  <div key={step.n} className="flex items-start gap-4">
                    <div
                      className="shrink-0 font-mono flex items-center justify-center"
                      style={{
                        width: 32, height: 32, borderRadius: '50%',
                        border: `1px solid ${GOLD}45`,
                        color: GOLD, fontSize: 10, letterSpacing: '0.05em',
                      }}
                    >
                      {step.n}
                    </div>
                    <div style={{ paddingTop: 4 }}>
                      <div className="font-sans font-semibold text-white" style={{ fontSize: 13, marginBottom: 2 }}>{step.title}</div>
                      <div className="font-sans" style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.38)', lineHeight: 1.6 }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ),
      },
      right: {
        bgColor: NAVY,
        content: (
          <div className="flex flex-col h-full px-8 sm:px-10 lg:px-12 py-12 justify-center">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: '2.5rem' }}>
              {[
                { title: t.journey_s5_title, desc: t.journey_s5_desc, n: '05' },
                { title: t.journey_s6_title, desc: t.journey_s6_desc, n: '06' },
                { title: t.journey_s7_title, desc: t.journey_s7_desc, n: '07' },
              ].map((step) => (
                <div key={step.n} className="flex items-start gap-4">
                  <div
                    className="shrink-0 font-mono flex items-center justify-center"
                    style={{
                      width: 32, height: 32, borderRadius: '50%',
                      border: `1px solid ${GOLD}45`,
                      color: GOLD, fontSize: 10, letterSpacing: '0.05em',
                    }}
                  >
                    {step.n}
                  </div>
                  <div style={{ paddingTop: 4 }}>
                    <div className="font-sans font-semibold text-white" style={{ fontSize: 13, marginBottom: 2 }}>{step.title}</div>
                    <div className="font-sans" style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.38)', lineHeight: 1.6 }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <MotionButton href="/signup" className="text-sm">{t.hero_cta_primary}</MotionButton>
          </div>
        ),
      },
    },

    // ── 6. For Parents / Trust ───────────────────────────────────────────────
    {
      isDark: false,
      left: {
        bgColor: CREAM,
        content: (
          <div className="relative flex flex-col h-full px-8 sm:px-12 lg:px-16 xl:px-20 py-12 justify-center overflow-hidden">
            <FloatingPaths position={1} stroke="#8E7A4E" baseOpacity={0.06} opacityStep={0.018} />
            <FloatingPaths position={-1} stroke="#8E7A4E" baseOpacity={0.06} opacityStep={0.018} />
            <div className="relative z-10">
              <Eyebrow text={t.trust_eyebrow} />
              <h2
                className="font-serif"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.7rem)', lineHeight: 1.15, letterSpacing: '-0.03em', color: NAVY, marginBottom: '2.5rem' }}
              >
                {t.trust_h2}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                {[
                  { title: t.trust_i1_title, desc: t.trust_i1_desc },
                  { title: t.trust_i2_title, desc: t.trust_i2_desc },
                  { title: t.trust_i3_title, desc: t.trust_i3_desc },
                  { title: t.trust_i4_title, desc: t.trust_i4_desc },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0" style={{ width: 1, background: `${GOLD}28`, alignSelf: 'stretch', minHeight: 36 }} />
                    <div>
                      <h3 className="font-sans font-bold" style={{ fontSize: 13.5, color: NAVY, marginBottom: 4 }}>{item.title}</h3>
                      <p className="font-sans" style={{ fontSize: 12.5, lineHeight: 1.75, color: `${NAVY}52` }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ),
      },
      right: {
        bgColor: CREAM,
        bgImage: '/images/placeholder-who.jpg',
        leftFade: CREAM,
        content: null,
      },
    },

    // ── 7. Final CTA ─────────────────────────────────────────────────────────
    {
      isDark: true,
      left: {
        bgColor: NAVY,
        content: (
          <div className="relative flex flex-col h-full px-8 sm:px-12 lg:px-16 xl:px-20 py-12 justify-center overflow-hidden">
            <BgNum n="07" dark={true} />
            <div className="relative z-10">
              <div style={{ height: 1, width: 40, background: `${GOLD}55`, marginBottom: '2rem' }} />
              <h2
                className="font-serif text-white"
                style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)', lineHeight: 1.08, letterSpacing: '-0.04em' }}
              >
                {t.final_h2}
              </h2>
            </div>
          </div>
        ),
      },
      right: {
        bgColor: NAVY,
        content: (
          <div className="relative flex flex-col h-full px-8 sm:px-10 lg:px-12 py-12 justify-center overflow-hidden">
            <div
              className="absolute pointer-events-none"
              style={{
                width: 420, height: 420, borderRadius: '50%',
                top: '50%', right: -80, transform: 'translateY(-50%)',
                background: `radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)`,
              }}
            />
            <div className="relative z-10 max-w-xs">
              <p className="font-sans" style={{ fontSize: 14.5, lineHeight: 1.9, color: 'rgba(255,255,255,0.52)', marginBottom: '2.5rem' }}>
                {t.final_sub}
              </p>
              <MotionButton href="/signup">{t.final_btn}</MotionButton>
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
  const touchStart = useRef<number>(0);
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

    const handleWheel = (e: WheelEvent) => {
      if (scrolling.current) { e.preventDefault(); return; }
      if (currentPage === numOfPages && e.deltaY > 0) return;
      if (currentPage === 1 && e.deltaY < 0) return;
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
        if (currentPage === 1) return;
        e.preventDefault();
        scrolling.current = true;
        navigateUp();
        setTimeout(() => (scrolling.current = false), animTime);
      }
    };

    const handleTouchStart = (e: TouchEvent) => { touchStart.current = e.touches[0].clientY; };
    const handleTouchEnd = (e: TouchEvent) => {
      const delta = touchStart.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 40) return;
      if (delta > 0) navigateDown(); else navigateUp();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isInView, currentPage, navigateUp, navigateDown, numOfPages]);

  const isDark = slides[currentPage - 1]?.isDark === true;

  return (
    <>

      {/* ═══════════════════════════════════════════════════════════════════════
          MOBILE LAYOUT  (hidden on sm+)
          Free-scroll, left+right merged into one flowing section per slide
      ════════════════════════════════════════════════════════════════════════ */}
      <div className="sm:hidden">

        {/* 1 · Flagship Program */}
        <section style={{ background: CREAM, paddingTop: 112, paddingBottom: 60, paddingLeft: 24, paddingRight: 24 }}>
          <Eyebrow text={t.flagship_eyebrow} />
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 9vw, 2.6rem)', lineHeight: 1.1, letterSpacing: '-0.03em', color: NAVY, marginBottom: '0.75rem' }}>
            {t.flagship_title}
          </h2>
          <div style={{ height: 1, width: 40, background: `${GOLD}55`, marginBottom: '1rem' }} />
          <p className="font-sans" style={{ fontSize: 13.5, lineHeight: 1.85, color: `${NAVY}65`, marginBottom: '1.75rem' }}>
            {t.flagship_desc}
          </p>
          <div style={{ borderLeft: `1px solid ${GOLD}30`, paddingLeft: '1.25rem', marginBottom: '2rem' }}>
            {[t.flagship_bullet1, t.flagship_bullet2, t.flagship_bullet3, t.flagship_bullet4].map((b, i) => (
              <div key={i} className="flex items-start gap-2.5" style={{ marginBottom: i < 3 ? '0.6rem' : 0 }}>
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: GOLD, marginTop: 8, flexShrink: 0 }} />
                <span className="font-sans" style={{ fontSize: 12.5, lineHeight: 1.75, color: `${NAVY}68` }}>{b}</span>
              </div>
            ))}
          </div>
          <MotionButton href="/programs">{t.flagship_cta}</MotionButton>
          <div style={{ marginTop: 40, marginLeft: -24, marginRight: -24, height: 260, backgroundImage: 'url(/images/placeholder-class.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </section>

        {/* 2 · Student Works */}
        <section style={{ background: NAVY, paddingTop: 64, paddingBottom: 64, paddingLeft: 24, paddingRight: 24 }}>
          <Eyebrow text={t.works_eyebrow} />
          <h2 className="font-serif text-white" style={{ fontSize: 'clamp(1.8rem, 8vw, 2.4rem)', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            {t.works_title}
          </h2>
          <p className="font-sans" style={{ fontSize: 13.5, lineHeight: 1.85, color: 'rgba(255,255,255,0.48)', marginBottom: '2rem' }}>
            {t.works_subtext}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: '2rem' }}>
            {[
              { num: '01', title: t.works_c1_title, desc: t.works_c1_desc, img: '/images/placeholder-create-6.jpg' },
              { num: '02', title: t.works_c2_title, desc: t.works_c2_desc, img: '/images/placeholder-create-2.jpg' },
              { num: '03', title: t.works_c3_title, desc: t.works_c3_desc, img: '/images/placeholder-create-1.jpg' },
            ].map((card, i) => (
              <div key={i} style={{ position: 'relative', height: 180, borderRadius: 12, overflow: 'hidden', backgroundImage: `url(${card.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(4,10,20,0.48)' }} />
                <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
                  <div style={{ display: 'inline-flex', flexDirection: 'column', background: 'rgba(4,10,20,0.6)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderRadius: 7, padding: '9px 13px', border: '1px solid rgba(255,255,255,0.09)', maxWidth: '90%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                      <span style={{ fontFamily: 'monospace', fontSize: 10, color: GOLD, letterSpacing: '0.1em' }}>{card.num}</span>
                      <span className="font-serif" style={{ fontSize: 14, color: '#fff', letterSpacing: '-0.02em' }}>{card.title}</span>
                    </div>
                    <span className="font-sans" style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{card.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <MotionButton href="/programs">{t.works_cta}</MotionButton>
        </section>

        {/* 3 · Two-Coach Support */}
        <section style={{ background: CREAM, paddingTop: 64, paddingBottom: 64, paddingLeft: 24, paddingRight: 24 }}>
          <Eyebrow text={t.coach_eyebrow} />
          <h2 className="font-serif" style={{ fontSize: 'clamp(1.8rem, 8vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.03em', color: NAVY, marginBottom: '1.25rem' }}>
            {t.coach_h2}
          </h2>
          <p className="font-sans font-medium" style={{ fontSize: 14, lineHeight: 1.8, color: `${NAVY}85`, marginBottom: '0.75rem' }}>
            {t.coach_p1}
          </p>
          <p className="font-sans" style={{ fontSize: 13.5, lineHeight: 1.85, color: `${NAVY}50`, marginBottom: '2rem' }}>
            {t.coach_p2}
          </p>
          <MotionButton href="/team">{t.coach_btn}</MotionButton>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 36 }}>
            {[
              { title: t.coach_c1_title, desc: t.coach_c1_desc },
              { title: t.coach_c2_title, desc: t.coach_c2_desc },
            ].map((coach, i) => (
              <div key={i} style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', height: 200, backgroundImage: 'url(/images/placeholder-who.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid rgba(4,10,20,0.09)' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4,10,20,0.88) 0%, rgba(4,10,20,0.18) 55%, transparent 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 20px 20px' }}>
                  <div style={{ height: 1, width: 20, background: GOLD, marginBottom: 10 }} />
                  <h3 className="font-serif text-white" style={{ fontSize: 15, letterSpacing: '-0.02em', marginBottom: 5 }}>{coach.title}</h3>
                  <p className="font-sans" style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.58)', lineHeight: 1.6 }}>{coach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4 · Our Programs */}
        <section style={{ background: CREAM2, paddingTop: 64, paddingBottom: 64, paddingLeft: 24, paddingRight: 24 }}>
          <Eyebrow text={t.prog_eyebrow} />
          <h2 className="font-serif" style={{ fontSize: 'clamp(1.8rem, 8vw, 2.4rem)', lineHeight: 1.2, letterSpacing: '-0.03em', color: NAVY, marginBottom: '1.75rem' }}>
            {t.prog_h2}
          </h2>
          <div style={{ background: NAVY, borderRadius: 16, padding: 28, borderTop: `3px solid ${GOLD}`, marginBottom: 10 }}>
            <div style={{ marginBottom: 14, color: GOLD }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} style={{ width: 22, height: 22 }}>
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="font-serif text-white" style={{ fontSize: 17, letterSpacing: '-0.02em', marginBottom: 5 }}>{t.prog_c1_title}</h3>
            <p style={{ fontSize: 10, color: GOLD, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>{t.prog_c1_sub}</p>
            <p className="font-sans" style={{ fontSize: 12.5, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)' }}>{t.prog_c1_desc}</p>
          </div>
          {[
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} style={{ width: 18, height: 18 }}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>, title: t.prog_c2_title, sub: t.prog_c2_sub, desc: t.prog_c2_desc },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} style={{ width: 18, height: 18 }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>, title: t.prog_c3_title, sub: t.prog_c3_sub, desc: t.prog_c3_desc },
          ].map((prog, i) => (
            <div key={i} style={{ background: 'white', borderRadius: 16, padding: 28, border: '1px solid rgba(4,10,20,0.06)', boxShadow: '0 2px 20px rgba(4,10,20,0.05)', marginBottom: i === 0 ? 10 : 0 }}>
              <div style={{ marginBottom: 14, color: `${NAVY}28` }}>{prog.icon}</div>
              <h3 className="font-serif" style={{ fontSize: 15.5, letterSpacing: '-0.02em', color: NAVY, marginBottom: 5 }}>{prog.title}</h3>
              <p style={{ fontSize: 10, color: GOLD, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>{prog.sub}</p>
              <p className="font-sans" style={{ fontSize: 12.5, lineHeight: 1.8, color: `${NAVY}58` }}>{prog.desc}</p>
            </div>
          ))}
        </section>

        {/* 5 · Learning Journey */}
        <section style={{ background: NAVY, paddingTop: 64, paddingBottom: 64, paddingLeft: 24, paddingRight: 24 }}>
          <Eyebrow text={t.journey_eyebrow} />
          <h2 className="font-serif text-white" style={{ fontSize: 'clamp(1.8rem, 8vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '2rem' }}>
            {t.journey_h2}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: '2.5rem' }}>
            {[
              { title: t.journey_s1_title, desc: t.journey_s1_desc, n: '01' },
              { title: t.journey_s2_title, desc: t.journey_s2_desc, n: '02' },
              { title: t.journey_s3_title, desc: t.journey_s3_desc, n: '03' },
              { title: t.journey_s4_title, desc: t.journey_s4_desc, n: '04' },
              { title: t.journey_s5_title, desc: t.journey_s5_desc, n: '05' },
              { title: t.journey_s6_title, desc: t.journey_s6_desc, n: '06' },
              { title: t.journey_s7_title, desc: t.journey_s7_desc, n: '07' },
            ].map((step) => (
              <div key={step.n} className="flex items-start gap-4">
                <div className="shrink-0 font-mono flex items-center justify-center" style={{ width: 32, height: 32, borderRadius: '50%', border: `1px solid ${GOLD}45`, color: GOLD, fontSize: 10, letterSpacing: '0.05em' }}>
                  {step.n}
                </div>
                <div style={{ paddingTop: 4 }}>
                  <div className="font-sans font-semibold text-white" style={{ fontSize: 13, marginBottom: 2 }}>{step.title}</div>
                  <div className="font-sans" style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.38)', lineHeight: 1.6 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <MotionButton href="/signup">{t.hero_cta_primary}</MotionButton>
        </section>

        {/* 6 · For Parents */}
        <section style={{ background: CREAM, paddingTop: 64, paddingBottom: 0, paddingLeft: 24, paddingRight: 24 }}>
          <Eyebrow text={t.trust_eyebrow} />
          <h2 className="font-serif" style={{ fontSize: 'clamp(1.8rem, 8vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.03em', color: NAVY, marginBottom: '2rem' }}>
            {t.trust_h2}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginBottom: '2.5rem' }}>
            {[
              { title: t.trust_i1_title, desc: t.trust_i1_desc },
              { title: t.trust_i2_title, desc: t.trust_i2_desc },
              { title: t.trust_i3_title, desc: t.trust_i3_desc },
              { title: t.trust_i4_title, desc: t.trust_i4_desc },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16 }}>
                <div style={{ width: 1, background: `${GOLD}28`, alignSelf: 'stretch', minHeight: 36, flexShrink: 0 }} />
                <div>
                  <h3 className="font-sans font-bold" style={{ fontSize: 13.5, color: NAVY, marginBottom: 4 }}>{item.title}</h3>
                  <p className="font-sans" style={{ fontSize: 12.5, lineHeight: 1.75, color: `${NAVY}52` }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginLeft: -24, marginRight: -24, height: 280, backgroundImage: 'url(/images/placeholder-who.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top' }} />
        </section>

        {/* 7 · Final CTA */}
        <section style={{ background: NAVY, paddingTop: 64, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
          <div style={{ height: 1, width: 40, background: `${GOLD}55`, marginBottom: '2rem' }} />
          <h2 className="font-serif text-white" style={{ fontSize: 'clamp(2rem, 9vw, 3rem)', lineHeight: 1.08, letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
            {t.final_h2}
          </h2>
          <p className="font-sans" style={{ fontSize: 14.5, lineHeight: 1.9, color: 'rgba(255,255,255,0.52)', marginBottom: '2.5rem' }}>
            {t.final_sub}
          </p>
          <MotionButton href="/signup">{t.final_btn}</MotionButton>
        </section>

      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below sm)
          Snap-scroll, split two-panel cinematic slides
      ════════════════════════════════════════════════════════════════════════ */}
      <div ref={containerRef} className="hidden sm:block relative overflow-hidden" style={{ height: '100dvh' }}>
        {slides.map((slide, i) => {
          const idx = i + 1;
          const isActive = currentPage === idx;
          const leftTrans  = isActive ? 'translateY(0)' : 'translateY(100%)';
          const rightTrans = isActive ? 'translateY(0)' : 'translateY(-100%)';

          return (
            <div key={idx} className="absolute inset-0 pointer-events-none">
              {/* Left Half */}
              <div
                className="absolute top-0 left-0 w-1/2 h-full transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] duration-[1000ms] pointer-events-auto overflow-hidden"
                style={{ transform: leftTrans, backgroundColor: slide.left.bgColor || NAVY }}
              >
                {slide.left.bgImage && (
                  <>
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.left.bgImage})` }} />
                    <div className="absolute inset-0 bg-[#040A14]/40" />
                  </>
                )}
                <div className="relative z-10 h-full">{slide.left.content}</div>
              </div>

              {/* Right Half */}
              <div
                className="absolute top-0 left-1/2 w-1/2 h-full transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] duration-[1000ms] pointer-events-auto overflow-hidden"
                style={{ transform: rightTrans, backgroundColor: slide.right.bgColor || NAVY }}
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
                <div className="relative z-10 h-full">{slide.right.content}</div>
              </div>
            </div>
          );
        })}

        {/* Center divider — gold hairline */}
        <div
          className="absolute top-0 left-1/2 w-px h-full z-20 pointer-events-none transition-opacity duration-700"
          style={{ background: isDark ? `${GOLD}18` : `${GOLD}22` }}
        />

        {/* Editorial progress indicator */}
        <div className="flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-2 z-30">
          <span className="font-mono transition-colors duration-500" style={{ fontSize: 9, letterSpacing: '0.1em', color: GOLD }}>
            {String(currentPage).padStart(2, '0')}
          </span>
          <div className="relative" style={{ width: 1, height: 56, background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(4,10,20,0.1)' }}>
            <div className="absolute top-0 left-0 w-full transition-all duration-700" style={{ height: `${(currentPage / numOfPages) * 100}%`, background: GOLD }} />
          </div>
          <span className="font-mono transition-colors duration-500" style={{ fontSize: 9, letterSpacing: '0.1em', color: isDark ? 'rgba(255,255,255,0.22)' : 'rgba(4,10,20,0.22)' }}>
            {String(numOfPages).padStart(2, '0')}
          </span>
        </div>

        {/* Scroll hint */}
        {currentPage < numOfPages && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 animate-bounce">
            <span className="font-sans uppercase" style={{ fontSize: 9, letterSpacing: '0.25em', color: isDark ? 'rgba(255,255,255,0.28)' : 'rgba(4,10,20,0.28)' }}>
              Continue
            </span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} style={{ width: 14, height: 14, color: isDark ? 'rgba(255,255,255,0.28)' : 'rgba(4,10,20,0.28)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}

      </div>
    </>
  );
}
