import type { Metadata } from "next";
import { Noto_Sans_JP, Zen_Kaku_Gothic_New, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sansJp = Noto_Sans_JP({
  variable: "--font-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

const headingJp = Zen_Kaku_Gothic_New({
  variable: "--font-heading-jp",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const labelMono = IBM_Plex_Mono({
  variable: "--font-label-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "EXCEED CAREER | 株式会社エクシードジャパン",
  description:
    "この先、何になろう。好きなこと・得意なこと・気になる未来から、自分のキャリアを探索するキャリアナビゲーションメディア。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${sansJp.variable} ${headingJp.variable} ${labelMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
