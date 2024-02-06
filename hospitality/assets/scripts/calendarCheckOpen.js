document.addEventListener("DOMContentLoaded", function() {
    const targetElement = document.querySelector('.flatpickr-calendar');

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (targetElement.classList.contains('open') && window.innerWidth < 980) {
                    console.log('Класс open был добавлен к элементу');

                    const popupBlock = document.querySelector('[data-mobail-block="calendar"]')
                    window.scrollTo(0, 0);
                    popupBlock.classList.add('max-h-screen-imp')
                    document.body.style.overflow = 'hidden'
                }
            }
        });
    });

    const config = { attributes: true, attributeOldValue: true, attributeFilter: ['class'] };

    if (targetElement) {
        observer.observe(targetElement, config);
    } else {
        console.error('Элемент .flatpickr-calendar не найден в DOM');
    }
});
