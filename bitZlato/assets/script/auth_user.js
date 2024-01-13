const profileBlock = document.querySelector('.auth__item')
const profileList = document.querySelector('.profile')
const closeProfile = document.querySelector('.close-profile')

const bell = document.getElementById('bell')
const bellsBlock = document.querySelector('.bells')

profileBlock.addEventListener('click', () => {
    profileList.classList.toggle('block__open')

    if (window.screen.width < 600) {
        wrapBlock.classList.toggle('blur')
    }
})

closeProfile.addEventListener('click', () => {
    profileList.classList.remove('block__open')
    wrapBlock.classList.remove('blur')
})

bell.addEventListener('click', () => {
    bellsBlock.classList.toggle('hidden')
})