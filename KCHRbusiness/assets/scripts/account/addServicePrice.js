function seeFoodPrice(foodType) {
    const priceBreakfastSelectors = document.querySelectorAll(`[data-type-service="${foodType}"]`)

    priceBreakfastSelectors.forEach((el) => {
        el.addEventListener('click', () => {
            const foodAction = el.getAttribute('data-action-service')
            const needPriceBlocks = document.querySelectorAll(`[data-block-service="${foodType}"]`)

            if (foodAction !== 'no_price') {
                needPriceBlocks.forEach((block) => {
                    const blockInput = block.querySelector('input')

                    block.classList.remove('d-none-imp')
                    blockInput.setAttribute('data-input-required', 'required')
                })
            } else {
                needPriceBlocks.forEach((block) => {
                    const blockInput = block.querySelector('input')

                    block.classList.add('d-none-imp')
                    blockInput.removeAttribute('data-input-required')
                })
            }
        })
    })
}

//Питание
seeFoodPrice('breakfast')
seeFoodPrice('lunch')
seeFoodPrice('dinner')

//Трансфер
seeFoodPrice('from_train')
seeFoodPrice('to_train')
seeFoodPrice('from_plane')
seeFoodPrice('to_plane')
seeFoodPrice('bicycle_rental')
seeFoodPrice('parking')

//Услуги
seeFoodPrice('org_reg')
seeFoodPrice('document')
seeFoodPrice('change_linen')
seeFoodPrice('guide')
seeFoodPrice('animator')
seeFoodPrice('washing_machine')
seeFoodPrice('sauna')

//Категория номера
seeFoodPrice('room_category')

//Бесплатная отмена бронирования
seeFoodPrice('free_cancellation')