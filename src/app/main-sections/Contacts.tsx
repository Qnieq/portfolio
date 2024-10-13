import styles from "@/app/main.module.scss"
import Link from "next/link";
import { Mail, Send } from 'lucide-react';
import { Heading } from "@/components/ui/heading/Heading";

export function Contacts() {
    return (
        <section className={styles.contacts}>
            <Heading title="Contact with me" color="#eee5e0" />
            <div className={styles.box}>
                <Link href="mailto:misha.o.son@gmail.com" type="email" className={styles.link}>
                    <Mail size={25} color="#0a0a0a" />
                </Link>
                <Link href="https://t.me/michael999ant" className={styles.link}>
                    <Send size={25} color="#0a0a0a" />
                </Link>
            </div>
        </section>
    );
}
