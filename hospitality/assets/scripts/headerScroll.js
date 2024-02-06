const header = document.querySelector('header')

const headerLogo = document.getElementById('mainLogo')
const headerDarkLogo = document.getElementById('mainDarkLogo')
const mobileHeaderLogo = document.getElementById('mobileLogo')
const mobileHeaderDarkLogo = document.getElementById('mobileDarkLogo')

const headerUnderline = document.getElementById('headerUnderline')

const headerText = document.querySelectorAll('[data-text="header"]')

const hrElement = document.querySelector('hr')

const dropMenuDarkArrow = document.getElementById('dropMenuDarkArrow')
const burgerIcons = burger.querySelectorAll('img')

const profileIcon = document.getElementById('profile')
const darkProfileIcon = document.getElementById('darkProfile')

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || window.pageYOffset

    if (scrollPosition === 0) {
        header.classList.remove('bg-white')
        mobileHeader.classList.remove('bg-white')

        headerLogo.style.display = 'block'
        headerDarkLogo.style.display = 'none'
        mobileHeaderLogo.style.display = 'block'
        mobileHeaderDarkLogo.style.display = 'none'

        headerUnderline.classList.remove('border-underline-dark')
        headerUnderline.classList.add('border-underline')

        headerText.forEach((el) => {
            el.classList.remove('text-dark')
            el.classList.add('text-white')
        })

        dropMenuDarkArrow.style.display = 'none'
        dropMenuArrow.style.display = 'block'

        hrElement.style.borderTop = '1px solid rgba(255, 255, 255, 0.12)'

        profileIcon.style.display = 'block'
        darkProfileIcon.style.display = 'none'
        burgerIcons[0].style.display = 'block'
        burgerIcons[1].style.display = 'none'
    } else {
        header.classList.add('bg-white')
        mobileHeader.classList.add('bg-white')

        headerLogo.style.display = 'none'
        headerDarkLogo.style.display = 'block'
        mobileHeaderLogo.style.display = 'none'
        mobileHeaderDarkLogo.style.display = 'block'

        headerUnderline.classList.remove('border-underline')
        headerUnderline.classList.add('border-underline-dark')

        headerText.forEach((el) => {
            el.classList.remove('text-white')
            el.classList.add('text-dark')
        })

        dropMenuArrow.style.display = 'none'
        dropMenuDarkArrow.style.display = 'block'

        hrElement.style.borderTop = '1px solid #B9B6B3'

        profileIcon.style.display = 'none'
        darkProfileIcon.style.display = 'block'
        burgerIcons[0].style.display = 'none'
        burgerIcons[1].style.display = 'block'
    }
})
