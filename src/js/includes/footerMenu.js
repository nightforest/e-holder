const footerMenu = () => {
    const changeAttr = () => {
        const footerMenuToggleAll = document.querySelectorAll('.footer-menu__toggle');
        const footerMenuAll = document.querySelectorAll('.footer-menu__inner');
        const footerMenuLinksAll = document.querySelectorAll('.footer-menu__link');
        const searchToggle = document.querySelector('.search-toggle');
        const search = document.querySelector('.search');

        footerMenuToggleAll?.forEach(item => {
            item.setAttribute('aria-expanded', false);
        });

        footerMenuAll?.forEach(item => {
            item.setAttribute('aria-hidden', true);
        });

        footerMenuLinksAll?.forEach(item => {
            item.setAttribute('tabindex', '-1');
        });

        searchToggle?.setAttribute('aria-expanded', false);
        search?.setAttribute('aria-hidden', true);
    };

    if (window.innerWidth < 768) {
        changeAttr();
    }
    
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            changeAttr();
        }
    });
}

export default footerMenu;