const btnsPagination = document.querySelectorAll('.btn_pagination')

btnsPagination.forEach((el) => {
    el.addEventListener('click', () => {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', `/?page=${el.textContent.trim()}`);

        xhr.send();
    })
})