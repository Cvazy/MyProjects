const menuSelector = document.querySelector('.menu_selector')
const menuArrow = menuSelector.querySelector('img')
const menuList = document.querySelector('.menu_list__top')
const menuItems = menuList.querySelectorAll('.menu__item')

const menu = document.querySelector('.menu')
const burger = document.getElementById('burger')
const closeMenu = document.getElementById('close')
const todoBlock = document.querySelector('.todo')
const mobileHeader = document.querySelector('.menu_mobile')

document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
        closeMobileMenu()
    }
})

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        menuItems.forEach((el) => {
            el.classList.remove('menu__item-active')
        })

        item.classList.add('menu__item-active')
    })
})

burger.addEventListener('click', () => {
    menu.classList.add('max-w-menu')
    todoBlock.style.filter = 'brightness(0.4)'
    mobileHeader.style.filter = 'brightness(0.4)'
})

closeMenu.addEventListener('click', closeMobileMenu)

function closeMobileMenu() {
    menu.classList.remove('max-w-menu')
    todoBlock.style.filter = 'brightness(1)'
    mobileHeader.style.filter = 'brightness(1)'
}

function menuListOpen() {
    if (window.innerWidth > 1024) {
        menuSelector.addEventListener('click', () => {
            menuArrow.classList.toggle('rotate-180')
            menuList.classList.toggle('max-h-menu')
        })
    }
}

document.addEventListener('DOMContentLoaded', menuListOpen)
window.addEventListener('resize', menuListOpen)