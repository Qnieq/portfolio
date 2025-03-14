import AnimateBigWords from "@/components/ui/animate-big-words/AnimateBigWords";
import styles from "@/app/[lang]/main.module.scss"
import Image from "next/image";
import { useState } from "react";
import cn from "clsx"
import Link from "next/link";
import { works } from "./works.data";
import { motion } from "framer-motion"

const Work = () => {

    const [active, setActive] = useState<number>()

    return (
        <section className={styles.work}>
            <div className={styles.title} >
                <AnimateBigWords value={["WORK ", "WORK ", "WORK ", "WORK ", "WORK ", "WORK ", "WORK ",]} />
            </div>
            <div className={styles.works_container} id="works">
                {works.map((work, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            ease: "easeOut",
                            duration: 0.5,
                            delay: 1 + index * 0.2
                        }}
                        viewport={{ once: true }}
                        className={styles.work_box}
                        onMouseEnter={() => setActive(index)}
                        onMouseLeave={() => setActive(undefined)}
                    >
                        <div className={styles.work_title_box}>
                            <h2 className={styles.work_title_company}>
                                {work.title}
                            </h2>
                            <h2 className={styles.work_title_project}>
                                {work.project_name}
                            </h2>
                        </div>

                        <Link href={work.url} className={styles.work_link} target="_blank" rel="noopener noreferrer" />

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.3159 17L16.3159 5.83201L4.99997 5.83204" stroke="#0A0A0A" />
                            <path d="M5 17L16 6" stroke="#0A0A0A" />
                        </svg>

                        <div
                            className={cn(
                                styles.work_preview,
                                active == index ?
                                    styles.work_preview_active
                                    :
                                    styles.work_preview_disable
                            )}
                        >
                            <Link href={`/works/${work.title}`} className={styles.work_link} target="_blank" rel="noopener noreferrer" />
                            <Image
                                loading="eager"
                                alt=""
                                src={work.preview}
                                width={450}
                                height={250}
                                className={styles.preview}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Work;