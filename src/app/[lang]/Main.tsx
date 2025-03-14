'use client'

import { SmoothScrolling } from "@/components/shared/smooth-scrolling/SmoothScrolling";
import { Experience } from "../../components/screens/main-sections/Experience";
import HeroSection from "../../components/screens/main-sections/HeroSection";
import styles from "./main.module.scss"
import Work from "../../components/screens/main-sections/Work";
import { About } from "../../components/screens/main-sections/About";
import { WorkHistory } from "../../components/screens/main-sections/WorkHistory";
import { LoadingSection } from "@/components/ui/loading-section/LoadingSection";
import { useEffect } from "react";
import Header from "@/components/ui/header/Header";
import { TopButton } from "@/components/ui/top_button/TopButton";
import { Dictionary } from "@/types/lang.types";
import { useDictionaryStore } from "@/store/useDictionaryStore";
import { SocialMedia } from "@/components/screens/main-sections/SocialMedia";

export function Main({ dictionary }: { dictionary: Dictionary }) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
        }
        useDictionaryStore.getState().setDictionary(dictionary)

    }, [dictionary]);

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
                <SocialMedia />
                <TopButton />
            </div>
        </SmoothScrolling>
    );
}