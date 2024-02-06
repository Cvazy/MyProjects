const loadingMoreBtn = document.getElementById('loading_more')

loadingMoreBtn.addEventListener('click', () => {
    const activeBlock = document.querySelector('.carusel__item-active').getAttribute('data-carusel-block')

    const loadingBlock = document.querySelector(`[data-block-offer=${activeBlock}]`).querySelectorAll('.d-none-imp')

    if (loadingBlock.length) {
        const blocksToShow = Math.min(3, loadingBlock.length);

        for (let i = 0; i < blocksToShow; i++) {
            loadingBlock[i].classList.remove('d-none-imp')
        }

        if (loadingBlock.length <= 3) {
            loadingMoreBtn.classList.add('d-none-imp')
        }
    } else {
        loadingMoreBtn.classList.add('d-none-imp')
    }
})