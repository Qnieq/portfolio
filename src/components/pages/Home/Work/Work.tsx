import AnimateBigWords from "@/components/shared/AnimateBigWords/AnimateBigWords";
import styles from "./Work.module.scss"

const Work = () => {
    return (
        <section className={styles.work}>
            <div className={styles.title}>
                <AnimateBigWords value={["WORKS ", "WORKS ", "WORKS ", "WORKS ", "WORKS ", "WORKS ", "WORKS ", ]} />
            </div>
            <div className={styles.works_container}>
                <div className={styles.work_box}>

                </div>
                <div className={styles.work_box}>

                </div>
                <div className={styles.work_box}>

                </div>
            </div>
        </section>
    );
}

export default Work;