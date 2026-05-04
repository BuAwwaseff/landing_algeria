"use client";

import { useLanguage } from "@/app/layout/LanguageProvider";
import { FadeUp, StaggerReveal } from "@/app/motion/Reveal";

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[22px] border border-white/8 bg-white/[0.03] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.22)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="text-[32px] font-semibold tracking-[-0.05em] text-[#F5F7F4]">
        {value}
      </div>
      <div className="mt-3 text-[15px] text-white/60">{label}</div>
    </div>
  );
}

function MiniCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[18px] border border-white/8 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/38">
        {label}
      </p>
      <p className="mt-2 text-[24px] font-semibold tracking-[-0.05em] text-[#F5F7F4]">
        {value}
      </p>
    </div>
  );
}

function ProgressRow({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-[12px] text-white/52">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/8">
        <div
          className="h-2 rounded-full bg-[#2BB673] shadow-[0_0_18px_rgba(43,182,115,0.28)]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function WhyUs() {
  const { t, language } = useLanguage();

  return (
    <section id="tools" className="relative px-4 py-14 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <StaggerReveal amount={0.14}>
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <div className="inline-flex items-center gap-3 text-[#2BB673]">
                <span className="h-px w-8 bg-[#2BB673]/45" />
                <span className="text-[13px] font-semibold uppercase tracking-[0.22em]">
                  {t.whyUs.eyebrow[language]}
                </span>
                <span className="h-px w-8 bg-[#2BB673]/45" />
              </div>
            </FadeUp>

            <FadeUp>
              <h2 className="mt-5 text-[34px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#F5F7F4] sm:text-[46px]">
                {t.whyUs.title.before[language]}{" "}
                <span className="glow-green">{t.whyUs.title.glow[language]}</span>{" "}
                {t.whyUs.title.after[language]}
              </h2>
            </FadeUp>

            <FadeUp>
              <p className="mx-auto mt-5 max-w-[60ch] text-[17px] leading-8 text-white/62">
                {t.whyUs.text[language]}
              </p>
            </FadeUp>
          </div>

          <FadeUp>
            <div className="mt-10 overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(90deg,rgba(43,182,115,0.06)_0%,rgba(255,255,255,0.02)_40%,rgba(244,67,54,0.06)_100%)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-7">
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard
                  value={t.whyUs.topStats.one.value[language]}
                  label={t.whyUs.topStats.one.label[language]}
                />
                <StatCard
                  value={t.whyUs.topStats.two.value[language]}
                  label={t.whyUs.topStats.two.label[language]}
                />
                <StatCard
                  value={t.whyUs.topStats.three.value[language]}
                  label={t.whyUs.topStats.three.label[language]}
                />
                <StatCard
                  value={t.whyUs.topStats.four.value[language]}
                  label={t.whyUs.topStats.four.label[language]}
                />
              </div>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="relative mt-6 rounded-[34px] border border-white/10 bg-[#0B0D0C] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between rounded-t-[34px] border-b border-white/8 bg-white/[0.03] px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                </div>

                <div className="hidden items-center rounded-full bg-white/[0.04] px-4 py-1 text-[11px] text-white/40 sm:flex">
                  {t.whyUs.browserLabel[language]}
                </div>

                <div className="w-[52px]" />
              </div>

              <div className="relative overflow-hidden rounded-b-[34px] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 sm:p-7">
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#2BB673]/45 to-transparent" />
                <div className="pointer-events-none absolute right-10 top-10 h-28 w-28 rounded-full bg-[#2BB673]/10 blur-3xl" />
                <div className="pointer-events-none absolute bottom-10 left-10 h-28 w-28 rounded-full bg-[#F44336]/8 blur-3xl" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/38">
                      {t.whyUs.dashboardTag[language]}
                    </p>
                    <h3 className="mt-2 text-[28px] font-semibold tracking-[-0.04em] text-[#F5F7F4]">
                      {t.whyUs.dashboardTitle[language]}
                    </h3>
                  </div>

                  <div className="text-[28px] font-semibold tracking-[-0.05em] text-[#2BB673]">
                    Live
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <MiniCard
                    label={t.whyUs.mini.one.label[language]}
                    value={t.whyUs.mini.one.value[language]}
                  />
                  <MiniCard
                    label={t.whyUs.mini.two.label[language]}
                    value={t.whyUs.mini.two.value[language]}
                  />
                  <MiniCard
                    label={t.whyUs.mini.three.label[language]}
                    value={t.whyUs.mini.three.value[language]}
                  />
                  <MiniCard
                    label={t.whyUs.mini.four.label[language]}
                    value={t.whyUs.mini.four.value[language]}
                  />
                </div>

                <div className="mt-8 rounded-[24px] bg-white/[0.03] p-5">
                  <div className="space-y-4">
                    <ProgressRow
                      label={t.whyUs.bars.one.label[language]}
                      value={t.whyUs.bars.one.value}
                    />
                    <ProgressRow
                      label={t.whyUs.bars.two.label[language]}
                      value={t.whyUs.bars.two.value}
                    />
                    <ProgressRow
                      label={t.whyUs.bars.three.label[language]}
                      value={t.whyUs.bars.three.value}
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </StaggerReveal>
      </div>
    </section>
  );
}
