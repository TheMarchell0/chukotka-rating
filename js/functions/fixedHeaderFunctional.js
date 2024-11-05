export function fixedHeaderFunctional() {
    const header = document.querySelector('.js-header'),
        heroHeight = document.querySelector('.js-hero-section').offsetHeight,
        triggerHeight = heroHeight - header.offsetHeight;

    checkScroll();

    document.addEventListener('scroll', checkScroll);

    function checkScroll() {
        if (window.pageYOffset > triggerHeight) {
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