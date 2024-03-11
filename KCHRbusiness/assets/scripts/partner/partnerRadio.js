const partnerRadioList = document.querySelectorAll('.partner_radio')
const partnerTypes = document.querySelectorAll('.partner_type')

partnerRadioList.forEach((radio) => {
    radio.addEventListener('change', () => {
        if (radio.checked) {
            partnerTypes.forEach((block) => {
                block.classList.add('d-none-imp')
            })

            partnerRadioList.forEach((el) => {
                el.checked = false
                el.nextElementSibling.classList.remove('radio_active')
            })

            const radioData = radio.getAttribute('data-partner-type')
            const activeBlock = document.querySelector(`[data-partner-list="${radioData}"]`)

            radio.checked = true
            radio.nextElementSibling.classList.add('radio_active')
            activeBlock.classList.remove('d-none-imp')
        }
    })
})