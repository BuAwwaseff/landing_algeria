"use client";

import type { ReactNode } from "react";
import { FadeUp } from "@/app/partnership/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  text,
  className = "",
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  text: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <FadeUp>
        <div className="lp-eyebrow inline-flex items-center gap-3 text-[#2BB673]">
          <span className="h-px w-8 bg-[#2BB673]/45" />
          {eyebrow}
          <span className="h-px w-8 bg-[#2BB673]/45" />
        </div>
      </FadeUp>

      <FadeUp>
        <h2 className="lp-section-title mt-6 text-[#F5F7F4]">{title}</h2>
      </FadeUp>

      <FadeUp>
        <p className="lp-body mx-auto mt-4 max-w-2xl text-white/62">{text}</p>
      </FadeUp>
    </div>
  );
}