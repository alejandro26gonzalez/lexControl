import { useEffect, useState } from 'react';

const useScrollingTop = (threshold = 400) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [threshold]);

    return isVisible;
};

export default useScrollingTop;