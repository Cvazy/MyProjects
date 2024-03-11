document.addEventListener("DOMContentLoaded", function() {
    const targetElements = document.querySelectorAll('.flatpickr-calendar');

    targetElements.forEach((targetEl) => {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    if (targetEl.classList.contains('open') && window.innerWidth < 980) {

                        const popupBlock = document.querySelector('[data-mobail-block="calendar"]')
                        const popupBlockBooking = document.querySelector('[data-mobail-block="booking"]')

                        if (popupBlockBooking && !popupBlockBooking.classList.contains('max-h-screen-imp')) {
                            window.scrollTo(0, 0);
                            popupBlock.classList.add('max-h-screen-imp')
                            document.body.style.overflow = 'hidden'
                        }
                    }
                }
            });
        });

        const config = { attributes: true, attributeOldValue: true, attributeFilter: ['class'] };

        if (targetEl) {
            observer.observe(targetEl, config);
        } else {
            console.error('Элемент .flatpickr-calendar не найден в DOM');
        }
    })
});
