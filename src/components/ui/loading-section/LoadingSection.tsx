import { useEffect, useState } from "react";
import styles from "./LoadingSection.module.scss"
import { motion } from "framer-motion"
import { WordLoader } from "../loaders/word-loader/WordLoader";
import { LineLoader } from "../loaders/line-loader/LineLoader";

export function LoadingSection() {
    const [scrollDisabled, setScrollDisabled] = useState(true);

    useEffect(() => {
        if (scrollDisabled) {
            document.body.style.overflowY = 'hidden'; 
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [scrollDisabled]);

    return (
        <motion.section
            initial={{
                opacity: 1,
                transform: "translateY(0)",
                display: "flex"
            }}
            animate={{
                opacity: 1,
                transform: "translateY(100vh)",
                display: "none"
            }}
            transition={{
                delay: 5,
                ease: "linear",
                duration: 2,
                type: "spring",
                bounce: 0.05
            }}
            className={styles.loading}
            onAnimationComplete={() => {
                setScrollDisabled(false);
            }}
        >
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: 0.3,
                    ease: "linear",
                    duration: 1,
                }}
                className={styles.loader_box}
            >
                <WordLoader />
                <LineLoader />
            </motion.div>
        </motion.section>
    );
}
