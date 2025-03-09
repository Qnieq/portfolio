import styles from "@/app/[lang]/main.module.scss"
import { Instagram, Linkedin, Mail, Music2, Send, Youtube, } from 'lucide-react';
import { Heading } from "@/components/ui/heading/Heading";
import { ContactsBox } from "@/components/ui/contacts-box/ContactsBox";

const items = [
    {
        hint: "Email",
        icon: <Mail size={25} color="#0a0a0a" />,
        link: "mailto:misha.o.son@gmail.com",
        type: "email",
        color: "#0a0a0a"
    },
    {
        hint: "Telegram",
        icon: <Send size={25} color="#39a5db" />,
        link: "https://t.me/michael_zavali",
        type: "",
        color: "#39a5db"
    },
    {
        hint: "LinkedIn",
        icon: <Linkedin size={25} color="#0077b5" />,
        link: "https://www.linkedin.com/in/michael-orlov-280b4b348/",
        type: "",
        color: "#0077b5"
    },
]

export function SocialMedia() {
    return (
        <section className={styles.contacts} id="social media">
            <Heading title="Social media" color="#eee5e0" />
            <ContactsBox items={items} />
        </section>
    );
}
