"use client"
import Link from "next/link";
import styles from "./Header.module.scss"

const Header = () => {

    return (
        <header className={styles.header}>
            <section className={styles.header_box}>
                <div className={styles.logo_box} onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }}>
                    <div className={styles.elem}></div>
                    <h5 className={styles.name_tag}>
                        Michael<br />Orlov
                    </h5>
                </div>
                <nav className={styles.navigation}>
                    <Link href="#" className={styles.link}>
                        Work
                    </Link>
                    <Link href="#" className={styles.link}>
                        About
                    </Link>
                    <Link href="#" className={styles.link}>
                        Contact
                    </Link>
                </nav>
            </section>
        </header>
    );
}

export default Header;