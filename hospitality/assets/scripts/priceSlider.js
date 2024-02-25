const sliderTrack = document.querySelector('.slider-track')
const sliderRange = document.querySelector('.slider-range')
const leftThumb = document.getElementById('leftThumb')
const rightThumb = document.getElementById('rightThumb')
const priceByInput = document.querySelector('input[name="price_by"]')
const priceToInput = document.querySelector('input[name="price_to"]')
const minValue = 0
const maxValue = 20000

let isDraggingLeft = false
let isDraggingRight = false

function setPosition(element, position) {
    element.style.left = position + 'px'
}

leftThumb.addEventListener('mousedown', () => {
    isDraggingLeft = true
})

rightThumb.addEventListener('mousedown', () => {
    isDraggingRight = true
})

document.addEventListener('mouseup', () => {
    isDraggingLeft = false
    isDraggingRight = false
})

document.addEventListener('mousemove', (e) => {
    if (isDraggingLeft || isDraggingRight) {
        let rect = sliderTrack.getBoundingClientRect()
        let position = e.clientX - rect.left
        if (position < 0) position = 0
        if (position > rect.width) position = rect.width

        if (isDraggingLeft && position < rightThumb.offsetLeft && position >= 0) {
            setPosition(leftThumb, position)
            sliderRange.style.left = position + 'px';
            priceByInput.value = formatNumber(Math.round(position / rect.width * (maxValue - minValue)))
        }
        if (isDraggingRight && position > leftThumb.offsetLeft && position <= rect.width) {
            setPosition(rightThumb, position)
            sliderRange.style.right = (rect.width - position) + 'px'
            priceToInput.value = formatNumber(Math.round(position / rect.width * (maxValue - minValue)))
        }
    }
})

leftThumb.addEventListener('touchstart', () => {
    isDraggingLeft = true
})

rightThumb.addEventListener('touchstart', () => {
    isDraggingRight = true
})

document.addEventListener('touchend', () => {
    isDraggingLeft = false
    isDraggingRight = false
})

document.addEventListener('touchmove', (e) => {
    if (isDraggingLeft || isDraggingRight) {
        let rect = sliderTrack.getBoundingClientRect()
        let position = e.touches[0].clientX - rect.left
        if (position < 0) position = 0
        if (position > rect.width) position = rect.width

        if (isDraggingLeft && position < rightThumb.offsetLeft && position >= 0) {
            setPosition(leftThumb, position);
            sliderRange.style.left = position + 'px'
            priceByInput.value = formatNumber(Math.round(position / rect.width * (maxValue - minValue)))
        }
        if (isDraggingRight && position > leftThumb.offsetLeft && position <= rect.width) {
            setPosition(rightThumb, position)
            sliderRange.style.right = (rect.width - position) + 'px'
            priceToInput.value = formatNumber(Math.round(position / rect.width * (maxValue - minValue)))
        }
    }
})

priceByInput.addEventListener('input', () => {
    let value = parseInt(priceByInput.value.replace(/\D/g, ''))
    if (isNaN(value)) value = minValue
    if (value < minValue) value = minValue
    if (value > maxValue) value = maxValue
    let rect = sliderTrack.getBoundingClientRect()
    let position = (value - minValue) / (maxValue - minValue) * rect.width
    setPosition(leftThumb, position)
    sliderRange.style.left = position + 'px'
})

priceToInput.addEventListener('input', () => {
    let value = parseInt(priceToInput.value.replace(/\D/g, ''))
    if (isNaN(value)) value = maxValue
    if (value < minValue) value = minValue
    if (value > maxValue) value = maxValue
    let rect = sliderTrack.getBoundingClientRect()
    let position = (value - minValue) / (maxValue - minValue) * rect.width
    setPosition(rightThumb, position)
    sliderRange.style.right = (rect.width - position) + 'px'
})

leftThumb.style.left = '0px'
rightThumb.style.left = '100%'
priceByInput.value = formatNumber(minValue)
priceToInput.value = formatNumber(maxValue)