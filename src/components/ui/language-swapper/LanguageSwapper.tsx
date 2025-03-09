import Link from "next/link";
import styles from "./LanguageSwapper.module.scss"
import { usePathname } from "next/navigation";

const languages = ["ru", "en"]

export function LanguageSwapper() {
    const pathname = usePathname();

    return (
        <div className={styles.swapper}>
            {languages.map((lang, index) => (
                <Link
                    key={index}
                    href={`/${lang}`}
                    className={styles.link}
                    style={{ 
                        background: pathname.includes(lang) ? "#e7dfda" : "",
                        color: pathname.includes(lang) ? "#000" : "#e7dfda"

                    }}
                >
                    {lang}
                </Link>
            ))}
        </div>
    );
}