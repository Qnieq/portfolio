import styles from "./Heading.module.scss"

interface IHeading {
    title: string;
}

export function Heading({ title }: IHeading) {
    return (
        <h1 className={styles.heading}>
            {title}
        </h1>
    );
}
