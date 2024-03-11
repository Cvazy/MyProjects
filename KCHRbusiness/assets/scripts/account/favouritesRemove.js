const heartBtns = document.querySelectorAll('.heart_click')

heartBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const itemId = btn.getAttribute('data-btn-id')
        const itemBlock = document.querySelector(`[data-item-id="${itemId}"]`)

        itemBlock.remove()
    })
})