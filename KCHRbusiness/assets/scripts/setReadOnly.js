document.addEventListener('DOMContentLoaded', () => {
    const testInputs = document.querySelectorAll('.readonly_search')

    testInputs.forEach((inp) => {
        if (window.innerWidth < 1280) {
            inp.setAttribute('readonly', 'true')
        } else {
            inp.removeAttribute('readonly')
        }
    })
})

window.addEventListener('resize', () => {
    const testInputs = document.querySelectorAll('.readonly_search')

    testInputs.forEach((inp) => {
        if (window.innerWidth < 1280) {
            inp.setAttribute('readonly', 'true')
        } else {
            inp.removeAttribute('readonly')
        }
    })
})