import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const titre = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-titre",
  display: "swap",
});

const texte = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-texte",
  display: "swap",
});

const titrePage = "Recouvre — Relancez vos factures impayées, sans gêne";
const description =
  "Recouvre relance vos clients à 7, 15 et 30 jours, puis prépare la mise en demeure. Vous récupérez votre argent sans avoir à le réclamer.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: titrePage,
  description,
  openGraph: {
    title: titrePage,
    description,
    type: "website",
    locale: "fr_FR",
    siteName: "Recouvre",
  },
  twitter: { card: "summary_large_image", title: titrePage, description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F6F2EA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${titre.variable} ${texte.variable}`}>
      <body className="min-h-screen flex flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
