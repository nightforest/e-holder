const filter = () => {
    const body = document.querySelector('body');
    const filter = document.querySelector(".filter");
    const filterToggle = document.querySelector("[data-filter-toggle]");
    const filterClose = document.querySelector("[data-filter-close]");
    
    filterToggle?.addEventListener('click', e => {
        e.preventDefault();

        body?.classList.add('scroll-disabled');
        filter?.classList.add('is-visible');
    });

    filter?.addEventListener('click', e => {
        if (!e.target.closest('.filter__sidebar')) {
            body?.classList.remove('scroll-disabled');
            filter?.classList.remove('is-visible');
        }
    });

    filterClose?.addEventListener('click', () => {
        body?.classList.remove('scroll-disabled');
        filter?.classList.remove('is-visible');
    });
}

export default filter;