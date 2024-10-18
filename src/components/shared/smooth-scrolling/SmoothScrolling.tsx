import Lenis from "lenis";
import { useEffect, useState } from "react";

interface ISmoothScrolling {
    children: JSX.Element
    delay?: number
}

export function SmoothScrolling({ children, delay }: ISmoothScrolling) {
    const [lenisRef, setLenis] = useState<any>(null);
    const [rafState, setRaf] = useState<number>();

    useEffect(() => {
        setTimeout(() => {
            const scroller = new Lenis();
            let rf;

            function raf(time: number) {
                scroller.raf(time);
                requestAnimationFrame(raf);
            }

            rf = requestAnimationFrame(raf);
            setRaf(rf);
            setLenis(scroller);

            return () => {
                if (lenisRef) {
                    cancelAnimationFrame(rafState as number);
                    lenisRef.destroy();
                }
            };
        }, delay! * 1000)
    }, []);

    return (
        <>
            {children}
        </>
    );
}

