"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import MotionButton from "@/components/ui/motion-button";
import { useLanguage } from "@/hooks/useLanguage";
import { homepageTranslations } from "@/lib/homepage-i18n";

export function MobileCTABar() {
  const { locale } = useLanguage();
  const t = homepageTranslations[locale];
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("fsa-mobile-cta-dismissed") === "1") {
      setDismissed(true);
      return;
    }
    const onScroll = () => {
      if (window.scrollY > 200) setVisible(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("fsa-mobile-cta-dismissed", "1");
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="sm:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-[#C9A84C]/20 bg-[#061128]/95 backdrop-blur-xl px-4 py-3 flex items-center gap-3"
        >
          <div className="flex-1">
            <MotionButton href="/signup" className="w-full justify-center text-sm">
              {t.nav_book_trial}
            </MotionButton>
          </div>
          <button
            onClick={dismiss}
            aria-label="Dismiss"
            className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-white/40 hover:text-white/70 transition-colors duration-150"
          >
            <X size={16} strokeWidth={2} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
