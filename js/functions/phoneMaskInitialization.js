export function phoneMaskInitialization() {
    const phoneInputs = document.querySelectorAll('.js-phone-mask');

    for (let phoneInput of phoneInputs) {
        const isCityPhoneNumber = phoneInput.classList.contains('js-city-phone-number');
        phoneInput.addEventListener('input', function (e) {
            const value = isCityPhoneNumber
                ? this.value.replace(/[^\d();]/g, '') // Цифры, точки с запятой и скобки для городского номера
                : this.value.replace(/[^\d;]/g, ''); // Только цифры и точки с запятой
            this.value = value;
        });
    }
}
