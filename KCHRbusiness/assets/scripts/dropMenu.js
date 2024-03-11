const dropExcursionBtn = document.getElementById('excursions')
const dropExcursionsMenu = document.getElementById('dropExcursionsMenu')
const dropExcursionsArrow = document.getElementById('dropExcursionsArrow')

const dropEmojiBtn = document.getElementById('emojiList')
const dropEmojiMenu = document.getElementById('dropEmojiMenu')
const dropEmojiArrow = document.getElementById('dropEmojiArrow')

const upLayer = document.querySelector('.up-layer')
const downLayer = document.querySelector('.under_mobile_nav')

const downEmojiLayer = document.querySelector('.under_emoji')

const arrowBack = document.querySelector('.back_arrow')

function dropMenuToggle(btn, menu, arrow) {
    btn.addEventListener('click', (event) => {
        event.preventDefault()
        arrow.classList.toggle('rotate-180')
        menu.classList.toggle('max-h-popup')
    })
}

dropMenuToggle(dropExcursionBtn, dropExcursionsMenu, dropExcursionsArrow)
dropMenuToggle(dropEmojiBtn, dropEmojiMenu, dropEmojiArrow)

function mobileExcursionMenu() {
    upLayer.classList.add('left-n100')
    downLayer.classList.add('opacity-100')
    downEmojiLayer.classList.remove('opacity-100')
    arrowBack.classList.add('opacity-100')
}

function mobileEmojiMenu() {
    upLayer.classList.add('left-n100')
    downEmojiLayer.classList.add('opacity-100')
    downLayer.classList.remove('opacity-100')
    arrowBack.classList.add('opacity-100')
}

arrowBack.addEventListener('click', () => {
    upLayer.classList.remove('left-n100')
    downLayer.classList.remove('opacity-100')
    downEmojiLayer.classList.remove('opacity-100')
    arrowBack.classList.remove('opacity-100')
})