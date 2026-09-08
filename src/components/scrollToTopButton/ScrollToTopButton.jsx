import { FiArrowUp } from 'react-icons/fi';
import useScrollingTop from '../../hooks/useScrollingToTop';
import scrollToTop from '../../helpers/scrollToTop';

import {
    ScrollButton,
    ScrollIcon,
} from '../../styles/components/scrollToTopButton.styles';

const ScrollToTopButton = () => {
    const isVisible = useScrollingTop();

    const handleScrollToTop = () => {
        scrollToTop();
    };

    if (!isVisible) {
        return null;
    }

    return (
        <ScrollButton
            type="button"
            aria-label="Volver al inicio"
            onClick={handleScrollToTop}
        >
            <ScrollIcon>
                <FiArrowUp />
            </ScrollIcon>
        </ScrollButton>
    );
};

export default ScrollToTopButton;