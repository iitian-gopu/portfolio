import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const title = `${site.name} — ${site.role} · IIT (BHU) Varanasi`;
const description = site.intro;

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title,
  description,
  keywords: [
    site.name,
    "Software Engineer",
    "Full Stack Developer",
    "IIT BHU",
    "IIT (BHU) Varanasi",
    "Goldman Sachs",
    "Next.js",
    "React",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: site.name, url: site.siteUrl }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: site.siteUrl,
    title,
    description,
    siteName: site.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: light)", color: "#f7f7f5" },
  ],
  width: "device-width",
  initialScale: 1,
};

/* Runs before paint so the chosen theme never flashes. */
const themeScript = `
(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){}})();
`;

const jsonLd = {
  "@context": "https://schema.org",
