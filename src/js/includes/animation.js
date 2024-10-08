import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from "smoothscroll-for-websites/SmoothScroll"
import headerScroll from './headerScroll.js';

const animation = () => {
    const preloader = document.querySelector('.preloader');

    gsap.registerPlugin(ScrollTrigger);
    
    SmoothScroll({
        stepSize: 50,
        animationTime: 600,
    });

    const tl = gsap.timeline();

    if (preloader) {
        tl.set(".preloader__img", {
            display: "block",
        });
        tl.from(".preloader__img", 1, {
            opacity: 0,
            ease: "power3.inOut",
        });

        window.addEventListener('load', () => {
            gsap.utils.toArray(".parallax-section").forEach(function(container) {
                const image = container.querySelector(".parallax-section__bg");
              
                gsap.to(image, {
                    y: '20%',
                    scrollTrigger: {
                        trigger: container,
                        // start: '0',
                        // end: '100%',
                        scrub: true,
                    },
                });
            });
    
            tl.to(".preloader", 1, {
                yPercent: -100,
                ease: "power3.inOut",
            });
            tl.set(".preloader", {
                display: "none",
                onComplete: startScrollTrigger,
            });
            headerScroll();
        });
    } else {
        startScrollTrigger();
        headerScroll();
    }
    
    function startScrollTrigger() {
        gsap.utils.toArray('.animation-zoom').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        scale: 0,
                        ease: "back.out"
                    });
                }
            });
        });

        gsap.utils.toArray('.animation-fade').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 90%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1.5, {
                        delay: delay,
                        opacity: 0,
                        ease: "power3.inOut"
                    });
                }
            });
        });

        gsap.utils.toArray('.animation-down').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        opacity: 0,
                        y: '3vh',
                        scale: '0.9',
                        ease: "power3.inOut"
                    });
                }
            });
        });

        gsap.utils.toArray('.animation-up').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        opacity: 0,
                        y: -30,
                        ease: "back.out"
                    });
                }
            });
        });

        gsap.utils.toArray('.animation-left').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        opacity: 0,
                        x: -70,
                        ease: "back.out"
                    });
                }
            });
        });

        gsap.utils.toArray('.animation-right').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        opacity: 0,
                        x: 70,
                        ease: "back.out"
                    });
                }
            });
        });

        gsap.utils.toArray('.animation-title').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                toggleClass: { targets: animatedElement, className: "is-animated" }
            });
        });
    }
}

export default animation;