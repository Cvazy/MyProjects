const authForm = document.querySelector('.auth_contain__form')
const allInputs = authForm.querySelectorAll('input')

authForm.addEventListener('submit', (event) => {
    let counter = 0

    allInputs.forEach((el) => {
        if (el.value === '' || el.classList.contains('error')) {
            el.classList.add('error')
            counter++
        }
    })

    if (repeatPasswordInput.value !== passwordInput.value) {
        counter++
        passwordInput.classList.add('error')
        repeatPasswordInput.classList.add('error')
        passwordErrorBlock.textContent = 'The entered passwords must match'
    }

    if (counter) {
        event.preventDefault()
        console.log('Error')
    }
})

allInputs.forEach((el) => {
    const inputType = el.getAttribute('type')

    if (inputType !== 'email' && inputType !== 'password') {
        el.addEventListener('input', () => {
            el.classList.remove('error')
        })
    }
})