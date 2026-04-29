"use client";

type BackgroundVariant = "home" | "partnership";

type OrbConfig = {
  left?: string;
  right?: string;
  top: string;
  width: number;
  height: number;
  delay: string;
  duration: string;
  color: string;
};

type RingConfig = {
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
  borderColor: string;
};

type BeamConfig = {
  left?: string;
  right?: string;
  top: string;
  width: number;
  height: number;
  rotate: number;
  delay: string;
  duration: string;
  color: string;
};

type ArcConfig = {
  left?: string;
  right?: string;
  top: string;
  size: number;
  rotate: number;
  delay: string;
  duration: string;
  borderColor: string;
};

export default function InteractiveBackground({
  variant = "home",
}: {
  variant?: BackgroundVariant;
}) {
  const isHome = variant === "home";

  const shafts = isHome
    ? [
        { left: "8%", delay: "0s", duration: "8.2s" },
        { left: "19%", delay: "0.9s", duration: "9.4s" },
        { left: "34%", delay: "1.8s", duration: "8.8s" },
        { left: "52%", delay: "0.5s", duration: "9.8s" },
        { left: "68%", delay: "2.4s", duration: "8.6s" },
        { left: "84%", delay: "1.2s", duration: "9.1s" },
      ]
    : [
        { left: "13%", delay: "0.3s", duration: "9.4s" },
        { left: "29%", delay: "1.2s", duration: "10s" },
        { left: "47%", delay: "0.7s", duration: "8.9s" },
        { left: "66%", delay: "1.9s", duration: "9.6s" },
        { left: "83%", delay: "0.4s", duration: "10.4s" },
      ];

  const orbs: OrbConfig[] = isHome
    ? [
        {
          left: "5%",
          top: "14%",
          width: 360,
          height: 360,
          delay: "0s",
          duration: "10s",
          color:
            "radial-gradient(circle, rgba(43,182,115,0.22) 0%, rgba(43,182,115,0.09) 38%, transparent 76%)",
        },
        {
          right: "6%",
          top: "18%",
          width: 300,
          height: 300,
          delay: "1.8s",
          duration: "11.5s",
          color:
            "radial-gradient(circle, rgba(244,67,54,0.16) 0%, rgba(244,67,54,0.07) 34%, transparent 76%)",
        },
        {
          left: "48%",
          top: "62%",
          width: 280,
          height: 280,
          delay: "3.4s",
          duration: "12.4s",
          color:
            "radial-gradient(circle, rgba(255,255,255,0.07) 0%, rgba(43,182,115,0.05) 36%, transparent 74%)",
        },
      ]
    : [
        {
          left: "8%",
          top: "22%",
          width: 320,
          height: 320,
          delay: "0.8s",
          duration: "11.2s",
          color:
            "radial-gradient(circle, rgba(43,182,115,0.18) 0%, rgba(43,182,115,0.08) 38%, transparent 76%)",
        },
        {
          right: "10%",
          top: "30%",
          width: 260,
          height: 260,
          delay: "2.4s",
          duration: "12.6s",
          color:
            "radial-gradient(circle, rgba(244,67,54,0.12) 0%, rgba(244,67,54,0.05) 36%, transparent 74%)",
        },
        {
          left: "42%",
          top: "70%",
          width: 340,
          height: 340,
          delay: "4.1s",
          duration: "13s",
          color:
            "radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(43,182,115,0.04) 34%, transparent 74%)",
        },
      ];

  const rings: RingConfig[] = isHome
    ? [
        {
          left: "62%",
          top: "14%",
          size: 420,
          delay: "0s",
          duration: "13s",
          borderColor: "rgba(43,182,115,0.12)",
        },
        {
          left: "58%",
          top: "10%",
          size: 520,
          delay: "2.4s",
          duration: "15s",
          borderColor: "rgba(255,255,255,0.06)",
        },
      ]
    : [
        {
          left: "10%",
          top: "18%",
          size: 340,
          delay: "0.4s",
          duration: "14s",
          borderColor: "rgba(43,182,115,0.1)",
        },
        {
          left: "6%",
          top: "12%",
          size: 440,
          delay: "3s",
          duration: "16s",
          borderColor: "rgba(255,255,255,0.05)",
        },
      ];

  const beams: BeamConfig[] = isHome
    ? [
        {
          left: "-8%",
          top: "10%",
          width: 460,
          height: 110,
          rotate: -12,
          delay: "0s",
          duration: "15s",
          color:
            "linear-gradient(90deg, rgba(43,182,115,0) 0%, rgba(43,182,115,0.22) 36%, rgba(255,255,255,0.1) 60%, rgba(43,182,115,0) 100%)",
        },
        {
          right: "-6%",
          top: "28%",
          width: 360,
          height: 96,
          rotate: 18,
          delay: "2.8s",
          duration: "17s",
          color:
            "linear-gradient(90deg, rgba(244,67,54,0) 0%, rgba(244,67,54,0.14) 32%, rgba(255,255,255,0.08) 52%, rgba(244,67,54,0) 100%)",
        },
      ]
    : [
        {
          left: "-4%",
          top: "18%",
          width: 380,
          height: 92,
          rotate: -8,
          delay: "0.8s",
          duration: "16.5s",
          color:
            "linear-gradient(90deg, rgba(43,182,115,0) 0%, rgba(43,182,115,0.18) 38%, rgba(255,255,255,0.08) 58%, rgba(43,182,115,0) 100%)",
        },
        {
          right: "2%",
          top: "36%",
          width: 260,
          height: 76,
          rotate: 14,
          delay: "3.4s",
          duration: "18s",
          color:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 42%, rgba(43,182,115,0.12) 62%, rgba(255,255,255,0) 100%)",
        },
      ];

  const arcs: ArcConfig[] = isHome
    ? [
        {
          left: "-14%",
          top: "8%",
          size: 620,
          rotate: -16,
          delay: "0s",
          duration: "18s",
          borderColor: "rgba(43,182,115,0.08)",
        },
        {
          right: "-10%",
          top: "46%",
          size: 520,
          rotate: 18,
          delay: "3s",
          duration: "20s",
          borderColor: "rgba(255,255,255,0.06)",
        },
      ]
    : [
        {
          left: "-12%",
          top: "16%",
          size: 560,
          rotate: -10,
          delay: "0.6s",
          duration: "18.5s",
          borderColor: "rgba(43,182,115,0.08)",
        },
        {
          right: "-12%",
          top: "52%",
          size: 420,
          rotate: 14,
          delay: "3.6s",
          duration: "19.5s",
          borderColor: "rgba(255,255,255,0.05)",
        },
      ];

  return (
    <div
      className={`bg-depth-root ${isHome ? "bg-depth-root--home" : "bg-depth-root--partnership"}`}
    >
      <div className="bg-depth-noise" />
      <div
        className={`bg-depth-lattice ${isHome ? "bg-depth-lattice--home" : "bg-depth-lattice--partnership"}`}
      />
      <div
        className={`bg-depth-particles ${isHome ? "bg-depth-particles--home" : "bg-depth-particles--partnership"}`}
      />

      <div
        className="bg-depth-back"
        style={{
          backgroundImage: isHome
            ? "radial-gradient(circle at 18% 18%, rgba(43,182,115,0.18), transparent 26%), radial-gradient(circle at 82% 20%, rgba(244,67,54,0.12), transparent 20%), radial-gradient(circle at 50% 52%, rgba(43,182,115,0.1), transparent 28%), radial-gradient(circle at 14% 78%, rgba(255,255,255,0.04), transparent 18%), radial-gradient(circle at 86% 82%, rgba(43,182,115,0.08), transparent 18%)"
            : "radial-gradient(circle at 14% 20%, rgba(43,182,115,0.14), transparent 24%), radial-gradient(circle at 84% 24%, rgba(244,67,54,0.09), transparent 18%), radial-gradient(circle at 48% 56%, rgba(43,182,115,0.08), transparent 30%), radial-gradient(circle at 18% 84%, rgba(255,255,255,0.03), transparent 16%), radial-gradient(circle at 78% 84%, rgba(43,182,115,0.07), transparent 17%)",
        }}
      />

      <div
        className="bg-depth-corner"
        style={{
          left: "-9%",
          top: "-12%",
          width: isHome ? 360 : 320,
          height: isHome ? 360 : 320,
          animationDelay: "0s",
          background:
            "radial-gradient(circle, rgba(43,182,115,0.24) 0%, rgba(43,182,115,0.08) 42%, transparent 74%)",
        }}
      />
      <div
        className="bg-depth-corner"
        style={{
          right: "-8%",
          top: isHome ? "10%" : "18%",
          width: isHome ? 280 : 240,
          height: isHome ? 280 : 240,
          animationDelay: "2s",
          background:
            "radial-gradient(circle, rgba(244,67,54,0.16) 0%, rgba(244,67,54,0.05) 42%, transparent 72%)",
        }}
      />
      <div
        className="bg-depth-corner"
        style={{
          right: isHome ? "14%" : "6%",
          bottom: "-16%",
          width: isHome ? 420 : 360,
          height: isHome ? 420 : 360,
          animationDelay: "3.8s",
          background:
            "radial-gradient(circle, rgba(43,182,115,0.14) 0%, rgba(43,182,115,0.04) 42%, transparent 72%)",
        }}
      />

      <div className="bg-depth-shafts">
        {shafts.map((shaft, index) => (
          <div
            key={`${variant}-shaft-${index}`}
            className="bg-depth-shaft"
            style={{
              left: shaft.left,
              animationDelay: shaft.delay,
              animationDuration: shaft.duration,
            }}
          />
        ))}
      </div>

      <div className="bg-depth-orbs">
        {orbs.map((orb, index) => (
          <div
            key={`${variant}-orb-${index}`}
            className="bg-depth-orb"
            style={{
              left: orb.left,
              right: orb.right,
              top: orb.top,
              width: orb.width,
              height: orb.height,
              background: orb.color,
              animationDelay: orb.delay,
              animationDuration: orb.duration,
            }}
          />
        ))}
      </div>

      <div className="bg-depth-rings">
        {rings.map((ring, index) => (
          <div
            key={`${variant}-ring-${index}`}
            className="bg-depth-ring"
            style={{
              left: ring.left,
              top: ring.top,
              width: ring.size,
              height: ring.size,
              borderColor: ring.borderColor,
              animationDelay: ring.delay,
              animationDuration: ring.duration,
            }}
          />
        ))}
      </div>

      <div className="bg-depth-arcs">
        {arcs.map((arc, index) => (
          <div
            key={`${variant}-arc-${index}`}
            className="bg-depth-arc-shell"
            style={{
              left: arc.left,
              right: arc.right,
              top: arc.top,
              width: arc.size,
              height: arc.size,
              transform: `rotate(${arc.rotate}deg)`,
              borderColor: arc.borderColor,
              animationDelay: arc.delay,
              animationDuration: arc.duration,
            }}
          />
        ))}
      </div>

      <div className="bg-depth-beams">
        {beams.map((beam, index) => (
          <div
            key={`${variant}-beam-${index}`}
            className="bg-depth-beam-shell"
            style={{
              left: beam.left,
              right: beam.right,
              top: beam.top,
              width: beam.width,
              height: beam.height,
              transform: `rotate(${beam.rotate}deg)`,
            }}
          >
            <div
              className="bg-depth-beam"
              style={{
                background: beam.color,
                animationDelay: beam.delay,
                animationDuration: beam.duration,
              }}
            />
          </div>
        ))}
      </div>

      <div
        className={`bg-depth-horizon ${isHome ? "bg-depth-horizon--home" : "bg-depth-horizon--partnership"}`}
      >
        <span className="bg-depth-horizon-line" />
        <span className="bg-depth-horizon-glow" />
      </div>

      <div className="bg-depth-plane-wrap">
        <div
          className="bg-depth-plane"
          style={{
            opacity: isHome ? 0.46 : 0.34,
            backgroundImage: isHome
              ? "radial-gradient(circle at center, rgba(43,182,115,0.1), transparent 48%), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)"
              : "radial-gradient(circle at center, rgba(43,182,115,0.08), transparent 50%), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.028) 1px, transparent 1px)",
          }}
        />
      </div>

      <div className="bg-depth-sweep" />
      <div className="bg-depth-vignette" />
    </div>
  );
}
