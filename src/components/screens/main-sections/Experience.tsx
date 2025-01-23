import { TrackWordPositionItem } from "@/components/ui/track-element-position/TrackWordPositionItem";
import styles from "@/app/[lang]/main.module.scss"
import Spline from '@splinetool/react-spline';
import { ParallaxText } from "@/components/ui/parallax-text/ParallaxText";

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
                        description: "home.experience.Frontend.frameworks.react.desc",
                        icon: <Spline scene="https://prod.spline.design/w0UkrXpcn8uuL2Io/scene.splinecode" />
                    },
                    {
                        title: "Next.js",
                        description: "home.experience.Frontend.frameworks.next.desc",
                        icon: <Spline scene="https://prod.spline.design/4SjgZvupdw0ScQ9K/scene.splinecode" />
                    },
                ]

            },
            {
                type: "State Management & API",
                data: [
                    {
                        title: "Redux toolkit & RTK Query",
                        description: "home.experience.Frontend.state.redux.desc",
                        icon: <Spline scene="https://prod.spline.design/fsx9kUMr7vtBWrsg/scene.splinecode" />
                    },
                    {
                        title: "TanStack Query",
                        description: "",
                        icon: <Spline scene="https://prod.spline.design/OnWheliN0R7P4VQt/scene.splinecode" />
                    },
                ]
            },
            {
                type: "Styling",
                data: [
                    {
                        title: "CSS",
                        description: "home.experience.Frontend.styling.css.desc",
                        icon: <Spline scene="https://prod.spline.design/NPN6sychhfTWQxq5/scene.splinecode" />
                    },
                    {
                        title: "SASS",
                        description: "home.experience.Frontend.styling.SASS.desc",
                        icon: <Spline scene="https://prod.spline.design/eox5jfhaksdjXSOQ/scene.splinecode" />
                    },
                ]
            },
            {
                type: "Build",
                data: [
                    {
                        title: "Vite",
                        description: "home.experience.Frontend.Build.Vite.desc",
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
                        description: "home.experience.Backend.Frameworks.Nest.desc",
                        icon: <Spline scene="https://prod.spline.design/8mZji99ZvQdh4vrg/scene.splinecode" />
                    },
                    {
                        title: "Express.js",
                        description: "home.experience.Backend.Frameworks.Express.desc",
                        icon: <Spline scene="https://prod.spline.design/Z2WITm6nBHIxC866/scene.splinecode" />
                    },
                ]

            },
            {
                type: "Database & ORM",
                data: [
                    {
                        title: "PostgreSQL",
                        description: "home.experience.Backend.Database.PostgreSQL.desc",
                        icon: <Spline scene="https://prod.spline.design/iesHgzcb6u-sGBCd/scene.splinecode" />
                    },
                    {
                        title: "Google Firebase",
                        description: "home.experience.Backend.Database.Firebase.desc",
                        icon: <Spline scene="https://prod.spline.design/DqYknmOnCD5HOMzt/scene.splinecode" />
                    },
                    {
                        title: "Prisma",
                        description: "home.experience.Backend.ORM.Prisma.desc",
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
                        description: "home.experience.Other.TypeScript.desc",
                        icon: <Spline scene="https://prod.spline.design/wY3VPjapsX5NJv0P/scene.splinecode" />
                    },
                    {
                        title: "JavaScript",
                        description: "",
                        icon: <Spline scene="https://prod.spline.design/iPfrKaM9SQiLB9mH/scene.splinecode" />
                    },
                    {
                        title: "Git",
                        description: "home.experience.Other.Git.desc",
                        icon: <Spline scene="https://prod.spline.design/YBh8aO3HvwGwAtTE/scene.splinecode" />
                    },
                ]
            },
        ]
    },
]

export function Experience() {


    return (
        <div className={styles.experience} id="experience">
            <div className={styles.parallax_box}>
                <ParallaxText baseVelocity={-0.5}>my experience my experience</ParallaxText>
                <ParallaxText baseVelocity={0.8}>fullstack developer fullstack developer</ParallaxText>
                <ParallaxText baseVelocity={-0.5}>fullstack developer fullstack developer</ParallaxText>
                <ParallaxText baseVelocity={1.5}>my experience my experience</ParallaxText>
            </div>
            {experience.map((item, index) => (
                <TrackWordPositionItem {...item} key={index} />
            ))}
        </div>
    );
}
