export function phoneMaskInitialization() {
    const phoneInputs = document.querySelectorAll('.js-phone-mask');

    for (let phoneInput of phoneInputs) {
        Inputmask({ mask: '+7 (999) 999-99-99', showMaskOnHover: false}).mask(phoneInput);
    }
}