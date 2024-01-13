const optionOne = document.querySelector('[name="optionOne"]')
const optionTwo = document.querySelector('[name="optionTwo"]')
const qntPeoples = document.querySelector('[name="persons"]')
const inputPrice = document.querySelector('[name="guide_id"]')
const cost = document.getElementById('cost')

optionOne.addEventListener('change', function () {
    if (this.checked) {
        optionOne.value = '1'

        cost.textContent = (Number(cost.textContent) + 1000 * Number(qntPeoples.value)).toString()
    } else {
        optionOne.value = '0'

        cost.textContent = (Number(cost.textContent) - 1000 * Number(qntPeoples.value)).toString()
    }

    inputPrice.value = cost.textContent
})

qntPeoples.addEventListener('input', () => {
    if (qntPeoples.value > 10) {
        optionTwo.setAttribute('disabled', 'disabled')
    } else {
        optionTwo.removeAttribute('disabled')
    }
})

optionTwo.addEventListener('change', function () {
    if (this.checked) {
        optionTwo.value = '1'

        if (qntPeoples.value < 5) {
            cost.textContent = Math.ceil(Number(cost.textContent) * 1.15).toString()
        } else {
            cost.textContent = Math.ceil(Number(cost.textContent) * 1.25).toString()
        }
    } else {
        optionTwo.value = '0'

        if (qntPeoples.value < 5) {
            cost.textContent = Math.ceil(Number(cost.textContent) / 1.15).toString()
        } else {
            cost.textContent = (Number(cost.textContent) / 1.25).toString()
        }
    }

    inputPrice.value = cost.textContent
})
