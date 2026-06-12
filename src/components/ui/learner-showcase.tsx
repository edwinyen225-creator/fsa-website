"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";
import { homepageTranslations } from "@/lib/homepage-i18n";

/**
 * "What learners create" — proof-led showcase of tangible student outputs.
 * Asymmetric editorial grid: first item spans two rows on desktop.
 */
export function LearnerShowcase() {
  const { locale } = useLanguage();
  const t = homepageTranslations[locale];

  const items = [
    { img: "/images/placeholder-create-1.jpg", title: t.create_item1_title, desc: t.create_item1_desc },
    { img: "/images/placeholder-create-2.jpg", title: t.create_item2_title, desc: t.create_item2_desc },
    { img: "/images/placeholder-create-3.jpg", title: t.create_item3_title, desc: t.create_item3_desc },
    { img: "/images/placeholder-create-4.jpg", title: t.create_item4_title, desc: t.create_item4_desc },
    { img: "/images/placeholder-create-5.jpg", title: t.create_item5_title, desc: t.create_item5_desc },
    { img: "/images/placeholder-create-6.jpg", title: t.create_item6_title, desc: t.create_item6_desc },
  ];

  return (
    <section className="premium-light-section home-section text-[#071226]">
      <div className="mx-auto max-w-7xl">
        <div className="section-label">{t.create_eyebrow.replace(/^\d+\s*—\s*/, "")}</div>
        <h2 className="font-serif text-4xl sm:text-5xl leading-tight md:text-6xl mb-14">
          {t.create_h2}
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[250px]">
          {items.map((item, i) => (
            <figure
              key={item.title}
              className={cn(
                "group relative min-h-[260px] overflow-hidden rounded-3xl border border-[#040A14]/8",
                "shadow-[0_18px_50px_rgba(7,18,38,0.12)]",
                i === 0 && "lg:row-span-2",
                (i === 3 || i === 5) && "lg:col-span-2"
              )}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
              />
              {/* Color treatment + readability gradient */}
              <div className="absolute inset-0 bg-[#0B1833]/25 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent pointer-events-none" />

              {/* Editorial index */}
              <span className="absolute top-5 left-6 font-mono text-[0.65rem] tracking-[0.3em] text-[#E3D1A9]/80">
                0{i + 1}
              </span>

              <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                <div className="font-serif text-xl text-white mb-1">{item.title}</div>
                <p className="text-sm leading-relaxed text-white/65 max-w-[36ch]">{item.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearnerShowcase;
