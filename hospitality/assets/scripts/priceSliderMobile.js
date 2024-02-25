const sliderTrackMobile = document.querySelector('.slider-track_mobile')
const sliderRangeMobile = document.querySelector('.slider-range_mobile')
const leftThumbMobile = document.getElementById('leftThumbMobile')
const rightThumbMobile = document.getElementById('rightThumbMobile')
const priceByInputMobile = document.querySelector('input[name="price_by_mobile"]')
const priceToInputMobile = document.querySelector('input[name="price_to_mobile"]')

let isDraggingLeftMobile = false
let isDraggingRightMobile = false

function setPosition(element, position) {
    element.style.left = position + 'px'
}

leftThumbMobile.addEventListener('mousedown', () => {
    isDraggingLeftMobile = true
})

rightThumbMobile.addEventListener('mousedown', () => {
    isDraggingRightMobile = true
})

document.addEventListener('mouseup', () => {
    isDraggingLeftMobile = false
    isDraggingRightMobile = false
})

document.addEventListener('mousemove', (e) => {
    if (isDraggingLeftMobile || isDraggingRightMobile) {
        let rect = sliderTrackMobile.getBoundingClientRect()
        let position = e.clientX - rect.left
        if (position < 0) position = 0
        if (position > rect.width) position = rect.width

        if (isDraggingLeftMobile && position < rightThumbMobile.offsetLeft && position >= 0) {
            setPosition(leftThumbMobile, position)
            sliderRangeMobile.style.left = position + 'px';
            priceByInputMobile.value = formatNumber(Math.round(position / rect.width * (maxValue - minValue)))
        }
        if (isDraggingRightMobile && position > leftThumbMobile.offsetLeft && position <= rect.width) {
            setPosition(rightThumbMobile, position)
            sliderRangeMobile.style.right = (rect.width - position) + 'px'
            priceToInputMobile.value = formatNumber(Math.round(position / rect.width * (maxValue - minValue)))
        }
    }
})

leftThumbMobile.addEventListener('touchstart', () => {
    isDraggingLeftMobile = true
})

rightThumbMobile.addEventListener('touchstart', () => {
    isDraggingRightMobile = true
})

document.addEventListener('touchend', () => {
    isDraggingLeftMobile = false
    isDraggingRightMobile = false
})

document.addEventListener('touchmove', (e) => {
    if (isDraggingLeftMobile || isDraggingRightMobile) {
        let rect = sliderTrackMobile.getBoundingClientRect()
        let position = e.touches[0].clientX - rect.left
        if (position < 0) position = 0
        if (position > rect.width) position = rect.width

        if (isDraggingLeftMobile && position < rightThumbMobile.offsetLeft && position >= 0) {
            setPosition(leftThumbMobile, position);
            sliderRangeMobile.style.left = position + 'px'
            priceByInputMobile.value = formatNumber(Math.round(position / rect.width * (maxValue - minValue)))
        }
        if (isDraggingRightMobile && position > leftThumbMobile.offsetLeft && position <= rect.width) {
            setPosition(rightThumbMobile, position)
            sliderRangeMobile.style.right = (rect.width - position) + 'px'
            priceToInputMobile.value = formatNumber(Math.round(position / rect.width * (maxValue - minValue)))
        }
    }
})

priceByInputMobile.addEventListener('input', () => {
    let value = parseInt(priceByInputMobile.value.replace(/\D/g, ''))
    if (isNaN(value)) value = minValue
    if (value < minValue) value = minValue
    if (value > maxValue) value = maxValue
    let rect = sliderTrackMobile.getBoundingClientRect()
    let position = (value - minValue) / (maxValue - minValue) * rect.width
    setPosition(leftThumbMobile, position)
    sliderRangeMobile.style.left = position + 'px'
})

priceToInputMobile.addEventListener('input', () => {
    let value = parseInt(priceToInputMobile.value.replace(/\D/g, ''))
    if (isNaN(value)) value = maxValue
    if (value < minValue) value = minValue
    if (value > maxValue) value = maxValue
    let rect = sliderTrackMobile.getBoundingClientRect()
    let position = (value - minValue) / (maxValue - minValue) * rect.width
    setPosition(rightThumbMobile, position)
    sliderRangeMobile.style.right = (rect.width - position) + 'px'
})

leftThumbMobile.style.left = '0px'
rightThumbMobile.style.left = '100%'
priceByInputMobile.value = formatNumber(minValue)
priceToInputMobile.value = formatNumber(maxValue)