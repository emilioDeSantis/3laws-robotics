// useScreenSize.ts
import { useState, useEffect } from 'react';

interface ScreenSize {
  width: number | 0;
  height: number | 0;
}

export function useScreenSize(): ScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const updateSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', updateSize);
    updateSize(); // initialize the size

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return screenSize;
}
