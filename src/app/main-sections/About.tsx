import { Terminal } from "@/components/ui/terminal/Terminal";
import styles from "@/app/main.module.scss"
import { Heading } from "@/components/ui/heading/Heading";
import { ParallaxText } from "@/components/ui/parallax-text/ParallaxText";
import Paragraph from "@/components/ui/paragraph/Paragraph";

const paragraph1 = "Я занимаюсь разработкой уже более 2-х лет, и за это время я освоил такие технологии, как Next.js, React, Nest.js, и множество других инструментов."
const paragraph2 = "Моя сильная сторона — это умение сочетать визуальную часть (frontend) с мощной логикой на стороне сервера (backend), создавая быстрые, удобные и эффективные решения для пользователей. Постоянное обучение и стремление к совершенствованию — основа моей работы."

export function About() {
    return (
        <section className={styles.about}>
            <Paragraph paragraph={paragraph1} />
            <ParallaxText baseVelocity={-1}>Who I am</ParallaxText>
            <ParallaxText baseVelocity={1}>Fullstack developer</ParallaxText>
            <Paragraph paragraph={paragraph2} />
        </section>
    );
}
