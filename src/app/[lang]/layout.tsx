import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.scss";
import BgEffect from "@/components/ui/bg-effect/BgEffect";
import { languages } from "@/config/languages";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    title: "Portfolio Fullstack dev",
};

export async function generateStaticParams() {
    return Object.keys(languages).map((lang) => ({ lang }))
}

export default async function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>
}) {

    const { lang } = await params;
    
    return (
        <html lang={lang}>
            <body className={montserrat.className}>
                <BgEffect />
                {children}
            </body>
        </html>
    );
}