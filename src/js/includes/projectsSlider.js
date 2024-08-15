import Swiper, { Scrollbar, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

const projectsSlider = () => {
    new Swiper('.projects-slider', {
        modules: [Scrollbar, Navigation],
        slidesPerView: 1.2,
        loop: false,
        centeredSlides: false,
        observer: true,
        speed: 700,
        observeParents: true,
        watchOverflow: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        navigation: {
            nextEl: '.projects-slider__next',
            prevEl: '.projects-slider__prev',
        },
        breakpoints: {
            0: {
                spaceBetween: 24,
            },
            992: {
                spaceBetween: 48,
            },
        },
    });
}

export default projectsSlider;