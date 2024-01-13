const burgerBtn = document.querySelector('.burger')
const mobNav = document.querySelector('.mob-nav')
const wrapBlock = document.querySelector('.wrap')

const chat = document.querySelector('.chat')
const chatBlock = document.querySelector('.trade__nav-right')

burgerBtn.addEventListener('click', () => {
    mobNav.classList.toggle('block')
    wrapBlock.classList.toggle('blur')
})

chatBlock.addEventListener('click', () => {
    chat.classList.toggle('block__open')
    chatBlock.querySelector('.sidebar__arrow').classList.toggle('rotate-180')
})

chat.addEventListener('click', (event) => {
    chat.classList.remove('block__open')
    chatBlock.querySelector('.sidebar__arrow').classList.remove('rotate-180')
})

window.addEventListener('resize', () => {
    if (window.innerWidth < 850) {
        chat.classList.remove('block__open')
    }
    else {
        chat.classList.add('block__open')
    }
})

if (window.innerWidth < 850) {
    chat.classList.remove('block__open')
}
else {
    chat.classList.add('block__open')
}