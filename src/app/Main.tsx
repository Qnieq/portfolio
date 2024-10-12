'use client'

import { SmoothScrolling } from "@/components/shared/smooth-scrolling/SmoothScrolling";
import { Experience } from "./Experience";
import HeroSection from "./HeroSection";
import Work from "./Work";
import { WorkHistory } from "./WorkHistory";
import styles from "./main.module.scss"

export function Main() {
    return (
        <SmoothScrolling>
            <div className={styles.main}>
                <HeroSection />
                <Experience />
                <WorkHistory />
                <Work />
            </div>
        </SmoothScrolling>
    );
}
