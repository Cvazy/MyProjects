const modalAddOpen = document.getElementById('addNote')
const modalAddBlock = document.querySelector('.add_new_note')
const addNoteForm = modalAddBlock.querySelector('form')
const noteTitle = document.getElementById('noteTitle')

modalAddOpen.addEventListener('click', () => {
    modalAddBlock.classList.remove('d-none-imp')
})

addNoteForm.addEventListener('submit', (event) => {
    if (!noteTitle.value) {
        event.preventDefault()
        noteTitle.classList.add('error')
    }
})

noteTitle.addEventListener('input', () => {
    if (noteTitle.value) {
        noteTitle.classList.remove('error')
    } else {
        noteTitle.classList.add('error')
    }
})