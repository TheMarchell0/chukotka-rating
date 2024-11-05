export function createMobileMenu() {
    const header = document.querySelector('.js-header');
    const triggerButton = header.querySelector('.js-trigger-mobile-menu');
    const mobileMenu = header.querySelector('.js-mobile-menu');
    const menuItems = mobileMenu.querySelectorAll('.header__nav-list-item');

    triggerButton.addEventListener('click',()=> {
        mobileMenu.classList.toggle('open');
        triggerButton.classList.toggle('open')
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
        } else mobileMenu.style.maxHeight = null;
    })

    for (let menuItem of menuItems) {
        menuItem.addEventListener('click',()=> {
            mobileMenu.classList.remove('open');
            triggerButton.classList.remove('open')
            mobileMenu.style.maxHeight = null;
        })
    }
}