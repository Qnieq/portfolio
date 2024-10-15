import { Mail, Send } from "lucide-react";
import Link from "next/link";
import styles from "./ContactsBox.module.scss"

export function ContactsBox() {
    return (
        <div className={styles.box}>
            <Link href="mailto:misha.o.son@gmail.com" type="email" className={styles.link}>
                <Mail size={25} color="#0a0a0a" />
            </Link>
            <Link href="https://t.me/michael999ant" className={styles.link}>
                <Send size={25} color="#0a0a0a" />
            </Link>
        </div>
    );
}
