import type { Metadata } from "next";
import { Noto_Sans_TC, Outfit } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "接案神器 SoloQuote - 專為台灣自由工作者打造的報價單管理工具",
  description:
    "一次買斷、終身使用。30秒快速開立專業報價單，完整支援繁體中文 PDF、統一編號、自動流水號、狀態追蹤。專為台灣接案族設計。",
  keywords: [
    "報價單",
    "接案",
    "自由工作者",
    "Freelancer",
    "Invoice",
    "Quote",
    "台灣",
    "報價神器",
    "SoloQuote",
  ],
  authors: [{ name: "SoloQuote Team" }],
  creator: "SoloQuote",
  openGraph: {
    title: "接案神器 SoloQuote - 專為台灣自由工作者打造的報價單管理工具",
    description:
      "一次買斷、終身使用。30秒快速開立專業報價單，完整支援繁體中文 PDF、統一編號、自動流水號。",
    url: "https://soloquote.app",
    siteName: "SoloQuote 接案神器",
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "接案神器 SoloQuote",
    description: "專為台灣自由工作者打造的報價單管理工具",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <body className={`${notoSansTC.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
