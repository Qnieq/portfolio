import styles from "@/app/main.module.scss"
import Link from "next/link";
import { Mail, Send } from 'lucide-react';
import { Heading } from "@/components/ui/heading/Heading";
import { ContactsBox } from "@/components/ui/contacts-box/ContactsBox";

export function Contacts() {
    return (
        <section className={styles.contacts} id="contacts">
            <Heading title="Contact with me" color="#eee5e0" />
            <ContactsBox />
        </section>
    );
}
