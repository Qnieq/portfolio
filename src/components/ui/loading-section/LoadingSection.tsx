import { useEffect, useState } from "react";
import { Loader } from "../loader/Loader";
import styles from "./LoadingSection.module.scss"
import { motion } from "framer-motion"

export function LoadingSection() {
    const [scrollDisabled, setScrollDisabled] = useState(true); // Состояние для управления прокруткой

    // Эффект для отключения/включения прокрутки
    useEffect(() => {
        if (scrollDisabled) {
            document.body.style.overflowY = 'hidden'; // Отключаем прокрутку
        } else {
            document.body.style.overflowY = 'auto'; // Включаем прокрутку
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
            exit={{
                opacity: 0,
                transform: "translateY(-100vh)",
            }}
            transition={{
                delay: 2,
                ease: "linear",
                duration: 2,
                type: "spring",
                bounce: 0.05
            }}
            className={styles.loading}
            onAnimationComplete={() => {
                setScrollDisabled(false); // Включаем прокрутку по завершению анимации
            }}
        >
            <Loader />
        </motion.section>
    );
}
