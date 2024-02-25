const ordersActionBtn = document.querySelectorAll('.my_orders__info-btn')
const yearBtns = document.querySelectorAll('.orders_years__item')
const allOrders = document.querySelectorAll('.catalog_item')
const closeMobileAction = document.getElementById('closeMobileAction')
const orderActionMobile = document.querySelector('.order_action_mobile')

const footer = document.querySelector('footer')

document.addEventListener('click', (event) => {
    ordersActionBtn.forEach((btn) => {
        const ordersActionList = btn.previousElementSibling

        if (!ordersActionList.contains(event.target) && !btn.contains(event.target)) {
            ordersActionList.classList.remove('max-h-icons')
        }
    })
})

ordersActionBtn.forEach((btn) => {
    const ordersActionList = btn.previousElementSibling
    const orderAction = ordersActionList.querySelectorAll('.order_action__item')

    btn.addEventListener('click', () => {
        if (window.innerWidth > 980) {
            ordersActionList.classList.toggle('max-h-icons')
        } else {
            orderActionMobile.classList.add('max-h-icons')
            main.style.filter = 'brightness(0.5)'
            mobileHeader.style.filter = 'brightness(0.5)'
            footer.style.filter = 'brightness(0.5)'
        }
    })

    orderAction.forEach((action) => {
        action.addEventListener('click', () => {
            const orderId = action.getAttribute('data-order-id')
            const orderYear = action.getAttribute('data-order-year')

            if (orderId && !action.classList.contains('cancel_order')) {
                const selectOrders = document.querySelectorAll(`[data-item-id="${orderId}"]`)

                selectOrders.forEach((el) => {
                    if (el.getAttribute('data-item-year') === orderYear) {
                        el.classList.add('d-none-imp')
                    }
                })
            }

            ordersActionList.classList.remove('max-h-icons')
        })
    })
})

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

closeMobileAction.addEventListener('click', () => {
    orderActionMobile.classList.remove('max-h-icons')
    main.style.filter = 'brightness(1)'
    mobileHeader.style.filter = 'brightness(1)'
    footer.style.filter = 'brightness(1)'
})