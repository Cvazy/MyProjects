const authSeePassword = document.querySelectorAll('.see_password')
const authHiddenPassword = document.querySelectorAll('.hidden_password')

authSeePassword.forEach((block) => {
    block.addEventListener('click', () => {
        const hiddenPassword = block.nextElementSibling
        const passwordInput = block.previousElementSibling

        passwordInput.setAttribute('type', 'text')
        block.classList.add('d-none-imp')
        hiddenPassword.classList.remove('d-none-imp')
    })
})

authHiddenPassword.forEach((block) => {
    block.addEventListener('click', () => {
        const seePassword = block.previousElementSibling
        const passwordInput = seePassword.previousElementSibling

        passwordInput.setAttribute('type', 'password')
        block.classList.add('d-none-imp')
        seePassword.classList.remove('d-none-imp')
    })
})