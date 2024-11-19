export function createInputPlaceholderActivity() {
    const inputWrappers = document.querySelectorAll('.js-input-wrapper');

    for (let inputWrapper of inputWrappers) {
        const input = inputWrapper.querySelector('.input');
        const label = inputWrapper.querySelector('.label');

        if (input) {
            input.addEventListener('focus', () => {
                label.classList.add('active');
            });

            input.addEventListener('blur', () => {
                if (input.value === '') {
                    label.classList.remove('active');
                } else {
                    label.classList.add('active'); // Если есть текст, оставляем класс active
                }
            });
        }

    }
}

/*
СМЫСЛ ФУНКЦИИ:
На MacOS стили для лейбла, который имитирует placeholder
и поднимается вверх при фокусе на инпут (input:not(:placeholder-shown) + .label),
не работают вообще/частично. Поэтому данный функционал лейбла-плейсхолдера реализован через эту функцию*/
