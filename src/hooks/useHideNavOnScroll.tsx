import { useState, useEffect } from 'react';

export const showSensitivity = 8; // Configurable sensitivity values
export const hideSensitivity = 12;

function useHideNavOnScroll() {
    const [visible, setVisible] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);

    function handleScroll() {
        const currentScrollPosition =
            window.pageYOffset || document.documentElement.scrollTop;
        const scrollDifference = Math.abs(
            currentScrollPosition - scrollPosition
        );

        if (
            (scrollPosition > currentScrollPosition && scrollDifference > showSensitivity) ||
            currentScrollPosition === 0
        ) {
            setVisible(true);
        } 
        else if (
            scrollPosition < currentScrollPosition && scrollDifference > hideSensitivity
        ) {
            setVisible(false);
        }

        setScrollPosition(currentScrollPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return visible 
}

export default useHideNavOnScroll;
