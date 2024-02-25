const smallNewsLoading = document.getElementById('loading_more_read')

smallNewsLoading.addEventListener('click', () => {
    const loadingBlock = document.querySelector('.more_read__wrapper').querySelectorAll('.d-none-imp.blog_medium__item')

    if (loadingBlock.length) {
        const blocksToShow = Math.min(3, loadingBlock.length);

        for (let i = 0; i < blocksToShow; i++) {
            loadingBlock[i].classList.remove('d-none-imp')
        }

        if (loadingBlock.length <= 3) {
            smallNewsLoading.classList.add('d-none-imp')
        }
    } else {
        smallNewsLoading.classList.add('d-none-imp')
    }
})