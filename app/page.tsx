"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  casinoCardsByLanguage,
  homeCopy as copy,
  homeSurfaceCopy,
  liveMatches,
  rewardGalleryCardsByLanguage,
  sportsShowcaseCopy,
  type HomeLanguage,
  type RewardCardData,
} from "@/lib/home-content";
import { useLanguage } from "./layout/LanguageProvider";
import { FadeUp, StaggerReveal } from "./motion/Reveal";

const phonePalette = {
  accent: "#2BB673",
  accentBorderSoft: "rgba(43, 182, 115, 0.18)",
  accentBorder: "rgba(43, 182, 115, 0.24)",
  accentFill: "rgba(43, 182, 115, 0.12)",
  accentText: "#5be39b",
  accentSoftText: "#8EE8B6",
  highlight: "#5BE39B",
  highlightBorder: "rgba(91, 227, 155, 0.32)",
  highlightFill: "rgba(91, 227, 155, 0.14)",
  darkText: "#07100a",
} as const;

function LiveDot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`al-live-dot inline-block h-2.5 w-2.5 rounded-full bg-[#2BB673] shadow-[0_0_16px_rgba(43,182,115,0.62)] ${className}`}
      aria-hidden="true"
    />
  );
}

function Team({
  name,
  logo,
  score,
}: {
  name: string;
  logo: string;
  score: number;
}) {
  return (
    <div className="min-w-0">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <Image
          src={logo}
          alt=""
          width={36}
          height={36}
          sizes="36px"
          className="h-8 w-8 object-contain"
        />
      </div>
      <div className="mt-2 truncate text-center text-[11px] font-semibold text-white/76">
        {name}
      </div>
      <div className="mt-1 text-center text-[26px] font-semibold leading-none text-white">
        {score}
      </div>
    </div>
  );
}

function MatchCard({
  match,
  ui,
  isArabic = false,
}: {
  match: (typeof liveMatches)[number];
  ui: (typeof homeSurfaceCopy)[HomeLanguage];
  isArabic?: boolean;
}) {
  const labels = ["1", "X", "2"];

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="pointer-events-none absolute inset-3 z-10 flex flex-col rounded-[22px] border border-white/12 bg-[linear-gradient(180deg,rgba(20,20,20,0.98),rgba(6,6,6,0.98))] p-3 shadow-[0_18px_42px_rgba(0,0,0,0.56),inset_0_1px_0_rgba(255,255,255,0.08)]"
    >
      <div
        className="pointer-events-none absolute inset-x-5 top-0 h-px"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent, rgba(43, 182, 115, 0.55), transparent)",
        }}
      />
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="inline-flex min-w-0 items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-block h-2 w-2 shrink-0 rounded-full"
            style={{ backgroundColor: phonePalette.accent }}
          />
          <span className="truncate text-[10px] font-semibold uppercase tracking-[0.16em] text-white/48">
            {match.league}
          </span>
        </div>
        <span
          className="shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold"
          style={{
            borderColor: phonePalette.accentBorder,
            backgroundColor: phonePalette.accentFill,
            color: phonePalette.accentText,
          }}
        >
          {match.time}
        </span>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <Team {...match.home} />
        <div className="rounded-full border border-white/10 bg-black/24 px-2.5 py-1 text-[11px] font-semibold text-white/54">
          VS
        </div>
        <Team {...match.away} />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {match.odds.map((odd, oddIndex) => (
          <button
            key={`${match.league}-${odd}`}
            type="button"
            className="rounded-[12px] border border-white/10 bg-[#111111] px-2 py-2 text-start shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:bg-[#171717]"
          >
            <span className="block text-[9px] font-semibold uppercase tracking-[0.14em] text-white/34">
              {labels[oddIndex]}
            </span>
            <span
              className="mt-0.5 block text-[16px] font-semibold"
              style={{ color: phonePalette.highlight }}
            >
              {odd}
            </span>
          </button>
        ))}
      </div>

      <div className="relative mt-4 overflow-hidden rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(0,0,0,0.38))] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div className="pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="relative -translate-y-0.5 grid grid-cols-[0.95fr_1.05fr] gap-2">
          <button
            type="button"
            className="min-h-[30px] rounded-full border border-white/10 bg-white/[0.045] px-3 text-[9px] font-semibold text-white/76"
          >
            {ui.phoneSeeLineup}
          </button>
          <button
            type="button"
            className="min-h-[30px] rounded-full px-3 text-[9px] font-bold"
            style={{
              backgroundColor: phonePalette.accent,
              color: "#04110b",
            }}
          >
            {ui.phonePlaceBet}
          </button>
        </div>
      </div>
    </div>
  );
}

function PhoneMockup() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const ui = homeSurfaceCopy[language as HomeLanguage];
  const loopedMatches = [...liveMatches, liveMatches[0]];
  const [activeMatchIndex, setActiveMatchIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveMatchIndex((current) => current + 1);
    }, 3800);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (transitionEnabled) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      setTransitionEnabled(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [transitionEnabled]);

  const visibleMatchIndex =
    activeMatchIndex === liveMatches.length ? 0 : activeMatchIndex;

  const handleTrackTransitionEnd = () => {
    if (activeMatchIndex !== liveMatches.length) {
      return;
    }

    setTransitionEnabled(false);
    setActiveMatchIndex(0);
  };

  return (
    <div
      dir="ltr"
      className="relative mx-auto w-full max-w-[336px] sm:max-w-[390px] lg:mx-0"
    >
      <div className="relative overflow-hidden rounded-[36px] border border-white/14 bg-[linear-gradient(180deg,#0e0e0e,#030303)] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.52)]">
        <div className="pointer-events-none absolute inset-[10px] rounded-[31px] border border-white/8" />
        <div
          className="pointer-events-none absolute inset-[15px] rounded-[28px] border"
          style={{ borderColor: phonePalette.accentBorderSoft }}
        />
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/52 to-transparent" />
        <div
          className="pointer-events-none absolute inset-y-12 start-0 w-px"
          style={{
            backgroundImage:
              "linear-gradient(180deg, transparent, rgba(43, 182, 115, 0.34), transparent)",
          }}
        />
        <div className="pointer-events-none absolute inset-y-12 end-0 w-px bg-gradient-to-b from-transparent via-white/24 to-transparent" />
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,#111111,#050505)] p-3"
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/38">
                {ui.phoneBadge}
              </div>
              <div className="mt-1 text-[20px] font-semibold tracking-[-0.04em] text-white">
                {ui.phoneTitle}
              </div>
            </div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold"
              style={{
                backgroundColor: phonePalette.highlight,
                color: phonePalette.darkText,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: phonePalette.darkText }}
              />
              {ui.phoneStatus}
            </div>
          </div>

          <div className="mb-3 grid grid-cols-3 gap-2 text-center">
            {ui.phoneTabs.map((item, index) => (
              <div
                key={item}
                className={`rounded-[13px] border px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                  index === 0
                    ? ""
                    : "border-white/8 bg-white/[0.035] text-white/44"
                }`}
                style={
                  index === 0
                    ? {
                        borderColor: phonePalette.highlightBorder,
                        backgroundColor: phonePalette.highlightFill,
                        color: phonePalette.highlight,
                      }
                    : undefined
                }
              >
                {item}
              </div>
            ))}
          </div>

          <div className="relative h-[322px] overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#050505,#0c0c0c)]">
            <div className="pointer-events-none absolute inset-[1px] z-0 rounded-[23px] border border-white/6" />
            <div
              className="pointer-events-none absolute inset-x-7 top-0 z-[1] h-px"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, transparent, rgba(43, 182, 115, 0.6), transparent)",
              }}
            />
            <div className="pointer-events-none absolute inset-y-5 left-0 z-[1] w-px bg-gradient-to-b from-transparent via-white/16 to-transparent" />
            <div
              className="pointer-events-none absolute inset-y-7 right-0 z-[1] w-px"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, transparent, rgba(43, 182, 115, 0.26), transparent)",
              }}
            />

            <div
              dir="ltr"
              className="relative z-10 flex h-full"
              style={{
                transform: `translate3d(-${activeMatchIndex * 100}%, 0, 0)`,
                transition: transitionEnabled
                  ? "transform 760ms cubic-bezier(0.22, 1, 0.36, 1)"
                  : "none",
              }}
              onTransitionEnd={handleTrackTransitionEnd}
            >
              {loopedMatches.map((match, matchIndex) => (
                <div
                  key={`${match.league}-${matchIndex}`}
                  className="relative h-full min-w-full overflow-hidden"
                >
                  <MatchCard match={match} ui={ui} isArabic={isArabic} />
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-0 z-20 rounded-[24px] shadow-[inset_0_10px_14px_rgba(255,255,255,0.06)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-10 rounded-t-[24px] bg-gradient-to-b from-white/10 to-transparent" />
          </div>

          <div className="mt-3 flex items-center justify-center gap-2">
            {liveMatches.map((match, matchIndex) => (
              <span
                key={`${match.league}-indicator`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  matchIndex === visibleMatchIndex
                    ? "w-6 bg-[#2BB673]"
                    : "w-2 bg-white/18"
                }`}
                aria-hidden="true"
              />
            ))}
          </div>

          <div className="mt-3 rounded-[18px] border border-white/8 bg-black/18 p-3">
            <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/40">
              <span>{ui.phoneHotMarkets}</span>
              <span style={{ color: phonePalette.highlight }}>
                {ui.phoneUpdating}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {ui.phoneMarketChips.map((item) => (
                <div
                  key={item}
                  className="rounded-[12px] border border-white/8 bg-white/[0.035] px-2 py-2 text-center text-[10px] font-semibold text-white/56"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RewardVisualCard({
  card,
  ctaLabel,
  className,
}: {
  card: RewardCardData;
  ctaLabel: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] border border-white/8 bg-[#09110c] shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-[#2BB673]/22 ${className ?? ""}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(7,12,9,0.04), rgba(7,12,9,0.14) 32%, rgba(6,10,8,0.92) 100%), radial-gradient(circle at 22% 18%, rgba(43,182,115,0.22), transparent 30%), url('${card.imageSrc}')`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%,rgba(0,0,0,0.14)_55%,rgba(5,8,6,0.9)_100%)]" />
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#2BB673]/34 to-transparent" />

      <div className="relative flex min-h-[250px] flex-col justify-end p-5">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8EE8B6]">
          {card.kicker}
        </div>
        <h3 className="mt-3 max-w-[12ch] text-[28px] font-semibold leading-tight text-white">
          {card.title}
        </h3>
        <p className="mt-3 max-w-[24ch] text-[15px] leading-7 text-white/72">
          {card.text}
        </p>
        <div className="mt-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#D7F76B]">
          {ctaLabel}
        </div>
      </div>
    </div>
  );
}

function RewardShowcase() {
  const { language } = useLanguage();
  const cards = rewardGalleryCardsByLanguage[language as HomeLanguage];
  const ui = homeSurfaceCopy[language as HomeLanguage];

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <div key={card.title}>
          <RewardVisualCard
            card={card}
            ctaLabel={ui.rewardExplore}
            className="h-full"
          />
        </div>
      ))}
    </div>
  );
}

function fillTeamLabel(template: string, team: string) {
  return template.replace("{team}", team);
}

function SportsShowcase() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const ui = homeSurfaceCopy[language as HomeLanguage];
  const showcase = sportsShowcaseCopy[language as HomeLanguage];
  const featuredMatch = liveMatches[0];
  const secondaryMatches = liveMatches.slice(1, 4);
  const labels = ["1", "X", "2"];
  const quickRows = [
    {
      label: ui.phoneFullTime,
      value: fillTeamLabel(ui.phoneHomeToWin, featuredMatch.home.name),
      odd: featuredMatch.odds[0],
    },
    {
      label: ui.phoneLiveSpecial,
      value: fillTeamLabel(ui.phoneAwayToScore, featuredMatch.away.name),
      odd: "1.58",
    },
    {
      label: ui.phoneHotMarkets,
      value: ui.phoneMarketChips[1],
      odd: ui.phoneMarketChips[0],
    },
  ];

  return (
    <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <FadeUp className="h-full">
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className="relative h-full overflow-hidden rounded-[32px] border border-white/8 bg-[linear-gradient(135deg,rgba(43,182,115,0.16),rgba(255,255,255,0.04)_46%,rgba(244,67,54,0.1))] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:p-6"
        >
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#2BB673]/45 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(43,182,115,0.18),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(255,255,255,0.08),transparent_24%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-[18%] hidden w-px bg-gradient-to-b from-transparent via-white/8 to-transparent xl:block" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2BB673]/22 bg-[#2BB673]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2BB673]">
              <LiveDot />
              {showcase.badge}
            </div>

            <h3 className="mt-4 max-w-none text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#F5F7F4] sm:text-[40px]">
              {showcase.spotlightTitle}
            </h3>
            <p className="mt-4 max-w-none text-[15px] leading-7 text-white/68 sm:text-[16px]">
              {showcase.spotlightText}
            </p>

            <div className="mt-6 rounded-[26px] border border-white/8 bg-black/18 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8EE8B6]">
                    {featuredMatch.league}
                  </div>
                  <div className="mt-2 text-[24px] font-semibold tracking-[-0.03em] text-white sm:text-[28px]">
                    {featuredMatch.home.name}{" "}
                    <span className="text-white/36">vs</span>{" "}
                    {featuredMatch.away.name}
                  </div>
                </div>
                <div className="rounded-full border border-[#2BB673]/18 bg-[#2BB673]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8EE8B6]">
                  {featuredMatch.league}
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[featuredMatch.home, featuredMatch.away].map((team) => (
                  <div
                    key={team.name + "-featured"}
                    className="flex items-center justify-between gap-3 rounded-[20px] border border-white/8 bg-white/[0.04] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] p-2">
                        <Image
                          src={team.logo}
                          alt=""
                          width={32}
                          height={32}
                          sizes="32px"
                          className="h-8 w-8 object-contain"
                        />
                      </div>
                      <div className="truncate text-[15px] font-semibold text-white/82">
                        {team.name}
                      </div>
                    </div>
                    <div className="text-[28px] font-semibold leading-none text-white">
                      {team.score}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {featuredMatch.odds.map((odd, oddIndex) => (
                  <div
                    key={`${featuredMatch.league}-${labels[oddIndex]}`}
                    className="rounded-[16px] border border-white/8 bg-white/[0.04] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/38">
                      {labels[oddIndex]}
                    </div>
                    <div className="mt-1 text-[18px] font-semibold text-[#8EE8B6]">
                      {odd}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {secondaryMatches.map((match) => (
                  <div
                    key={match.league + "-secondary"}
                    className="rounded-[18px] border border-white/8 bg-white/[0.035] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/42">
                      {match.league}
                    </div>
                    <div className="mt-2 text-[13px] font-semibold text-white/78">
                      {match.home.name}{" "}
                      <span className="text-white/36">vs</span>{" "}
                      {match.away.name}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {match.odds.map((odd, oddIndex) => (
                        <span
                          key={`${match.league}-${odd}`}
                          className="rounded-full border border-white/8 bg-black/18 px-2.5 py-1 text-[10px] font-semibold text-white/64"
                        >
                          {labels[oddIndex]} {odd}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      <div className="grid gap-4">
        <FadeUp>
          <div
            dir={isArabic ? "rtl" : "ltr"}
            className="al-ticket-float relative overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(0,0,0,0.28))] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:p-6"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(43,182,115,0.14),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_62%)]" />
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

            <div className="relative z-10">
              <div className="inline-flex rounded-full border border-[#2BB673]/18 bg-[#2BB673]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8EE8B6]">
                {showcase.ticketTag}
              </div>
              <h4 className="mt-3 text-[28px] font-semibold leading-tight tracking-[-0.03em] text-white">
                {showcase.ticketTitle}
              </h4>
              <p className="mt-2 text-[13px] leading-5 text-white/56">
                {showcase.ticketText}
              </p>

              <div className="mt-5 space-y-2">
                {quickRows.map((row) => (
                  <div
                    key={row.label + "-" + row.value}
                    className="rounded-[16px] border border-white/8 bg-white/[0.05] px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:bg-white/[0.08]"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <div className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35">
                          {row.label}
                        </div>
                        <div className="mt-1 truncate text-[13px] font-semibold text-white/80">
                          {row.value}
                        </div>
                      </div>
                      <div className="rounded-full border border-[#2BB673]/20 bg-[#2BB673]/12 px-2 py-0.5 text-[11px] font-semibold text-[#8EE8B6] whitespace-nowrap">
                        {row.odd}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {[ui.phoneSeeLineup, ui.phonePlaceBet, ui.phoneMarketChips[2]].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/56"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp>
          <article
            dir={isArabic ? "rtl" : "ltr"}
            className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(0,0,0,0.28))] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:p-6"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(43,182,115,0.12),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_62%)]" />
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

            <div className="relative z-10">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8EE8B6]">
                {showcase.listTitle}
              </div>
              <div className="mt-4 space-y-2">
                {showcase.listItems.map((item, idx) => (
                  <div
                    key={item}
                    className="group rounded-[16px] border border-white/8 bg-white/[0.04] px-3.5 py-2.5 text-[13px] font-medium text-white/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:bg-white/[0.065] hover:border-white/12"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2BB673] group-hover:shadow-[0_0_8px_rgba(43,182,115,0.6)] transition"></span>
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </FadeUp>
      </div>
    </div>
  );
}

function Section({
  id,
  kicker,
  title,
  text,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <StaggerReveal amount={0.16}>
          <div className="max-w-3xl">
            <FadeUp>
              <div className="lp-eyebrow text-[#2BB673]">{kicker}</div>
            </FadeUp>
            <FadeUp>
              <h2 className="mt-4 text-[30px] font-semibold leading-tight tracking-[-0.03em] text-[#F5F7F4] sm:text-[42px]">
                {title}
              </h2>
            </FadeUp>
            <FadeUp>
              <p className="mt-4 max-w-2xl text-[16px] leading-8 text-white/64">
                {text}
              </p>
            </FadeUp>
          </div>
          {children}
        </StaggerReveal>
      </div>
    </section>
  );
}

export default function Home() {
  const { language } = useLanguage();
  const t = copy[language as HomeLanguage];
  const ui = homeSurfaceCopy[language as HomeLanguage];
  const casinoCards = casinoCardsByLanguage[language as HomeLanguage];

  return (
    <div className="flex flex-col">
      <section id="top" className="relative px-4 pb-12 pt-10 sm:px-8 sm:pb-16 lg:px-12">
        <div className="pointer-events-none absolute inset-x-0 top-2 h-40 bg-[radial-gradient(circle_at_18%_20%,rgba(43,182,115,0.13),transparent_30%),radial-gradient(circle_at_82%_28%,rgba(244,67,54,0.1),transparent_28%)]" />
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.94fr)_410px] lg:gap-5 xl:gap-7">
            <StaggerReveal immediate className="relative z-10">
              <FadeUp>
                <div className="inline-flex items-center gap-3 rounded-full border border-[#2BB673]/22 bg-[#2BB673]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2BB673]">
                  <LiveDot />
                  {t.heroKicker}
                </div>
              </FadeUp>
              <FadeUp>
                <h1 className="mt-4 max-w-[12ch] text-[42px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#F5F7F4] sm:text-[58px] lg:text-[68px]">
                  {t.heroTitle}
                </h1>
              </FadeUp>
              <FadeUp>
                <p className="mt-5 max-w-[58ch] text-[16px] leading-8 text-white/68 sm:text-[18px]">
                  {t.heroText}
                </p>
              </FadeUp>
              <FadeUp>
                <div className="mt-8 grid gap-3 sm:flex">
                  <Link
                    href="#play"
                    className="inline-flex min-h-[56px] items-center justify-center rounded-[18px] bg-[#2BB673] px-6 text-[18px] font-semibold text-[#04110b] shadow-[0_16px_36px_rgba(43,182,115,0.18)] transition hover:-translate-y-0.5 hover:bg-[#39C884]"
                  >
                    {t.primary}
                  </Link>
                  <Link
                    href="#sports"
                    className="inline-flex min-h-[56px] items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.05] px-6 text-[18px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
                  >
                    {t.secondary}
                  </Link>
                </div>
              </FadeUp>
            </StaggerReveal>
            <StaggerReveal immediate className="lg:justify-self-start lg:pt-4">
              <FadeUp>
                <PhoneMockup />
              </FadeUp>
            </StaggerReveal>
          </div>
        </div>
      </section>

      <Section
        id="sports"
        kicker={ui.sportsKicker}
        title={t.sportsTitle}
        text={t.sportsText}
      >
        <SportsShowcase />
      </Section>

      <Section
        id="casino"
        kicker={ui.casinoKicker}
        title={t.casinoTitle}
        text={t.casinoText}
      >
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {casinoCards.map((card) => (
            <FadeUp key={card.title}>
              <div className="group h-full overflow-hidden rounded-[24px] border border-white/8 bg-white/[0.035] shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[#2BB673]/24">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={card.imageSrc}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.16)_42%,rgba(5,8,6,0.88)_100%)]" />
                  <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/38 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/72 backdrop-blur-sm">
                      <LiveDot className="h-2 w-2" />
                      {card.badge}
                    </div>
                    <div className="rounded-full border border-white/10 bg-black/28 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D7F76B]">
                      {ui.casinoExplore}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-[24px] font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-white/62">
                    {card.text}
                  </p>
                  <div className="mt-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#2BB673]">
                    {ui.casinoOpenSection}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>

      <Section
        id="promos"
        kicker={ui.promosKicker}
        title={t.promosTitle}
        text={t.promosText}
      >
        <RewardShowcase />
      </Section>

      <section id="play" className="relative px-4 pb-20 pt-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <StaggerReveal className="relative overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(135deg,rgba(43,182,115,0.16),rgba(255,255,255,0.035),rgba(244,67,54,0.12))] p-6 text-center shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:p-10">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#2BB673]/45 to-transparent" />
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2BB673]/22 bg-[#2BB673]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2BB673]">
              <LiveDot />
              {t.playEyebrow}
            </div>
            <FadeUp>
              <h2 className="text-[32px] font-semibold leading-tight tracking-[-0.03em] sm:text-[46px]">
                {t.playTitle}
              </h2>
            </FadeUp>
            <FadeUp>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-8 text-white/68">
                {t.playText}
              </p>
            </FadeUp>
            <FadeUp>
              <div className="mt-8 flex justify-center">
                <Link
                  href="#top"
                  className="inline-flex min-h-[56px] w-full items-center justify-center rounded-[18px] bg-[#2BB673] px-7 text-[18px] font-semibold text-[#04110b] transition hover:bg-[#39C884] sm:w-auto"
                >
                  {t.primary}
                </Link>
              </div>
            </FadeUp>
          </StaggerReveal>
        </div>
      </section>
    </div>
  );
}
