"use client";

import { useState, useEffect } from "react";
import { type Locale } from "@/lib/i18n";

export function useLanguage() {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("fsa-language") as Locale;
    if (saved && ["en", "ja", "zh-TW", "zh-CN"].includes(saved)) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("fsa-language", newLocale);
  };

  return { locale, setLocale };
}
