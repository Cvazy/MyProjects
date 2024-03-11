const allInput = document.querySelectorAll('input')
const allTextArea = document.querySelectorAll('textarea')

function validateTextInput(event) {
    const inputValue = event.target.value

    const regex = /^[a-zA-Zа-яА-Я]*$/

    if (!regex.test(inputValue)) {
        event.target.value = inputValue.slice(0, -1)
    }
}

allInput.forEach((el) => {
    el.addEventListener('input', () => {
        el.classList.remove('error')
    })
})

if (allTextArea) {
    allTextArea.forEach((el) => {
        el.addEventListener('input', () => {
            el.classList.remove('error')
        })
    })
}
