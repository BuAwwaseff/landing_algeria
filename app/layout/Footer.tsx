"use client";

import Link from "next/link";
import MelbetAnimatedLogo from "./MelbetAnimatedLogo";
import { useLanguage } from "./LanguageProvider";

const footerCopy = {
  en: {
    homeLabel: "Home",
    partnershipLabel: "Partnership",
    contactLabel: "Contact",
    homeLinks: [
      { href: "/#top", label: "Overview" },
      { href: "/#casino", label: "Games" },
      { href: "/#sports", label: "Sports" },
      { href: "/#promos", label: "What we offer" },
    ],
    partnershipLinks: [
      { href: "/partnership#benefits", label: "Why Us" },
      { href: "/partnership#steps", label: "Onboarding" },
      { href: "/partnership#paths", label: "Models" },
      { href: "/partnership#tools", label: "Reporting" },
    ],
    contactLinks: [
      { href: "#", label: "Contact on WhatsApp" },
      { href: "#", label: "Contact on Telegram" },
    ],
  },
  fr: {
    homeLabel: "Accueil",
    partnershipLabel: "Partenariat",
    contactLabel: "Contact",
    homeLinks: [
      { href: "/#top", label: "Vue d'ensemble" },
      { href: "/#casino", label: "Jeux" },
      { href: "/#sports", label: "Sports" },
      { href: "/#promos", label: "Nos offres" },
    ],
    partnershipLinks: [
      { href: "/partnership#benefits", label: "Pourquoi nous" },
      { href: "/partnership#steps", label: "Onboarding" },
      { href: "/partnership#paths", label: "Modeles" },
      { href: "/partnership#tools", label: "Reporting" },
    ],
    contactLinks: [
      { href: "#", label: "Contacter sur WhatsApp" },
      { href: "#", label: "Contacter sur Telegram" },
    ],
  },
  ar: {
    homeLabel: "الرئيسية",
    partnershipLabel: "الشراكة",
    contactLabel: "التواصل",
    homeLinks: [
      { href: "/#top", label: "نظرة عامة" },
      { href: "/#casino", label: "الألعاب" },
      { href: "/#sports", label: "الرياضة" },
      { href: "/#promos", label: "ما نقدمه" },
    ],
    partnershipLinks: [
      { href: "/partnership#benefits", label: "لماذا نحن" },
      { href: "/partnership#steps", label: "الانضمام" },
      { href: "/partnership#paths", label: "النماذج" },
      { href: "/partnership#tools", label: "التقارير" },
    ],
    contactLinks: [
      { href: "#", label: "تواصل عبر واتساب" },
      { href: "#", label: "تواصل عبر تيليجرام" },
    ],
  },
} as const;

export default function Footer() {
  const { language, t } = useLanguage();
  const isArabic = language === "ar";
  const copy = footerCopy[language];

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="relative mt-auto border-t border-[#2BB673]/18 bg-transparent"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2BB673]/55 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.78fr_0.78fr_0.94fr] lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label={t.footer.brand[language]}
              className="inline-flex max-w-full"
            >
              <MelbetAnimatedLogo decorative size="md" />
            </Link>
          </div>

          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8EE8B6]">
              {copy.homeLabel}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {copy.homeLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-start text-[15px] text-white/82 transition-colors duration-300 hover:text-[#D7F76B]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8EE8B6]">
              {copy.partnershipLabel}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {copy.partnershipLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-start text-[15px] text-white/82 transition-colors duration-300 hover:text-[#D7F76B]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8EE8B6]">
              {copy.contactLabel}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {copy.contactLinks.map((link, index) => (
                <Link
                  key={`${link.href}-${index}`}
                  href={link.href}
                  className="w-fit text-start text-[15px] text-white/82 transition-colors duration-300 hover:text-[#D7F76B]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-xs text-white/42">
          <p>{t.footer.copyright[language]}</p>
        </div>
      </div>
    </footer>
  );
}
