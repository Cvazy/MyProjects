const allergyCheckbox = document.getElementById('allergy_check')
const allergyText = document.getElementById('allergyText')

allergyCheckbox.addEventListener('change', () => {
    if (allergyCheckbox.checked) {
        allergyText.classList.remove('d-none-imp')

        setTimeout(() => {
            allergyText.classList.add('form_input_visible')
        }, 1)
    } else {
        allergyText.classList.remove('form_input_visible')

        setTimeout(() => {
            allergyText.classList.add('d-none-imp')
        }, 1)
    }
})