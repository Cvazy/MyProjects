const cancelOrderBtns = document.querySelectorAll('.cancel_order')

let today = new Date()
const dd = String(today.getDate()).padStart(2, '0')
const mm = String(today.getMonth() + 1).padStart(2, '0')
const yyyy = today.getFullYear()

today = dd + '.' + mm + '.' + yyyy

cancelOrderBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const orderId = btn.getAttribute('data-order-id')
        const orderYear = btn.getAttribute('data-order-year')
        const hiddenObjectsList = document.querySelectorAll(`[data-item-id='${orderId}']`)

        hiddenObjectsList.forEach((el) => {
            if (el.getAttribute('data-item-year') === orderYear) {
                const orderStatus = el.querySelector('.order_status')

                if (btn.textContent.trim() === 'Отменить заказ') {
                    orderStatus.textContent = `${today} (отменён)`
                    btn.classList.remove('order_delete')
                    btn.textContent = 'Оформить заказ'
                } else {
                    orderStatus.textContent = `${today} (оформлен)`
                    btn.classList.add('order_delete')
                    btn.textContent = 'Отменить заказ'
                }
            }
        })
    })
})