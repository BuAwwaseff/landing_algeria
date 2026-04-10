"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      dir="ltr"
      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition ${
          language === "en"
            ? "bg-[#2BB673] text-[#04110b]"
            : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("ar")}
        className={`rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition ${
          language === "ar"
            ? "bg-[#2BB673] text-[#04110b]"
            : "text-white/70 hover:text-white"
        }`}
      >
        AR
      </button>

      <button
        type="button"
        onClick={() => setLanguage("fr")}
        className={`rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition ${
          language === "fr"
            ? "bg-[#2BB673] text-[#04110b]"
            : "text-white/70 hover:text-white"
        }`}
      >
        FR
      </button>
    </div>
  );
}