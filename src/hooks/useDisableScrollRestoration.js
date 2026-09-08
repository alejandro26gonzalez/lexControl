import { useEffect } from 'react';

const useDisableScrollRestoration = () => {
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto',
        });

        return () => {
            window.history.scrollRestoration = 'auto';
        };
    }, []);
};

export default useDisableScrollRestoration;