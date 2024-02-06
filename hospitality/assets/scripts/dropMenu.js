const dropMenuBtn = document.querySelector('.drop_menu')
const dropMenu = document.querySelector('.dropmenu_block')
const dropMenuArrow = document.getElementById('dropMenuArrow')

const upLayer = document.querySelector('.up-layer')
const downLayer = document.querySelector('.under_mobile_nav')
const arrowBack = document.querySelector('.back_arrow')

dropMenuBtn.addEventListener('click', (event) => {
    event.preventDefault()
    dropMenuArrow.classList.toggle('rotate-180')
    dropMenu.classList.toggle('max-h-popup')
})

function mobileMenu() {
    upLayer.classList.add('left-n100')
    downLayer.classList.add('opacity-100')
    arrowBack.classList.add('opacity-100')
}

arrowBack.addEventListener('click', () => {
    upLayer.classList.remove('left-n100')
    downLayer.classList.remove('opacity-100')
    arrowBack.classList.remove('opacity-100')
})