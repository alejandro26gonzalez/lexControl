import { useEffect } from "react";

const useLockBodyScroll = (locked = false) => {
    useEffect(() => {

        if (!locked) return;

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [locked]);
};

export default useLockBodyScroll;