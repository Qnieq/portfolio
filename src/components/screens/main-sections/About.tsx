import styles from "@/app/[lang]/main.module.scss"
import { ParallaxText } from "@/components/ui/parallax-text/ParallaxText";
import Paragraph from "@/components/ui/paragraph/Paragraph";

const paragraph1 = "home.about.paragraph1"
const paragraph2 = "home.about.paragraph2"

export function About() {


    return (
        <section className={styles.about} id="about">
            <Paragraph paragraph={paragraph1} />
            <ParallaxText baseVelocity={-1}>Who I am</ParallaxText>
            <ParallaxText baseVelocity={1}>Fullstack developer</ParallaxText>
            <Paragraph paragraph={paragraph2} />
        </section>
    );
}
