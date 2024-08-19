import SmoothScroll from 'smooth-scroll/src/js/smooth-scroll/smooth-scroll';

const scrollToId = () => {
    // const header = document.querySelector('.header');
    const headerHeight = document.querySelector('.header').offsetHeight;

    if(document.querySelector('[data-scroll]')) {
        new SmoothScroll('[data-scroll]', { 
            speed: 500,
            speedAsDuration: true,
            offset: headerHeight,
            updateURL: false,
        });
    }
    
}

export default scrollToId;