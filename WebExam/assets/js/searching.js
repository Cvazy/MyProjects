function searchRows(input, rowsName) {
    const rowsList = document.querySelectorAll(`[data-row="${rowsName}"]`)

    input.addEventListener('input', () => {
        rowsList.forEach((el) => {
            if (!el.textContent.toLowerCase().trim().includes(input.value)) {
                el.parentElement.classList.add('d-none')
            } else {
                el.parentElement.classList.remove('d-none')
            }
        })
    })
}
