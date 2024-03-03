const passwordInput = document.querySelector('[name="password"]')
const repeatPasswordInput = document.querySelector('[name="password_repeat"]')
const passwordErrorBlock = repeatPasswordInput.nextElementSibling

function passwordComparison(input) {
    input.addEventListener('input', () => {
        if (repeatPasswordInput.value !== passwordInput.value) {
            repeatPasswordInput.classList.add('error')
            passwordErrorBlock.textContent = 'The entered passwords must match'
            passwordErrorBlock.classList.remove('m-0-imp')
        } else {
            passwordInput.classList.remove('error')
            repeatPasswordInput.classList.remove('error')
            passwordErrorBlock.textContent = ''
            passwordErrorBlock.classList.add('m-0-imp')
        }
    })
}

passwordComparison(passwordInput)
passwordComparison(repeatPasswordInput)