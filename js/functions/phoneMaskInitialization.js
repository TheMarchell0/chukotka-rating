export function phoneMaskInitialization() {
    const phoneInputs = document.querySelectorAll('.js-phone-mask');

    for (let phoneInput of phoneInputs) {
        const isCityPhoneNumber = phoneInput.classList.contains('js-city-phone-number');
        phoneInput.addEventListener('input', function (e) {
            const value = isCityPhoneNumber
                ? this.value.replace(/[^\d();]/g, '') // Цифры и скобки для городского номера
                : this.value.replace(/[^\d;]/g, ''); // Только цифры
            this.value = value;
        });
    }
}
