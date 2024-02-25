const cardsWrapper = document.querySelector('.cards__wrapper')

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

            cardsItemWrapper.forEach(block => {
                block.classList.add('flex-row')
                block.classList.add('justify-between')
            })

            cardsTop.forEach(block => {
                block.classList.add('flex-row')
                block.classList.add('flex-items-center')
                if (window.innerWidth > 1280) {
                    block.style.width = '65%'
                } else {
                    block.style.width = '85%'
                }
            })

            cardsTopInfo.forEach(block => block.classList.add('catalog_info__row'))

            cardsBottom.forEach(block => block.classList.add('catalog_bottom__row'))

            cardsBottomInfo.forEach(block => {
                block.classList.remove('catalog_bottom__info')
                block.classList.add('catalog_bottom__info-col')
            })
        } else {
            cardsWrapper.classList.remove('flex-col')

            cardsItemWrapper.forEach(block => {
                block.classList.remove('flex-row')
                block.classList.remove('justify-between')
            })

            cardsTop.forEach(block => {
                block.classList.remove('flex-row')
                block.classList.remove('flex-items-center')
                block.style.width = '100%'
            })

            cardsTopInfo.forEach(block => block.classList.remove('catalog_info__row'))

            cardsBottom.forEach(block => block.classList.remove('catalog_bottom__row'))

            cardsBottomInfo.forEach(block => {
                block.classList.add('catalog_bottom__info')
                block.classList.remove('catalog_bottom__info-col')
            })
        }
    } else return
}