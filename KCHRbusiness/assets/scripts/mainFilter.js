const popUpFilters = document.querySelectorAll('.filters_full')

const resetFilterBtns = document.querySelectorAll('.reset_filter')
const allCheckbox = document.querySelectorAll('input[type="checkbox"]')

const allFilters = document.querySelectorAll('form')

allFilters.forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        popUpFilters.forEach((block) => {
            block.classList.remove('max-h-2vh')
        })
    })
})

resetFilterBtns.forEach((el) => {
    el.addEventListener('click', () => {
        allCheckbox.forEach((checkbox) => {
            checkbox.checked = false
        })
    })
})