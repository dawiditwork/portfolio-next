import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-poppins",
});

const siteUrl = "https://dawidfrankowicz.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Dawid Frankowicz | Software Developer",
    template: "%s | Dawid Frankowicz",
  },

  description:
    "Portfolio of Dawid Frankowicz, a software developer based in Switzerland. Explore React, Next.js and TypeScript projects featuring authentication, payments, APIs and automated testing.",

  applicationName: "Dawid Frankowicz Portfolio",

  keywords: [
    "Dawid Frankowicz",
    "Software Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer Switzerland",
    "Softwareentwickler Schweiz",
    "Frontend Entwickler Basel",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
  ],

  authors: [
    {
      name: "Dawid Frankowicz",
      url: siteUrl,
    },
  ],

  creator: "Dawid Frankowicz",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "de_CH",
    alternateLocale: ["en_US"],

    url: siteUrl,
    siteName: "Dawid Frankowicz",

    title: "Dawid Frankowicz | Software Developer",

    description:
      "Building full-stack web applications with React, Next.js and TypeScript. Explore real projects, from authentication and payments to automated testing and deployment.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dawid Frankowicz | Software Developer",
    description:
      "React, Next.js, TypeScript and full-stack engineering. Explore my projects and experience.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}