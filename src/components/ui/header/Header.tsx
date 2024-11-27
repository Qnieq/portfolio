"use client"

import Link from "next/link";
import styles from "./Header.module.scss"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react";
import Image from "next/image";

const navigation: { id: string, title: string }[] = [
    {
        id: "works",
        title: "Works"
    },

    {
        id: "experience",
        title: "Experience"
    },
    {
        id: "about",
        title: "About"
    },
    {
        id: "work history",
        title: "Work history"
    },
    {
        id: "social media",
        title: "Social media"
    },
];

const Header = ({ delay }: { delay?: number }) => {

    const [width, setWidth] = useState<number>(0)
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth)
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("resize", () => setWidth((current) => (current * 0) + window.innerWidth))
    
            return () => {
                window.removeEventListener("resize", () => setWidth((current) => (current * 0) + window.innerWidth))
            }
        }
    }, [])

    const scrollToElement = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            initial={{
                translateY: -120,
            }}
            animate={{
                translateY: 0,
            }}
            transition={{
                delay: 0.3 + (delay ? delay : 0),
                ease: "linear",
                duration: 1,
                type: "spring"
            }}
            className={styles.header}
        >
            <section className={styles.header_box}>
                <div className={styles.logo_box}>
                    <div className={styles.elem}></div>
                    <h5 className={styles.name_tag}>
                        Michael<br />Orlov
                    </h5>
                    <Link href={"/"} className={styles.logo_link} />
                </div>
                <nav className={styles.navigation}>
                    {navigation.map((nav, index) => (
                        <h5 key={index} className={styles.nav_title} onClick={() => scrollToElement(nav.id)}>
                            {nav.title}
                        </h5>
                    ))}
                </nav>
                {width < 839 && (
                    menuIsOpen ?
                        <Image src={"/icons/close.svg"} alt="" width={30} height={30} onClick={() => setMenuIsOpen(!menuIsOpen)} />
                        :
                        <Image src={"/icons/menu.svg"} alt="" width={30} height={30} onClick={() => setMenuIsOpen(!menuIsOpen)} />
                )}
                <AnimatePresence>
                    {width < 839 && menuIsOpen && (
                        <motion.nav
                            className={styles.mobile_nav}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            transition={{
                                ease: "easeOut",
                                duration: 0.5,
                                type: "spring",
                                bounce: 0.05,
                            }}
                        >
                            {navigation.map((nav, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.nav_block}
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 100 }}
                                    transition={{
                                        ease: "easeOut",
                                        duration: 0.5,
                                        type: "spring",
                                        bounce: 0.05,
                                        delay: index * 0.2
                                    }}
                                >
                                    <h5 key={index} className={styles.nav_title} onClick={() => scrollToElement(nav.id)}>
                                        {nav.title}
                                    </h5>
                                </motion.div>
                            ))}
                        </motion.nav>
                    )}
                </AnimatePresence>
            </section>
        </motion.header>
    );
}

export default Header;