import styles from "./WordLoader.module.scss"

export function WordLoader() {
    return (
        <div className={styles.card}>
            <div className={styles.loader}>
                <p>loading</p>
                <div className={styles.words}>
                    <span className={styles.word}>works</span>
                    <span className={styles.word}>animations</span>
                    <span className={styles.word}>switches</span>
                    <span className={styles.word}>cards</span>
                    <span className={styles.word}>works</span>
                </div>
            </div>
        </div>
    );
}
