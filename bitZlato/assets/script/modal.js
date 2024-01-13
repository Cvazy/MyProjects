const modalBtn = document.getElementById('openModal')
const modalWindow = document.querySelector('.modal__wrapper')
const modalClose = document.querySelector('.details-close')

modalBtn.addEventListener('click', () => {
    modalWindow.classList.remove('hidden')
})

modalClose.addEventListener('click', () => {
    modalWindow.classList.add('hidden')
})