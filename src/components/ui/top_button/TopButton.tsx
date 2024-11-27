import { ArrowBigUpDash } from "lucide-react";
import styles from "./TopButton.module.scss"
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TopButton() {
    const [showButton, setShowButton] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 100);
        };

        // Подписываемся на событие прокрутки
        window.addEventListener('scroll', handleScroll);

        // Убираем подписку при размонтировании
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {showButton && (
                <motion.button
                    className={styles.btn_top}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                        setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }, 110)
                        setIsHovered(false)
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{
                        duration: 0.4,
                        ease: "leaner",
                        type: "spring",
                        bounce: 0.05,
                    }}
                >
                    <ArrowBigUpDash size={28} color="#fff" className={styles.icon} />
                    <AnimatePresence>
                        {isHovered && (
                            <motion.h6
                                className={styles.go_to_top}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "leaner",
                                    type: "spring",
                                    bounce: 0.05,
                                }}
                            >
                                Go to top
                            </motion.h6>
                        )}
                    </AnimatePresence>
                </motion.button>
            )}
        </AnimatePresence>
    );
}