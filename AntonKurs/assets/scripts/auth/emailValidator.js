const emailInputsList = document.querySelectorAll('input[type="email"]')

emailInputsList.forEach((input) => {
    input.addEventListener('input', function() {
        const emailInputError = input.nextElementSibling

        const email = input.value.trim()
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (email === '') {
            input.classList.add('error')
            emailInputError.textContent = 'The email field cannot be empty'
            emailInputError.classList.remove('m-0-imp')
        } else if (!emailRegex.test(email)) {
            input.classList.add('error')
            emailInputError.textContent = 'Please enter a valid email address';
            emailInputError.classList.remove('m-0-imp')
        } else {
            input.classList.remove('error')
            emailInputError.textContent = ''
            emailInputError.classList.add('m-0-imp')
        }
    })
})