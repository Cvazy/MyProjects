const ordersActionBtn = document.querySelectorAll('.my_orders__info-btn')
const allOrders = document.querySelectorAll('.catalog_item')
const closeMobileAction = document.getElementById('closeMobileAction')
const orderActionMobile = document.querySelector('.order_action_mobile')

const orderAction = document.querySelectorAll('.order_action__item')

const footer = document.querySelector('footer')

const objDeleteBtn = document.querySelectorAll('.order_delete')
const deleteObjModal = document.querySelector('.obj_delete_blackout')
const deleteObjInput = deleteObjModal.querySelector('input')
const closeObjModal = document.querySelectorAll('.modal_obj__close')
const deleteObjForm = document.querySelector('.modal_obj_form')

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

    btn.addEventListener('click', () => {
        if (window.innerWidth > 980) {
            ordersActionList.classList.toggle('max-h-icons')
        } else {
            const orderId = btn.getAttribute('data-card-id')
            const mobileOrderVisible = orderActionMobile.querySelector('.object_visible')
            const mobileOrderDelete = orderActionMobile.querySelector('.order_delete')
            mobileOrderVisible.setAttribute('data-obj-id', orderId)
            mobileOrderDelete.setAttribute('data-order-id', orderId)

            orderActionMobile.classList.add('max-h-icons')
            main.style.filter = 'brightness(0.5)'
            mobileHeader.style.filter = 'brightness(0.5)'
            footer.style.filter = 'brightness(0.5)'
        }
    })

    orderAction.forEach((action) => {
        action.addEventListener('click', () => {
            const orderId = action.getAttribute('data-order-id')

            if (orderId && !action.classList.contains('cancel_order')) {
                const selectOrders = document.querySelectorAll(`[data-item-id="${orderId}"]`)

                selectOrders.forEach((el) => {
                    deleteObjModal.classList.remove('d-none-imp')

                    deleteObjInput.value = orderId
                })
            }

            ordersActionList.classList.remove('max-h-icons')
            orderActionMobile.classList.remove('max-h-icons')
            main.style.filter = 'brightness(1)'
            mobileHeader.style.filter = 'brightness(1)'
            footer.style.filter = 'brightness(1)'
        })
    })
})

closeMobileAction.addEventListener('click', () => {
    orderActionMobile.classList.remove('max-h-icons')
    main.style.filter = 'brightness(1)'
    mobileHeader.style.filter = 'brightness(1)'
    footer.style.filter = 'brightness(1)'
})

objDeleteBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        deleteObjModal.classList.remove('d-none-imp')
    })
})

closeObjModal.forEach((btn) => {
    btn.addEventListener('click', () => {
        deleteObjModal.classList.add('d-none-imp')
    })
})

deleteObjForm.addEventListener('submit', (event) => {
    const objId = deleteObjInput.value
    const object = document.querySelector(`[data-item-id="${objId}"]`)

    object.remove()

    event.preventDefault()
    deleteObjModal.classList.add('d-none-imp')
})