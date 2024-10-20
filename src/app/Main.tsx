'use client'

import { SmoothScrolling } from "@/components/shared/smooth-scrolling/SmoothScrolling";
import { Experience } from "./main-sections/Experience";
import HeroSection from "./main-sections/HeroSection";
import styles from "./main.module.scss"
import Work from "./main-sections/Work";
import { About } from "./main-sections/About";
import { Contacts } from "./main-sections/Contacts";
import { WorkHistory } from "./main-sections/WorkHistory";
import { LoadingSection } from "@/components/ui/loading-section/LoadingSection";
import { useEffect } from "react";
import Header from "@/components/ui/header/Header";

export function Main() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <SmoothScrolling delay={5.5}>
            <div className={styles.main}>
                <Header delay={5.5} />
                <LoadingSection />
                <HeroSection delay={5.5} />
                <About />
                <WorkHistory />
                <Experience />
                <Work />
                <Contacts />
            </div>
        </SmoothScrolling>
    );
}
