'use client'

import { SmoothScrolling } from "@/components/shared/smooth-scrolling/SmoothScrolling";
import { Experience } from "./main-sections/Experience";
import HeroSection from "./main-sections/HeroSection";
import styles from "./main.module.scss"
import Work from "./main-sections/Work";
import { About } from "./main-sections/About";
import { Contacts } from "./main-sections/Contacts";

export function Main() {
    return (
        <SmoothScrolling>
            <div className={styles.main}>
                <HeroSection />
                <About />
                <Experience />
                <Work />
                <Contacts />
            </div>
        </SmoothScrolling>
    );
}
