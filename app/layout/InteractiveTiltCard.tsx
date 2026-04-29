"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";

export default function InteractiveTiltCard({
  children,
  className = "",
  tilt = 7,
  glowColor = "rgba(43,182,115,0.14)",
  glowFade = "rgba(255,255,255,0.03)",
  lift = -5,
}: {
  children: ReactNode;
  className?: string;
  tilt?: number;
  glowColor?: string;
  glowFade?: string;
  lift?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false });
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
  );

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * tilt;
    const rotateX = (0.5 - y / rect.height) * tilt;

    setGlow({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      active: true,
    });

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${lift}px)`,
    );
  };

  const handleLeave = () => {
    setGlow((prev) => ({ ...prev, active: false }));
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
    );
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`group relative transition-transform duration-300 will-change-transform ${className}`}
      style={{ transform }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, ${glowColor}, ${glowFade} 38%, transparent 72%)`,
          opacity: glow.active ? 1 : 0,
        }}
      />

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
