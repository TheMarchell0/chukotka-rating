import {clearMarkRadio} from "./markRadio.js";
import {
    firstLetterUppercase,
    validateEmail,
    validateLocalityName,
    validatePhone,
    validateOrganizationName
} from "./validationTypes.js";
import {clearSelect} from "./createSelect.js";

export function createFormValidation() {
    const forms = document.querySelectorAll('.js-form');

    forms.forEach(form => {
        const inputs = form.querySelectorAll('.js-input-wrapper');
        const submitButton = form.querySelector('.js-submit-button');

        inputs.forEach(input => {
            const field = input.querySelector('.js-input');

            field.addEventListener('input', () => validateInput(input));
            field.addEventListener('change', () => {
                field.classList.add('touched');
                validateInput(input);
            });
        });

        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            validateAllInputs(inputs);
            checkAllFieldsValid(inputs);
        });
    });
}

function validateInput(input) {
    const field = input.querySelector('.js-input');
    const value = field.value.trim();
    const isRequired = input.classList.contains('required');
    const inputType = input.getAttribute('data-input-type');
    const isEmpty = inputType === 'select' ? value === 'Не выбран' : value === '';

    clearErrorClasses(input);

    if (isEmpty && isRequired) {
        input.classList.add('error');
    } else {
        field.classList.add('touched');
        handleInputValidation(input, inputType, value);
    }
}

function clearErrorClasses(input) {
    input.classList.remove('error', 'email-error', 'phone-error', 'rules-error');
}

function handleInputValidation(input, inputType, value) {
    const field = input.querySelector('.js-input');

    if (inputType === 'firstLetterUppercase') {
        const newValue = firstLetterUppercase(value);

        // Проверяем, изменилось ли значение
        if (newValue !== value) {
            field.value = newValue; // Обновляем только если значение изменилось
        }
    }

    const validationRules = {
        organizationName: validateOrganizationName,
        localityName: validateLocalityName,
        email: validateEmail,
        phone: (val) => validatePhone(val, field.classList.contains('js-city-phone-number')),
    };

    const validate = validationRules[inputType];

    if (validate && !validate(value)) {
        input.classList.add('error', 'rules-error');
    }
}


function validateAllInputs(inputs) {
    inputs.forEach(input => validateInput(input));
}

function checkAllFieldsValid(inputs) {
    const allValid = Array.from(inputs).every(input => !input.classList.contains('error'));

    if (allValid) {
        alert('Функционал отправки формы находится в разработке.');
        clearFormFields(inputs);
        // TODO: Здесь доделать функционал отправки формы в Битрикс.
    }
}

function clearFormFields(inputs) {
    inputs.forEach(input => {
        const field = input.querySelector('.js-input');
        field.value = '';
        field.classList.remove('touched');
    });
    clearMarkRadio();
    clearSelect();
}
