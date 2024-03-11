const element = document.querySelector('.nav_sticky')

function addClassOnScroll() {
    const elementPosition = element.getBoundingClientRect().top

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop

    if (elementPosition <= scrollPosition) {
        element.classList.add('nav_sticky_wrap')
    } else {
        element.classList.remove('nav_sticky_wrap')
    }
}

window.addEventListener('scroll', addClassOnScroll)
document.addEventListener('DOMContentLoaded', addClassOnScroll)