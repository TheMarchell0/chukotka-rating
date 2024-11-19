const markInput = document.querySelector('.js-mark-input-wrapper'),
    markLabel = markInput.querySelector('.label'),
    radios = document.querySelectorAll('.js-mark-radio'),
    button = document.querySelector('.js-choose-mark-button');

export function chooseMarkRadio() {
    for (let radio of radios) {
        radio.addEventListener('click', () => {
            if (button.hasAttribute('disabled')) {
                button.removeAttribute('disabled');
            }
        });
    }

    button.addEventListener('click', () => {
        insertMarkRadio();
    });
}

export function clearMarkRadio() {
    for (let radio of radios) {
        if (radio.checked) {
            radio.checked = false;
            break;
        }
    }
    markLabel.classList.remove('active');
    button.setAttribute('disabled', true);
}

export function insertMarkRadio() {
    for (let radio of radios) {
        if (radio.checked) {
            if (markInput.classList.contains('error')) {
                markInput.classList.remove('error');
            }
            markInput.querySelector('.js-input').value = radio.value;
            markLabel.classList.add('active');
            break;
        }
    }
}
