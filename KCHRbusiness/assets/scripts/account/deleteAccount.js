const deleteAccountBtn = document.getElementById('deleteAccount')
const deleteModal = document.querySelector('.delete_account')
const closeDeleteModal = document.querySelectorAll('.modal_delete_account__close')
const otherReason = document.getElementById('other_reason')
const otherReasonText = document.getElementById('otherReasonText')
const allDeleteRadio = deleteModal.querySelectorAll('[type="radio"]')

deleteAccountBtn.addEventListener('click', () => {
    window.scrollTo(0, 0)
    deleteModal.classList.remove('d-none-imp')
})

closeDeleteModal.forEach((block) => {
    block.addEventListener('click', () => {
        deleteModal.classList.add('d-none-imp')
    })
})

otherReason.addEventListener('change', () => {
    if (otherReason.checked) {
        otherReasonText.classList.add('max-h-icons')
        otherReasonText.classList.remove('max-h-0-imp')
    } else {
        otherReasonText.classList.remove('max-h-icons')
        otherReasonText.classList.add('max-h-0-imp')
    }
})

allDeleteRadio.forEach((el) => {
    el.addEventListener('change', () => {
        if (el.checked) {
            allDeleteRadio.forEach((item) => {
                item.checked = false
            })

            el.checked = true

            if (el.id !== 'other_reason') {
                otherReasonText.classList.remove('max-h-icons')
                otherReasonText.classList.add('max-h-0-imp')
            }
        }
    })
})