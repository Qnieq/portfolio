'use client'
import Image from "next/image";
import { motion } from "framer-motion"
import styles from "./HeroSection.module.scss"
import { useEffect, useState } from "react";

const posters: string[] = [
    "/images/posters/young-dev.svg",
    "/images/posters/user-exp.svg",
    "/images/posters/modern-tech.svg",
    "/images/posters/anim.svg",
    "/images/posters/comm-exp.svg",
    "/images/posters/cllear-code.svg"
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
                            bounce: 0.05
                        }}
                        className={styles.title}
                    >
                        FRONTEND DEVELOPER
                    </motion.h1>
                </div>
                <div className={styles.description_box}>
                    <motion.p
                        initial={{
                            translateY: 200,
                        }}
                        animate={{
                            translateY: 0,
                        }}
                        transition={{
                            delay: 1.5,
                            ease: "linear",
                            duration: 1.3,
                            type: "spring",
                            bounce: 0.05
                        }}
                        className={styles.desc}
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quo sapiente facilis laudantium ea illo voluptatum fugit sed ipsum. Rerum, dolores sequi?
                    </motion.p>
                    <motion.p
                        initial={{
                            translateY: 200,
                        }}
                        animate={{
                            translateY: 0,
                        }}
                        transition={{
                            delay: 2,
                            ease: "linear",
                            duration: 1.3,
                            type: "spring",
                            bounce: 0.05
                        }}
                        className={styles.desc}
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quos sed illum alias error dolores culpa hic tempore nobis explicabo?
                    </motion.p>
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
                        href="#"
                        className={styles.contact}
                    >
                        СВЯЗАТЬСЯ
                        <Image width={20} height={20} src={"/icons/arrow-right.svg"} alt="arrow" />
                    </motion.a>
                </div>
            </div>
            <motion.div

                className={styles.content}
            >
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

                {/* posters */}

                <motion.div
                    initial={{
                        left: -width - 500,
                        rotate: -120
                    }}
                    animate={{
                        left: "50%",
                        rotate: 0
                    }}
                    transition={{
                        delay: 3.3,
                        ease: "linear",
                        duration: 1.5,
                        type: "spring",
                        bounce: 0.05
                    }}
                    className={styles.poster_box}
                >
                    <Image width={300} height={350} src={"/images/posters/young-dev.svg"} alt="" className={styles.poster} />
                </motion.div>
                <motion.div
                    initial={{
                        left: -width - 500,
                        rotate: 120
                    }}
                    animate={{
                        left: "60%",
                        rotate: 0
                    }}
                    transition={{
                        delay: 3.3,
                        ease: "linear",
                        duration: 1.5,
                        type: "spring",
                        bounce: 0.05
                    }}
                    className={styles.poster_box}
                >
                    <Image width={300} height={350} src={"/images/posters/user-exp.svg"} alt="" className={styles.poster} />
                </motion.div>
                <motion.div
                    initial={{
                        left: -width - 500,
                        rotate: 130
                    }}
                    animate={{
                        left: "auto",
                        right: "70%",
                        rotate: 0
                    }}
                    transition={{
                        delay: 3.3,
                        ease: "linear",
                        duration: 1.5,
                        type: "spring",
                        bounce: 0.05
                    }}
                    className={styles.poster_box}
                >
                    <Image width={300} height={350} src={"/images/posters/modern-tech.svg"} alt="" className={styles.poster} />
                </motion.div>
                <motion.div
                    initial={{
                        left: -width - 500,
                        rotate: -100
                    }}
                    animate={{
                        left: "auto",
                        right: "70%",
                        rotate: 0
                    }}
                    transition={{
                        delay: 3.4,
                        ease: "linear",
                        duration: 1.5,
                        type: "spring",
                        bounce: 0.05
                    }}
                    className={styles.poster_box}
                >
                    <Image width={300} height={350} src={"/images/posters/anim.svg"} alt="" className={styles.poster} />
                </motion.div>
                <motion.div
                    initial={{
                        left: -width - 500,
                        rotate: 160
                    }}
                    animate={{
                        left: "5%",
                        rotate: 0
                    }}
                    transition={{
                        delay: 3.5,
                        ease: "linear",
                        duration: 1.5,
                        type: "spring",
                        bounce: 0.05
                    }}
                    className={styles.poster_box}
                >
                    <Image width={300} height={350} src={"/images/posters/comm-exp.svg"} alt="" className={styles.poster} />
                </motion.div>
                <motion.div
                    initial={{
                        left: -width - 500,
                        rotate: 140
                    }}
                    animate={{
                        left: "auto",
                        right: "10%",
                        rotate: 0
                    }}
                    transition={{
                        delay: 3.2,
                        ease: "linear",
                        duration: 2,
                        type: "spring",
                        bounce: 0.05
                    }}
                    className={styles.poster_box}
                >
                    <Image width={300} height={350} src={"/images/posters/cllear-code.svg"} alt="" className={styles.poster} />
                </motion.div>
            </motion.div>
        </section>
    );
}

export default HeroSection;