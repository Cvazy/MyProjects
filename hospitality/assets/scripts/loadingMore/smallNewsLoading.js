const smallNewsLoading = document.getElementById('loading_more_news')

smallNewsLoading.addEventListener('click', () => {
    const loadingBlock = document.querySelector('.blog_bottom__cards').querySelectorAll('.d-none-imp.small_blog')

    if (loadingBlock.length) {
        const blocksToShow = Math.min(4, loadingBlock.length);

        for (let i = 0; i < blocksToShow; i++) {
            loadingBlock[i].classList.remove('d-none-imp')
        }

        if (loadingBlock.length <= 4) {
            smallNewsLoading.classList.add('d-none-imp')
        }
    } else {
        smallNewsLoading.classList.add('d-none-imp')
    }
})