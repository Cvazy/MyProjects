const inputSelects = document.querySelectorAll('.input-select')
const summaryTitle = document.querySelectorAll('.summary__title')
const inputCheckBox = document.querySelector('.advert-check')
const accountDetails = document.querySelector('#account-details')

inputSelects.forEach((el) => {
    const ulInput = el.querySelector('.select_options__list')
    const inputValue = el.querySelector('.select_options')
    const inputArrow = el.querySelector('.select_arrow')

    inputValue.addEventListener('keydown', function(event) {
        event.preventDefault()
    })

    el.addEventListener('click', () => {
        ulInput.classList.toggle('block__open-200')
        inputValue.classList.toggle('select_options__focus')
        inputArrow.classList.toggle('rotate-180')
    })

    ulInput.querySelectorAll('li').forEach((item) => {
        item.addEventListener('click', (e) => {
            e.stopPropagation()
            inputValue.value = item.innerText
            inputValue.classList.remove('input__disabled')
            ulInput.classList.remove('block__open-200')
            inputArrow.classList.remove('rotate-180')
            inputValue.classList.remove('select_options__focus')
        })
    })
})

inputCheckBox.addEventListener('click', () => {
    accountDetails.classList.toggle('hidden')
})

summaryTitle.forEach((block) => {
    block.addEventListener('click', () => {
        block.nextElementSibling.classList.toggle('block__open-p')
    })
})