const slideBlockMobile = document.querySelector('.slide_input_mobile')
const anyDurationMobile = document.getElementById('any_mobile')

anyDurationMobile.addEventListener('change', () => {
    if (anyDurationMobile.checked) {
        slideBlockMobile.classList.remove('max-h-icons')
    } else {
        slideBlockMobile.classList.add('max-h-icons')
    }
})

const sliderTrackMobile = document.querySelector('.slider-track_mobile')
const sliderRangeMobile = document.querySelector('.slider-range_mobile')
const rightThumbMobile = document.getElementById('rightThumbMobile')
const timeInputMobile = document.querySelector('.time_input__mobile')

let valueMobile = 10

timeInputMobile.value = valueMobile + ' часов'

function updateSliderAndInputMobile(newValue) {
    newValue = Math.max(minValue, Math.min(newValue, maxValue))

    const minThumbWidth = 10
    const maxThumbWidth = 99

    const percentage = (((newValue - minValue) / (maxValue - minValue)) * (maxThumbWidth - minThumbWidth)) + minThumbWidth

    const trackWidth = sliderTrackMobile.clientWidth
    const thumbWidth = rightThumbMobile.clientWidth
    const thumbPosition = (percentage * (trackWidth / 100)) - (thumbWidth / 2)
    rightThumbMobile.style.left = thumbPosition + 'px'

    sliderRangeMobile.style.width = percentage + '%'

    timeInputMobile.value = Math.round(newValue) + ' ' + getHourWord(Math.round(newValue))
}

updateSliderAndInputMobile(valueMobile)

let isDraggingMobile = false

rightThumbMobile.addEventListener('touchstart', (e) => {
    isDraggingMobile = true
})

document.addEventListener('touchmove', (e) => {
    if (isDraggingMobile) {
        const rect = sliderTrackMobile.getBoundingClientRect()
        let touch = e.touches[0]
        let newValue = ((touch.clientX - rect.left) / rect.width) * (maxValue - minValue) + minValue
        updateSliderAndInputMobile(newValue)
    }
})

document.addEventListener('touchend', () => {
    isDraggingMobile = false
})

