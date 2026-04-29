"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import MelbetAnimatedLogo from "./MelbetAnimatedLogo";
import { useLanguage } from "./LanguageProvider";

const topBarCopy = {
  en: {
    cta: "Get access",
    openMenu: "Open menu",
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
  },
  fr: {
    cta: "Obtenir l'acces",
    openMenu: "Ouvrir le menu",
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
  },
  ar: {
    cta: "احصل على الوصول",
    openMenu: "فتح القائمة",
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
  },
} as const;

type TopBarLanguage = keyof typeof topBarCopy;

type NavLinkItem = {
  href: string;
  label: string;
};

type NavItem = {
  href: string;
  label: string;
  children?: readonly NavLinkItem[];
};

function joinClasses(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

function normalizeItemPath(href: string) {
  const [withoutHash] = href.split("#");
  const [withoutQuery] = withoutHash.split("?");
  return withoutQuery || "/";
}

function isItemActive(item: NavItem, pathname: string) {
  const itemPath = normalizeItemPath(item.href);

  if (itemPath === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(itemPath);
}

function hasActiveChild(item: NavItem, pathname: string) {
  return (
    item.children?.some((child) =>
      pathname.startsWith(normalizeItemPath(child.href)),
    ) ?? false
  );
}

function BrandMark({ label }: { label: string }) {
  return (
    <Link
      href="/"
      dir="ltr"
      aria-label={label}
      className="inline-flex shrink-0 items-center"
    >
      <MelbetAnimatedLogo decorative size="sm" />
      <span className="sr-only">{label}</span>
    </Link>
  );
}

function Chevron({ isOpen = false }: { isOpen?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={joinClasses(
        "inline-block h-[10px] w-[10px] border-b-[1.5px] border-r-[1.5px] border-current transition-transform duration-200",
        isOpen ? "rotate-[225deg] translate-y-[1px]" : "rotate-45 -translate-y-px",
      )}
    />
  );
}

function LanguageSwitcher({ onChange }: { onChange?: () => void }) {
  const { language, setLanguage } = useLanguage();
  const options = [
    { key: "fr", label: "FR" },
    { key: "en", label: "EN" },
    { key: "ar", label: "AR" },
  ] as const;

  const activeIndex = options.findIndex((option) => option.key === language);

  return (
    <div
      dir="ltr"
      className="relative grid w-[152px] shrink-0 grid-cols-3 items-center self-start rounded-[16px] border border-white/10 bg-white/5 p-1"
    >
      <div
        className="absolute bottom-1 top-1 rounded-[12px] bg-[#2BB673] transition-transform duration-300 ease-out"
        style={{
          left: 4,
          width: "calc((100% - 8px) / 3)",
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />

      {options.map((option) => (
        <button
          key={option.key}
          type="button"
          onClick={() => {
            setLanguage(option.key);
            onChange?.();
          }}
          className={joinClasses(
            "relative z-10 flex min-h-[36px] items-center justify-center rounded-[12px] px-2 py-2 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors",
            language === option.key ? "text-white" : "text-white/72 hover:text-white",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default function TopBar() {
  const pathname = usePathname();
  const { language, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const copy = topBarCopy[language as TopBarLanguage];
  const isArabic = language === "ar";
  const isPartnershipPage = pathname.startsWith("/partnership");
  const ctaHref = isPartnershipPage ? "/partnership#final-cta" : "/#play";

  const navItems = useMemo<NavItem[]>(
    () => [
      {
        href: "/",
        label: t.topBar.home[language],
        children: copy.homeLinks,
      },
      {
        href: "/partnership",
        label: t.topBar.partnership[language],
        children: copy.partnershipLinks,
      },
    ],
    [
      copy.homeLinks,
      copy.partnershipLinks,
      language,
      t.topBar.home,
      t.topBar.partnership,
    ],
  );

  useEffect(() => {
    const closeMenu = () => {
      setMenuOpen(false);
      setMobileSubmenu(null);
    };

    window.addEventListener("hashchange", closeMenu);
    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("hashchange", closeMenu);
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  return (
    <header
      className="sticky top-0 z-40 px-3 pt-3 sm:px-4 sm:pt-4"
      dir="ltr"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-visible rounded-[34px] border border-[#2BB673]/24 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.008)),radial-gradient(circle_at_84%_0%,rgba(43,182,115,0.12),transparent_30%)] shadow-[0_24px_60px_rgba(0,0,0,0.24)] backdrop-blur-[18px]">
          <div className="pointer-events-none absolute inset-x-[18px] top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08)_24%,rgba(43,182,115,0.46)_50%,rgba(255,255,255,0.08)_76%,transparent)]" />

          <div className="relative flex min-h-[78px] items-center gap-4 px-4 py-3 sm:px-5 lg:px-6">
            <BrandMark label={t.footer.brand[language]} />

            <nav
              className="hidden min-w-0 flex-1 items-center justify-center gap-2 px-4 lg:flex"
            >
              {navItems.map((item) => {
                const active = isItemActive(item, pathname) || hasActiveChild(item, pathname);
                const linkTone = active
                  ? "text-white bg-[#2BB673]/10"
                  : "text-white/72 hover:text-white hover:bg-[#2BB673]/8";
                const textTone = isArabic
                  ? "tracking-normal"
                  : "uppercase tracking-[0.12em]";

                if (!item.children?.length) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={joinClasses(
                        "relative inline-flex min-h-[46px] items-center justify-center rounded-full px-[14px] text-[13px] font-semibold transition-[color,background-color,transform] duration-200",
                        textTone,
                        linkTone,
                      )}
                    >
                      <span dir={isArabic ? "rtl" : "ltr"} lang={language}>
                        {item.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className={joinClasses(
                          "pointer-events-none absolute inset-x-4 bottom-[7px] h-px origin-center scale-x-0 bg-[linear-gradient(90deg,transparent,#2BB673,transparent)] transition-transform duration-200",
                          active && "scale-x-100",
                        )}
                      />
                    </Link>
                  );
                }

                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={joinClasses(
                        "relative inline-flex min-h-[46px] items-center justify-center rounded-full px-[14px] text-[13px] font-semibold transition-[color,background-color,transform] duration-200",
                        textTone,
                        linkTone,
                      )}
                    >
                      <span className="inline-flex items-center gap-2">
                        <span dir={isArabic ? "rtl" : "ltr"} lang={language}>
                          {item.label}
                        </span>
                        <Chevron />
                      </span>
                      <span
                        aria-hidden="true"
                        className={joinClasses(
                          "pointer-events-none absolute inset-x-4 bottom-[7px] h-px origin-center scale-x-0 bg-[linear-gradient(90deg,transparent,#2BB673,transparent)] transition-transform duration-200",
                          active && "scale-x-100",
                          "group-hover:scale-x-100",
                        )}
                      />
                    </Link>

                    <div
                      className="pointer-events-none absolute left-0 top-[calc(100%+8px)] z-50 min-w-[210px] translate-y-2 invisible opacity-0 transition-[opacity,visibility,transform] duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <div className="grid gap-[6px] rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015)),radial-gradient(circle_at_top,rgba(43,182,115,0.1),transparent_58%)] p-[10px] shadow-[0_24px_60px_rgba(0,0,0,0.24)] backdrop-blur-[18px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="inline-flex min-h-[38px] items-center rounded-[14px] px-3 text-[14px] text-white/72 transition-[color,background-color] duration-200 hover:bg-[#2BB673]/10 hover:text-white"
                          >
                            <span dir={isArabic ? "rtl" : "ltr"} lang={language}>
                              {child.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            <div
              className="ml-auto hidden shrink-0 items-center gap-3 lg:flex"
            >
              <LanguageSwitcher />
              <Link
                href={ctaHref}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#2BB673] px-5 text-[13px] font-semibold text-[#04110b] shadow-[0_18px_32px_rgba(43,182,115,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#39C884]"
              >
                <span dir={isArabic ? "rtl" : "ltr"} lang={language}>
                  {copy.cta}
                </span>
              </Link>
            </div>

            <div className="absolute end-4 top-1/2 flex -translate-y-1/2 items-center gap-2 lg:hidden">
              <button
                type="button"
                className={joinClasses(
                  "inline-flex h-11 w-11 items-center justify-center rounded-[16px] border border-white/8 bg-white/[0.03] text-white transition duration-200",
                  menuOpen && "border-[#2BB673]/28 bg-[#2BB673]/12 text-[#2BB673]",
                )}
                onClick={() => setMenuOpen((current) => !current)}
                aria-expanded={menuOpen}
                aria-label={copy.openMenu}
              >
                <span className="relative block h-4 w-4">
                  <span
                    className={joinClasses(
                      "absolute left-0 top-[2px] h-px w-full bg-current transition duration-300 ease-out",
                      menuOpen && "translate-y-[6px] rotate-45",
                    )}
                  />
                  <span
                    className={joinClasses(
                      "absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current transition duration-300 ease-out",
                      menuOpen && "opacity-0",
                    )}
                  />
                  <span
                    className={joinClasses(
                      "absolute bottom-[2px] left-0 h-px w-full bg-current transition duration-300 ease-out",
                      menuOpen && "-translate-y-[6px] -rotate-45",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {menuOpen ? (
          <div className="mt-3 lg:hidden">
            <div className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015)),radial-gradient(circle_at_top,rgba(43,182,115,0.1),transparent_60%)] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.24)] backdrop-blur-[18px]">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const itemOpen = mobileSubmenu === item.href;

                  if (!item.children?.length) {
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="rounded-[18px] border border-white/6 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white/72 transition-colors hover:bg-[#2BB673]/8 hover:text-white"
                      >
                        <span dir={isArabic ? "rtl" : "ltr"} lang={language}>
                          {item.label}
                        </span>
                      </Link>
                    );
                  }

                  return (
                    <div key={item.href} className="grid gap-2">
                      <div dir="ltr" className="flex items-center gap-2">
                        <button
                          type="button"
                          className={joinClasses(
                            "inline-flex h-11 w-11 items-center justify-center rounded-[16px] border border-white/8 bg-white/[0.03] text-white transition duration-200",
                            itemOpen && "border-[#2BB673]/28 bg-[#2BB673]/12 text-[#2BB673]",
                          )}
                          aria-expanded={itemOpen}
                          aria-label={`Toggle ${item.label}`}
                          onClick={() =>
                            setMobileSubmenu((current) =>
                              current === item.href ? null : item.href,
                            )
                          }
                        >
                          <Chevron isOpen={itemOpen} />
                        </button>

                        <Link
                          href={item.href}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileSubmenu(null);
                          }}
                          className={joinClasses(
                            "min-w-0 flex-1 rounded-[18px] border border-white/6 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white/72 transition-colors hover:bg-[#2BB673]/8 hover:text-white",
                            isArabic ? "text-right" : "text-left",
                          )}
                        >
                          <span dir={isArabic ? "rtl" : "ltr"} lang={language}>
                            {item.label}
                          </span>
                        </Link>
                      </div>

                      {itemOpen ? (
                        <div className="grid gap-[6px] border-t border-white/6 pt-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => {
                                setMenuOpen(false);
                                setMobileSubmenu(null);
                              }}
                              className={joinClasses(
                                "inline-flex min-h-[38px] items-center rounded-[14px] px-3 text-[14px] text-white/72 transition-[color,background-color] duration-200 hover:bg-[#2BB673]/10 hover:text-white",
                                isArabic ? "justify-end text-right" : "justify-start text-left",
                              )}
                            >
                              <span dir={isArabic ? "rtl" : "ltr"} lang={language}>
                                {child.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </nav>

              <div className="mt-4 flex flex-col gap-3">
                <LanguageSwitcher
                  onChange={() => {
                    setMenuOpen(false);
                    setMobileSubmenu(null);
                  }}
                />

                <Link
                  href={ctaHref}
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileSubmenu(null);
                  }}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#2BB673] px-5 text-[15px] font-semibold text-[#04110b] shadow-[0_18px_32px_rgba(43,182,115,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#39C884]"
                >
                  <span dir={isArabic ? "rtl" : "ltr"} lang={language}>
                    {copy.cta}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
