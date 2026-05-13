"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type Locale } from "@/lib/i18n";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("fsa-language") as Locale;
    if (saved && ["en", "ja", "zh-TW", "zh-CN"].includes(saved)) {
      setLocaleState(saved);
    }
    setHydrated(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("fsa-language", newLocale);
    document.documentElement.lang = newLocale;
  };

  // Prevent hydration mismatch — render with default "en" until localStorage is read
  if (!hydrated) {
    return (
      <LanguageContext.Provider value={{ locale: "en", setLocale }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  return useContext(LanguageContext);
}
