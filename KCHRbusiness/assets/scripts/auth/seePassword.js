const authSeePassword = document.querySelectorAll('.input_eye')

authSeePassword.forEach((block) => {
    block.addEventListener('click', () => {
        const passwordInput = block.previousElementSibling

        if (passwordInput.getAttribute('type') === 'password') {
            passwordInput.setAttribute('type', 'text')
        } else {
            passwordInput.setAttribute('type', 'password')
        }
    })
})