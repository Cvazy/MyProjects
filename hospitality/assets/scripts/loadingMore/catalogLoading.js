const catalogLoadingBtn = document.getElementById('loading_more_catalog')

catalogLoadingBtn.addEventListener('click', () => {
    const loadingBlock = document.querySelector('.cards__wrapper').querySelectorAll('.d-none-imp.catalog_item')

    if (loadingBlock.length) {
        const blocksToShow = Math.min(3, loadingBlock.length);

        for (let i = 0; i < blocksToShow; i++) {
            loadingBlock[i].classList.remove('d-none-imp')
        }

        if (loadingBlock.length <= 3) {
            catalogLoadingBtn.classList.add('d-none-imp')
        }
    } else {
        catalogLoadingBtn.classList.add('d-none-imp')
    }
})