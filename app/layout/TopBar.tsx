"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

function NavItem({
  href,
  icon,
  label,
  accent = "white",
  side,
}: {
  href: string;
  icon: string;
  label: string;
  accent?: "white" | "green";
  side: "left" | "right";
}) {
  const textColor =
    accent === "green"
      ? "text-[#2BB673] group-hover:text-[#39C884]"
      : "text-white/80 group-hover:text-white";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: side === "left" ? 26 : -26,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.55,
        delay: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex-shrink-0"
    >
      <Link
        href={href}
        className="group flex h-[38px] min-w-[72px] flex-col items-center justify-start pt-0"
        aria-label={label}
      >
        <Image
          src={icon}
          alt={label}
          width={20}
          height={20}
          className="h-[24px] w-[24px] object-contain opacity-90 transition duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100 sm:h-[28px] sm:w-[28px]"
        />

        <span
          className={`mt-0.5 text-[7px] font-semibold uppercase tracking-[0.14em] opacity-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100 sm:text-[8px] ${textColor}`}
        >
          {label}
        </span>
      </Link>
    </motion.div>
  );
}

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.45,
        delay: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      dir="ltr"
      className="relative inline-grid grid-cols-3 rounded-full bg-white/[0.08] p-1"
    >
      <div
        className={`absolute top-1 bottom-1 w-[calc((100%-8px)/3)] rounded-full bg-[#2BB673] transition-transform duration-300 ease-out ${
          language === "en"
            ? "translate-x-0"
            : language === "ar"
              ? "translate-x-full"
              : "translate-x-[200%]"
        }`}
        style={{ left: 4 }}
      />

      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`relative z-10 min-w-[38px] rounded-full px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] transition sm:min-w-[42px] sm:px-2.5 sm:py-1.5 sm:text-[10px] ${
          language === "en" ? "text-[#04110b]" : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("ar")}
        className={`relative z-10 min-w-[38px] rounded-full px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] transition sm:min-w-[42px] sm:px-2.5 sm:py-1.5 sm:text-[10px] ${
          language === "ar" ? "text-[#04110b]" : "text-white/70 hover:text-white"
        }`}
      >
        AR
      </button>

      <button
        type="button"
        onClick={() => setLanguage("fr")}
        className={`relative z-10 min-w-[38px] rounded-full px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] transition sm:min-w-[42px] sm:px-2.5 sm:py-1.5 sm:text-[10px] ${
          language === "fr" ? "text-[#04110b]" : "text-white/70 hover:text-white"
        }`}
      >
        FR
      </button>
    </motion.div>
  );
}

export default function TopBar() {
  const { language, t } = useLanguage();

  return (
    <motion.header
      dir="ltr"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="sticky top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-full border border-[#2BB673]/40 bg-[#050806]/75 px-3 py-2 shadow-[0_14px_34px_rgba(0,0,0,0.22)] sm:px-5 sm:py-3"
        >
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#2BB673]/40 to-transparent" />

          <div className="relative flex items-center justify-center">
            <div className="relative flex w-full max-w-[360px] items-center justify-between sm:max-w-[460px]">
              <NavItem
                href="/"
                icon="/home.png"
                label={t.topBar.home[language]}
                accent="white"
                side="left"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.72, zIndex: 20 }}
                animate={{ opacity: 1, scale: 1, zIndex: 20 }}
                transition={{
                  duration: 0.5,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-1/2 z-20 -translate-x-1/2"
              >
                <Link href="/" className="flex items-center justify-center px-1">
                  <Image
                    src="/logo.png"
                    alt="Melbet Algeria"
                    width={160}
                    height={46}
                    priority
                    className="h-7 w-auto object-contain sm:h-8"
                  />
                </Link>
              </motion.div>

              <NavItem
                href="/partnership"
                icon="/handshake.png"
                label={t.topBar.partnership[language]}
                accent="green"
                side="right"
              />
            </div>
          </div>

          <div className="mt-2 flex justify-center sm:hidden">
            <LanguageSwitcher />
          </div>

          <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 sm:block">
            <LanguageSwitcher />
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}