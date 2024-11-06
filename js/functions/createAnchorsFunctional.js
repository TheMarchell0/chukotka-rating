export function createAnchorsFunctional() {
    const anchorLinks = document.querySelectorAll('.js-anchor');
    const headerHeight = document.querySelector('.js-header').offsetHeight;

    anchorLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = link.getAttribute('href');
            const targetElement = document.getElementById(href.slice(1));
            if (targetElement) {
                const topOffset = targetElement.offsetTop;
                window.scrollTo({
                    top: topOffset-headerHeight-20,
                    behavior: 'smooth'
                });
            }
        });
    });
}