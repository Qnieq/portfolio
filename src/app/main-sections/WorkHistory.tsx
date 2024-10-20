import styles from "@/app/main.module.scss"
import { WorkBranch } from "@/components/ui/work-branch/WorkBranch";
import { history } from "./workHistory.data";
import { ReadMore } from "@/components/ui/read-more/ReadMore";

interface TextStyle {
    WebkitLineClamp?: string;
    WebkitBoxOrient?: 'horizontal' | 'vertical';
    overflow?: string;
    display?: string;
}

export function WorkHistory() {
    return (
        <section className={styles.work_history}>
            {history.map((item, index) => {
                const textGroups: string[][] = item.text.reduce<string[][]>((acc, text, idx) => {
                    const groupIndex = Math.floor(idx / 2);
                    if (!acc[groupIndex]) {
                        acc[groupIndex] = [];
                    }
                    acc[groupIndex].push(text);
                    return acc;
                }, []);

                return (
                    <WorkBranch {...item} key={index}>
                        {textGroups.map((group, groupIndex) => (
                            <div className={styles.block} key={groupIndex}>
                                {group.map((text, textIndex) => (
                                    text.length > 0 && (
                                        <ReadMore
                                            key={textIndex}
                                            text={text}
                                            text_color={item.color_text}
                                            title={item.text_block_title[
                                                groupIndex == 1 ?
                                                    groupIndex + textIndex + 1
                                                    : groupIndex + textIndex
                                            ]}
                                            title_color={item.color_text}
                                        />
                                    )

                                ))}
                            </div>
                        ))}
                    </WorkBranch>
                );
            })}
        </section >
    );
}
