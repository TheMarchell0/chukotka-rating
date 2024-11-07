export function chooseMarkRadio() {
    const radios = document.querySelectorAll('.js-mark-radio'),
        button = document.querySelector('.js-choose-mark-button'),
        markInput = document.querySelector('.js-mark-input-wrapper');

    for (let radio of radios) {
        radio.addEventListener('click', () => {
            if (button.hasAttribute('disabled')) {
                button.removeAttribute('disabled');
            }
        });
    }

    button.addEventListener('click', () => {
        for (let radio of radios) {
            if (radio.checked) {
                if (markInput.classList.contains('error')) {
                    markInput.classList.remove('error');
                }
                markInput.querySelector('.js-input').value = radio.value;
                break;
            }
        }
    });
}