"use client";

import InteractiveTiltCard from "@/app/layout/InteractiveTiltCard";
import { useLanguage } from "@/app/layout/LanguageProvider";
import SectionHeading from "@/app/layout/SectionHeading";
import { FadeUp, StaggerReveal } from "@/app/motion/Reveal";

type BenefitVisualKey = "route" | "mobile" | "reporting";

const content = {
  en: {
    eyebrow: "Partnership benefits",
    title: (
      <>
        Built for <span className="glow-green">local growth</span>, not noise
      </>
    ),
    text: "A cleaner commercial setup for people who want a direct path, clear materials, and a serious mobile-first presentation.",
    cards: [
      {
        key: "route" as BenefitVisualKey,
        title: "Clear route",
        text: "Choose an agent route or an affiliate partner model with expectations explained before you start.",
      },
      {
        key: "mobile" as BenefitVisualKey,
        title: "Mobile-first assets",
        text: "Use sharp landing flows, direct CTA paths, and lightweight content made for phone traffic.",
      },
      {
        key: "reporting" as BenefitVisualKey,
        title: "Reporting rhythm",
        text: "Track activity through simple weekly views that make progress easier to understand.",
      },
    ],
  },
  fr: {
    eyebrow: "Avantages du partenariat",
    title: (
      <>
        Concu pour une <span className="glow-green">croissance locale</span>
      </>
    ),
    text: "Une structure commerciale plus claire pour avancer avec des supports nets, un parcours direct et une presentation mobile serieuse.",
    cards: [
      {
        key: "route" as BenefitVisualKey,
        title: "Parcours clair",
        text: "Choisissez la route agent ou le modele affiliate partner avec des attentes expliquees des le depart.",
      },
      {
        key: "mobile" as BenefitVisualKey,
        title: "Assets mobile-first",
        text: "Utilisez des parcours courts, des CTA directs et du contenu leger pense pour le trafic mobile.",
      },
      {
        key: "reporting" as BenefitVisualKey,
        title: "Suivi regulier",
        text: "Lisez l'activite avec des vues hebdomadaires simples pour comprendre la progression.",
      },
    ],
  },
  ar: {
    eyebrow: "\u0645\u0632\u0627\u064A\u0627 \u0627\u0644\u0634\u0631\u0627\u0643\u0629",
    title: (
      <>
        {"\u0645\u0635\u0645\u0645\u0629 \u0644\u0646\u0645\u0648 "}
        <span className="glow-green">
          {"\u0645\u062D\u0644\u064A \u0648\u0627\u0636\u062D"}
        </span>
      </>
    ),
    text: "\u0646\u0645\u0648\u0630\u062C \u062A\u062C\u0627\u0631\u064A \u0623\u0648\u0636\u062D \u0644\u0645\u0646 \u064A\u0631\u064A\u062F \u0645\u0633\u0627\u0631\u0627 \u0645\u0628\u0627\u0634\u0631\u0627\u060C \u0645\u0648\u0627\u062F \u0645\u0646\u0638\u0645\u0629\u060C \u0648\u062A\u062C\u0631\u0628\u0629 \u0645\u0648\u0628\u0627\u064A\u0644 \u062C\u062F\u064A\u0629 \u0648\u0633\u0647\u0644\u0629 \u0627\u0644\u0641\u0647\u0645.",
    cards: [
      {
        key: "route" as BenefitVisualKey,
        title: "\u0645\u0633\u0627\u0631 \u0648\u0627\u0636\u062D",
        text: "\u0627\u062E\u062A\u0631 \u0645\u0633\u0627\u0631 \u0627\u0644\u0648\u0643\u064A\u0644 \u0623\u0648 \u0646\u0645\u0648\u0630\u062C \u0634\u0631\u064A\u0643 \u0627\u0644\u062A\u0633\u0648\u064A\u0642 \u0645\u0639 \u062A\u0648\u0636\u064A\u062D \u0627\u0644\u062A\u0648\u0642\u0639\u0627\u062A \u0645\u0646 \u0627\u0644\u0628\u062F\u0627\u064A\u0629.",
      },
      {
        key: "mobile" as BenefitVisualKey,
        title: "\u0645\u0648\u0627\u062F \u0644\u0644\u0645\u0648\u0628\u0627\u064A\u0644",
        text: "\u0627\u0633\u062A\u062E\u062F\u0645 \u0635\u0641\u062D\u0627\u062A \u0633\u0631\u064A\u0639\u0629 \u0648\u062F\u0639\u0648\u0627\u062A \u0625\u062C\u0631\u0627\u0621 \u0645\u0628\u0627\u0634\u0631\u0629 \u0648\u0645\u062D\u062A\u0648\u0649 \u062E\u0641\u064A\u0641 \u0645\u0646\u0627\u0633\u0628 \u0644\u062D\u0631\u0643\u0629 \u0627\u0644\u0647\u0627\u062A\u0641.",
      },
      {
        key: "reporting" as BenefitVisualKey,
        title: "\u0645\u062A\u0627\u0628\u0639\u0629 \u0645\u0646\u062A\u0638\u0645\u0629",
        text: "\u062A\u0627\u0628\u0639 \u0627\u0644\u0646\u0634\u0627\u0637 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0639\u0631\u0648\u0636 \u0623\u0633\u0628\u0648\u0639\u064A\u0629 \u0628\u0633\u064A\u0637\u0629 \u062A\u062C\u0639\u0644 \u0627\u0644\u062A\u0642\u062F\u0645 \u0623\u0633\u0647\u0644 \u0641\u064A \u0627\u0644\u0642\u0631\u0627\u0621\u0629.",
      },
    ],
  },
};

function BenefitVisual({ kind }: { kind: BenefitVisualKey }) {
  if (kind === "route") {
    return (
      <div className="relative h-[104px] overflow-hidden rounded-[20px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.016))]">
        <div className="absolute left-5 top-1/2 h-px w-[calc(100%-40px)] -translate-y-1/2 bg-gradient-to-r from-[#2BB673]/0 via-[#2BB673]/44 to-[#F44336]/0" />
        <div className="absolute left-5 top-1/2 flex h-12 w-20 -translate-y-1/2 items-center justify-center rounded-[16px] border border-[#2BB673]/24 bg-[#2BB673]/10 shadow-[0_10px_24px_rgba(43,182,115,0.12)]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2BB673] shadow-[0_0_12px_rgba(43,182,115,0.35)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/52">
              agent
            </span>
          </div>
        </div>
        <div className="absolute right-5 top-1/2 flex h-12 w-20 -translate-y-1/2 items-center justify-center rounded-[16px] border border-white/10 bg-white/[0.04]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/52">
              partner
            </span>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#2BB673]/24 bg-[#2BB673]/10 shadow-[0_0_24px_rgba(43,182,115,0.18)] animate-[stepPulse_3.4s_ease-in-out_infinite]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#2BB673]" />
        </div>
      </div>
    );
  }

  if (kind === "mobile") {
    return (
      <div className="relative h-[104px] overflow-hidden rounded-[20px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.016))]">
        <div className="absolute left-1/2 top-1/2 h-[84px] w-[54px] -translate-x-1/2 -translate-y-1/2 rounded-[16px] border border-[#2BB673]/22 bg-[#08110c] shadow-[0_12px_26px_rgba(0,0,0,0.22)]">
          <div className="absolute inset-x-2 top-2 h-2 rounded-full bg-white/8" />
          <div className="absolute inset-x-2 top-8 h-10 overflow-hidden rounded-[10px] border border-white/8 bg-white/[0.03]">
            <div className="al-soft-sweep absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.02)_36%,rgba(43,182,115,0.18)_50%,rgba(255,255,255,0.02)_64%,transparent_100%)]" />
            <div className="absolute inset-x-2 top-2 h-1.5 rounded-full bg-[#2BB673]/34" />
            <div className="absolute inset-x-2 top-6 h-1 rounded-full bg-white/10" />
          </div>
          <div className="absolute inset-x-3 bottom-3 h-2 rounded-full bg-[linear-gradient(90deg,#2BB673_0%,#D9D24A_100%)] shadow-[0_0_14px_rgba(43,182,115,0.16)]" />
        </div>
        <div className="absolute left-4 top-4 h-3 w-10 rounded-full bg-white/8" />
        <div className="absolute right-4 bottom-4 h-3 w-14 rounded-full bg-[#2BB673]/18" />
      </div>
    );
  }

  return (
    <div className="relative h-[104px] overflow-hidden rounded-[20px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.016))]">
      <div className="absolute bottom-4 left-4 flex items-end gap-2">
        <div
          className="w-4 rounded-t-[8px] bg-white/12 animate-[stepRise_3.6s_ease-in-out_infinite]"
          style={{ height: 22, animationDelay: "0s" }}
        />
        <div
          className="w-4 rounded-t-[8px] bg-[#2BB673]/38 animate-[stepRise_3.6s_ease-in-out_infinite]"
          style={{ height: 34, animationDelay: "0.14s" }}
        />
        <div
          className="w-4 rounded-t-[8px] bg-[#2BB673]/55 animate-[stepRise_3.6s_ease-in-out_infinite]"
          style={{ height: 50, animationDelay: "0.28s" }}
        />
        <div
          className="w-4 rounded-t-[8px] bg-[linear-gradient(180deg,#D9D24A_0%,#2BB673_100%)] shadow-[0_0_18px_rgba(43,182,115,0.14)] animate-[stepRise_3.6s_ease-in-out_infinite]"
          style={{ height: 68, animationDelay: "0.42s" }}
        />
      </div>
      <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#2BB673]/22 bg-[#2BB673]/10 text-[12px] font-semibold text-[#2BB673] animate-[stepPulse_3.2s_ease-in-out_infinite]">
        +
      </div>
      <div className="absolute inset-x-4 bottom-4 h-2 overflow-hidden rounded-full bg-white/8">
        <div className="h-full w-[72%] rounded-full bg-[linear-gradient(90deg,#2BB673_0%,#D9D24A_100%)] shadow-[0_0_14px_rgba(43,182,115,0.16)] animate-[stepFlow_3.2s_ease-in-out_infinite]" />
      </div>
    </div>
  );
}

function BenefitCard({
  index,
  title,
  text,
  visual,
}: {
  index: number;
  title: string;
  text: string;
  visual: BenefitVisualKey;
}) {
  return (
    <InteractiveTiltCard className="h-full">
      <div className="group relative flex h-full min-h-[286px] flex-col overflow-hidden rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.038),rgba(255,255,255,0.014))] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 group-hover:border-white/12 sm:p-6">
        <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#2BB673]/35 to-transparent" />
        <div className="pointer-events-none absolute end-0 top-0 h-24 w-24 bg-[#2BB673]/[0.05] blur-2xl transition duration-300 group-hover:bg-[#2BB673]/[0.08]" />
        <div className="pointer-events-none absolute -left-8 bottom-0 h-20 w-20 rounded-full bg-[#F44336]/[0.04] blur-2xl transition duration-300 group-hover:bg-[#F44336]/[0.06]" />

        <div className="flex items-center justify-between gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/34">
            0{index + 1}
          </span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#2BB673]/24 bg-[#2BB673]/10">
            <span className="h-2 w-2 rounded-full bg-[#2BB673]" />
          </span>
        </div>

        <div className="mt-5">
          <BenefitVisual kind={visual} />
        </div>

        <h3 className="lp-card-title mt-6 text-[#F5F7F4]">{title}</h3>
        <p className="lp-body-sm mt-3 text-white/64 transition duration-300 group-hover:text-white/78">
          {text}
        </p>
      </div>
    </InteractiveTiltCard>
  );
}

export default function BenefitsSection() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <section
      id="benefits"
      className="relative px-4 py-12 sm:px-8 sm:py-14 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <StaggerReveal amount={0.16}>
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            text={copy.text}
          />

          <div className="mt-10 grid gap-4 md:auto-rows-fr md:grid-cols-3">
            {copy.cards.map((card, index) => (
              <FadeUp key={card.title}>
                <BenefitCard
                  index={index}
                  title={card.title}
                  text={card.text}
                  visual={card.key}
                />
              </FadeUp>
            ))}
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
