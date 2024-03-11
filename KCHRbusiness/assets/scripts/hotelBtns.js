const hotelBtns = document.querySelectorAll('.btn__hotel')
const hotelIconBlocks = document.querySelectorAll('.hotel_description_block')

const seeAllDescription = document.querySelectorAll('.all_text')
const hiddenAllDescription = document.querySelectorAll('.hidden_text')

const seeAllIcons = document.querySelectorAll('.see_all_icons')

seeAllIcons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault()
        const iconsBlock = btn.previousElementSibling
        const activeBlock = btn.getAttribute('data-block-choose').toLowerCase()

        if (!iconsBlock.classList.contains('max-h-icons')) {
            iconsBlock.classList.add('max-h-icons')
            btn.textContent = `Скрыть ${activeBlock}`
        } else {
            iconsBlock.classList.remove('max-h-icons')
            btn.textContent = `Показать все ${activeBlock}`
        }
    })
})

hotelBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        hotelIconBlocks.forEach((block) => {
            block.classList.add('d-none-imp')
        })

        const activeBlock = document.querySelector(`[data-description-block='${btn.getAttribute('data-block-btn')}']`)

        activeBlock.classList.remove('d-none-imp')

        hotelBtns.forEach((el) => {
            el.classList.add('bg-none')
        })

        btn.classList.remove('bg-none')
    })
})

seeAllDescription.forEach((btn) => {
    btn.addEventListener('click', () => {
        const hotelBlockDesc = btn.nextElementSibling
        const hiddenBtn = hotelBlockDesc.nextElementSibling

        hotelBlockDesc.classList.add('visible_desc')
        hotelBlockDesc.classList.add('max-h-popup')
        btn.classList.add('d-none-imp')
        hiddenBtn.classList.remove('d-none-imp')
    })
})

hiddenAllDescription.forEach((btn) => {
    btn.addEventListener('click', () => {
        const hotelBlockDesc = btn.previousElementSibling
        const seeBtn = hotelBlockDesc.previousElementSibling

        hotelBlockDesc.classList.remove('visible_desc')
        hotelBlockDesc.classList.remove('max-h-popup')
        btn.classList.add('d-none-imp')
        seeBtn.classList.remove('d-none-imp')
    })
})