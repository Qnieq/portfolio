import { ArrowBigUp } from "lucide-react";
import styles from "./TopButton.module.scss"
export function TopButton() {
    return (
        <button className={styles.btn_top} onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }, 110)
        }}
        >
            <ArrowBigUp size={28} color="#fff" className={styles.icon} />
        </button>
    );
}
