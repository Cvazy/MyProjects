const popularNavItem = document.querySelectorAll('.carusel__item')
const caruselOfferBlocks = document.querySelectorAll('[data-block-offer]')

popularNavItem.forEach((el) => {
    el.addEventListener('click', () => {
        popularNavItem.forEach((item) => item.classList.remove('carusel__item-active'))

        el.classList.add('carusel__item-active')

        const selectBlock = document.querySelector(`[data-block-offer=${el.getAttribute('data-carusel-block')}]`)

        caruselOfferBlocks.forEach((block) => {
            block.classList.add('d-none-imp')
            deleteSwiper(block)
        })

        selectBlock.classList.remove('d-none-imp')

        if (selectBlock.querySelectorAll('.d-none-imp').length) {
            loadingMoreBtn.classList.remove('d-none-imp')
        }

        if (window.innerWidth < 1280) {
            initSwiper(selectBlock)

            new Swiper(".main-popular", {
                slidesPerView: 1,
                spaceBetween: 0,
                freeMode: true,

                breakpoints: {
                    600: {
                        slidesPerView: 2,
                    },
                }
            })
        }
    })
})