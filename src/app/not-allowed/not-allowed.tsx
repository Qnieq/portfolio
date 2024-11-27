import styles from "./NotAllowed.module.scss"

export function NotAllowed() {
    return (
        <div className={styles.not_allowed_box}>
            <h1 className={styles.title}>
                Hello world!
            </h1>
            <div className={styles.desc_box}>
                <p className={styles.desc}>На данный момент приложение не поддерживает мобильную версию 😒</p>
                <p className={styles.desc}>Вы можете воспользоваться свои ноутбуком или компьютером чтобы насладиться моим портфолио 😎</p>
            </div>
        </div>
    );
}
