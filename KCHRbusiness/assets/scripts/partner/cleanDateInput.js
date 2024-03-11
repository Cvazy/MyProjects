const cleanDateInputs = document.querySelectorAll('.cleanDateInput')

cleanDateInputs.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.previousElementSibling.value = ''
    })
})