const adultsQnt = document.getElementById('test_adults_qnt')
const childQnt = document.getElementById('test_child_qnt')
const editDate = document.getElementById('edit_date')
const saveEditBtn = document.getElementById('saveEdit')
const editDateInputBlock = document.getElementById('edit_date')

const finalInput = document.getElementById('chooseFinalData')
const editBlock = document.querySelector('.edit_params')

saveEditBtn.addEventListener('click', () => {
    const allQnt = Number(adultsQnt.textContent) + Number(childQnt.textContent)
    const date = editDate.value

    let wordForm

    if (allQnt === 1) {
        wordForm = 'гость'
    } else if (1 < allQnt < 5) {
        wordForm = 'гостя'
    } else {
        wordForm = 'гостей'
    }

    finalInput.value = `${date}, ${allQnt} ${wordForm}`

    if (editDateInputBlock.value) {
        editDateInputBlock.classList.remove('error')
        editBlock.classList.add('d-none-imp')
        document.body.style.overflow = 'auto'
    } else {
        editDateInputBlock.classList.add('error')
    }
})

editDateInputBlock.addEventListener('input', (event) => {
    if (event.target.value) {
        editDateInputBlock.classList.remove('error')
    } else {
        editDateInputBlock.classList.add('error')
    }
})