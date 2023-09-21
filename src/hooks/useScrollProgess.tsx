// useScrollProgress.ts// write me a scroll progress hook that uses teh is desktop hook to determins a factor and teh screen width hoook also to detemins anotehr factore and teh sctolly and thats the scrollporigess

import { useEffect, useState } from "react";
import { useScreenSize } from "./useScreenSize";
import { useIsDesktop } from "./useIsDesktop";

export const useScrollProgress = () => {
    const { width } = useScreenSize();
    const [scrollProgress, setScrollProgress] = useState(0);
    const isDesktop = useIsDesktop();

    useEffect(() => {
        const onScroll = () => {
            //make pregress scrolly * width * a factor that is one way of desktop and one way if mobile
            const progress = window.scrollY * (isDesktop ? 1.44 : 0.9) / width;
            console.log(progress);
            
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [width, isDesktop]);

    return scrollProgress;
}




