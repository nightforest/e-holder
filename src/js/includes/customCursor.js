import MouseFollower from "mouse-follower";
import 'mouse-follower/src/scss/index.scss';
import gsap from "gsap";

const customCursor = () => {
    MouseFollower.registerGSAP(gsap);

    if (window.innerWidth >= 1200) {
        const cursor = new MouseFollower({
            speed: .5,
            iconSvgSrc: '/img/cursor.svg',
            stateDetection: {
                '-pointer': 'a, button, label, .button, .input, input, .gallery-thumbs__slide',
                '-hidden': 'iframe',
                '-exclusion': '.button',
            },
        });

        cursor.setImg('/img/cursor.svg');

        let items = document.querySelectorAll('.service-card, .product-card, .gallery-slider__link, .documents-slider__link');

        items.forEach(function(el) {
            el.addEventListener('mouseenter', () => {
                cursor.setText('+');
                cursor.removeImg();
            });
        });

        items.forEach(function(el) {
            el.addEventListener('mouseleave', () => {
                cursor.removeText();
                cursor.setImg('/img/cursor.svg');
            });
        });
    }
}

export default customCursor;