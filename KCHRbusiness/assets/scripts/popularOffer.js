const popularNavItem = document.querySelectorAll('.carusel__item')
const caruselOfferBlocks = document.querySelectorAll('[data-block-offer]')

popularNavItem.forEach((el) => {
    el.addEventListener('click', () => {
        popularNavItem.forEach((item) => item.classList.remove('carusel__item-active'))

        el.classList.add('carusel__item-active')

        const selectBlock = document.querySelector(`[data-block-offer="${el.getAttribute('data-carusel-block')}"]`)

        caruselOfferBlocks.forEach((block) => {
            block.classList.add('d-none-imp')
        })

        selectBlock.classList.remove('d-none-imp')
    })
})