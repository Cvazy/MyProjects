function loadingMore(btn) {
    const loadingData = btn.getAttribute('data-load-btn')
    const loadingContainer = document.querySelector(`[data-load-block="${loadingData}"]`)
    const loadingQnt = Number(loadingContainer.getAttribute('data-load-qnt'))
    const loadingBlock = loadingContainer.querySelectorAll('.d-none-imp:not(img)[data-loading="true"]')


    if (loadingBlock.length) {
        const blocksToShow = Math.min(loadingQnt, loadingBlock.length);

        for (let i = 0; i < blocksToShow; i++) {
            loadingBlock[i].classList.remove('d-none-imp')
        }

        if (loadingBlock.length <= loadingQnt) {
            btn.classList.add('d-none-imp')
        }
    } else {
        btn.classList.add('d-none-imp')
    }
}