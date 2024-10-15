import styles from "@/app/main.module.scss"
import { WorkBranch } from "@/components/ui/work-branch/WorkBranch";

const history = [
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ad!"
    }
]

export function WorkHistory() {
    return (
        <section className={styles.work_history}>
            {history.map((item, index) => (
                <WorkBranch {...item} key={index} />
            ))}
        </section>
    );
}
