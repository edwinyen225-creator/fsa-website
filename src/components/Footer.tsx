"use client";

import Link from "next/link";
import Image from "next/image";
import LineButton from "@/components/ui/line-button";
import MotionButton from "@/components/ui/motion-button";
import { useLanguage } from "@/hooks/useLanguage";
import { homepageTranslations } from "@/lib/homepage-i18n";

export function Footer() {
  const { locale } = useLanguage();
  const t = homepageTranslations[locale];

  const links = [
    { href: "/", label: t.nav_home },
    { href: "/programs", label: t.nav_programs },
    { href: "/parents", label: t.nav_parents },
    { href: "/team", label: t.nav_team },
    { href: "/contact", label: t.nav_contact },
  ];

  return (
    <footer className="relative bg-[#030810] text-white overflow-hidden">
      {/* Gold horizon */}
      <div className="absolute top-0 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[#C9A84C]/70 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(201,168,76,0.08),transparent_50%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 lg:px-8">
        {/* Top row: identity + nav */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-4">
              <Image
                src="/images/fsa-logo.png"
                alt="Future Skill Academy"
                width={900}
                height={985}
                className="h-14 w-auto"
              />
              <span className="font-serif text-xl tracking-wide">Future Skill Academy</span>
            </Link>
            <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#C9A84C]/80">
              {t.hero_badge}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-9 gap-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.08em] text-white/55 transition-colors duration-200 hover:text-[#E3D1A9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A84C]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* CTA row */}
        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <LineButton id="footer-line">{t.nav_line_chat}</LineButton>
          <MotionButton href="/signup" id="footer-trial">{t.nav_book_trial}</MotionButton>
        </div>

        {/* Bottom row */}
        <div className="mt-14 flex flex-col gap-3 border-t border-white/8 pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Future Skill Academy — Tokyo
          </p>
          <p className="font-serif text-xs italic text-[#C9A84C]/60">Tokyo to Global</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
