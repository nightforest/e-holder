import disableScroll from "./disableScroll";
import enableScroll from "./enableScroll";

const mobileNav = () => {
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileNavToggle = document.querySelector("[data-nav-toggle]");
    const paddingRight = window.innerWidth - document.documentElement.clientWidth;
    const mobileNavLinkAll = mobileNav?.querySelectorAll('.mobile-nav-menu__link');
    
    mobileNavToggle?.addEventListener('click', e => {
        e.preventDefault();
        mobileNavShowHide();
    });

    mobileNav?.addEventListener('click', e => {
        if (!e.target.closest('.mobile-nav__sidebar')) {
            mobileNavShowHide();
        }
    });

    mobileNavLinkAll?.forEach(item => {
        item.addEventListener('click', e => {
            mobileNavShowHide();
        });
    });

    function mobileNavShowHide() {
        header?.classList.toggle('is-active');
        mobileNav?.classList.toggle('is-visible');
        mobileNavToggle?.classList.toggle('is-active');

        if (mobileNav.classList.contains('is-visible')) {
            disableScroll();
        } else {
            setTimeout(() => {
                enableScroll();
            }, 500);
        }
    }
}

export default mobileNav;