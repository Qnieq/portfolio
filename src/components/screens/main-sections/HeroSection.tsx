import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion"
import styles from "@/app/[lang]/main.module.scss"
import { useEffect, useState } from "react";
import { posters } from "./posters.data";
import { ContactsBox } from "@/components/ui/contacts-box/ContactsBox";
import { Linkedin, Mail, Send } from "lucide-react";
import { useDictionaryStore } from "@/store/useDictionaryStore";

const description = [
    {
        text: 'home.herosection.desc1',
        delay: 1.5
    },
    {
        text: 'home.herosection.desc2',
        delay: 2
    },
]

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
const HeroSection = ({ delay }: { delay?: number }) => {
    // Изначально задаем ширину как null
    const [width, setWidth] = useState<number | null>(null);
    const [contactsOpen, setContactsOpen] = useState<boolean>(false);

    const dictionary = useDictionaryStore((state) => state.dictionary);

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Устанавливаем начальную ширину после монтирования компонента
            const initialWidth = window.innerWidth;
            setWidth(initialWidth);

            const handleResize = () => {
                setWidth(window.innerWidth);
            };

            // Добавляем обработчик события resize
            window.addEventListener("resize", handleResize);

            // Удаляем обработчик при размонтировании компонента
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    const renderSquares = () => {
        const squares = [];
        for (let i = 0; i < 1500; i++) {
            squares.push(<div key={i} className={styles.square}></div>);
        }
        return squares;
    };

    const textAnimations = {
        start: { translateY: 200 },
        end: { translateY: 0 },
    }

    // Условный рендеринг для анимации, когда ширина известна
    if (width === null) {
        return <div className={styles.hero_section}>Loading...</div>; // Можно заменить на пустой блок или прелоадер
    }


    return (
        <section className={styles.hero_section}>
            <div className={styles.title_container}>
                <div style={{ overflow: "hidden" }}>
                    <motion.h1
                        variants={textAnimations}
                        initial="start"
                        animate="end"
                        transition={{
                            delay: 0.7 + (delay ? delay : 0),
                            ease: "linear",
                            duration: 1.4,
                            type: "spring",
                            bounce: 0.3
                        }}
                        className={styles.title}
                    >
                        FULLSTACK DEVELOPER
                    </motion.h1>
                </div>
                <div className={styles.description_box}>
                    {description.map((desc, index) => (
                        <motion.p
                            key={index}
                            variants={textAnimations}
                            initial="start"
                            animate="end"
                            transition={{
                                delay: desc.delay + (delay ? delay : 0),
                                ease: "linear",
                                duration: 1.3,
                                type: "spring",
                                bounce: 0.05
                            }}
                            className={styles.desc}
                        >
                            {dictionary[desc.text]}
                        </motion.p>
                    ))}
                    <motion.a
                        initial={{ translateY: 100 }}
                        animate={{ translateY: 0 }}
                        transition={{
                            delay: 2.4 + (delay ? delay : 0),
                            ease: "linear",
                            duration: 1.3,
                            type: "spring",
                            bounce: 0.05
                        }}
                        className={styles.contact}
                        onClick={() => { setContactsOpen(!contactsOpen) }}
                    >
                        {dictionary["home.herosection.getInTouch"]}
                        <Image width={20} height={20} src={"/icons/arrow-right.svg"} alt="arrow" />
                    </motion.a>
                </div>
                <AnimatePresence>
                    {contactsOpen &&
                        <motion.div
                            initial={{
                                translateY: 50,
                                opacity: 0,
                            }}
                            animate={{
                                translateY: 0,
                                opacity: 1,
                            }}
                            exit={{
                                translateY: 50,
                                opacity: 0,
                            }}
                            transition={{
                                ease: "linear",
                                duration: 0.4,
                                type: "spring",
                                bounce: 0.05
                            }}
                            className={styles.contacts_module}
                        >
                            <ContactsBox items={items} />
                        </motion.div>
                    }
                </AnimatePresence>
            </div>

            <div className={styles.content}>
                <motion.div
                    initial={{
                        translateX: -width - 500,
                    }}
                    animate={{
                        translateX: 0,
                    }}
                    transition={{
                        delay: 3.1 + (delay ? delay : 0),
                        ease: "linear",
                        duration: 1.5,
                        type: "spring",
                        bounce: 0.05
                    }}
                    className={styles.bg_element}
                >
                    <Image loading="eager" width={300} height={650} src={"/images/photo/selfy.png"} alt="" className={styles.photo} />
                    <div className={styles.squares_box}>
                        {renderSquares()}
                    </div>
                </motion.div>

                {posters.map((post, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            left: -width - 500,
                            rotate: post.start_rotate
                        }}
                        animate={{
                            left: post.left,
                            right: post.right,
                            rotate: 0
                        }}
                        transition={{
                            delay: post.delay + (delay ? delay : 0),
                            ease: "linear",
                            duration: post.duration,
                            type: "spring",
                            bounce: 0.05
                        }}
                        className={styles.poster_box}
                    >
                        <Image width={post.width} height={post.height} src={post.src} alt="" className={styles.poster} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default HeroSection;