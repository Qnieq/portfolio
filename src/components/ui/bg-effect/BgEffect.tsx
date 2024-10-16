"use client"

import { useEffect, useState } from "react";
import styles from "./BgEffect.module.scss"
import { motion } from "framer-motion"


const BgEffect = () => {
    const [randomNumber, setRandomNumber] = useState(0);

    // Функция для генерации случайного числа
    const generateRandomNumber = () => Math.floor(Math.random() * (30 - (-20) + 1)) + (-20);

    useEffect(() => {
        const interval = setInterval(() => {
            setRandomNumber(generateRandomNumber());
        }, 10); // Меняем значение каждые 200 миллисекунд для более плавной анимации

        // Очищаем интервал при размонтировании компонента
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            animate={{
                transform: `translateX(${randomNumber}%) translateY(${randomNumber}%) translateZ(0)`
            }}
            transition={{ repeat: Infinity, duration: 0.20 }}
            className={styles.bg_effect}
        ></motion.div>
    );
}

export default BgEffect;