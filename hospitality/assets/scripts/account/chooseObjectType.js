const allRadioType = document.querySelectorAll('.create_obj__type-item')

allRadioType.forEach((block) => {
    const radioType = block.querySelector('input')

    radioType.addEventListener('change', () => {
        if (radioType.checked) {
            allRadioType.forEach((el) => {
                el.classList.remove('active_radio_type')
                el.querySelector('input').checked = false
            })

            radioType.checked = true
            block.classList.add('active_radio_type')
        }
    })
})