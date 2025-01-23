import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.scss";
import BgEffect from "@/components/ui/bg-effect/BgEffect";
import { languages } from "@/config/languages";
import { DictionaryContext } from "@/hooks/useDictionary";
import { getDictionary } from "./dictionaries/getDictionary";

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
    params: Promise<{lang: string}>
}) {
    const { lang } = await params; // Await the params to ensure it's resolved
    const dictionary = await getDictionary(lang);
    console.log(dictionary)
    return (
        <html lang={lang}>
            <body className={montserrat.className}>
                <BgEffect />
                {dictionary && (
                    <DictionaryContext.Provider value={dictionary}>
                        {children}
                    </DictionaryContext.Provider>
                )}
            </body>
        </html>
    );
}