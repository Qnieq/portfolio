"use client"

import styles from "./BgEffect.module.scss"
import { motion } from "framer-motion"


const BgEffect = () => {
    let randomNumber = Math.floor(Math.random() * (30 - (-20) + 1)) + (-20);
    setInterval(function () {
      randomNumber = Math.floor(Math.random() * (30 - (-20) + 1)) + (-20);
    }, 5);
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