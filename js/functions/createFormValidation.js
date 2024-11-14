import {clearMarkRadio} from "./markRadio.js";
import {firstLetterUppercase, validateEmail, validateLocalityName, validatePhone} from "./validationTypes.js";
import {clearSelect} from "./createSelect.js";

export function createFormValidation() {
    const forms = document.querySelectorAll('.js-form');

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
                validateInput(input);
            });
        });

        submitButton.addEventListener('click', (e) => {
            e.preventDefault();

            inputs.forEach(input => {
                validateInput(input);
            });

            checkAllFieldsValid();
        });

        function validateInput(input) {
            const isRequired = input.classList.contains('required');
            const inputType = input.getAttribute('data-input-type');
            const field = input.querySelector('.js-input');
            const value = field.value.trim();
            const isEmpty = inputType === 'select' ? value === 'Не выбран' : value === '';

            input.classList.remove('error', 'email-error', 'phone-error', 'rules-error');

            if (isEmpty && isRequired) {
                input.classList.add('error');
            } else {
                field.classList.add('touched');

                if (inputType === 'firstLetterUppercase' ) {
                    field.value = firstLetterUppercase(field.value)
                }

                if (inputType === 'localityName' && !validateLocalityName(value)) {
                    input.classList.add('error', 'rules-error');
                }

                if (inputType === 'email' && !validateEmail(value)) {
                    input.classList.add('error', 'email-error');
                }

                if (inputType === 'phone' && !validatePhone(value)) {
                    input.classList.add('error', 'phone-error');
                }
            }
        }

        function checkAllFieldsValid() {
            let allValid = Array.from(inputs).every((input) => {
                return !input.classList.contains('error') && !input.classList.contains('email-error') && !input.classList.contains('phone-error') && !input.classList.contains('rules-error');
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
            clearMarkRadio();
            clearSelect();
        }
    }
}
