const allRadioType = document.querySelectorAll('.create_obj__type-item')

const otherTypeText = document.querySelector('.other_type input[type="text"]')
const otherTypeRadio = document.querySelector('.other_type input[type="radio"]')

allRadioType.forEach((block) => {
    const radioType = block.querySelector('input')

    radioType.addEventListener('change', () => {
        if (radioType.checked) {
            allRadioType.forEach((el) => {
                el.classList.remove('active_radio_type')
                el.querySelector('input').checked = false
            })

            otherTypeText.removeAttribute('data-input-required')

            radioType.checked = true
            block.classList.add('active_radio_type')

            if (radioType.getAttribute('id') === 'other') {
                otherTypeText.setAttribute('data-input-required', 'required')
            }
        }
    })
})