'use client'
import styles from "./AnimateBigWords.module.scss"
import { motion } from "framer-motion"

interface IProps {
    value: string[]
}

const AnimateBigWords = (props: IProps) => {
    return (
        <motion.div
            initial={{
                translateX: "100%",
            }}
            whileInView={{
                translateX: "0%",
            }}
            transition={{
                delay: 0.2,
                duration: 3,
                type: "spring",
                bounce: 0.1,
                ease: "linear",

            }}
            viewport={{ once: true }}
            className={styles.words_section}
        >
            <motion.h1
                initial={{
                    translateX: "0%",
                }}
                whileInView={{
                    translateX: "-100%",
                }}
                transition={{
                    delay: 0.2,
                    duration: 15,
                    repeatType: "loop",
                    repeat: Infinity,
                    ease: "linear",
                }}
                className={styles.title}
            >
                {props.value.map((word) => (
                    word
                ))}
            </motion.h1>
        </motion.div>
    );
}

export default AnimateBigWords;