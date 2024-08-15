import JustValidate from 'just-validate';

const orderForm2Validation = () => {
    const form = document.getElementById('order-form-2');

    if (form) {
        const validator = new JustValidate(form, {
            errorLabelCssClass: ['error-label'],
        });

        const inputAll = form.querySelectorAll('[required]');

        inputAll.forEach(item => {
            validator.addField(item, [
                {
                    rule: 'required',
                    errorMessage: item.getAttribute('data-error-message'),
                },
            ]);
        });

        validator.onFail(() => {

        });

        validator.onSuccess(( event ) => {
            // event.currentTarget.submit();
        });
    }
}

export default orderForm2Validation;