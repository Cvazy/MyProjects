const modalAuthForms = document.querySelectorAll('.modal_auth_form')

function authFormValid(forms) {
    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            const allInput = form.querySelectorAll('input')
            const emailInput = form.querySelector('input[type="email"]');
            const emailError = form.querySelector('.errorHold')

            if (emailInput.value === '') {
                emailInput.classList.add('error')
                emailError.textContent = 'Поле email не может быть пустым'
                emailError.classList.add('m-0-imp')
            }

            allInput.forEach((input) => {
                if (input.value === '') {
                    input.classList.add('error')
                }
            })

            event.preventDefault()
        });
    })
}

authFormValid(modalAuthForms)