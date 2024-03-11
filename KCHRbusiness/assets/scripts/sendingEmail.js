const sendingForm = document.querySelector('.subscribe')
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError')

sendingForm.addEventListener('submit', (event) => {
    if (emailInput.value === '') {
        emailInput.classList.add('error')
        emailError.textContent = 'Поле email не может быть пустым'
    }

    event.preventDefault()
});

emailInput.addEventListener('input', function() {
    const email = emailInput.value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email === '') {
        emailInput.classList.add('error')
        emailError.textContent = 'Поле email не может быть пустым'
    } else if (!emailRegex.test(email)) {
        emailInput.classList.add('error')
        emailError.textContent = 'Пожалуйста, введите корректный email адрес';
    } else {
        emailInput.classList.remove('error')
        emailError.textContent = ''
    }
});