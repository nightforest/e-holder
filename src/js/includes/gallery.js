import Swiper, { Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const gallery = () => {
    const galleryThumbsSwiper = new Swiper('.gallery-thumbs__swiper', {
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slidesPerView: 4,
        breakpoints: {
            0: {
                spaceBetween: 20,
            },
        },
    });

    const gallerySliderSwiper = new Swiper('.gallery-slider__swiper', {
        modules: [Thumbs, Navigation],
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        preventInteractionOnTransition: true,
        autoHeight: true,
        thumbs: {
          swiper: galleryThumbsSwiper
        },
        navigation: {
            nextEl: ".gallery-slider__next",
            prevEl: ".gallery-slider__prev",
        },
    });
}

export default gallery;