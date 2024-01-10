function openConfirmModal(btn) {
    const smooth = document.getElementById('smooth')
    const confirmEvent = document.getElementById('confirmEvent')
    const confirmEventClose = confirmEvent.querySelectorAll('[data-action="closeModal"]')
    const selectedGid = confirmEvent.querySelector('[data-span="selectGid"]')

    confirmEventClose.forEach((closeBtn) => {
        closeBtn.addEventListener('click', () => {
            closeModal(confirmEvent)
        })
    })

    const gidFio = btn.parentElement.parentElement.querySelector('[data-row="gidFio"]').textContent.trim()

    selectedGid.textContent = gidFio

    smooth.classList.remove('d-none')
    smooth.classList.add('d-flex')

    confirmEvent.classList.remove('d-none')
    confirmEvent.classList.add('d-block')

    document.body.classList.add('overflow-hidden')
}