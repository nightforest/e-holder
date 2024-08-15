const placeholder = () => {
    const placeholderAll = document.querySelectorAll('.form__placeholder');

    placeholderAll?.forEach(item => {
        const input = item.closest('.form__group').querySelector('.form__input');

        item.addEventListener('click', () => {
            input?.focus();
        });

        input?.addEventListener('focusin', () => {
            item.classList.add('is-active');
        });

        input?.addEventListener('focusout', () => {
            input.value.length
                ? item.classList.add('is-active')
                : item.classList.remove('is-active');
        });
    });
}

export default placeholder;
