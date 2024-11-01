export function getCurrentYear() {
    const yearStrings = document.querySelectorAll('.js-current-year');

    for (let yearString of yearStrings) {
        yearString.innerHTML = new Date().getFullYear();
    }
}