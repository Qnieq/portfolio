"use client"

import Link from "next/link";
import styles from "./Header.module.scss"
import { motion } from "framer-motion"

// const navigation: { link: string, title: string }[] = [
//     // {
//     //     link: "#works",
//     //     title: "Works"
//     // },
//     // {
//     //     link: "#experience",
//     //     title: "Experience"
//     // },
//     // {
//     //     link: "#about",
//     //     title: "About"
//     // },
//     // {
//     //     link: "#contact",
//     //     title: "Contact"
//     // },
// ];

const Header = () => {

    // const [width, setWidth] = useState<number>(window.innerWidth)
    // const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    // useEffect(() => {
    //     window.addEventListener("resize", () => setWidth((current) => (current * 0) + window.innerWidth))

    //     return () => {
    //         window.removeEventListener("resize", () => setWidth((current) => (current * 0) + window.innerWidth))
    //     }
    // }, [])

    return (
        <motion.header
            initial={{
                translateY: -120,
            }}
            animate={{
                translateY: 0,
            }}
            transition={{
                delay: 0.3,
                ease: "linear",
                duration: 1,
                type: "spring"
            }}
            className={styles.header}
        >
            <section className={styles.header_box}>
                <div className={styles.logo_box}>
                    <div className={styles.elem}></div>
                    <h5 className={styles.name_tag}>
                        Michael<br />Orlov
                    </h5>
                    <Link href={"/"} className={styles.logo_link} />
                </div>
                {/* <nav className={styles.navigation}>
                    {navigation.map((nav, index) => (
                        <Link key={index} href={nav.link} className={styles.link}>
                            {nav.title}
                        </Link>
                    ))}
                </nav> */}
                {/* {width < 839 && (
                    menuIsOpen ?
                        <Image src={"/icons/close.svg"} alt="" width={25} height={25} onClick={() => setMenuIsOpen(!menuIsOpen)} />
                        :
                        <Image src={"/icons/menu.svg"} alt="" width={30} height={30} onClick={() => setMenuIsOpen(!menuIsOpen)} />
                )}
                {width < 839 && menuIsOpen && (
                    <nav className={styles.mobile_nav}>
                        {navigation.map((nav, index) => (
                            <div key={index} className={styles.nav_block}>
                                <Link href={nav.link} className={styles.link}>
                                    {nav.title}
                                </Link>
                            </div>
                        ))}
                    </nav>
                )} */}
            </section>
        </motion.header>
    );
}

export default Header;