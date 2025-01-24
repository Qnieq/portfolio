import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Paragraph.module.scss';
import { Press_Start_2P } from "next/font/google";
import cn from "clsx"
import { useDictionaryStore } from '@/store/useDictionaryStore';

const press_to_start = Press_Start_2P({ weight: "400", subsets: ["cyrillic", "latin"] })


interface IParagraph {
    paragraph: string
}

interface IWord {
    children: string
    progress: MotionValue<number>
    range: number[]
}

export default function Paragraph({ paragraph }: IParagraph) {

    const [words, setWords] = useState<string[]>([])

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.8", "start 0.4"]
    })

    const dictionary = useDictionaryStore((state) => state.dictionary);

    useEffect(() => {
        if (dictionary[paragraph]) {
            setWords(dictionary[paragraph].split(" "))
        }
    }, [dictionary, paragraph])

    return (
        <p
            ref={container}
            className={cn(styles.paragraph, press_to_start.className)}
        >
            {
                words.map((word, i) => {
                    const start = i / words.length
                    const end = start + (1 / words.length)
                    return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
                })
            }
        </p>
    )
}

const Word = ({ children, progress, range }: IWord) => {
    const amount = range[1] - range[0]
    const step = amount / children.length
    return (
        <span className={styles.word}>
            {
                children.split("").map((char, i) => {
                    const start = range[0] + (i * step);
                    const end = range[0] + ((i + 1) * step)
                    return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
                })
            }
        </span>
    )
}

const Char = ({ children, progress, range }: IWord) => {


    const opacity = useTransform(progress, range, [0, 1])
    return (
        <span>
            <span className={styles.shadow}>{children}</span>
            <motion.span style={{ opacity: opacity }}>{children}</motion.span>
        </span>
    )
}