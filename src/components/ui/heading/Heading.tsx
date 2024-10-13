import styles from "./Heading.module.scss"

interface IHeading {
    title: string;
    color?: string;
}

export function Heading({ title, color }: IHeading) {
    return (
        <h1 className={styles.heading} style={{ color: color }}>
            {title}
        </h1>
    );
}
