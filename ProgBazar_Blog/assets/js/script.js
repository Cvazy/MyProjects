const buttons = document.querySelectorAll('.btn')
const swiperBlocks = document.querySelectorAll('.swiper')

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        buttons.forEach((el) => el.classList.remove('btn_active'))

        btn.classList.add('btn_active')
        let action = btn.getAttribute('data-action')

        swiperBlocks.forEach((block) => {
            block.classList.add('pt-0')
            block.classList.add('hidden')
        })

        swiperBlocks.forEach((block) => {
            if (block.getAttribute('data-block') === action) {
                block.classList.remove('hidden');
                block.classList.remove('pt-0');
            }
        });
    })
})