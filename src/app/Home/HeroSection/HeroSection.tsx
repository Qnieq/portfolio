'use client'
import Image from "next/image";
import styles from "./HeroSection.module.scss"

const posters: string[] = ["/images/posters/young-dev.svg", "/images/posters/user-exp.svg", "/images/posters/modern-tech.svg", "/images/posters/anim.svg"]

const HeroSection = () => {
    const renderSquares = () => {
        const squares = [];
        for (let i = 0; i < 400; i++) {
            squares.push(<div key={i} className={styles.square}></div>);
        }
        return squares;
    };
    return (
        <section className={styles.hero_section}>
            <div className={styles.title_container}>
                <div className={styles.title}>
                    FRONTEND DEVELOPER
                </div>
                <div className={styles.description_box}>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quo sapiente facilis laudantium ea illo voluptatum fugit sed ipsum. Rerum, dolores sequi?
                    </p>
                    <p className={styles.desc}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quos sed illum alias error dolores culpa hic tempore nobis explicabo?
                    </p>
                    <a href="#" className={styles.contact}>
                        СВЯЗАТЬСЯ
                        <Image width={20} height={20} src={"/icons/arrow-right.svg"} alt="arrow" />
                    </a>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.bg_element}>
                    <Image width={400} height={750} src={"/images/photo/selfy.png"} alt="" className={styles.photo} />
                    <div className={styles.squares_box}>
                        {renderSquares()}
                    </div>
                </div>
                {posters.map((poster, index) => (
                    <Image key={index} width={300} height={350} src={poster} alt="" className={styles.poster} />
                ))}
            </div>
        </section>
    );
}

export default HeroSection;