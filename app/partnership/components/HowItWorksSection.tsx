"use client";

import { type ReactNode } from "react";
import InteractiveTiltCard from "@/app/layout/InteractiveTiltCard";
import { StepCardProps } from "@/lib/types";
import { useLanguage } from "@/app/layout/LanguageProvider";
import { FadeUp, StaggerReveal } from "@/app/motion/Reveal";
import SectionHeading from "@/app/layout/SectionHeading";

function StepVisual({ step }: { step: 1 | 2 | 3 }) {
  const { language, t } = useLanguage();

  if (step === 1) {
    return (
      <div className="relative h-[130px] overflow-hidden rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.018))]">
        <div className="pointer-events-none absolute left-1/2 top-5 h-[88px] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        <div className="absolute left-6 top-1/2 flex h-[54px] w-[92px] -translate-y-1/2 items-center justify-center rounded-[18px] border border-[#2BB673]/22 bg-[#2BB673]/10 shadow-[0_10px_30px_rgba(43,182,115,0.08)] animate-[stepFloat_4.6s_ease-in-out_infinite]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2BB673] shadow-[0_0_12px_rgba(43,182,115,0.35)]" />
            <span className="text-[12px] font-medium text-white/70">
              {t.howItWorks.visuals.agent[language]}
            </span>
          </div>
        </div>

        <div className="absolute right-6 top-1/2 flex h-[54px] w-[92px] -translate-y-1/2 items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.04] animate-[stepFloat_4.6s_ease-in-out_infinite_0.45s]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
            <span className="text-[12px] font-medium text-white/70">
              {t.howItWorks.visuals.partner[language]}
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.04] shadow-[0_0_30px_rgba(255,255,255,0.03)] animate-[stepPulse_3.8s_ease-in-out_infinite]" />
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="relative h-[130px] overflow-hidden rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.018))]">
        <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-[12px] border border-[#2BB673]/24 bg-[#2BB673]/10">
          <span className="h-2 w-2 rounded-full bg-[#2BB673]" />
        </div>

        <div className="absolute left-[62px] top-[39px] h-px w-[42px] bg-gradient-to-r from-[#2BB673]/45 to-white/8" />

        <div className="absolute left-[112px] top-[28px] h-[22px] w-[22px] rounded-full border border-[#2BB673]/35 bg-[#2BB673]/18 shadow-[0_0_18px_rgba(43,182,115,0.18)] animate-[stepPulse_2.9s_ease-in-out_infinite]" />

        <div className="absolute right-5 top-5 flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/16" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/24" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2BB673]/80 animate-[stepBlink_2.2s_ease-in-out_infinite]" />
        </div>

        <div className="absolute bottom-5 left-5 right-5 rounded-[16px] border border-white/8 bg-black/10 p-3">
          <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-white/36">
            <span>{t.howItWorks.visuals.activity[language]}</span>
            <span>{t.howItWorks.visuals.live[language]}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/8">
            <div className="h-full w-[68%] rounded-full bg-[linear-gradient(90deg,#2BB673_0%,#D9D24A_100%)] shadow-[0_0_18px_rgba(43,182,115,0.18)] animate-[stepFlow_3.2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[130px] overflow-hidden rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.018))]">
      <div className="absolute bottom-5 left-5 flex items-end gap-2">
        <div
          className="w-5 rounded-t-[8px] bg-white/12 animate-[stepRise_3.8s_ease-in-out_infinite]"
          style={{ height: 20, animationDelay: "0s" }}
        />
        <div
          className="w-5 rounded-t-[8px] bg-[#2BB673]/38 animate-[stepRise_3.8s_ease-in-out_infinite]"
          style={{ height: 34, animationDelay: "0.18s" }}
        />
        <div
          className="w-5 rounded-t-[8px] bg-[#2BB673]/55 animate-[stepRise_3.8s_ease-in-out_infinite]"
          style={{ height: 52, animationDelay: "0.36s" }}
        />
        <div
          className="w-5 rounded-t-[8px] bg-[linear-gradient(180deg,#D9D24A_0%,#2BB673_100%)] shadow-[0_0_24px_rgba(43,182,115,0.18)] animate-[stepRise_3.8s_ease-in-out_infinite]"
          style={{ height: 74, animationDelay: "0.54s" }}
        />
      </div>

      <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#2BB673]/24 bg-[#2BB673]/10 text-[13px] font-semibold text-[#2BB673] animate-[stepPulse_3.2s_ease-in-out_infinite]">
        +
      </div>

      <div className="pointer-events-none absolute left-5 top-5 h-px w-[90px] bg-gradient-to-r from-white/0 via-white/12 to-white/0" />
    </div>
  );
}

function StepCard({
  number,
  title,
  text,
  visual,
}: StepCardProps & { visual: ReactNode }) {
  const { language, t } = useLanguage();

  return (
    <InteractiveTiltCard>
      <div className="group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.014))] shadow-[0_20px_50px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 group-hover:border-white/12">
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#2BB673]/30 to-transparent" />
        <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#2BB673]/38 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 bg-[#2BB673]/[0.03] blur-3xl" />

        <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.02] px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>

          <div className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/38">
            {t.howItWorks.visuals.step[language]}
          </div>
        </div>

        <div className="flex h-full flex-col p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#2BB673]/25 bg-[#2BB673]/10 text-sm font-semibold text-[#2BB673] transition-transform duration-300 group-hover:scale-[1.04]">
              {number}
            </div>
          </div>

          <div className="mt-6">{visual}</div>

          <h3 className="lp-card-title mt-6 max-w-[16ch] text-[#F5F7F4]">
            {title}
          </h3>

          <p className="mt-4 text-[17px] leading-8 text-white/72 transition duration-300 group-hover:text-white/82 sm:text-[18px] sm:leading-9">
            {text}
          </p>
        </div>
      </div>
    </InteractiveTiltCard>
  );
}

export default function HowItWorksSection() {
  const { language, t } = useLanguage();

  const sectionTitle = (
    <>
      {t.howItWorks.title.before[language]}{" "}
      <span className="glow-green">{t.howItWorks.title.glow[language]}</span>{" "}
      {t.howItWorks.title.after[language]}
    </>
  );

  return (
    <section
      id="steps"
      className="relative px-4 py-12 sm:px-8 sm:py-14 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <StaggerReveal amount={0.16}>
          <SectionHeading
            eyebrow={t.howItWorks.eyebrow[language]}
            title={sectionTitle}
            text={t.howItWorks.text[language]}
          />

          <div className="mt-12 grid gap-4 md:auto-rows-fr md:grid-cols-3">
            <FadeUp>
              <StepCard
                number={t.howItWorks.steps.first.number[language]}
                title={t.howItWorks.steps.first.title[language]}
                text={t.howItWorks.steps.first.text[language]}
                visual={<StepVisual step={1} />}
              />
            </FadeUp>

            <FadeUp>
              <StepCard
                number={t.howItWorks.steps.second.number[language]}
                title={t.howItWorks.steps.second.title[language]}
                text={t.howItWorks.steps.second.text[language]}
                visual={<StepVisual step={2} />}
              />
            </FadeUp>

            <FadeUp>
              <StepCard
                number={t.howItWorks.steps.third.number[language]}
                title={t.howItWorks.steps.third.title[language]}
                text={t.howItWorks.steps.third.text[language]}
                visual={<StepVisual step={3} />}
              />
            </FadeUp>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
