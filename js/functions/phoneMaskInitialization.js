export function phoneMaskInitialization() {
    const phoneInputs = document.querySelectorAll('.js-phone-mask');

    for (let phoneInput of phoneInputs) {
        Inputmask({ mask: '79999999999', showMaskOnHover: false}).mask(phoneInput);
    }
}