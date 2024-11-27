import { ArrowBigUp } from "lucide-react";
import styles from "./TopButton.module.scss"
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TopButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Показываем кнопку, если прокрутка больше 100px
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
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                        setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }, 110)
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{
                        duration: 0.4,
                        ease: "leaner",
                        type: "spring",
                        bounce: 0.05,
                        delay: 0.1,
                    }}
                >
                    <ArrowBigUp size={28} color="#fff" className={styles.icon} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}