const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.add('scroll-shadow')
    if (window.scrollY === 0) header.classList.remove('scroll-shadow')
})