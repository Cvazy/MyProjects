const openOptions = document.querySelectorAll('.selling__img')
const sellingOptions = document.querySelector('.selling__options')
const optionsBtns = sellingOptions.querySelectorAll('button')

openOptions.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault()
        btn.nextElementSibling.classList.toggle('options_hidden')
    })
})

optionsBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault()
    })
})

