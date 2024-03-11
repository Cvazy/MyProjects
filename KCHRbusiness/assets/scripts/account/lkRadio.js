const radioBlocks = document.querySelectorAll('.lk_form_radio')

radioBlocks.forEach((block) => {
    const blockRadioInputs = block.querySelectorAll('[type="radio"]')
    const blockRadioLabels = block.querySelectorAll('label')

    blockRadioInputs.forEach((input) => {
        input.addEventListener('change', () => {
            if (input.checked) {
                blockRadioInputs.forEach((el) => {
                    el.checked = false
                })

                blockRadioLabels.forEach((label) => {
                    label.classList.remove('radio_active')
                })

                input.checked = true
                input.nextElementSibling.classList.add('radio_active')
            }
        })
    })
})