export function fixedHeaderFunctional() {
    const header = document.querySelector('.js-header');
    checkScroll();
    document.addEventListener('scroll', checkScroll);

    function checkScroll() {
        if (window.pageYOffset > 950) {
            if (!header.classList.contains('colored')) {
                header.classList.add('colored');
            }
        } else {
            if (header.classList.contains('colored')) {
                header.classList.remove('colored');
            }
        }
    }
}