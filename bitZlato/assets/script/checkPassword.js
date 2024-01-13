const numCheck = document.querySelector('.num_check')
const smallCheck = document.querySelector('.small_check')
const largeCheck = document.querySelector('.large_check')
const lenCheck = document.querySelector('.len_check')

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'

inputPassword.addEventListener('input', () => {
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasNumber = false;

    for (let char of alphabet) {
        if (inputPassword.value.includes(char)) {
            hasLowerCase = true;
            break;
        }
    }

    for (let char of alphabet) {
        if (inputPassword.value.includes(char.toUpperCase())) {
            hasUpperCase = true;
            break;
        }
    }

    for (let num of numbers) {
        if (inputPassword.value.includes(num)) {
            hasNumber = true;
            break;
        }
    }

    smallCheck.querySelector('.password__checker img').style.display = hasLowerCase ? 'block' : 'none';
    largeCheck.querySelector('.password__checker img').style.display = hasUpperCase ? 'block' : 'none';
    numCheck.querySelector('.password__checker img').style.display = hasNumber ? 'block' : 'none';

    if (inputPassword.value.length >= 10) {
        lenCheck.querySelector('.password__checker img').style.display = 'block'
    } else {
        lenCheck.querySelector('.password__checker img').style.display = 'none'
    }
})