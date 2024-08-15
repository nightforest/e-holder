const headerScroll = () => {    
    const header = document.querySelector('.header');

    const changeHeight = () => {
        const headerHeight = header?.offsetHeight | 0;
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    };
    
    changeHeight();
    
    window.addEventListener('resize', () => {
        changeHeight();
    });

    if (window.scrollY > 0) {
        header?.classList.add('is-scroll');
    } else {
        header?.classList.remove('is-scroll');
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header?.classList.add('is-scroll');
        } else {
            header?.classList.remove('is-scroll');
        }
    });
}

export default headerScroll;