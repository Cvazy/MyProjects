const numberInputs = document.querySelectorAll('input[type="number"]')

numberInputs.forEach((el) => {
    el.addEventListener('input', function(event) {
        const inputValue = event.target.value

        if (inputValue < 1) {
            event.target.value = 1
        }
    });
})
