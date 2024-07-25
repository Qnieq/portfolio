import AnimateBigWords from "@/components/shared/AnimateBigWords/AnimateBigWords";
import styles from "./Work.module.scss"
import Image from "next/image";
import { IWorksBlock } from "./Work.interface";

const works: IWorksBlock[] = [
    {
        project_name: "Website",
        preview: "/images/works_preview/logo_mervice.svg",
        title: "mervice"
    },
    {
        project_name: "iPhone store",
        preview: "/images/works_preview/iphoner.svg",
        title: "IPhoner"
    },
    {
        project_name: "Restaurant Website",
        preview: "/images/works_preview/iphoner.svg",
        title: "Gericht"
    },
]
const Work = () => {
    return (
        <section className={styles.work}>
            <div className={styles.title}>
                <AnimateBigWords value={["WORK ", "WORK ", "WORK ", "WORK ", "WORK ", "WORK ", "WORK ",]} />
            </div>
            <div className={styles.works_container}>
                {works.map((work, index) => (
                    <div key={index} className={styles.work_box} >
                        <div className={styles.work_title_box}>
                            <h2 className={styles.work_title_company}>
                                {work.title}
                            </h2>
                            <h2 className={styles.work_title_project}>
                                {work.project_name}
                            </h2>
                        </div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.3159 17L16.3159 5.83201L4.99997 5.83204" stroke="#0A0A0A" />
                            <path d="M5 17L16 6" stroke="#0A0A0A" />
                        </svg>

                        {/* <div className={styles.work_preview} >
                            <Image alt="" src={work.preview} width={200} height={200} />
                        </div> */}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Work;