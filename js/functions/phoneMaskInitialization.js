export function phoneMaskInitialization() {
    const phoneInputs = document.querySelectorAll('.js-phone-mask');

    for (let phoneInput of phoneInputs) {
        const isCityPhoneNumber = phoneInput.classList.contains('js-city-phone-number');

        phoneInput.addEventListener('keydown', function (e) {
            const allowedKeys = ['Backspace', 'Tab', 'Enter', 'Escape', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Delete'];
            const regex = isCityPhoneNumber ? /[0-9();]/ : /[0-9;]/;

            if (allowedKeys.includes(e.key)) {
                return;
            }

            if (!regex.test(e.key)) {
                e.preventDefault();
            }
        });

        phoneInput.addEventListener('input', function () {
            const value = isCityPhoneNumber
                ? this.value.replace(/[^\d();]/g, '') // Цифры, точки с запятой и скобки для городского номера
                : this.value.replace(/[^\d;]/g, ''); // Только цифры
            this.value = value;
        });
    }
}
