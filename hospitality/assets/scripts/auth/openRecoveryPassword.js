function openRecoveryForm(authFormBlock, recoveryForm, recoveryFormBlock, closeRecoveryBtn, openRecoveryBtn) {
    openRecoveryBtn.addEventListener('click', () => {
        authFormBlock.classList.add('d-none-imp')

        recoveryFormBlock.classList.remove('d-none-imp')
        recoveryForm.classList.remove('d-none-imp')
    })

    closeRecoveryBtn.addEventListener('click', () => {
        authFormBlock.classList.remove('d-none-imp')

        recoveryFormBlock.classList.add('d-none-imp')
        recoveryForm.classList.add('d-none-imp')
    })
}