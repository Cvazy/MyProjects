const yearBtns = document.querySelectorAll('.orders_years__item')
const allOrders = document.querySelectorAll('.catalog_item')

yearBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        yearBtns.forEach((el) => {
            el.classList.remove('orders_years__active')
        })

        btn.classList.add('orders_years__active')

        allOrders.forEach((block) => {
            if (block.getAttribute('data-item-year') !== btn.textContent.trim()) {
                block.classList.add('d-none-imp')
            } else {
                block.classList.remove('d-none-imp')
            }
        })
    })
})