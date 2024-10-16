import { motion, useScroll } from "framer-motion";
import styles from "./WorkBranch.module.scss"
import { useEffect, useRef, useState } from "react";
import { CircleDot, CircleDotDashed } from "lucide-react";
import cn from "clsx"

interface IWorkBranch {
    title: string
    date: string
    role: string
    color_title: string
    color_title_logo?: string
    children: React.ReactNode
}

export function WorkBranch({
    color_title,
    title,
    date,
    role,
    color_title_logo,
    children
}: IWorkBranch) {

    const [scrollingValue, setScrollingValue] = useState<number>(0)

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.5", "end 0.5"],
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
                <div className={cn(
                    styles.info,
                    scrollingValue >= 0.5 ?
                        styles.visible
                        :
                        styles.disable
                )}
                >
                    <div className={styles.text_blocks}>
                        {children}
                    </div>
                    <div className={styles.logo_block}>
                        <h5
                            className={styles.logo_title}
                            style={{
                                color: color_title_logo,
                            }}
                        >
                            {title}
                        </h5>
                    </div>
                    <div className={styles.title_block}>
                        <h5
                            className={styles.title}
                            style={{ color: color_title }}
                        >
                            {title}
                        </h5>
                        <p className={styles.role}>
                            {role}
                        </p>
                        <p className={styles.date}>
                            {date}
                        </p>
                    </div>

                </div>
                <div className={styles.point} >
                    <CircleDotDashed
                        size={30}
                        color={"var(--branch)"}
                        className={cn(
                            styles.spin,
                            scrollingValue <= 0.5 &&
                            styles.disable
                        )}
                    />

                    <CircleDot
                        size={15}
                        color="var(--branch)"
                        className={cn(
                            styles.icon,
                            scrollingValue >= 0.5 &&
                            styles.disable
                        )}
                        style={scrollingValue >= 0.5 ?
                            { opacity: scrollingValue * 2 }
                            :
                            { opacity: scrollingValue }
                        }
                    />
                </div>
            </div>
        </div>
    );
}
