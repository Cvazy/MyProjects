const modalsClose = document.querySelectorAll('.modalClose')

modalsClose.forEach((btn) => {
    btn.addEventListener('click', () => {
        const allBlackout = document.querySelectorAll('.blackout')

        allBlackout.forEach((block) => {
            block.classList.add('d-none-imp')
        })
    })
})