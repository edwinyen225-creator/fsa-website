"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import MotionButton from "@/components/ui/motion-button";
import { usePathname } from "next/navigation";
import { type Locale, localeLabels, localeNames } from "@/lib/i18n";
import { homepageTranslations } from "@/lib/homepage-i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { motion, AnimatePresence } from "framer-motion";
import { MenuContainer, MenuItem } from "@/components/ui/fluid-menu";
import { Menu as MenuIcon, X, BookOpen, Users, Globe, Phone } from "lucide-react";

export function LanguageSwitcher({ locale, onChange }: { locale: Locale; onChange: (l: Locale) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        id="lang-switcher-btn"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition-[border-color,color] duration-200 ease-out hover:border-[#C9A84C] hover:text-[#C9A84C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061128]"
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
        <ul role="listbox" aria-label="Language options" className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1833] shadow-2xl backdrop-blur-xl z-[60]">
          {(Object.keys(localeLabels) as Locale[]).map((l) => (
            <li key={l} role="option" aria-selected={l === locale}>
              <button
                id={`lang-option-${l}`}
                onClick={() => { onChange(l); setOpen(false); }}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-[background-color,color] duration-150 ease-out hover:bg-white/8 focus-visible:outline-none focus-visible:bg-white/10 ${l === locale ? "text-[#C9A84C]" : "text-white/75 hover:text-white"}`}
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

type NavT = { nav_programs: string; nav_parents: string; nav_team: string; nav_contact: string };

function AnimatedNav({ pathname, t }: { pathname: string; t: NavT }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const links = [
    { href: "/programs", label: t.nav_programs },
    { href: "/parents",  label: t.nav_parents  },
    { href: "/team",     label: t.nav_team     },
    { href: "/contact",  label: t.nav_contact  },
  ];

  return (
    <nav className="hidden lg:flex items-center">
      <div className="flex items-center gap-1 px-1.5 py-1.5">
        {links.map((link, i) => {
          const isActive = pathname === link.href;
          const isHovered = hoveredIndex === i;
          return (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-4 py-1.5 text-sm rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061128]"
            >
              {isHovered && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/[0.07]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-150 ${isActive ? "text-[#C9A84C]" : isHovered ? "text-[#C9A84C]" : "text-white/65"}`}>
                {link.label}
              </span>
              {isActive && (
                <motion.span
                  layoutId="nav-active-dot"
                  className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-3 rounded-full bg-[#C9A84C]/70"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function Navbar() {
  const { locale, setLocale } = useLanguage();
  const t = homepageTranslations[locale];
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#061128]/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          {/* Fluid nav menu */}
          <MenuContainer>
            <MenuItem
              icon={
                <div className="relative w-6 h-6">
                  <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-100 scale-100 rotate-0 [div[data-expanded=true]_&]:opacity-0 [div[data-expanded=true]_&]:scale-0 [div[data-expanded=true]_&]:rotate-180">
                    <MenuIcon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-0 scale-0 -rotate-180 [div[data-expanded=true]_&]:opacity-100 [div[data-expanded=true]_&]:scale-100 [div[data-expanded=true]_&]:rotate-0">
                    <X size={24} strokeWidth={1.5} />
                  </div>
                </div>
              }
            />
            <MenuItem href="/programs" label={t.nav_programs} icon={<BookOpen size={22} strokeWidth={1.5} />} />
            <MenuItem href="/parents"  label={t.nav_parents}  icon={<Users    size={22} strokeWidth={1.5} />} />
            <MenuItem href="/team"     label={t.nav_team}     icon={<Globe    size={22} strokeWidth={1.5} />} />
            <MenuItem href="/contact"  label={t.nav_contact}  icon={<Phone    size={22} strokeWidth={1.5} />} />
          </MenuContainer>

          <Link href="/" className="flex items-center gap-4 ml-12 sm:ml-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A84C]/50 bg-[#081327]">
            <span className="font-serif text-sm text-[#C9A84C]">FSA</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-serif text-xl tracking-wide">Future Skill Academy</div>
          </div>
          </Link>
        </div>

        <AnimatedNav pathname={pathname} t={t} />

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} onChange={setLocale} />
          <MotionButton href="/signup" id="nav-cta-btn" className="hidden sm:flex text-sm">
            {t.nav_book_trial}
          </MotionButton>
        </div>
      </div>
    </header>
  );
}
