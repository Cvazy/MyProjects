const optionOne = document.querySelector('input[name="optionOne"]')
const optionTwo = document.querySelector('input[name="optionTwo"]')
const qntPeoples = document.querySelector('input[name="qntPeoples"]')
const cost = document.getElementById('cost')

optionOne.addEventListener('change', function () {
    if (this.checked) {
        cost.textContent = (Number(cost.textContent) + 1000 * Number(qntPeoples.value)).toString()
    } else {
        cost.textContent = (Number(cost.textContent) - 1000 * Number(qntPeoples.value)).toString()
    }
})

qntPeoples.addEventListener('input', () => {
    if (qntPeoples.value > 10) {
        optionTwo.setAttribute('disabled', 'disabled')
    }
})

optionTwo.addEventListener('change', function () {
    if (this.checked) {
        if (qntPeoples.value < 5) {
            cost.textContent = (Number(cost.textContent) * 1.15).toString()
        } else {
            cost.textContent = (Number(cost.textContent) * 1.25).toString()
        }
    } else {
        if (qntPeoples.value < 5) {
            cost.textContent = (Number(cost.textContent) / 1.15).toString()
        } else {
            cost.textContent = (Number(cost.textContent) / 1.25).toString()
        }
    }
})
