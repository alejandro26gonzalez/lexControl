const scrollToTop = (smooth = false) => {
    window.scrollTo({
        top: 0,
        behavior: smooth ? 'smooth' : 'auto',
    });
};

export default scrollToTop;

// Este helper va a usarse para desplazarse hacia arriba unicamente cuando se le da click