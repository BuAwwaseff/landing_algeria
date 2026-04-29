"use client";

import Link from "next/link";
import { useLanguage } from "@/app/layout/LanguageProvider";
import { FadeUp, StaggerReveal } from "@/app/motion/Reveal";

const partnerTickerItemsByLanguage = {
  en: [
    "agent route open",
    "weekly report active",
    "partner path ready",
    "mobile traffic flow",
  ],
  fr: [
    "route agent ouverte",
    "rapport hebdo actif",
    "parcours partenaire pret",
    "flux mobile actif",
  ],
  ar: [
    "مسار الوكيل مفتوح",
    "التقرير الاسبوعي نشط",
    "مسار الشريك جاهز",
    "تدفق الجوال نشط",
  ],
} as const;
void partnerTickerItemsByLanguage;

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
        <linearGradient id="algeria-flag-wash" x1="26" y1="60" x2="94" y2="60">
          <stop offset="0%" stopColor="#2BB673" stopOpacity="0.24" />
          <stop offset="47%" stopColor="#2BB673" stopOpacity="0.1" />
          <stop offset="53%" stopColor="#FFFFFF" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      <g className="algeria-emblem-group">
        <ellipse
          className="algeria-emblem-flagwash"
          cx="60"
          cy="60"
          rx="35"
          ry="29"
          fill="url(#algeria-flag-wash)"
        />
        <rect
          className="algeria-emblem-seam"
          x="59.1"
          y="31"
          width="1.8"
          height="58"
          rx="999"
          fill="#FFFFFF"
          opacity="0.24"
        />

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

function LiveDot() {
  return (
    <span
      className="al-live-dot inline-block h-2.5 w-2.5 rounded-full bg-[#2BB673] shadow-[0_0_16px_rgba(43,182,115,0.62)]"
      aria-hidden="true"
    />
  );
}

function HeroStageBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(43,182,115,0.18)_0%,rgba(43,182,115,0.08)_48%,rgba(255,255,255,0.18)_52%,rgba(255,255,255,0.08)_100%)] blur-[2px]" />
      <div className="absolute left-[26%] top-[32%] h-[38%] w-[20%] rounded-full bg-[#2BB673]/8 blur-2xl" />
      <div className="absolute right-[25%] top-[31%] h-[34%] w-[18%] rounded-full bg-white/12 blur-2xl" />
      <div className="absolute left-1/2 top-1/2 h-[56%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/24 to-transparent" />
    </div>
  );
}

function HeroStageFrame() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="absolute h-[78%] w-[78%] rounded-full border border-white/8" />
      <div className="absolute h-[62%] w-[62%] rounded-full border border-[#2BB673]/18" />
      <div className="absolute h-[46%] w-[46%] rounded-full border border-white/6" />
      <div className="absolute top-1/2 h-px w-[74%] -translate-y-1/2 bg-gradient-to-r from-transparent via-white/14 to-transparent" />
      <div className="absolute left-1/2 top-[22%] h-[56%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#2BB673]/24 to-transparent" />
      <div className="absolute left-[22%] top-[34%] h-4 w-4 rounded-full border border-[#2BB673]/20 bg-[#2BB673]/10 animate-[stepPulse_3.4s_ease-in-out_infinite]" />
      <div className="absolute right-[23%] top-[30%] h-3 w-3 rounded-full border border-white/14 bg-white/10 animate-[stepPulse_3.4s_ease-in-out_infinite_0.4s]" />
      <div className="absolute bottom-[23%] left-[30%] h-px w-16 bg-gradient-to-r from-transparent via-[#2BB673]/26 to-transparent" />
    </div>
  );
}

export default function HeroSection() {
  const { language, t } = useLanguage();
  const isArabic = language === "ar";

  return (
    <section id="top" className="relative px-4 pb-12 pt-12 sm:px-8 sm:pb-14 sm:pt-14 lg:px-12 lg:pb-20 lg:pt-10">
      <div className="mx-auto max-w-7xl">
        <StaggerReveal
          immediate
          amount={0.15}
          className="relative overflow-hidden px-0 py-6 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[34%] top-[56px] h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[#2BB673]/8 blur-3xl sm:left-[38%] sm:top-[72px] sm:h-[280px] sm:w-[280px]" />
            <div className="absolute right-[8%] top-[62px] h-[160px] w-[160px] rounded-full bg-[#F44336]/5 blur-3xl sm:right-[14%] sm:top-[90px] sm:h-[220px] sm:w-[220px] sm:bg-[#F44336]/6" />
          </div>

          <div className="relative z-10 grid gap-8 sm:gap-9 lg:gap-10">
            <div className="text-center">
              <FadeUp>
                <div className="inline-flex items-center gap-3 rounded-full border border-[#2BB673]/24 bg-[#2BB673]/10 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2BB673] shadow-[0_12px_30px_rgba(43,182,115,0.08)] sm:px-4 sm:text-[12px]">
                  <LiveDot />
                  {t.hero.eyebrow[language]}
                </div>
              </FadeUp>
            </div>

            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(220px,0.72fr)] lg:gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.75fr)]">
              <FadeUp className="order-1 w-full min-w-0 lg:order-2">
                <div className="relative flex w-full min-w-0 items-center justify-center lg:justify-center">
                  <div className="relative flex min-h-[190px] w-full items-center justify-center pb-2 sm:min-h-[240px] sm:pb-8 lg:min-h-[380px] lg:items-end lg:pb-16">
                    <div className="relative flex h-[180px] w-[180px] items-center justify-center sm:h-[240px] sm:w-[240px] sm:-translate-y-2 lg:h-[320px] lg:w-[320px] lg:-translate-y-10 xl:h-[360px] xl:w-[360px]">
                      <div className="pointer-events-none absolute h-[64%] w-[64%] rounded-full bg-[#2BB673]/8 blur-3xl" />
                      <div className="pointer-events-none absolute h-[50%] w-[50%] rounded-full bg-[#F44336]/6 blur-3xl" />
                      <HeroStageBackdrop />
                      <HeroStageFrame />
                      <AlgerianCrescentStar className="relative z-10 h-[152px] w-[152px] opacity-95 sm:h-[198px] sm:w-[198px] lg:h-[250px] lg:w-[250px] xl:h-[290px] xl:w-[290px]" />
                    </div>
                  </div>
                </div>
              </FadeUp>

              <div
                dir={isArabic ? "rtl" : "ltr"}
                className={`order-2 flex w-full min-w-0 flex-col items-center text-center lg:order-1 lg:items-start ${
                  isArabic ? "lg:text-right" : "lg:text-left"
                }`}
              >
                <FadeUp>
                  <div
                    className={`mx-auto w-full ${
                      isArabic
                        ? "max-w-[14ch] sm:max-w-[26ch] md:max-w-[30ch] lg:mx-0 lg:max-w-[24ch] xl:max-w-[100ch]"
                        : "max-w-[13ch] sm:max-w-[24ch] md:max-w-[28ch] lg:mx-0 lg:max-w-[20ch] xl:max-w-[100ch]"
                    }`}
                  >
                    <p className="text-[32px] font-semibold leading-[0.98] tracking-[-0.035em] text-[#F5F7F4] sm:text-[48px] lg:text-[58px] xl:text-[66px]">
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
                  <p className="mt-5 max-w-[38ch] text-[15px] leading-7 text-white/64 sm:mt-7 sm:text-base sm:leading-8 lg:max-w-[62ch]">
                    {t.hero.text[language]}
                  </p>
                </FadeUp>

                <FadeUp>
                  <div className="mt-8 grid w-full max-w-md gap-3 sm:mt-9 sm:max-w-none sm:flex sm:flex-wrap sm:items-center sm:justify-start sm:gap-4">
                    <Link
                      href="#final-cta"
                      className="inline-flex min-h-[56px] w-full items-center justify-center rounded-[18px] bg-[#2BB673] px-6 text-[18px] font-semibold tracking-[-0.02em] text-[#04110b] shadow-[0_16px_36px_rgba(43,182,115,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#39C884] sm:min-h-[64px] sm:w-auto sm:min-w-[210px] sm:text-[20px]"
                    >
                      {t.hero.primaryCta[language]}
                    </Link>

                    <Link
                      href="#steps"
                      className="inline-flex min-h-[56px] w-full items-center justify-center rounded-[18px] bg-white/[0.05] px-6 text-[18px] font-semibold tracking-[-0.02em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] sm:min-h-[64px] sm:w-auto sm:min-w-[210px] sm:text-[20px]"
                    >
                      {t.hero.secondaryCta[language]}
                    </Link>
                  </div>
                </FadeUp>
              </div>
            </div>

            <div className="h-px w-full bg-white/10" />

            <div className="grid gap-4 min-[560px]:grid-cols-2 xl:grid-cols-4">
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
