import { TrackWordPositionItem } from "@/components/ui/track-element-position/TrackWordPositionItem";
import styles from "./main.module.scss"
import Spline from '@splinetool/react-spline';
import { Heading } from "@/components/ui/heading/Heading";

const experience = [
    {
        side: "right",
        title: "Frontend",
        items: [
            {
                type: "Frameworks",
                data: [
                    {
                        title: "React",
                        description: "2 года опыта разработки, работаю с hooks, context, routing и другими фишками React",
                        icon: <Spline scene="https://prod.spline.design/w0UkrXpcn8uuL2Io/scene.splinecode" />
                    },
                    {
                        title: "Next.js",
                        description: "Использую уже 1.5 года. В основном работаю с ISR, не очень отношусь к SSR :)",
                        icon: <Spline scene="https://prod.spline.design/4SjgZvupdw0ScQ9K/scene.splinecode" />
                    },
                ]

            },
            {
                type: "State Management & API",
                data: [
                    {
                        title: "Redux toolkit & RTK Query",
                        description: "Сейчас в основном его использую только как State management, но раньше пользовался ещё и RTK Query",
                        icon: <Spline scene="https://prod.spline.design/fsx9kUMr7vtBWrsg/scene.splinecode" />
                    },
                    {
                        title: "TanStack Query",
                        description: "Зачастую использую для обращения к API",
                        icon: <Spline scene="https://prod.spline.design/OnWheliN0R7P4VQt/scene.splinecode" />
                    },
                ]
            },
            {
                type: "Styling",
                data: [
                    {
                        title: "CSS",
                        description: "Grid, flex, псевдо классы, глобальные переменные - это всё мне известно :)",
                        icon: <Spline scene="https://prod.spline.design/NPN6sychhfTWQxq5/scene.splinecode" />
                    },
                    {
                        title: "SASS",
                        description: "Классный предпроцессор, где есть mixin, переменные, иерархия, удобные шорткаты - лайк",
                        icon: <Spline scene="https://prod.spline.design/eox5jfhaksdjXSOQ/scene.splinecode" />
                    },
                ]
            },
            {
                type: "Build",
                data: [
                    {
                        title: "Vite",
                        description: "React приложения собираю через только через Vite, на мой взгяд намного быстрее билдит и удобнее чем webpack",
                        icon: <Spline scene="https://prod.spline.design/8QmUICAbO51UzqIg/scene.splinecode" />
                    },
                ]
            },
        ]
    },
    {
        side: "left",
        title: "Backend",
        items: [
            {
                type: "Frameworks",
                data: [
                    {
                        title: "Nest.js",
                        description: "Пока что самый любимый фреймворк для бэка. Работал с JWT авторизацией используя Cookie, создавал кастомные декораторы и тд. Опыт больше года",
                        icon: <Spline scene="https://prod.spline.design/8mZji99ZvQdh4vrg/scene.splinecode" />
                    },
                    {
                        title: "Express.js",
                        description: "Использовал всего на одном проекте, потом узнал что есть Nest :))", 
                        icon: <Spline scene="https://prod.spline.design/Z2WITm6nBHIxC866/scene.splinecode" />
                    },
                ]

            },
            {
                type: "Database & ORM",
                data: [
                    {
                        title: "PostgreSQL",
                        description: "На мой взгляд самая удобная бд, в связке с Prisma творит чудеса",
                        icon: <Spline scene="https://prod.spline.design/iesHgzcb6u-sGBCd/scene.splinecode" />
                    },
                    {
                        title: "Google Firebase",
                        description: "Доводилось работать со Storage, Firabase database и Realtime database",
                        icon: <Spline scene="https://prod.spline.design/DqYknmOnCD5HOMzt/scene.splinecode" />
                    },
                    {
                        title: "Prisma",
                        description: "Удобней чем это я ни чем не пользовался, самое сложное что было в моей практике - это работа с транзакциями",
                        icon: <Spline scene="https://prod.spline.design/Tv83ENlsIilhy9wC/scene.splinecode" />
                    },
                ]
            },
            {
                type: "Runtime",
                data: [
                    {
                        title: "Node.js",
                        description: "",
                        icon: <Spline scene="https://prod.spline.design/ONWv6ELH3sUWmHuB/scene.splinecode" />
                    },
                ]
            },
        ]
    },
    {
        side: "right",
        title: "Other",
        items: [
            {
                type: "",
                data: [
                    {
                        title: "TypeScript",
                        description: "Использую больше чем 1.5 года, типизирую что только можно :)",
                        icon: <Spline scene="https://prod.spline.design/wY3VPjapsX5NJv0P/scene.splinecode" />
                    },
                    {
                        title: "JavaScript",
                        description: "",
                        icon: <Spline scene="https://prod.spline.design/iPfrKaM9SQiLB9mH/scene.splinecode" />
                    },
                    {
                        title: "Git",
                        description: "Удобный инструмент для управления версиями",
                        icon: <Spline scene="https://prod.spline.design/YBh8aO3HvwGwAtTE/scene.splinecode" />
                    },
                ]
            },
        ]
    },
]

export function Experience() {
    return (
        <div className={styles.experience}>
            <Heading title="My experience" />
            {experience.map((item, index) => (
                <TrackWordPositionItem {...item} key={index} />
            ))}
        </div>
    );
}
