document.addEventListener('DOMContentLoaded', () => {
    const openEditBtn = document.querySelector('.open_edit')
    const editBlock = document.querySelector('.edit_params')
    const closeEditBlock = document.querySelector('.edit_window_close')

    const openExcursion = document.getElementById('openExcursion')
    const excursionBlock = document.querySelector('.excursion')
    const closeExcursionBlocks = document.querySelectorAll('.excursion_block_close')

    const openBigMap = document.getElementById('openBigMap')
    const bigMapBlock = document.querySelector('.big_map')
    const closeBigMap = document.querySelector('.btn_close_map')

    openEditBtn.addEventListener('click', (event) => {
        event.preventDefault()
        window.scrollTo(0, 0)
        setTimeout(() => {
            document.body.style.overflow = 'hidden';
        }, 1000)
        editBlock.classList.remove('d-none-imp')
    })

    closeEditBlock.addEventListener('click', () => {
        editBlock.classList.add('d-none-imp')
        document.body.style.overflow = 'auto'
    })

    openExcursion.addEventListener('click', (event) => {
        event.preventDefault()
        window.scrollTo(0, 0)
        setTimeout(() => {
            document.body.style.overflow = 'hidden';
        }, 1000)
        excursionBlock.classList.remove('d-none-imp')
    })

    closeExcursionBlocks.forEach((close) => {
        close.addEventListener('click', () => {
            excursionBlock.classList.add('d-none-imp')
            document.body.style.overflow = 'auto'
        })
    })

    openBigMap.addEventListener('click', (event) => {
        event.preventDefault()
        window.scrollTo(0, 0)
        setTimeout(() => {
            document.body.style.overflow = 'hidden';
        }, 1000)
        bigMapBlock.classList.remove('d-none-imp')
    })

    closeBigMap.addEventListener('click', () => {
        bigMapBlock.classList.add('d-none-imp')
        document.body.style.overflow = 'auto'
    })
})