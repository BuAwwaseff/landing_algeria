"use client";

import { type CSSProperties } from "react";

function joinClasses(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export default function SeamlessTicker({
  items,
  className,
  itemClassName,
  durationSeconds = 18,
  gap = 12,
}: {
  items: readonly string[];
  className?: string;
  itemClassName?: string;
  durationSeconds?: number;
  gap?: number;
}) {
  const copyCount = 4;
  const tickerStyle = {
    "--ticker-duration": `${durationSeconds}s`,
    "--ticker-gap": `${gap}px`,
    "--ticker-copy-count": `${copyCount}`,
  } as CSSProperties;

  return (
    <div
      className={joinClasses(
        "relative w-full overflow-hidden rounded-[18px] border border-white/8 bg-black/22 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:py-3",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-10 bg-gradient-to-r from-[#07110b] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-10 bg-gradient-to-l from-[#07110b] to-transparent" />

      <div className="relative px-3">
        <div className="al-live-marquee-track" style={tickerStyle}>
          {Array.from({ length: copyCount }, (_, copyIndex) => (
            <div
              key={`ticker-copy-${copyIndex}`}
              className="al-live-marquee-group"
              aria-hidden={copyIndex !== 0}
            >
              {items.map((item, itemIndex) => (
                <div
                  key={`${copyIndex}-${item}-${itemIndex}`}
                  className={joinClasses(
                    "inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 font-semibold uppercase tracking-[0.16em] text-white/60",
                    itemClassName,
                  )}
                >
                  <span
                    className="al-live-dot inline-block h-2.5 w-2.5 rounded-full bg-[#2BB673] shadow-[0_0_16px_rgba(43,182,115,0.62)]"
                    aria-hidden="true"
                  />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
