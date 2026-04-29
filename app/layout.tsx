import type { ReactNode } from "react";
import Footer from "./layout/Footer";
import LanguageProvider from "./layout/LanguageProvider";
import PageShell from "./layout/PageShell";
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
          <PageShell>
            <div className="flex min-h-screen flex-col">
              <TopBar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </PageShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
