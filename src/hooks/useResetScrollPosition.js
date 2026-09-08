import { useEffect } from "react";
import { useLocation } from "react-router";

import scrollToTop from "../helpers/scrollToTop";

const useResetScrollPosition = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        scrollToTop(false);
    }, [pathname]);

    return null;
};
export default useResetScrollPosition;