const slideBlock = document.querySelector('.slide_input')
const anyDuration = document.getElementById('any')

anyDuration.addEventListener('change', () => {
    if (anyDuration.checked) {
        slideBlock.classList.remove('max-h-icons')
    } else {
        slideBlock.classList.add('max-h-icons')
    }
})

const sliderTrack = document.querySelector('.slider-track')
const sliderRange = document.querySelector('.slider-range')
const rightThumb = document.getElementById('rightThumb')
const timeInput = document.querySelector('.time_input')

const minValue = 1
const maxValue = 12

let value = 10

timeInput.value = value + ' часов'

function getHourWord(value) {
    const remainder10 = value % 10
    const remainder100 = value % 100

    if (remainder10 === 1 && remainder100 !== 11) {
        return 'час'
    } else if ([2, 3, 4].includes(remainder10) && ![12, 13, 14].includes(remainder100)) {
        return 'часа'
    } else {
        return 'часов'
    }
}

function updateSliderAndInput(newValue) {
    newValue = Math.max(minValue, Math.min(newValue, maxValue))

    const minThumbWidth = 10
    const maxThumbWidth = 99

    const percentage = (((newValue - minValue) / (maxValue - minValue)) * (maxThumbWidth - minThumbWidth)) + minThumbWidth

    const trackWidth = sliderTrack.clientWidth
    const thumbWidth = rightThumb.clientWidth
    const thumbPosition = (percentage * (trackWidth / 100)) - (thumbWidth / 2)
    rightThumb.style.left = thumbPosition + 'px'

    sliderRange.style.width = percentage + '%'

    timeInput.value = Math.round(newValue) + ' ' + getHourWord(Math.round(newValue))
}

updateSliderAndInput(value)

let isDragging = false

rightThumb.addEventListener('mousedown', (e) => {
    isDragging = true
    e.preventDefault()
})

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const rect = sliderTrack.getBoundingClientRect();
        let newValue = ((e.clientX - rect.left) / rect.width) * (maxValue - minValue) + minValue
        updateSliderAndInput(newValue)
    }
})

document.addEventListener('mouseup', () => {
    isDragging = false
})

rightThumb.addEventListener('touchstart', (e) => {
    isDragging = true
    e.preventDefault()
})

document.addEventListener('touchmove', (e) => {
    if (isDragging) {
        const rect = sliderTrack.getBoundingClientRect()
        let touch = e.touches[0]
        let newValue = ((touch.clientX - rect.left) / rect.width) * (maxValue - minValue) + minValue
        updateSliderAndInput(newValue)
    }
})

document.addEventListener('touchend', () => {
    isDragging = false
})

