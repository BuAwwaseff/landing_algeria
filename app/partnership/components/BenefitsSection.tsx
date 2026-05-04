"use client";

import InteractiveTiltCard from "@/app/layout/InteractiveTiltCard";
import { useLanguage } from "@/app/layout/LanguageProvider";
import SectionHeading from "@/app/layout/SectionHeading";
import { FadeUp, StaggerReveal } from "@/app/motion/Reveal";

type BenefitVisualKey = "route" | "mobile" | "reporting";

const content = {
  en: {
    eyebrow: "Benefits",
    title: (
      <>
        Get the <span className="glow-green">tools and support</span> you need to start
      </>
    ),
    text: "Choose the route that fits you, work with ready materials, and stay close to a manager from your first step.",
    cards: [
      {
        key: "route" as BenefitVisualKey,
        title: "Partner or Agent",
        text: "Start with the route that matches your audience, your city, and your payment access.",
      },
      {
        key: "mobile" as BenefitVisualKey,
        title: "Marketing tools",
        text: "Use promo codes, landing pages, banners, and direct CTA assets built for action.",
      },
      {
        key: "reporting" as BenefitVisualKey,
        title: "Tracking and follow-up",
        text: "Stay close to clicks, signups, and player activity with clear reports and manager support.",
      },
    ],
  },
  fr: {
    eyebrow: "Avantages",
    title: (
      <>
        Obtenez les <span className="glow-green">outils et le support</span> utiles pour commencer
      </>
    ),
    text: "Choisissez la voie qui vous convient, travaillez avec des supports prets, et restez proche d'un manager des le depart.",
    cards: [
      {
        key: "route" as BenefitVisualKey,
        title: "Partner ou Agent",
        text: "Commencez avec la voie qui correspond a votre audience, votre ville et votre acces au paiement.",
      },
      {
        key: "mobile" as BenefitVisualKey,
        title: "Outils marketing",
        text: "Utilisez des codes promo, landing pages, bannieres et CTA directs deja prets pour l'action.",
      },
      {
        key: "reporting" as BenefitVisualKey,
        title: "Suivi et accompagnement",
        text: "Restez proche des clics, inscriptions et de l'activite des joueurs avec des rapports clairs et le support du manager.",
      },
    ],
  },
  ar: {
    eyebrow: "المزايا",
    title: (
      <>
        احصل على <span className="glow-green">الأدوات والدعم</span> الذي تحتاجه لتبدأ
      </>
    ),
    text: "اختر المسار الذي يناسبك، واعمل بمواد جاهزة، وابق قريباً من المدير منذ أول خطوة.",
    cards: [
      {
        key: "route" as BenefitVisualKey,
        title: "شريك أو وكيل",
        text: "ابدأ بالمسار الذي يناسب جمهورك ومدينتك وقدرتك على إدارة الدفع.",
      },
      {
        key: "mobile" as BenefitVisualKey,
        title: "أدوات تسويق",
        text: "استخدم أكواداً ترويجية وصفحات هبوط وبانرات ودعوات إجراء مباشرة جاهزة للعمل.",
      },
      {
        key: "reporting" as BenefitVisualKey,
        title: "متابعة ودعم",
        text: "ابق قريباً من الضغطات والتسجيلات ونشاط اللاعبين عبر تقارير واضحة ودعم من المدير.",
      },
    ],
  },
} as const;

function BenefitVisual({ kind }: { kind: BenefitVisualKey }) {
  const { language, t } = useLanguage();

  if (kind === "route") {
    return (
      <div className="relative h-[104px] overflow-hidden rounded-[20px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.016))]">
        <div className="absolute left-5 top-1/2 h-px w-[calc(100%-40px)] -translate-y-1/2 bg-gradient-to-r from-[#2BB673]/0 via-[#2BB673]/44 to-[#F44336]/0" />
        <div className="absolute left-5 top-1/2 flex h-12 w-24 -translate-y-1/2 items-center justify-center rounded-[16px] border border-[#2BB673]/24 bg-[#2BB673]/10 shadow-[0_10px_24px_rgba(43,182,115,0.12)]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2BB673] shadow-[0_0_12px_rgba(43,182,115,0.35)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/52">
              {t.paths.agent.side[language]}
            </span>
          </div>
        </div>
        <div className="absolute right-5 top-1/2 flex h-12 w-24 -translate-y-1/2 items-center justify-center rounded-[16px] border border-white/10 bg-white/[0.04]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/52">
              {t.paths.partner.side[language]}
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
        <div className="pointer-events-none absolute end-0 top-0 h-24 w-24 bg-[#2BB673]/[0.05] blur-2xl" />

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
    <section id="benefits" className="relative px-4 py-12 sm:px-8 sm:py-14 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <StaggerReveal amount={0.16}>
          <SectionHeading eyebrow={copy.eyebrow} title={copy.title} text={copy.text} />

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
