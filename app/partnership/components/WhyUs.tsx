"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/app/layout/LanguageProvider";
import { FadeUp, StaggerReveal } from "@/app/motion/Reveal";

function CountUp({
  end,
  suffix = "",
  duration = 1400,
  startWhenVisible = false,
}: {
  end: number;
  suffix?: string;
  duration?: number;
  startWhenVisible?: boolean;
}) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(!startWhenVisible);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!startWhenVisible || started) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setStarted(true);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [startWhenVisible, started]);

  useEffect(() => {
    if (!started) return;

    let frame = 0;
    const totalFrames = Math.max(24, Math.round(duration / 16));

    const timer = window.setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - Math.min(progress, 1), 3);
      setValue(Math.round(end * eased));

      if (frame >= totalFrames) {
        window.clearInterval(timer);
      }
    }, 16);

    return () => window.clearInterval(timer);
  }, [duration, end, started]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

function AnimatedOverallBar({
  width,
  delay = 0,
}: {
  width: number;
  delay?: number;
}) {
  const [currentWidth, setCurrentWidth] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasStarted(true);

        const timer = window.setTimeout(() => {
          setCurrentWidth(width);
        }, delay);

        observer.disconnect();

        return () => window.clearTimeout(timer);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [width, delay, hasStarted]);

  return (
    <div
      ref={ref}
      className="relative h-[6px] w-full overflow-hidden rounded-full bg-white/10"
    >
      <div
        className="absolute left-0 top-0 h-full rounded-full bg-[linear-gradient(90deg,#2BB673_0%,#D9D24A_45%,#F44336_100%)] transition-[width] duration-1000 ease-out"
        style={{ width: `${currentWidth}%` }}
      />
    </div>
  );
}

function TopStat({
  value,
  label,
  barWidth,
  barDelay = 0,
}: {
  value: string;
  label: string;
  barWidth: number;
  barDelay?: number;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false });
  const [transform, setTransform] = useState(
    "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)"
  );

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = cardRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = (0.5 - y / rect.height) * 8;

    setGlow({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      active: true,
    });

    setTransform(
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
    );
  };

  const handleLeave = () => {
    setGlow((prev) => ({ ...prev, active: false }));
    setTransform(
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)"
    );
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative overflow-hidden rounded-[22px] border border-white/8 bg-white/[0.03] p-5 transition-transform duration-300 will-change-transform"
      style={{ transform }}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(43,182,115,0.18), rgba(255,255,255,0.04) 38%, transparent 72%)`,
          opacity: glow.active ? 1 : 0,
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-80" />

      <div className="relative flex flex-col gap-3">
        <div className="text-[34px] font-semibold tracking-[-0.05em] text-[#F5F7F4] sm:text-[40px]">
          {value}
        </div>

        <div className="text-[15px] text-white/58 transition-colors duration-300 group-hover:text-white/74">
          {label}
        </div>

        <AnimatedOverallBar width={barWidth} delay={barDelay} />
      </div>
    </div>
  );
}

function ProgressBar({
  label,
  value,
  delay = 0,
}: {
  label: string;
  value: number;
  delay?: number;
}) {
  const [width, setWidth] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = barRef.current;
    if (!node || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasStarted(true);

        const timer = window.setTimeout(() => {
          setWidth(value);
        }, delay);

        observer.disconnect();

        return () => window.clearTimeout(timer);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [value, delay, hasStarted]);

  return (
    <div ref={barRef}>
      <div className="mb-2 flex items-center justify-between text-[12px] text-white/52">
        <span>{label}</span>
        <span>
          <CountUp end={hasStarted ? value : 0} suffix="%" duration={1000} />
        </span>
      </div>

      <div className="h-2 rounded-full bg-white/8">
        <div
          className="h-2 rounded-full bg-[#2BB673] shadow-[0_0_18px_rgba(43,182,115,0.28)] transition-[width] duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function MiniMetric({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false });
  const [transform, setTransform] = useState(
    "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)"
  );

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = cardRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = (0.5 - y / rect.height) * 8;

    setGlow({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      active: true,
    });

    setTransform(
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
    );
  };

  const handleLeave = () => {
    setGlow((prev) => ({ ...prev, active: false }));
    setTransform(
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)"
    );
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative overflow-hidden rounded-[18px] border border-white/8 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-transform duration-300 will-change-transform"
      style={{ transform }}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(43,182,115,0.18), rgba(255,255,255,0.04) 38%, transparent 72%)`,
          opacity: glow.active ? 1 : 0,
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-70" />

      <div className="relative">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/38 transition-colors duration-300 group-hover:text-white/52">
          {label}
        </p>
        <p className="mt-2 text-[26px] font-semibold tracking-[-0.05em] text-[#F5F7F4]">
          <CountUp end={value} suffix={suffix} startWhenVisible />
        </p>
      </div>
    </div>
  );
}

export default function WhyUs() {
  const { t, language } = useLanguage();

  const sectionTitle =
    language === "en" ? (
      <>
        See your <span className="glow-green">growth</span> in motion
      </>
    ) : language === "ar" ? (
      <>
        شاهد <span className="glow-green">نموك</span> بشكل حي
      </>
    ) : (
      <>
        Visualisez votre <span className="glow-green">croissance</span>
      </>
    );

  const copy = {
    eyebrow: t.whyUs.eyebrow[language],
    text: t.whyUs.text[language],
    topStats: {
      activePlayers: t.whyUs.topStats.activePlayers[language],
      totalEarnings: t.whyUs.topStats.totalEarnings[language],
      totalPlayers: t.whyUs.topStats.totalPlayers[language],
      revshare: t.whyUs.topStats.revshare[language],
    },
    dashboardTag: t.whyUs.dashboardTag[language],
    dashboardTitle: t.whyUs.dashboardTitle[language],
    mini: {
      newPlayers: t.whyUs.mini.newPlayers[language],
      weeklyVolume: t.whyUs.mini.weeklyVolume[language],
      conversionRate: t.whyUs.mini.conversionRate[language],
      regionalReach: t.whyUs.mini.regionalReach[language],
    },
    bars: {
      structure: t.whyUs.bars.structure[language],
      reach: t.whyUs.bars.reach[language],
      expansion: t.whyUs.bars.expansion[language],
    },
  };

  return (
    <section id="tools" className="relative px-4 py-14 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <StaggerReveal amount={0.14}>
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <div className="inline-flex items-center gap-3 text-[#2BB673]">
                <span className="h-px w-8 bg-[#2BB673]/45" />
                <span className="text-[13px] font-semibold uppercase tracking-[0.22em]">
                  {copy.eyebrow}
                </span>
                <span className="h-px w-8 bg-[#2BB673]/45" />
              </div>
            </FadeUp>

            <FadeUp>
              <h2 className="mt-5 text-[34px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#F5F7F4] sm:text-[46px]">
                {sectionTitle}
              </h2>
            </FadeUp>

            <FadeUp>
              <p className="mx-auto mt-5 max-w-[60ch] text-[17px] leading-8 text-white/62">
                {copy.text}
              </p>
            </FadeUp>
          </div>

          <FadeUp>
            <div className="overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(90deg,rgba(43,182,115,0.06)_0%,rgba(255,255,255,0.02)_40%,rgba(244,67,54,0.06)_100%)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-7">
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                <TopStat
                  value="+2,430"
                  label={copy.topStats.activePlayers}
                  barWidth={70}
                  barDelay={100}
                />
                <TopStat
                  value="$18,920"
                  label={copy.topStats.totalEarnings}
                  barWidth={70}
                  barDelay={220}
                />
                <TopStat
                  value="12,480"
                  label={copy.topStats.totalPlayers}
                  barWidth={74}
                  barDelay={340}
                />
                <TopStat
                  value="35%"
                  label={copy.topStats.revshare}
                  barWidth={68}
                  barDelay={460}
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
                  melbet.algeria-partners.com
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
                      {copy.dashboardTag}
                    </p>
                    <h3 className="mt-2 text-[28px] font-semibold tracking-[-0.04em] text-[#F5F7F4]">
                      {copy.dashboardTitle}
                    </h3>
                  </div>

                  <div className="text-[28px] font-semibold tracking-[-0.05em] text-[#2BB673]">
                    <CountUp end={26} suffix="%" startWhenVisible />
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <MiniMetric label={copy.mini.newPlayers} value={248} />
                  <MiniMetric
                    label={copy.mini.weeklyVolume}
                    value={184}
                    suffix="K"
                  />
                  <MiniMetric
                    label={copy.mini.conversionRate}
                    value={37}
                    suffix="%"
                  />
                  <MiniMetric label={copy.mini.regionalReach} value={12} />
                </div>

                <div className="mt-8 rounded-[24px] bg-white/[0.03] p-5">
                  <div className="space-y-4">
                    <ProgressBar
                      label={copy.bars.structure}
                      value={84}
                      delay={100}
                    />
                    <ProgressBar
                      label={copy.bars.reach}
                      value={72}
                      delay={250}
                    />
                    <ProgressBar
                      label={copy.bars.expansion}
                      value={91}
                      delay={400}
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
