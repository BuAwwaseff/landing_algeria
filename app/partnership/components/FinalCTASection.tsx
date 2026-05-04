"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/layout/LanguageProvider";
import { FadeUp, StaggerReveal } from "@/app/motion/Reveal";

const TELEGRAM_LINK = "#";
const WHATSAPP_LINK = "#";

function LiveDot() {
  return (
    <span
      className="al-live-dot inline-block h-2.5 w-2.5 rounded-full bg-[#2BB673] shadow-[0_0_16px_rgba(43,182,115,0.62)]"
      aria-hidden="true"
    />
  );
}

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
      className="group inline-flex min-h-[58px] w-full items-center justify-center overflow-hidden rounded-[16px] border border-[#2BB673]/28 bg-[#2BB673] px-5 text-[#04110b] shadow-[0_14px_30px_rgba(43,182,115,0.16)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#39C884] sm:w-auto sm:min-w-[190px]"
    >
      <div className="flex w-full items-center justify-center gap-3">
        <Image
          src={icon}
          alt={label}
          width={20}
          height={20}
          className="h-5 w-5 shrink-0 object-contain"
        />
        <span className="lp-button whitespace-nowrap leading-[1.35]">
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
    <section id="final-cta" className="relative px-4 pb-24 pt-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <StaggerReveal
          amount={0.18}
          className="relative overflow-hidden rounded-[34px] border border-white/8 bg-[linear-gradient(135deg,rgba(43,182,115,0.13),rgba(255,255,255,0.04)_44%,rgba(244,67,54,0.1))] px-5 py-8 text-center shadow-[0_28px_80px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-10 sm:py-14"
        >
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#2BB673]/40 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-[#2BB673]/[0.04] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 bg-[#F44336]/[0.04] blur-3xl" />
          <div className="al-scan-line pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-transparent via-white/8 to-transparent" />

          <div className="relative z-10">
            <FadeUp>
              <div className="lp-eyebrow inline-flex items-center gap-3 rounded-full border border-[#2BB673]/22 bg-[#2BB673]/10 px-4 py-2 text-[#2BB673]">
                <LiveDot />
                {t.finalCta.eyebrow[language]}
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
              <div className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                {t.finalCta.supportItems[language].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-white/8 bg-black/18 p-4 text-start shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/38">
                        0{index + 1}
                      </span>
                      <LiveDot />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-white/78">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp>
              <div className="mt-8 grid items-center justify-center gap-3 sm:flex sm:gap-4">
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
