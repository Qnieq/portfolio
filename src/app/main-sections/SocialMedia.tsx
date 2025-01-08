import styles from "@/app/main.module.scss"
import { Instagram, Music2, Send, Youtube, } from 'lucide-react';
import { Heading } from "@/components/ui/heading/Heading";
import { ContactsBox } from "@/components/ui/contacts-box/ContactsBox";

const items = [
    {
        hint: "Telegram",
        icon: <Send size={25} color="#39a5db" />,
        link: "https://t.me/michael999ant",
        type: "",
        color: "#39a5db"
    },
    // {
    //     hint: "YouTube",
    //     icon: <Youtube size={25} color="#ff0034" />,
    //     link: "https://www.youtube.com/@z4val",
    //     type: "",
    //     color: "#ff0034"
    // },
    // {
    //     hint: "Instagram",
    //     icon: <Instagram size={25} color="#fc145d" />,
    //     link: "https://www.instagram.com/z4val/",
    //     type: "",
    //     color: "#fead16"
    // },
    // {
    //     hint: "TikTok",
    //     icon: <Music2 size={25} color="#ea284e" />,
    //     link: "https://www.tiktok.com/@qneqo",
    //     type: "",
    //     color: "#121212"
    // },
]

export function SocialMedia() {
    return (
        <section className={styles.contacts} id="social media">
            <Heading title="Social media" color="#eee5e0" />
            <ContactsBox items={items} />
        </section>
    );
}
