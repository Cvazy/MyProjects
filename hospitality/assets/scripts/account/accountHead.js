const accountIcon = document.querySelector('.account_icon')
const accountNav = document.querySelector('.account_navigation')
const accountNavArrow = document.getElementById('accountMenuArrow')
const accountNavArrowPath = accountNavArrow.querySelector('path')

accountIcon.addEventListener('click', () => {
    accountNav.classList.toggle('max-h-popup')
    accountNavArrow.classList.toggle('rotate-180')
    accountNavArrowPath.classList.toggle('dark_path')
})