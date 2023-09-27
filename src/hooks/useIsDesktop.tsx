// hook that determins if its mobile or not by usin gteh use screesize hook and its desktop if teh screen is mor ethat 768 px wide

import { useEffect, useState } from "react";
import { useScreenSize } from "./useScreenSize";

export const useIsDesktop = () => {
    const { width } = useScreenSize();
    const [isDesktop, setIsDesktop] = useState<boolean|null>(null);

    useEffect(() => {
        setIsDesktop(width > 768);
    }, [width]);

    return isDesktop;
};
