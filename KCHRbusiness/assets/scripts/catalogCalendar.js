document.addEventListener('DOMContentLoaded', () => {
    const calendarTop = document.querySelector('.flatpickr-calendar')

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (calendarTop.classList.contains('open')) {
                    calendarTop.classList.add('calendar_top')
                } else {
                    calendarTop.classList.remove('calendar_top')
                }
            }
        });
    });

    const config = { attributes: true, attributeOldValue: true, attributeFilter: ['class'] };

    if (calendarTop) {
        observer.observe(calendarTop, config);
    } else {
        console.error('Элемент .flatpickr-calendar не найден в DOM');
    }
})