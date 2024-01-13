const minBy = document.getElementById('minBy')
const minTo = document.getElementById('minTo')
const inputBy = document.querySelector('[name="money_by"]')
const inputTo = document.querySelector('[name="money_to"]')
const questions = document.querySelectorAll('.question__wrapper')

inputBy.addEventListener('input', () => {
    if (inputBy.value < minBy.innerText && inputBy.value !== '') {
        inputBy.value = minBy.innerText
    }

    inputTo.value = (minTo.innerText * inputBy.value).toString().slice(0, 10)
})

inputTo.addEventListener('input', () => {
    if (inputTo.value < minTo.innerText && inputTo.value !== '') {
        inputTo.value = minTo.innerText
    }

    inputBy.value = inputTo.value / minTo.innerText
})

questions.forEach((que) => {
    que.addEventListener('click', () => {
        que.nextElementSibling.classList.toggle('answer__active')
    })
})