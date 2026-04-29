"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { dictionary, type Language } from "@/lib/dictionary";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: typeof dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isStoredLanguage(value: string | null): value is Language {
  return value === "en" || value === "ar" || value === "fr";
}

const languageListeners = new Set<() => void>();

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLanguage = window.localStorage.getItem("site-language");
  return isStoredLanguage(savedLanguage) ? savedLanguage : "en";
}

function subscribeToLanguage(callback: () => void) {
  languageListeners.add(callback);

  if (typeof window === "undefined") {
    return () => {
      languageListeners.delete(callback);
    };
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === "site-language") {
      callback();
    }
  };

  window.addEventListener("storage", handleStorage);

  return () => {
    languageListeners.delete(callback);
    window.removeEventListener("storage", handleStorage);
  };
}

function notifyLanguageListeners() {
  languageListeners.forEach((listener) => listener());
}

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const language = useSyncExternalStore<Language>(
    subscribeToLanguage,
    getStoredLanguage,
    () => "en",
  );

  useEffect(() => {
    window.localStorage.setItem("site-language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem("site-language", nextLanguage);
    notifyLanguageListeners();
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : language === "ar" ? "fr" : "en");
  };

  const value: LanguageContextValue = {
    language,
    setLanguage,
    toggleLanguage,
    t: dictionary,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
