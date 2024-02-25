const inputsPhone = document.querySelectorAll('.phone_code .code_input__numbers-item')
const inputsEmail = document.querySelectorAll('.email_code .code_input__numbers-item')

function inputFocus(inputs) {
    inputs.forEach((el) => {
        el.addEventListener('focus', () => {
            el.classList.add('code_input__active')
        })

        el.addEventListener('blur', () => {
            el.classList.remove('code_input__active')
        })
    })
}

function inputCode(inputs) {
    inputs.forEach((input, index) => {
        input.addEventListener('input', function() {
            if (this.value.length >= 1 && index < inputs.length - 1) {
                inputs[index + 1].focus()
                inputs[index].classList.remove('code_input__active')
                inputs[index + 1].classList.add('code_input__active')
            }
        })

        input.addEventListener('keydown', function(event) {
            if (event.key === 'Backspace' && index > 0 && this.value.length === 0) {
                inputs[index - 1].focus()
                inputs[index].classList.remove('code_input__active')
                inputs[index - 1].classList.add('code_input__active')
            }
        })
    })
}

inputFocus(inputsPhone)
inputFocus(inputsEmail)

inputCode(inputsPhone)
inputCode(inputsEmail)