"use client";

import { useLanguage } from "@/app/layout/LanguageProvider";
import { FadeUp, StaggerReveal } from "./Reveal";
import SectionHeading from "@/app/layout/SectionHeading";

function BenefitCard({
  title,
  text,
  className = "",
}: {
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex h-full min-h-[180px] flex-col overflow-hidden rounded-[26px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.04)] sm:min-h-[195px] ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#2BB673]/30 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 bg-[#2BB673]/[0.03] blur-2xl" />

      <h3 className="lp-card-title text-[#F5F7F4]">{title}</h3>
      <p className="lp-body-sm mt-3 text-white/60">{text}</p>
    </div>
  );
}
export default function BenefitsSection() {
  const { language, t } = useLanguage();

  return (
    <section className="relative px-6 py-1 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <StaggerReveal amount={0.16}>
          <SectionHeading
            eyebrow={t.howItWorks.eyebrow[language]}
            title={t.howItWorks.title[language]}
            text={t.howItWorks.text[language]}
          />

          <div className="mt-12">
            <div className="grid gap-4 md:auto-rows-fr lg:grid-cols-2">
              <FadeUp>
                <BenefitCard
                  title={t.howItWorks.title[language]}
                  text={t.howItWorks.text[language]}
                />
              </FadeUp>

              <FadeUp>
                <BenefitCard
                  title={t.howItWorks.title[language]}
                  text={t.howItWorks.text[language]}
                />
              </FadeUp>
            </div>

            <div className="mt-4 lg:mx-auto lg:w-[50%]">
              <FadeUp>
                <BenefitCard
                  title={t.howItWorks.title[language]}
                  text={t.howItWorks.text[language]}
                />
              </FadeUp>
            </div>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}