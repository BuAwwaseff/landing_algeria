"use client";

import { type ReactNode } from "react";
import { usePathname } from "next/navigation";
import InteractiveBackground from "./interactivebackground";

export default function PageShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const variant = pathname.startsWith("/partnership") ? "partnership" : "home";

  return (
    <div data-page-shell={variant} className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <InteractiveBackground key={variant} variant={variant} />
      </div>

      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </div>
  );
}
