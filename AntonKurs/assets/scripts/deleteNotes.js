const modalDeleteOpen = document.getElementById('removeAll')
const modalDeleteBlock = document.querySelector('.delete_all_notes')
const deleteAllNotesBtn = document.querySelector('.btn_delete_all')

const deleteOneNoteBtns = document.querySelectorAll('.todo_remove')

modalDeleteOpen.addEventListener('click', () => {
    modalDeleteBlock.classList.remove('d-none-imp')
})

deleteAllNotesBtn.addEventListener('click', () => {
    fetch('../../lib/deleteAllNotes.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (response.ok) {
                // Если удаление прошло успешно, обновляем страницу
                location.reload()
            } else {
                // Выводим сообщение об ошибке, если что-то пошло не так
                console.error('Ошибка удаления всех записей');
            }
        })
        .catch(error => {
            console.error('Ошибка удаления всех записей:', error)
        })
})

deleteOneNoteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const noteId = btn.getAttribute('data-remove-id')
        const note = document.querySelector(`[data-note-id="${noteId}"]`)

        fetch('../../lib/deleteOneNote.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: noteId }), // Отправляем ID записи на сервер
        })
            .then(response => {
                if (response.ok) {
                    // Если удаление прошло успешно, удаляем элемент из DOM
                    note.remove()
                } else {
                    // Выводим сообщение об ошибке, если что-то пошло не так
                    console.error('Ошибка удаления записи');
                }
            })
            .catch(error => {
                console.error('Ошибка удаления записи:', error);
            });
    })
})
