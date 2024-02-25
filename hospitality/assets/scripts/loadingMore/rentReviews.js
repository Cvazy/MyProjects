const smallNewsLoading = document.getElementById('loading_more_review')

smallNewsLoading.addEventListener('click', () => {
    const loadingBlock = document.querySelector('.review_rent').querySelectorAll('.d-none-imp.review_rent__item')

    if (loadingBlock.length) {
        const blocksToShow = Math.min(2, loadingBlock.length);

        for (let i = 0; i < blocksToShow; i++) {
            loadingBlock[i].classList.remove('d-none-imp')
        }

        if (loadingBlock.length <= 2) {
            smallNewsLoading.classList.add('d-none-imp')
        }
    } else {
        smallNewsLoading.classList.add('d-none-imp')
    }
})