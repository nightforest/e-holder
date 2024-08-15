import Swiper, { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

const aboutSlider = () => {
    const breakpoint = window.matchMedia( '(min-width:768px)' );

    let slider;

    const sliderBreakChacker = function() {

        // if larger viewport and multi-row layout needed
        if ((breakpoint.matches === true) && document.querySelector('.about-slider')) {

            // clean up old instances and inline styles when available
            if ( slider !== undefined ) slider.destroy( true, true );

            // or/and do nothing
            return;

        // else if a small viewport and single column layout needed
        } else if ((breakpoint.matches === false) && document.querySelector('.about-slider')) {

            // fire small viewport version of swiper
            return slider = new Swiper ('.about-slider', {
                modules: [Scrollbar],
                spaceBetween: 20,
                loop: false,
                centeredSlides: false,
                observer: true,
                speed: 400,
                observeParents: true,
                watchOverflow: true,
                scrollbar: {
                    el: ".swiper-scrollbar",
                    hide: false,
                    draggable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                },
            });
        }
    };

    if (breakpoint) {
        breakpoint.addListener(sliderBreakChacker);
        sliderBreakChacker();
    }
}

export default aboutSlider;
