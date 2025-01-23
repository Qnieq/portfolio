import { useEffect, useRef, useState } from "react";
import styles from "./ReadMore.module.scss"
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion"
import { useDictionaryStore } from "@/store/useDictionaryStore";

interface IReadMore {
    title: string;
    title_color: string;
    text: string;
    text_color: string;
}

interface TextStyle {
    WebkitLineClamp?: string;
    WebkitBoxOrient?: 'horizontal' | 'vertical';
    overflow?: string;
    display?: string;
}

const textStyles: TextStyle = {
    WebkitLineClamp: '5',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
};

export function ReadMore({ title, text, text_color, title_color }: IReadMore) {

    const dictionary = useDictionaryStore((state) => state.dictionary);
    
    const [isOpen, setIsOpen] = useState(false);
    const [showReadMore, setShowReadMore] = useState(false);

    const [measuredHeight, setMeasuredHeight] = useState(0);

    const textRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        if (textRef.current) {
            if (!showReadMore) {
                setShowReadMore(textRef.current.scrollHeight !== textRef.current.clientHeight);
            }

            const fullHeight = textRef.current.scrollHeight;
            const clampHeight = 105

            setMeasuredHeight(isOpen ? fullHeight : clampHeight);
        }
    }, [textRef, isOpen]);

    return (
        <motion.div
            className={styles.text_block}
            onClick={() => setIsOpen(showReadMore && !isOpen)}
        >
            <h1
                className={styles.title}
                style={{ color: title_color }}
            >
                {dictionary[title]}
            </h1>
            <motion.div
                style={{ overflow: 'hidden' }}
                initial={{ height: 105 }}
                animate={{ height: measuredHeight }}
                transition={{
                    duration: 1,
                    ease: "linear",
                    type: "spring"
                }}
            >
                <motion.p
                    initial={textStyles}
                    animate={isOpen ? {
                        WebkitLineClamp: 1000,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        display: '-webkit-box',
                    } : textStyles}
                    transition={{
                        delay: isOpen ? 0 : 0.5
                    }}
                    className={styles.text}
                    style={{
                        color: text_color,
                    }}
                    ref={textRef}
                >
                    {dictionary[text]}
                </motion.p>
            </motion.div>
            {showReadMore &&
                <button
                    className={styles.read_more}
                    onClick={() => setIsOpen(showReadMore && !isOpen)}
                >
                    {isOpen ?
                        <>
                            Hide
                            <ChevronUp size={25} color="#fff" className={styles.icon} />
                        </>
                        :
                        <>
                            Show
                            <ChevronDown size={25} color="#fff" className={styles.icon} />
                        </>
                    }
                </button>
            }
        </motion.div>
    );
}
