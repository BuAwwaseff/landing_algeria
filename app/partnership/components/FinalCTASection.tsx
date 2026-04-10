"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/layout/LanguageProvider";
import { FadeUp, StaggerReveal } from "./Reveal";

const TELEGRAM_LINK = "#";
const WHATSAPP_LINK = "#";

function ContactButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="group inline-flex h-[58px] w-[58px] items-center justify-center overflow-hidden rounded-[16px] border border-[#2BB673]/28 bg-[#2BB673] text-[#04110b] shadow-[0_14px_30px_rgba(43,182,115,0.16)] transition-all duration-300 ease-out hover:w-[190px] hover:bg-[#39C884]"
    >
      <div className="flex w-full items-center justify-center gap-0 px-0 transition-all duration-300 group-hover:gap-3 group-hover:px-4">
        <Image
          src={icon}
          alt={label}
          width={20}
          height={20}
          className="h-5 w-5 shrink-0 object-contain"
        />

        <span className="lp-button max-w-0 overflow-hidden whitespace-nowrap leading-[1.35] opacity-0 transition-all duration-300 group-hover:max-w-[140px] group-hover:opacity-100">
          {label}
        </span>
      </div>
    </Link>
  );
}

export default function FinalCtaSection() {
  const { language, t } = useLanguage();

  const title = (
    <>
      {t.finalCta.title.before[language]}{" "}
      <span className="glow-green text-[#2BB673]">
        {t.finalCta.title.glow[language]}
      </span>{" "}
      {t.finalCta.title.after[language]}
    </>
  );

  return (
    <section
      id="final-cta"
      className="relative px-6 pb-24 pt-4 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <StaggerReveal
          amount={0.18}
          className="relative overflow-hidden rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.012))] px-6 py-10 text-center shadow-[0_28px_80px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-10 sm:py-14"
        >
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#2BB673]/40 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-[#2BB673]/[0.04] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 bg-white/[0.02] blur-3xl" />

          <div className="relative z-10">
            <FadeUp>
              <div className="lp-eyebrow inline-flex items-center gap-3 text-[#2BB673]">
                <span className="h-px w-8 bg-[#2BB673]/45" />
                {t.finalCta.eyebrow[language]}
                <span className="h-px w-8 bg-[#2BB673]/45" />
              </div>
            </FadeUp>

            <FadeUp>
              <h2 className="lp-section-title mx-auto mt-6 max-w-3xl text-[#F5F7F4]">
                {title}
              </h2>
            </FadeUp>

            <FadeUp>
              <p className="lp-body mx-auto mt-4 max-w-2xl text-white/62">
                {t.finalCta.text[language]}
              </p>
            </FadeUp>

            <FadeUp>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <ContactButton
                  href={TELEGRAM_LINK}
                  icon="/telegram.png"
                  label={t.finalCta.telegramCta[language]}
                />

                <ContactButton
                  href={WHATSAPP_LINK}
                  icon="/whatsapp.png"
                  label={t.finalCta.whatsappCta[language]}
                />
              </div>
            </FadeUp>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}