const scheduleDays = document.querySelectorAll('.schedule__day')

const newScheduleBtns = document.querySelectorAll('.new_schedule')

const mapPoint = document.querySelector('.btn__map_point')
const mapWrapper = document.querySelector('.start_place')

function dayVariant() {
    scheduleDays.forEach((day) => {
        let newVersion
        if (window.innerWidth < 767) {
            newVersion = day.getAttribute('data-mobile-version')
        } else {
            newVersion = day.getAttribute('data-desktop-version')
        }

        day.textContent = newVersion
    })
}

document.addEventListener('DOMContentLoaded', dayVariant)
window.addEventListener('resize', dayVariant)

function createScheduleItem() {
    const scheduleItemWrap = document.createElement('div')
    scheduleItemWrap.classList.add('schedule__item-wrap')

    const scheduleItemTime = document.createElement('div')
    scheduleItemTime.classList.add('schedule__item-time')

    const startTimeInput = document.createElement('input')
    startTimeInput.setAttribute('type', 'text')
    startTimeInput.setAttribute('name', 'time_start')
    startTimeInput.setAttribute('placeholder', 'Начало')
    startTimeInput.setAttribute('oninput', 'addTimeFormatToInputs(this)')
    startTimeInput.classList.add('exc_time_input')

    const dash = document.createElement('p')
    dash.classList.add('dash')
    dash.textContent = '-'

    const endTimeInput = document.createElement('input')
    endTimeInput.setAttribute('type', 'text')
    endTimeInput.setAttribute('name', 'time_end')
    endTimeInput.setAttribute('placeholder', 'Конец')
    endTimeInput.setAttribute('oninput', 'addTimeFormatToInputs(this)')
    endTimeInput.classList.add('exc_time_input')

    const removeButton = document.createElement('button')
    removeButton.setAttribute('type', 'button')
    removeButton.setAttribute('onclick', 'removeSchedule(this)')
    removeButton.classList.add('btn', 'btn__schedule', 'remove_schedule')

    const trashImage = document.createElement('img')
    trashImage.setAttribute('src', 'assets/images/account/trash.svg')
    trashImage.setAttribute('alt', 'Remove')
    trashImage.setAttribute('loading', 'lazy')

    removeButton.appendChild(trashImage)

    scheduleItemTime.appendChild(startTimeInput)
    scheduleItemTime.appendChild(dash)
    scheduleItemTime.appendChild(endTimeInput)

    scheduleItemWrap.appendChild(scheduleItemTime)
    scheduleItemWrap.appendChild(removeButton)

    return scheduleItemWrap
}

newScheduleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const scheduleWrap = btn.previousElementSibling
        scheduleWrap.appendChild(createScheduleItem())
    })
})

function removeSchedule(btn) {
    const scheduleWrap = btn.parentNode
    scheduleWrap.remove()
}

mapPoint.addEventListener('click', () => {
    mapWrapper.classList.remove('start_place')
    mapPoint.classList.add('d-none-imp')
})

function addTimeFormatToInputs(input) {
    let inputText = input.value.replace(/\D/g, '')

    if (Number(inputText) > 2359) {
        inputText = (2359).toString()
    }

    const formattedTime = inputText.replace(/(\d{1,2})(\d{2})/, function(match, hour, minute) {
        return hour + ':' + minute.padStart(2, '0')
    })

    input.value = formattedTime
}



