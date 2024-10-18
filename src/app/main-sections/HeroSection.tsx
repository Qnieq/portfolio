import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion"
import styles from "@/app/main.module.scss"
import { useEffect, useState } from "react";
import { posters } from "./posters.data";
import { ContactsBox } from "@/components/ui/contacts-box/ContactsBox";

const description = [
    {
        text: 'Я fullstack разработчик, специализирующийся на создании масштабируемых и надежных приложений.',
        delay: 1.5
    },
    {
        text: 'Моя цель — помогать бизнесам расти за счет инновационных и эффективных веб-решений.',
        delay: 2
    },
]

const HeroSection = ({ delay }: { delay?: number }) => {
    // Изначально задаем ширину как null
    const [width, setWidth] = useState<number | null>(null);
    const [contactsOpen, setContactsOpen] = useState<boolean>(false);

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

    // Условный рендеринг для анимации, когда ширина известна
    if (width === null) {
        return <div className={styles.hero_section}>Loading...</div>; // Можно заменить на пустой блок или прелоадер
    }

    return (
        <section className={styles.hero_section}>
            <div className={styles.title_container}>
                <div style={{ overflow: "hidden" }}>
                    <motion.h1
                        initial={{
                            translateY: 200,
                        }}
                        animate={{
                            translateY: 0,
                        }}
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
                            initial={{
                                translateY: 200,
                            }}
                            animate={{
                                translateY: 0,
                            }}
                            transition={{
                                delay: desc.delay + (delay ? delay : 0),
                                ease: "linear",
                                duration: 1.3,
                                type: "spring",
                                bounce: 0.05
                            }}
                            className={styles.desc}
                        >
                            {desc.text}
                        </motion.p>
                    ))}
                    <motion.a
                        initial={{
                            translateY: 100,
                        }}
                        animate={{
                            translateY: 0,
                        }}
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
                        СВЯЗАТЬСЯ
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
                            <ContactsBox />
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
                    <Image loading="eager" width={400} height={750} src={"/images/photo/selfy.png"} alt="" className={styles.photo} />
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
                        <Image loading="eager" width={post.width} height={post.height} src={post.src} alt="" className={styles.poster} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default HeroSection;