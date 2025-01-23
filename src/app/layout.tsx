import "./globals.scss";
import BgEffect from "@/components/ui/bg-effect/BgEffect";
import { DictionaryContext } from "@/hooks/useDictionary";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <>
          {children}
        </>
    );
}