import Lenis from "lenis";
import { useEffect, useState } from "react";

interface ISmoothScrolling {
    children: JSX.Element
}

export function SmoothScrolling({ children }: ISmoothScrolling) {
    const [lenisRef, setLenis] = useState<any>(null);
    const [rafState, setRaf] = useState<number>();

    useEffect(() => {
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
    }, []);

    return (
        <>
            {children}
        </>
    );
}

