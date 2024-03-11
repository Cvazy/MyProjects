const cardsWrapper = document.querySelector('.cards__wrapper')
const excursionInfoParams = document.querySelectorAll('.excursion_info_params')
const ratingBlocks = document.querySelectorAll('.rating')
const catalogImages = document.querySelectorAll('.catalog_image img')
const catalogLinks = document.querySelectorAll('.btn_link_exc')
const cardsItemWrapper = document.querySelectorAll('.catalog_item__wrapper')
const cardsTop = document.querySelectorAll('.catalog_top')
const cardsBottom = document.querySelectorAll('.catalog_bottom')
const cardsTopInfo = document.querySelectorAll('.catalog_info')
const cardsBottomInfo = document.querySelectorAll('.catalog_bottom__info')

function changeMode(btn, anotherId) {
    if (!btn.classList.contains('active_state')) {
        const images = btn.querySelectorAll('img')
        const anotherImages = document.getElementById(`${anotherId}`).querySelectorAll('img')
        const activeMode = document.querySelector('.active_state')

        activeMode.classList.remove('active_state')
        btn.classList.add('active_state')

        images.forEach(img => img.classList.toggle('d-none'))

        anotherImages.forEach(img => img.classList.toggle('d-none'))

        if (anotherId === 'tableMode') {
            cardsWrapper.classList.add('flex-col')

            excursionInfoParams.forEach((el) => {
                if (window.innerWidth > 1440) {
                    el.classList.add('excursion_info_params__row')
                }
            })

            catalogLinks.forEach((link) => {
                link.classList.remove('d-none-imp')
            })

            ratingBlocks.forEach((el) => {
                const parentBlock = el.parentElement

                if (window.innerWidth > 1440) {
                    parentBlock.classList.remove('flex-col')
                    parentBlock.classList.remove('gap-4px')
                    parentBlock.classList.remove('flex-items-start')
                    parentBlock.classList.add('flex-items-center')
                    parentBlock.classList.add('gap-12px')
                }
            })

            catalogImages.forEach((img) => {
                img.classList.add('w-auto')
            })

            cardsItemWrapper.forEach(block => {
                block.classList.add('flex-row')
                block.classList.add('justify-between')
            })

            cardsTop.forEach(block => {
                block.classList.add('flex-row')
                block.classList.add('flex-items-center')
            })

            cardsTopInfo.forEach((block) => {
                block.classList.add('catalog_info__row')
            })

            cardsBottom.forEach((block) => {
                block.classList.add('bl-gray')
                block.classList.add('catalog_bottom__row')
            })

            cardsBottomInfo.forEach(block => {
                block.classList.remove('catalog_bottom__info')
                block.classList.add('catalog_bottom__info-col')
            })
        } else {
            cardsWrapper.classList.remove('flex-col')

            excursionInfoParams.forEach((el) => {
                el.classList.remove('excursion_info_params__row')
            })

            catalogLinks.forEach((link) => {
                link.classList.add('d-none-imp')
            })

            ratingBlocks.forEach((el) => {
                const parentBlock = el.parentElement

                if (window.innerWidth > 1440) {
                    parentBlock.classList.remove('flex-items-center')
                    parentBlock.classList.remove('gap-12px')
                    parentBlock.classList.add('flex-col')
                    parentBlock.classList.add('flex-items-start')
                    parentBlock.classList.add('gap-4px')
                }
            })

            catalogImages.forEach((img) => {
                img.classList.remove('w-auto')
            })

            cardsItemWrapper.forEach(block => {
                block.classList.remove('flex-row')
                block.classList.remove('justify-between')
            })

            cardsTop.forEach(block => {
                block.classList.remove('flex-row')
                block.classList.remove('flex-items-center')
            })

            cardsTopInfo.forEach((block) => {
                block.classList.remove('catalog_info__row')
            })

            cardsBottom.forEach((block) => {
                block.classList.remove('bl-gray')
                block.classList.remove('catalog_bottom__row')
            })

            cardsBottomInfo.forEach(block => {
                block.classList.add('catalog_bottom__info')
                block.classList.remove('catalog_bottom__info-col')
            })
        }
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 1440) {
        excursionInfoParams.forEach((el) => {
            el.classList.remove('excursion_info_params__row')
        })

        catalogImages.forEach((img) => {
            img.classList.remove('w-auto')
        })

        ratingBlocks.forEach((el) => {
            const parentBlock = el.parentElement

            parentBlock.classList.remove('flex-items-center')
            parentBlock.classList.remove('gap-12px')
            parentBlock.classList.add('flex-col')
            parentBlock.classList.add('flex-items-start')
            parentBlock.classList.add('gap-4px')
        })
    }
})