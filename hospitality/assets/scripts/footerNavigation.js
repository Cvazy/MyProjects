const navItems = document.querySelectorAll('.sm_footer_nav__item')

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        const navList = item.nextElementSibling
        const navItemArrow = item.querySelector('.footer_arrow')
        navList.classList.toggle('max-h-popup')
        navList.classList.toggle('pb-10px-im')
        navItemArrow.classList.toggle('rotate-180')
    })
})