const numberInput = document.querySelectorAll('.select_price')

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

numberInput.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
        let newValue = inputElement.value.trim().replace(/\s/g, '')
        newValue = newValue.replace(/\D/g, '')
        inputElement.value = formatNumber(newValue)
    });

    inputElement.addEventListener('keypress', (event) => {
        const keyCode = event.keyCode || event.which
        const keyValue = String.fromCharCode(keyCode)
        const numericRegex = /^[0-9]*$/

        if (!numericRegex.test(keyValue)) {
            event.preventDefault()
        }
    })
})


