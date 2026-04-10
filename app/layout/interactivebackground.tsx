"use client";

export default function InteractiveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#020403]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#07110b_0%,#020403_100%)]" />

      <div className="absolute left-0 right-0 top-[39%] h-[2px] bg-[linear-gradient(90deg,transparent_0%,rgba(43,182,115,0.7)_20%,rgba(255,255,255,0.22)_50%,rgba(244,67,54,0.7)_80%,transparent_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.05),transparent_18%),radial-gradient(circle_at_32%_30%,rgba(43,182,115,0.12),transparent_24%),radial-gradient(circle_at_68%_30%,rgba(244,67,54,0.12),transparent_24%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,3,0.22)_0%,rgba(2,4,3,0.08)_18%,rgba(2,4,3,0.18)_48%,rgba(2,4,3,0.56)_76%,rgba(2,4,3,0.84)_100%)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_220px_rgba(0,0,0,0.46)]" />
    </div>
  );
}