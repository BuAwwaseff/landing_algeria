"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="mt-auto ">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <div className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))] px-6 py-7 shadow-[0_20px_50px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#2BB673]/45" />
                <h3 className="text-[18px] font-semibold tracking-[0.24em] text-[#2BB673] uppercase">
                  {t.footer.brand[language]}
                </h3>
              </div>

              <p className="mt-5 max-w-[42ch] text-[16px] leading-8 text-white/68">
                {t.footer.text[language]}
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/62">
              <Link href="/" className="transition hover:text-white">
                {t.footer.links.home[language]}
              </Link>

              <Link href="/partnership" className="transition hover:text-white">
                {t.footer.links.partnership[language]}
              </Link>

              <Link
                href="/partnership#final-cta"
                className="transition hover:text-[#39C884]"
              >
                {t.footer.links.getStarted[language]}
              </Link>
            </nav>
          </div>

          <div className="mt-7 h-px bg-gradient-to-r from-transparent via-white/100 to-transparent" />

          <div className="mt-5 flex flex-col gap-2 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
            <p>{t.footer.copyright[language]}</p>

          </div>
        </div>
      </div>
    </footer>
  );
}