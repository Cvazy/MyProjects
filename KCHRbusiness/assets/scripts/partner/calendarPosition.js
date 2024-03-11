document.addEventListener("DOMContentLoaded", () => {
    const flatpickrCalendars = document.querySelectorAll('.flatpickr-calendar')

    function handleStyleChanges(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'style' && mutation.target.style.top) {
                mutation.target.style.setProperty('top', mutation.target.style.top, 'important')
            }
        })
    }

    flatpickrCalendars.forEach(function(calendar) {
        const observer = new MutationObserver(handleStyleChanges)
        observer.observe(calendar, { attributes: true, subtree: true })
    })
})