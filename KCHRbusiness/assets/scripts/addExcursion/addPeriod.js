const newPeriodBtn = document.querySelector('.new_exc_date')

function applyPeriodFormat(input) {
    input.addEventListener('input', function() {
        const inputValue = input.value
        let sanitizedValue = inputValue.replace(/\D/g, '')

        if (sanitizedValue.length > 8) {
            sanitizedValue = sanitizedValue.slice(0, 8)
        }

        let day = sanitizedValue.slice(0, 2)
        let month = sanitizedValue.slice(2, 4)
        let year = sanitizedValue.slice(4)

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

        if (inputValue.length === 10) {
            if (enteredDate < currentDate) {
                day = currentDate.getDate().toString().padStart(2, '0');
                month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
                year = currentDate.getFullYear();
                formattedValue = `${day}.${month}.${year}`;
            }
        }

        input.value = formattedValue

        if (input.value.length !== 10) {
            input.classList.add('error')
        } else {
            input.classList.remove('error')
        }
    })
}

function createPeriodItem() {
    const divScheduleItem = document.createElement("div");
    divScheduleItem.className = "schedule__item";

    const divScheduleItemWrap = document.createElement("div");
    divScheduleItemWrap.classList.add("schedule__item-wrap", "w-full")
    divScheduleItem.appendChild(divScheduleItemWrap);

    const divScheduleItemDate = document.createElement("div");
    divScheduleItemDate.classList.add("schedule__item-date", "w-full");
    divScheduleItemWrap.appendChild(divScheduleItemDate);

    const divExcCalendar1 = document.createElement("div");
    divExcCalendar1.className = "exc_calendar";
    divScheduleItemDate.appendChild(divExcCalendar1);

    const inputDate = document.createElement("input");
    inputDate.type = "text";
    inputDate.name = "date";
    inputDate.placeholder = "Дата (12.03.2024)";
    inputDate.className = "exc_calendar_input";
    inputDate.setAttribute("oninput", "applyPeriodFormat(this)");
    divExcCalendar1.appendChild(inputDate);

    const imgCalendar1 = document.createElement("img");
    imgCalendar1.className = "exc_icon";
    imgCalendar1.src = "assets/images/icons/calendar.svg";
    imgCalendar1.alt = "Calendar";
    divExcCalendar1.appendChild(imgCalendar1);

    const divExcCalendar2 = document.createElement("div");
    divExcCalendar2.className = "exc_calendar";
    divScheduleItemDate.appendChild(divExcCalendar2);

    const inputTimeExc = document.createElement("input");
    inputTimeExc.type = "text";
    inputTimeExc.name = "time";
    inputTimeExc.placeholder = "Время";
    inputTimeExc.className = "exc_time_input";
    inputTimeExc.setAttribute('oninput', 'addTimeFormatToInputs(this)')
    divExcCalendar2.appendChild(inputTimeExc);

    return divScheduleItem;
}

newPeriodBtn.addEventListener('click', () => {
    const parentBlock = newPeriodBtn.previousElementSibling
    parentBlock.appendChild(createPeriodItem())
})
