import { motion, useScroll } from "framer-motion";
import styles from "./WorkBranch.module.scss"
import { useEffect, useRef, useState } from "react";
import { CircleDot } from "lucide-react";
import cn from "clsx"

interface IWorkBranch {
    text: string
}

export function WorkBranch({ text }: IWorkBranch) {

    const [scrollingValue, setScrollingValue] = useState<number>(0)

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.4", "end 0.6"],
    })

    scrollYProgress.on("change", (e) => setScrollingValue(e))

    useEffect(() => {
        console.log(scrollingValue)
    }, [scrollingValue])
    return (
        <div className={styles.container} ref={container}>
            <motion.div
                className={styles.branch}
                style={{ height: `${200 * scrollingValue}vh` }}
            />
            <div className={styles.info_container}>
                <div className={cn(styles.info, scrollingValue >= 0.4 ? styles.visible : styles.disable)}>
                    <h5 className={styles.text}>
                        {text}
                    </h5>
                </div>
                <div className={styles.point} >
                    <CircleDot
                        size={21}
                        color="#fff"
                        style={scrollingValue >= 0.5 ? { opacity: scrollingValue * 2 } : { opacity: scrollingValue }}
                        className={styles.icon}
                    />
                </div>
            </div>
        </div>
    );
}
