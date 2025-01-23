import { useDictionaryStore } from "@/store/useDictionaryStore";
import styles from "./TrackElementPosition.module.scss"
import cn from "clsx"
import { JSX, useEffect } from "react";

interface ITrackWordPositionItem {
    title: string
    items: {
        type: string
        data: {
            title: string
            description: string
            icon: JSX.Element
        }[]
    }[]
    side: string
}

export function TrackWordPositionItem({ title, items, side }: ITrackWordPositionItem) {

    const dictionary = useDictionaryStore((state) => state.dictionary);

    return (
        <section className={styles.container}>
            <div className={styles.item}>
                {items.map((val, index) => (
                    <div className={cn(styles.item_box, side == "left" && styles.item_box_reverse)} key={index} >
                        <div className={styles.item_title}>
                            <h2 className={styles.title}>
                                {title}
                            </h2>

                            <h2 className={styles.type}>
                                {val.type}
                            </h2>
                        </div>

                        <div className={styles.content}>
                            {val.data.map((item, index) => (
                                <div
                                    key={index}
                                    className={styles.item_description_box}
                                >
                                    {item.icon}

                                    <div className={styles.info_box}>
                                        <h4 className={styles.info}>
                                            {item.title}
                                        </h4>

                                        <p className={styles.description}>
                                            {dictionary[item.description]}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}