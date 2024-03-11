function applyDateFormat(input) {
    input.addEventListener('input', function() {
        const inputValue = input.value
        let sanitizedValue = inputValue.replace(/\D/g, '')

        if (sanitizedValue.length > 8) {
            sanitizedValue = sanitizedValue.slice(0, 8)
        }

        let day = sanitizedValue.slice(0, 2)
        let month = sanitizedValue.slice(2, 4)
        const year = sanitizedValue.slice(4)

        if (parseInt(month) > 12) {
            month = '12'
        }

        const maxDaysInMonth = new Date(year, month, 0).getDate()
        if (parseInt(day) > maxDaysInMonth) {
            day = maxDaysInMonth.toString()
        }

        let formattedValue = `${day}`
        if (sanitizedValue.length > 2) {
            formattedValue += `.${month}`
        }
        if (sanitizedValue.length > 4) {
            formattedValue += `.${year}`
        }

        const currentDate = new Date()
        const enteredDate = new Date(formattedValue.split('.').reverse().join('-'))
        if (enteredDate > currentDate) {
            day = currentDate.getDate().toString().padStart(2, '0')
            month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
            const year = currentDate.getFullYear()
            formattedValue = `${day}.${month}.${year}`
        }

        input.value = formattedValue

        if (input.value.length !== 10) {
            input.classList.add('error')
        } else {
            input.classList.remove('error')
        }
    })
}