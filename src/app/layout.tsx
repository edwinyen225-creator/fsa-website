import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Future Skill Academy — Tokyo",
  description:
    "Future Skill Academy is a premium Tokyo-based learning academy helping students build communication, AI literacy, presentation, research, and real-world project skills.",

  openGraph: {
    title: "Future Skill Academy — Tokyo",
    description:
      "Future Skill Academy is a premium Tokyo-based learning academy helping students build communication, AI literacy, presentation, research, and real-world project skills.",
    siteName: "Future Skill Academy",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Future Skill Academy — Tokyo",
    description:
      "Future Skill Academy is a premium Tokyo-based learning academy helping students build communication, AI literacy, presentation, research, and real-world project skills.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
