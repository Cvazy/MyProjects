var links = document.querySelectorAll('.question');

// Проходимся по каждой ссылке
links.forEach(function(link) {
    // Назначаем обработчик события на клик по каждой ссылке
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки

        var targetElement = document.getElementById('why-we'); // Получаем целевой элемент, к которому нужно прокрутить

        // Прокручиваем страницу до целевого элемента
        targetElement.scrollIntoView({
            behavior: 'smooth' // Добавляем плавную прокрутку
        });
    });
});