const excRadioBlocks = document.querySelectorAll('.exc_type_radio')
const periodBlock = document.getElementById('periodBlock')
const fixDateBlock = document.getElementById('fixDateBlock')
const scheduleBlock = document.getElementById('scheduleBlock')

excRadioBlocks.forEach((el) => {
    const blockRadioInputs = el.querySelector('[type="radio"]')

    blockRadioInputs.addEventListener('change', () => {
        if (blockRadioInputs.checked) {
            excRadioBlocks.forEach((el) => {
                el.querySelector('input').checked = false
            })

            excRadioBlocks.forEach((el) => {
                el.querySelector('label').classList.remove('radio_active')
            })

            blockRadioInputs.checked = true
            blockRadioInputs.nextElementSibling.classList.add('radio_active')

            if (blockRadioInputs.id === 'exc_group') {
                periodBlock.classList.add('d-none-imp')
                scheduleBlock.classList.add('d-none-imp')
                fixDateBlock.classList.remove('d-none-imp')
            } else {
                fixDateBlock.classList.add('d-none-imp')
                periodBlock.classList.remove('d-none-imp')
                scheduleBlock.classList.remove('d-none-imp')
            }
        }
    })
})