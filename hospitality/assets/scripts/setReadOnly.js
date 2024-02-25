document.addEventListener('DOMContentLoaded', () => {
    const testInput = document.querySelector('.readonly_search')

    if (window.innerWidth < 980) {
        testInput.setAttribute('readonly', true)
    } else {
        testInput.removeAttribute('readonly')
    }
})

window.addEventListener('resize', () => {
    const testInput = document.querySelector('.readonly_search')

    if (window.innerWidth < 980) {
        testInput.setAttribute('readonly', true)
    } else {
        testInput.removeAttribute('readonly')
    }
})