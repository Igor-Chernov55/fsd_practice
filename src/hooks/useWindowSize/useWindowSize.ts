import {useEffect, useState} from "react";

export const useWindowSize = () => {
    const [width, setWidth] = useState<number>(0)

    const handleResize = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return {windowWidth: width}
};