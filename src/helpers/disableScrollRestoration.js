const disableScrollRestoration = () => {
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
    }
};

export default disableScrollRestoration;