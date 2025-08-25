import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollHeader from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "株式会社SEA",
  description:
    "株式会社SEAは、IT人材事業（SES・紹介・派遣）と飲食事業を展開。人と企業の「挑戦」を支え、成長とつながりを創出する多角的ソリューションカンパニーです。",
  keywords: ["株式会社SEA", "IT人材", "飲食事業", "SES", "派遣", "紹介"],
  openGraph: {
    title: "株式会社SEA",
    description:
      "株式会社SEAは、IT人材事業（SES・紹介・派遣）と飲食事業を展開。人と企業の「挑戦」を支え、成長とつながりを創出する多角的ソリューションカンパニーです。",
    url: "https://sea4-four.com/",
    images: [
      {
        url: "/ogp-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社SEA",
    description:
      "株式会社SEAは、IT人材事業（SES・紹介・派遣）と飲食事業を展開。人と企業の「挑戦」を支え、成長とつながりを創出する多角的ソリューションカンパニーです。",
    images: ["/ogp-image.png"],
  },
  metadataBase: new URL("https://sea4-four.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ margin: 0 }}
      >
        <header>
          <ScrollHeader />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
