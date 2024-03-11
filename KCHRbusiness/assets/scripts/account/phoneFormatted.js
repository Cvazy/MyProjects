const phoneInputs = document.querySelectorAll('.phone_number')

phoneInputs.forEach((input) => {
    input.addEventListener('input', function(event) {
        input.value = formatPhoneNumber(event.target.value)
    })
})

function formatPhoneNumber(inputNumber) {
    return  new libphonenumber.AsYouType('RU').input(inputNumber)
}