import { useDictionaryStore } from "@/store/useDictionaryStore";
import styles from "./NotAllowed.module.scss";
import { Dictionary } from "@/types/lang.types";

export default function NotAllowed({ dictionary }: { dictionary: Dictionary }) {

    return (
        <div className={styles.not_allowed_box}>
            <h1 className={styles.title}>
                Hello world!
            </h1>
            <div className={styles.desc_box}>
                <p className={styles.desc}>{dictionary["not-allowed1"]}</p>
                <p className={styles.desc}>{dictionary["not-allowed2"]}</p>
            </div>
        </div>
    );
}