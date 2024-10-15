import Image from "next/image";
import { motion } from "framer-motion"
import styles from "@/app/main.module.scss"
import { useEffect, useState } from "react";
import { posters } from "./posters.data";
import { ContactsBox } from "@/components/ui/contacts-box/ContactsBox";

const description = [
    {
        text: 'Я fullstack разработчик, специализирующийся на создании масштабируемых и надежных решений.',
        delay: 1.5
    },
    {
        text: 'Моя цель — помогать бизнесам расти за счет инновационных и эффективных веб-решений.',
        delay: 2
    },
]

const HeroSection = () => {

    const [width, setWidth] = useState<number>(window.innerWidth)

    const renderSquares = () => {
        const squares = [];
        for (let i = 0; i < 1500; i++) {
            squares.push(<div key={i} className={styles.square}></div>);
        }
        return squares;
    };

    useEffect(() => {
        window.addEventListener("resize", () => setWidth((current) => (current * 0) + window.innerWidth))

        return () => {
            window.removeEventListener("resize", () => setWidth((current) => (current * 0) + window.innerWidth))
        }
    }, [])

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
                            delay: 0.7,
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
                                delay: desc.delay,
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
                            delay: 2.4,
                            ease: "linear",
                            duration: 1.3,
                            type: "spring",
                            bounce: 0.05
                        }}
                        className={styles.contact}
                    >
                        СВЯЗАТЬСЯ
                        <Image width={20} height={20} src={"/icons/arrow-right.svg"} alt="arrow" />
                    </motion.a>
                </div>
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
                        delay: 3.1,
                        ease: "linear",
                        duration: 1.5,
                        type: "spring",
                        bounce: 0.05
                    }}
                    className={styles.bg_element}
                >
                    <Image width={400} height={750} src={"/images/photo/selfy.png"} alt="" className={styles.photo} />
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
                            delay: post.delay,
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