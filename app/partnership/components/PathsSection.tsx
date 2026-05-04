"use client";

import Link from "next/link";
import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { PathCardProps } from "@/lib/types";
import { useLanguage } from "@/app/layout/LanguageProvider";
import { FadeUp, StaggerReveal } from "@/app/motion/Reveal";
import SectionHeading from "@/app/layout/SectionHeading";

function InteractiveSurface({
  children,
  className = "",
  tilt = 8,
}: {
  children: ReactNode;
  className?: string;
  tilt?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false });
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
  );

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * tilt;
    const rotateX = (0.5 - y / rect.height) * tilt;

    setGlow({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      active: true,
    });

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`,
    );
  };

  const handleLeave = () => {
    setGlow((prev) => ({ ...prev, active: false }));
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
    );
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative overflow-hidden rounded-[30px] ${className}`}
    >
      <div
        className="group relative transition-transform duration-300 will-change-transform"
        style={{ transform }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(43,182,115,0.14), rgba(255,255,255,0.03) 38%, transparent 72%)`,
            opacity: glow.active ? 1 : 0,
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}

function MiniPointCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <InteractiveSurface tilt={5}>
      <div className="relative flex h-full min-h-[190px] flex-col overflow-hidden rounded-[20px] border border-white/8 bg-black/28 p-4 shadow-[0_14px_34px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-300 group-hover:border-white/12">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#2BB673]/45 to-transparent" />
        <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

        <div className="lp-eyebrow text-[#2BB673]">{title}</div>
        <p className="lp-body-sm mt-3 text-white/60 transition duration-300 group-hover:text-white/76">
          {text}
        </p>
      </div>
    </InteractiveSurface>
  );
}

function SummaryBlock({
  primaryLabel,
  primaryValue,
  secondaryLabel,
  secondaryValue,
}: {
  primaryLabel: string;
  primaryValue: string;
  secondaryLabel: string;
  secondaryValue: string;
}) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      <div className="relative overflow-hidden rounded-[18px] border border-[#2BB673]/18 bg-[#2BB673]/[0.08] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#2BB673]/45 to-transparent" />
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/42">
          {primaryLabel}
        </div>
        <div className="mt-2 text-[24px] font-semibold tracking-[-0.05em] text-[#2BB673]">
          {primaryValue}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[18px] border border-white/8 bg-white/[0.035] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/42">
          {secondaryLabel}
        </div>
        <div className="mt-2 text-[18px] font-semibold tracking-[-0.04em] text-[#F5F7F4]">
          {secondaryValue}
        </div>
      </div>
    </div>
  );
}

function PathCard({
  side,
  title,
  text,
  cta,
  ctaHref,
  secondaryCta,
  secondaryHref,
  pointA,
  pointB,
  primaryLabel,
  primaryValue,
  secondaryLabel,
  secondaryValue,
}: PathCardProps & {
  primaryLabel: string;
  primaryValue: string;
  secondaryLabel: string;
  secondaryValue: string;
}) {
  return (
    <InteractiveSurface className="h-full">
      <div className="relative grid h-full min-h-[760px] grid-rows-[auto_1fr_auto_auto] overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.038),rgba(255,255,255,0.012))] shadow-[0_22px_60px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 group-hover:border-white/12">
        <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[#2BB673]/35 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-[#2BB673]/[0.035] blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-12 h-28 w-28 rounded-full bg-[#F44336]/[0.04] blur-3xl" />

        <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.02] px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>

          <div className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/38">
            {side}
          </div>
        </div>

        <div className="grid h-full grid-rows-[minmax(290px,1fr)_auto_auto] p-7">
          <div className="min-h-[290px]">
            <div className="lp-eyebrow text-[#2BB673]">{side}</div>

            <h3 className="lp-section-title mt-5 max-w-[20ch] text-[#F5F7F4]">
              {title}
            </h3>

            <p className="lp-body-sm mt-4 max-w-xl text-white/60 transition duration-300 group-hover:text-white/74">
              {text}
            </p>

            <SummaryBlock
              primaryLabel={primaryLabel}
              primaryValue={primaryValue}
              secondaryLabel={secondaryLabel}
              secondaryValue={secondaryValue}
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href={ctaHref}
              className="lp-button inline-flex min-h-[54px] w-full items-center justify-center rounded-[15px] border border-[#2BB673]/28 bg-[#2BB673] px-5 py-3 text-center text-[#04110b] shadow-[0_14px_30px_rgba(43,182,115,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#39C884]"
            >
              {cta}
            </Link>

            <Link
              href={secondaryHref}
              className="lp-button inline-flex min-h-[54px] w-full items-center justify-center rounded-[15px] border border-white/10 bg-white/[0.045] px-5 py-3 text-center text-white/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07]"
            >
              {secondaryCta}
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <MiniPointCard title={pointA.title} text={pointA.text} />
            <MiniPointCard title={pointB.title} text={pointB.text} />
          </div>
        </div>
      </div>
    </InteractiveSurface>
  );
}

export default function PathsSection() {
  const { language, t } = useLanguage();

  const title = (
    <>
      {t.paths.title.before[language]}{" "}
      <span className="glow-green">{t.paths.title.glow[language]}</span>{" "}
      {t.paths.title.after[language]}
    </>
  );

  return (
    <section id="paths" className="relative px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <StaggerReveal amount={0.16}>
          <SectionHeading
            eyebrow={t.paths.eyebrow[language]}
            title={title}
            text={t.paths.text[language]}
          />

          <div className="mt-8 grid gap-5 lg:auto-rows-fr lg:grid-cols-2">
            <FadeUp>
              <PathCard
                side={t.paths.agent.side[language]}
                title={t.paths.agent.title[language]}
                text={t.paths.agent.text[language]}
                cta={t.paths.agent.cta[language]}
                ctaHref="#final-cta"
                secondaryCta={t.paths.agent.secondaryCta[language]}
                secondaryHref="#steps"
                primaryLabel={t.paths.agent.summaryPrimaryLabel[language]}
                primaryValue={t.paths.agent.summaryPrimaryValue[language]}
                secondaryLabel={t.paths.agent.summarySecondaryLabel[language]}
                secondaryValue={t.paths.agent.summarySecondaryValue[language]}
                pointA={{
                  title: t.paths.agent.pointA.title[language],
                  text: t.paths.agent.pointA.text[language],
                }}
                pointB={{
                  title: t.paths.agent.pointB.title[language],
                  text: t.paths.agent.pointB.text[language],
                }}
              />
            </FadeUp>

            <FadeUp>
              <PathCard
                side={t.paths.partner.side[language]}
                title={t.paths.partner.title[language]}
                text={t.paths.partner.text[language]}
                cta={t.paths.partner.cta[language]}
                ctaHref="#final-cta"
                secondaryCta={t.paths.partner.secondaryCta[language]}
                secondaryHref="#steps"
                primaryLabel={t.paths.partner.summaryPrimaryLabel[language]}
                primaryValue={t.paths.partner.summaryPrimaryValue[language]}
                secondaryLabel={t.paths.partner.summarySecondaryLabel[language]}
                secondaryValue={t.paths.partner.summarySecondaryValue[language]}
                pointA={{
                  title: t.paths.partner.pointA.title[language],
                  text: t.paths.partner.pointA.text[language],
                }}
                pointB={{
                  title: t.paths.partner.pointB.title[language],
                  text: t.paths.partner.pointB.text[language],
                }}
              />
            </FadeUp>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
