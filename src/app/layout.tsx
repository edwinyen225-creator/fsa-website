import type { Metadata } from "next";
import { Geist_Mono, Playfair_Display, Jost, Shippori_Mincho, Zen_Kaku_Gothic_New } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/ui/mobile-cta-bar";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

// Body sans — geometric, refined; pairs with Playfair's editorial serif
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Japanese companions — elegant mincho for headings, clean gothic for body.
// next/font self-hosts all charsets; JP glyphs load on demand (preload: false).
const shippori = Shippori_Mincho({
  variable: "--font-shippori",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: false,
});

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Future Skill Academy — Tokyo",
  description:
    "Future Skill Academy is a Tokyo-based learning academy helping students build communication, AI literacy, presentation, research, and portfolio project skills through English-based learning.",

  openGraph: {
    title: "Future Skill Academy — Tokyo",
    description:
      "Future Skill Academy is a Tokyo-based learning academy helping students build communication, AI literacy, presentation, research, and portfolio project skills through English-based learning.",
    siteName: "Future Skill Academy",
    locale: "en_US",
    type: "website",
    url: "https://fsa-website-puce.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Future Skill Academy — Tokyo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Future Skill Academy — Tokyo",
    description:
      "Future Skill Academy is a Tokyo-based learning academy helping students build communication, AI literacy, presentation, research, and portfolio project skills through English-based learning.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${playfair.variable} ${jost.variable} ${shippori.variable} ${zenKaku.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
          <MobileCTABar />
        </LanguageProvider>
      </body>
    </html>
  );
}
