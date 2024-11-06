export function createFormValidation() {
    const forms = document.querySelectorAll('.js-form');

    const phoneRegex = /^(\+7 \(\d{3}\) \d{3}-\d{2}-\d{2})$/,
        emailRegex = /\S+@\S+\.\S+/;

    for (let form of forms) {
        const inputs = form.querySelectorAll('.js-input-wrapper'),
            submitButton = form.querySelector('.js-submit-button');

        inputs.forEach((input) => {
            const field = input.querySelector('.js-input');

            field.addEventListener('input', () => {
                validateInput(input);
            });

            field.addEventListener('change', () => {
                field.classList.add('touched');
            });
        });

        submitButton.addEventListener('click', (e) => {
            e.preventDefault();

            inputs.forEach(input => {
                validateInput(input);
            });

            checkAllFieldsValid();
        });


        function validateEmail(email) {
            return emailRegex.test(email);
        }

        function validatePhone(phoneInput) {
            return phoneRegex.test(phoneInput)
        }

        function validateInput(input) {
            const isEmailField = input.classList.contains('js-email-input');
            const isPhoneField = input.classList.contains('js-phone-input');
            const field = input.querySelector('.js-input');
            const value = field.value.trim();
            const isEmpty = value === '';

            input.classList.remove('error', 'email-error');

            if (isEmpty) {
                input.classList.add('error');
            } else {
                field.classList.add('touched');

                if (isEmailField && !validateEmail(value)) {
                    input.classList.add('error', 'email-error');
                }

                if (isPhoneField && !validatePhone(value)) {
                    input.classList.add('error', 'phone-error');
                }
            }
        }

        function checkAllFieldsValid() {
            let allValid = Array.from(inputs).every((input) => {
                return !input.classList.contains('error') && !input.classList.contains('email-error');
            });

            if (allValid) {
                alert('Функционал отправки формы находится в разработке.')
                clearFormFields();
                // TODO: Здесь доделать функционал отправки формы в Битрикс.
            }
        }

        function clearFormFields() {
            inputs.forEach((input) => {
                const field = input.querySelector('.js-input');
                field.value = '';
                field.classList.remove('touched');
            });
        }
    }
}
