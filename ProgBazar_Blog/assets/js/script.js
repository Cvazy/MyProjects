const buttons = document.querySelectorAll('.btn')
const swiperBlocks = document.querySelectorAll('.mainSwiper')
const viewStyleBtn = document.querySelectorAll('.show-button svg')

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        viewStyleBtn.forEach((b) => {
            if (b.getAttribute('data-view') === 'list') {
                b.classList.remove('active')
            } else {
                b.classList.add('active')
            }
        })

        buttons.forEach((el) => el.classList.remove('btn_active'))

        btn.classList.add('btn_active')
        let action = btn.getAttribute('data-action')

        swiperBlocks.forEach((block) => {
            block.classList.add('pt-0')
            block.classList.add('hidden')
        })

        swiperBlocks.forEach((block) => {
            if (block.getAttribute('data-block') === action && block.getAttribute('data-style') !== 'list') {
                block.classList.remove('hidden');
                block.classList.remove('pt-0');
                block.querySelector('.swiper-wrapper').classList.add('justify-center')
            }
        })
    })
})