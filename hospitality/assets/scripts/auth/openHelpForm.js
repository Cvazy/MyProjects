function openHelpForm(authFormBlock, helpForm, helpFormBlock, closeInfoBtn, openInfoBtn) {
    openInfoBtn.addEventListener('click', () => {
        authFormBlock.classList.add('d-none-imp')

        helpFormBlock.classList.remove('d-none-imp')
        helpForm.classList.remove('d-none-imp')
    })

    closeInfoBtn.addEventListener('click', () => {
        authFormBlock.classList.remove('d-none-imp')

        helpFormBlock.classList.add('d-none-imp')
        helpForm.classList.add('d-none-imp')
    })
}