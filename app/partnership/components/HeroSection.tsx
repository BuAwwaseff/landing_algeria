"use client";

import Link from "next/link";
import { useLanguage } from "@/app/layout/LanguageProvider";
import { FadeUp, StaggerReveal } from "./Reveal";

function AlgerianCrescentStar({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      className={`${className} algeria-emblem`}
      fill="none"
    >
      <defs>
        <mask id="algeria-crescent-mask">
          <rect width="120" height="120" fill="white" />
          <circle cx="63" cy="60" r="23" fill="black" />
        </mask>
      </defs>

      <g className="algeria-emblem-group">
        <g className="algeria-emblem-glow">
          <circle
            cx="54"
            cy="60"
            r="30"
            fill="#F44336"
            mask="url(#algeria-crescent-mask)"
            opacity="0.9"
          />
          <path
            d="M80 60
               L84.11 68.49
               L93.51 69.85
               L86.75 76.37
               L88.35 85.65
               L80 81.2
               L71.65 85.65
               L73.25 76.37
               L66.49 69.85
               L75.89 68.49
               Z"
            fill="#F44336"
            opacity="0.95"
            transform="rotate(-30 50 90)"
          />
        </g>

        <g className="algeria-emblem-core">
          <circle
            cx="54"
            cy="60"
            r="30"
            fill="#F44336"
            mask="url(#algeria-crescent-mask)"
          />
          <path
            d="M80 60
               L84.11 68.49
               L93.51 69.85
               L86.75 76.37
               L88.35 85.65
               L80 81.2
               L71.65 85.65
               L73.25 76.37
               L66.49 69.85
               L75.89 68.49
               Z"
            fill="#F44336"
            transform="rotate(-30 50 90)"
          />
        </g>
      </g>
    </svg>
  );
}

function HeroStatCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="group relative flex h-full min-h-[168px] flex-col overflow-hidden rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))] p-5 text-start shadow-[0_18px_44px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-500 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:border-white/14 hover:shadow-[0_28px_60px_rgba(0,0,0,0.3),0_0_30px_rgba(43,182,115,0.08),inset_0_1px_0_rgba(255,255,255,0.05)]">
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#2BB673]/40 to-transparent transition duration-500 group-hover:via-[#2BB673]/80" />
      <div className="pointer-events-none absolute -left-10 top-6 h-24 w-24 rounded-full bg-[#2BB673]/0 blur-2xl transition duration-500 group-hover:bg-[#2BB673]/12" />
      <div className="pointer-events-none absolute -right-8 bottom-2 h-20 w-20 rounded-full bg-[#F44336]/0 blur-2xl transition duration-500 group-hover:bg-[#F44336]/10" />

      <div className="relative z-10">
        <div className="lp-card-title text-[#2BB673] transition duration-300 group-hover:text-[#39C884]">
          {title}
        </div>

        <p className="mt-3 lp-body-sm text-white/60 transition duration-300 group-hover:text-white/76">
          {text}
        </p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { language, t } = useLanguage();
  const isArabic = language === "ar";

  return (
    <section className="relative px-6 pb-20 pt-20 sm:px-8 sm:pt-24 lg:px-12 lg:pb-24 lg:pt-10">
      <div className="mx-auto max-w-7xl">
        <StaggerReveal
          immediate
          amount={0.15}
          className="relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[38%] top-[72px] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#2BB673]/8 blur-3xl" />
            <div className="absolute right-[14%] top-[90px] h-[220px] w-[220px] rounded-full bg-[#F44336]/6 blur-3xl" />
          </div>

          <div className="relative z-10 grid gap-10">
            <div className="text-center">
              <FadeUp>
                <div className="inline-flex items-center gap-4 text-[18px] font-medium tracking-[-0.02em] text-[#2BB673] sm:text-[22px]">
                  <span className="h-px w-10 bg-[#2BB673]/45" />
                  {t.hero.eyebrow[language]}
                  <span className="h-px w-10 bg-[#2BB673]/45" />
                </div>
              </FadeUp>
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(220px,0.72fr)] lg:gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.75fr)]">
              <div
                dir={isArabic ? "rtl" : "ltr"}
                className={`flex flex-col items-start ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                <FadeUp>
                  <div
                    className={`w-full ${
                      isArabic
                        ? "max-w-[24ch] sm:max-w-[26ch] md:max-w-[30ch] lg:max-w-[24ch] xl:max-w-[100ch]"
                        : "max-w-[22ch] sm:max-w-[24ch] md:max-w-[28ch] lg:max-w-[20ch] xl:max-w-[100ch]"
                    }`}
                  >
                    <p className="text-[38px] font-semibold leading-[0.94] tracking-[-0.055em] text-[#F5F7F4] sm:text-[48px] lg:text-[58px] xl:text-[66px]">
                      <>
                        {t.hero.before[language]}{" "}
                        <span className="glow-green text-[#2BB673]">
                          {t.hero.glowOne[language]}
                        </span>{" "}
                        {t.hero.middle[language]}{" "}
                        <span className="glow-green text-[#2BB673]">
                          {t.hero.glowTwo[language]}
                        </span>
                      </>
                    </p>
                  </div>
                </FadeUp>

                <FadeUp>
                  <p className="mt-8 max-w-[62ch] text-base leading-8 text-white/60">
                    {t.hero.text[language]}
                  </p>
                </FadeUp>

                <FadeUp>
                  <div className="mt-10 flex flex-wrap items-center justify-start gap-4">
                    <Link
                      href="#final-cta"
                      className="inline-flex min-h-[68px] min-w-[220px] items-center justify-center rounded-[20px] bg-[#2BB673] px-8 text-[22px] font-semibold tracking-[-0.04em] text-[#04110b] shadow-[0_16px_36px_rgba(43,182,115,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#39C884]"
                    >
                      {t.hero.primaryCta[language]}
                    </Link>

                    <Link
                      href="#how-it-works"
                      className="inline-flex min-h-[68px] min-w-[220px] items-center justify-center rounded-[20px] bg-white/[0.05] px-8 text-[22px] font-semibold tracking-[-0.04em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
                    >
                      {t.hero.secondaryCta[language]}
                    </Link>
                  </div>
                </FadeUp>
              </div>

              <FadeUp>
                <div className="relative flex min-h-[220px] items-center justify-center lg:min-h-[320px]">
                  <div className="pointer-events-none absolute h-[64%] w-[64%] rounded-full bg-[#2BB673]/8 blur-3xl" />
                  <div className="pointer-events-none absolute h-[50%] w-[50%] rounded-full bg-[#F44336]/6 blur-3xl" />

                  <AlgerianCrescentStar className="relative z-10 h-[170px] w-[170px] opacity-95 sm:h-[210px] sm:w-[210px] lg:h-[250px] lg:w-[250px] xl:h-[290px] xl:w-[290px]" />
                </div>
              </FadeUp>
            </div>

            <div className="h-px w-full bg-white/10" />

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <FadeUp>
                <HeroStatCard
                  title={t.hero.cards.earn.title[language]}
                  text={t.hero.cards.earn.text[language]}
                />
              </FadeUp>

              <FadeUp>
                <HeroStatCard
                  title={t.hero.cards.grow.title[language]}
                  text={t.hero.cards.grow.text[language]}
                />
              </FadeUp>

              <FadeUp>
                <HeroStatCard
                  title={t.hero.cards.build.title[language]}
                  text={t.hero.cards.build.text[language]}
                />
              </FadeUp>

              <FadeUp>
                <HeroStatCard
                  title={t.hero.cards.trust.title[language]}
                  text={t.hero.cards.trust.text[language]}
                />
              </FadeUp>
            </div>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}