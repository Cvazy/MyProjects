window.onload = () => {
    dragula([
        document.querySelector('.todo_list_1'),
        document.querySelector('.todo_list_2'),
        document.querySelector('.todo_list_3'),
    ])
        .on('drop', function (el, container) {
            const noteId = el.getAttribute('data-note-id')
            const listType = container.getAttribute('data-list-type')


            fetch('../../lib/updateNoteType.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `noteId=${noteId}&listType=${listType}`
            })
                .then(response => response.text())
                .then(data => console.log(data)) // Вывод результата в консоль
                .catch(error => console.error('Ошибка:', error));
        })
}