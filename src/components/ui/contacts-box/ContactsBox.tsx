import Link from "next/link";
import styles from "./ContactsBox.module.scss"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface IContactsBox {
    items: {
        hint: string;
        link: string;
        icon: React.ReactNode;
        type: string;
        color: string;
    }[]
}

export function ContactsBox({ items }: IContactsBox) {

    const [hintIsShow, setHintIsShow] = useState(false)
    const [hint, setHint] = useState("")

    return (
        <div className={styles.box}>
            <div className={styles.links_box}>
                {items.map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        type={item.type}
                        className={styles.link}
                        style={{ borderColor: item.color }}
                        onMouseEnter={() => (setHint(item.hint), setHintIsShow(true))}
                        onMouseLeave={() => (setHint(""), setHintIsShow(false))}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {item.icon}
                    </Link>
                ))}
            </div>
            <AnimatePresence>
                {hintIsShow && (
                    <motion.h5
                        className={styles.hint}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {hint}
                    </motion.h5>
                )}
            </AnimatePresence>
        </div>
    );
}
