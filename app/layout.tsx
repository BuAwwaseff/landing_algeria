import type { ReactNode } from "react";
import Footer from "./layout/Footer";
import InteractiveBackground from "./layout/interactivebackground";
import LanguageProvider from "./layout/LanguageProvider";
import TopBar from "./layout/TopBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050806] text-white">
        <LanguageProvider>
          <div className="relative min-h-screen">
            <div className="fixed inset-0 z-0">
              <InteractiveBackground />
            </div>

            <div className="relative z-10 flex min-h-screen flex-col">
              <TopBar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}