document.addEventListener('DOMContentLoaded', function() {
    const priceByInput = document.querySelector('[name="price_by"]')
    const priceToInput = document.querySelector('[name="price_to"]')

    const priceByInputPopUp = document.querySelector('[name="price_by_popup"]')
    const priceToInputPopUp = document.querySelector('[name="price_to_popup"]')

    const priceByInputMobile = document.querySelector('[name="price_by_mobile"]')
    const priceToInputMobile = document.querySelector('[name="price_to_mobile"]')

    function checkPriceInput(priceByInput, priceToInput) {
        priceByInput.addEventListener("input", function() {
            const priceByValue = parseInt(priceByInput.value.trim().replace(/\s/g, ''))
            const priceToValue = parseInt(priceToInput.value.trim().replace(/\s/g, ''))

            if (priceByValue > priceToValue) {
                priceByInput.value = formatNumber(priceToValue)
            }
        })

        priceToInput.addEventListener("input", function() {
            const priceByValue = parseInt(priceByInput.value.trim().replace(/\s/g, ''))
            const priceToValue = parseInt(priceToInput.value.trim().replace(/\s/g, ''))

            if (priceToValue < priceByValue) {
                priceToInput.value = formatNumber(priceByValue)
            }
        })
    }

    checkPriceInput(priceByInput, priceToInput)
    checkPriceInput(priceByInputPopUp, priceToInputPopUp)
    checkPriceInput(priceByInputMobile, priceToInputMobile)
})