"use client";

// Re-export the shared language context hook so all existing imports continue to work.
// This replaces the old per-component useState approach with a single shared context.
export { useLanguageContext as useLanguage } from "@/contexts/LanguageContext";
