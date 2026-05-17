"use client";
import React, { useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'gold' | 'blue' | 'purple' | 'green' | 'red';
  customSize?: boolean;
}

const glowPalette = {
  gold:   { h: 44,  s: 70, l: 60 },
  blue:   { h: 220, s: 100, l: 70 },
  purple: { h: 280, s: 100, l: 70 },
  green:  { h: 120, s: 100, l: 60 },
  red:    { h: 0,   s: 100, l: 65 },
};

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  glowColor = 'gold',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { h, s, l } = glowPalette[glowColor];

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const overlay = overlayRef.current;
    if (!card || !overlay) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const intensity = Math.max(0, 1 - dist * 0.5);

    overlay.style.backgroundImage = `radial-gradient(500px 500px at ${x}px ${y}px, hsl(${h} ${s}% ${l}% / 0.18) 0%, transparent 65%)`;
    card.style.boxShadow = [
      `${dx * 20}px ${dy * 20}px ${50 + intensity * 25}px hsl(${h} ${s}% ${l}% / ${0.45 + intensity * 0.2})`,
      `0 0 30px hsl(${h} ${s}% ${l}% / 0.12)`,
    ].join(', ');
  };

  const onMouseLeave = () => {
    const card = cardRef.current;
    const overlay = overlayRef.current;
    if (!card || !overlay) return;
    overlay.style.backgroundImage = '';
    card.style.boxShadow = '';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ border: `1px solid hsl(${h} ${s}% ${l}% / 0.18)` } as React.CSSProperties}
      className={cn('relative rounded-[32px]', className)}
    >
      <div ref={overlayRef} className="pointer-events-none absolute inset-0 rounded-[32px]" />
      <div className="relative">{children}</div>
    </div>
  );
};

export { GlowCard };
