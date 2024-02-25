const sliderTrackPopUp = document.querySelector('.slider-track_popup')
const sliderRangePopUp = document.querySelector('.slider-range_popup')
const leftThumbPopUp = document.getElementById('leftThumbPopUp')
const rightThumbPopUp = document.getElementById('rightThumbPopUp')
const priceByInputPopUp = document.querySelector('input[name="price_by_popup"]')
const priceToInputPopUp = document.querySelector('input[name="price_to_popup"]')

let isDraggingLeftPopUp = false
let isDraggingRightPopUp = false

function setPosition(element, position) {
    element.style.left = position + 'px'
}

leftThumbPopUp.addEventListener('mousedown', () => {
    isDraggingLeftPopUp = true
})

rightThumbPopUp.addEventListener('mousedown', () => {
    isDraggingRightPopUp = true
})

document.addEventListener('mouseup', () => {
    isDraggingLeftPopUp = false
    isDraggingRightPopUp = false
})

document.addEventListener('mousemove', (e) => {
    if (isDraggingLeftPopUp || isDraggingRightPopUp) {
        let rect = sliderTrackPopUp.getBoundingClientRect()
        let position = e.clientX - rect.left
        if (position < 0) position = 0
        if (position > rect.width) position = rect.width

        if (isDraggingLeftPopUp && position < rightThumbPopUp.offsetLeft && position >= 0) {
            setPosition(leftThumbPopUp, position)
            sliderRangePopUp.style.left = position + 'px';
            priceByInputPopUp.value = formatNumber(Math.round(position / rect.width * (maxValue - minValue)))
        }
        if (isDraggingRightPopUp && position > leftThumbPopUp.offsetLeft && position <= rect.width) {
            setPosition(rightThumbPopUp, position)
            sliderRangePopUp.style.right = (rect.width - position) + 'px'
            priceToInputPopUp.value = formatNumber(Math.round(position / rect.width * (maxValue - minValue)))
        }
    }
})

leftThumbPopUp.addEventListener('touchstart', () => {
    isDraggingLeftPopUp = true
})

rightThumbPopUp.addEventListener('touchstart', () => {
    isDraggingRightPopUp = true
})

document.addEventListener('touchend', () => {
    isDraggingLeftPopUp = false
    isDraggingRightPopUp = false
})

document.addEventListener('touchmove', (e) => {
    if (isDraggingLeftPopUp || isDraggingRightPopUp) {
        let rect = sliderTrackPopUp.getBoundingClientRect()
        let position = e.touches[0].clientX - rect.left
        if (position < 0) position = 0
        if (position > rect.width) position = rect.width

        if (isDraggingLeftPopUp && position < rightThumbPopUp.offsetLeft && position >= 0) {
            setPosition(leftThumbPopUp, position);
            sliderRangePopUp.style.left = position + 'px'
            priceByInputPopUp.value = formatNumber(Math.round(position / rect.width * (maxValue - minValue)))
        }
        if (isDraggingRightPopUp && position > leftThumbPopUp.offsetLeft && position <= rect.width) {
            setPosition(rightThumbPopUp, position)
            sliderRangePopUp.style.right = (rect.width - position) + 'px'
            priceToInputPopUp.value = formatNumber(Math.round(position / rect.width * (maxValue - minValue)))
        }
    }
})

priceByInputPopUp.addEventListener('input', () => {
    let value = parseInt(priceByInputPopUp.value.replace(/\D/g, ''))
    if (isNaN(value)) value = minValue
    if (value < minValue) value = minValue
    if (value > maxValue) value = maxValue
    let rect = sliderTrackPopUp.getBoundingClientRect()
    let position = (value - minValue) / (maxValue - minValue) * rect.width
    setPosition(leftThumbPopUp, position)
    sliderRangePopUp.style.left = position + 'px'
})

priceToInputPopUp.addEventListener('input', () => {
    let value = parseInt(priceToInputPopUp.value.replace(/\D/g, ''))
    if (isNaN(value)) value = maxValue
    if (value < minValue) value = minValue
    if (value > maxValue) value = maxValue
    let rect = sliderTrackPopUp.getBoundingClientRect()
    let position = (value - minValue) / (maxValue - minValue) * rect.width
    setPosition(rightThumbPopUp, position)
    sliderRangePopUp.style.right = (rect.width - position) + 'px'
})


leftThumbPopUp.style.left = '0px'
rightThumbPopUp.style.left = '100%'
priceByInputPopUp.value = formatNumber(minValue)
priceToInputPopUp.value = formatNumber(maxValue)