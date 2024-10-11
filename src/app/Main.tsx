'use client'

import HeroSection from "./HeroSection";
import Work from "./Work";
import { WorkHistory } from "./WorkHistory";
import styles from "./main.module.scss"

export function Main() {
    return (
        <div className={styles.main}>
            <HeroSection />
            <WorkHistory />
            <Work />
        </div>
    );
}
