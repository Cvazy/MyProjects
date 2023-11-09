const firstNumber = document.getElementById('firstNumber')
const secondNumber = document.getElementById('secondNumber')
const result = document.getElementById('result')

const btnAll = document.querySelectorAll('.btn')

const resultBtn = document.querySelector('.submit-btn')
const blockResult = document.querySelector('.result-block')
const hiddenResult = document.querySelector('.result-hidden')

function doAction(btnClick) {
    const action =  {
        plus: Number(firstNumber.value) + Number(secondNumber.value),
        minus: Number(firstNumber.value) - Number(secondNumber.value),
        multiply: Number(firstNumber.value) * Number(secondNumber.value),
        share: Number(firstNumber.value) / Number(secondNumber.value),
    }

    btnAll.forEach((btn) => btn.classList.remove('btn_active'))
    btnClick.classList.add('btn_active')
    blockResult.classList.add('disable')

    resultBtn.addEventListener('click', () => {
        if (firstNumber.value.length === 0 || secondNumber.value.length === 0) alert('Enter all numbers')
        else {
            blockResult.classList.remove('disable')
            result.innerText = action[btnClick.dataset.action]
        }
    })
}

resultBtn.addEventListener('click', () => {
    if (firstNumber.value.length === 0 || secondNumber.value.length === 0) alert('Enter all numbers')
})

hiddenResult.addEventListener('click', () => {
    blockResult.classList.add('disable')
})