import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import BgEffect from "@/components/ui/bg-effect/BgEffect";
import Header from "@/components/ui/header/Header";
import { Analytics } from "@vercel/analytics/react"

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Portfolio Fullstack dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <BgEffect />
        <Header />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
