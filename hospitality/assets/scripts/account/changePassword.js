const newPasswordInput = document.getElementById('newPassword')
const newPasswordRepeatInput = document.getElementById('newPasswordRepeat')
const newPasswordRepeatError = document.getElementById('newPasswordRepeatError')
const newPasswordError = document.querySelector('.new_password_error')
const checkPasswordText = document.getElementById('checkPasswordText')
const checkPasswordLines = document.querySelectorAll('.new_password_error__line')
const submitNewPassword = document.getElementById('submitNewPassword')

newPasswordRepeatInput.addEventListener('input', (event) => {
    if (event.target.value !== newPasswordInput.value) {
        newPasswordInput.classList.add('error')
        newPasswordRepeatInput.classList.add('error')
        newPasswordRepeatError.classList.add('max-h-icons')
        newPasswordRepeatError.classList.add('text-red')
        newPasswordRepeatError.textContent = 'Пароли не совпадают'
        submitNewPassword.disabled = true
    } else {
        newPasswordInput.classList.remove('error')
        newPasswordRepeatInput.classList.remove('error')
        newPasswordRepeatError.classList.remove('text-red')
        newPasswordRepeatError.classList.add('text-green')
        newPasswordRepeatError.textContent = 'Пароли совпадают'
        submitNewPassword.disabled = false
    }
})

newPasswordInput.addEventListener('input', (event) => {
    const password = event.target.value

    if (password) {
        checkNewPassword(password)
        newPasswordError.classList.add('max-h-icons')
    } else {
        newPasswordError.classList.remove('max-h-icons')
    }

    if (newPasswordRepeatInput.value) {
        if (newPasswordRepeatInput.value !== password) {
            newPasswordInput.classList.add('error')
            newPasswordRepeatInput.classList.add('error')
            newPasswordRepeatError.classList.add('max-h-icons')
            newPasswordRepeatError.classList.add('text-red')
            newPasswordRepeatError.textContent = 'Пароли не совпадают'
        }
    }
})

function checkNewPassword(inputValue) {
    const specialCharactersRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
    let checkCounter = 0

    if (inputValue.length > 8) {
        checkCounter++
        console.log('Условие 1')
    }

    if (/[a-z]/.test(inputValue)) {
        checkCounter++
        console.log('Условие 2')
    }

    if (/[A-Z]/.test(inputValue)) {
        checkCounter++
        console.log('Условие 3')
    }

    if (/\d/.test(inputValue)) {
        checkCounter++
        console.log('Условие 4')
    }

    if (specialCharactersRegex.test(inputValue)) {
        checkCounter++
        console.log('Условие 5')
    }

    console.log(inputValue)

    if (checkCounter <= 2) {
        setCheckText('Слабая', 'red')
        removeBgLines()
        setBgLine('red', 1)
        submitNewPassword.disabled = true
    } else if (checkCounter === 3) {
        setCheckText('Средняя', 'orange')
        removeBgLines()
        setBgLine('orange', 2)
        submitNewPassword.disabled = true
    } else if (checkCounter === 4) {
        setCheckText('Хорошая', 'yellow')
        removeBgLines()
        setBgLine('yellow', 3)
        submitNewPassword.disabled = false
    } else if (checkCounter === 5) {
        setCheckText('Сильная', 'green')
        removeBgLines()
        setBgLine('green', 4)
        submitNewPassword.disabled = false
    }
}

function removeBgLines() {
    checkPasswordLines.forEach((el) => {
        el.classList.remove('line_green')
        el.classList.remove('line_yellow')
        el.classList.remove('line_orange')
        el.classList.remove('line_red')
    })
}

function setBgLine(color, qnt) {
    for (let i = 0; i < qnt; i++) {
        checkPasswordLines[i].classList.add(`line_${color}`)
    }
}

function setCheckText(text, color) {
    checkPasswordText.textContent = `${text}`
    checkPasswordText.removeAttribute('class')
    checkPasswordText.setAttribute('class', `text-${color}`)

}