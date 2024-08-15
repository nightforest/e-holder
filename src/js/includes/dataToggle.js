const dataToggle = () => {
    const body = document.querySelector('body');
    const toggleAll = document.querySelectorAll('[data-toggle]');
    
    toggleAll?.forEach(item => {
        item.addEventListener('click', function(e) {
            const activeItem = document.querySelector('[data-toggle][aria-expanded="true"');
            const menuID = item.getAttribute('data-toggle');
            const menu = document.getElementById(menuID);
            const buttonsAll = document.querySelectorAll(`[data-toggle="${menuID}"]`);
            const isExpanded = item.getAttribute('aria-expanded');
            
            e.preventDefault();

            if (activeItem != item) {
                const activeMenuID = activeItem?.getAttribute('data-toggle');
                const activeMenu = document.getElementById(activeMenuID);
                const activeButtonsAll = document.querySelectorAll(`[data-toggle="${activeMenuID}"]`);

                activeButtonsAll.forEach(item => {
                    item.setAttribute('aria-expanded', false);
                });
                
                activeMenu?.setAttribute('aria-hidden', true);
            }
            
            if (isExpanded === 'false') {
                buttonsAll.forEach(item => {
                    item.setAttribute('aria-expanded', true);
                });

                menu.setAttribute('aria-hidden', false);

                // if (window.innerWidth < 768) {
                //     body.style = 'overflow: hidden'
                // }
            } else {
                buttonsAll.forEach(item => {
                    item.setAttribute('aria-expanded', false);
                });

                menu.setAttribute('aria-hidden', true);

                // if (window.innerWidth < 768) {
                //     body.style = 'overflow: visible'
                // }
            }
        });
    });

    body.addEventListener('click', e => {
        const isHidden = e.target.closest('[aria-hidden="false"]');
        const isToggle = e.target.closest('[data-toggle]');

        if (!isHidden && !isToggle) {
            const activeItem = document.querySelector('[data-toggle][aria-expanded="true"');
            const activeMenuID = activeItem?.getAttribute('data-toggle');
            const activeMenu = document.getElementById(activeMenuID);

            activeItem?.setAttribute('aria-expanded', false);
            activeMenu?.setAttribute('aria-hidden', true);

            // if (window.innerWidth < 768) {
            //     body.style = 'overflow: visible'
            // }
        }
    });
}

export default dataToggle;