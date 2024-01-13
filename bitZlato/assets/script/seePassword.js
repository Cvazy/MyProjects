const inputPassword = document.querySelector('[name="password"]')
const eyePassword = document.querySelector('.eye')

eyePassword.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
        inputPassword.type = 'text'
    } else {
        inputPassword.type = 'password'
    }
})