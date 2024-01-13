const filterForm = document.getElementById('filterForm')
const inputList = filterForm.querySelectorAll('input')

inputList.forEach((el) => {
    const observer = new MutationObserver(function(mutationsList) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
                const newValue = el.value
                // console.log("Новое значение скрытого инпута:", newValue)
                filterForm.submit()
            }
        }
    })

    observer.observe(el, { attributes: true })
})