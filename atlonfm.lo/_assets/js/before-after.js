const slider = document.querySelector('.slider');
const before = document.querySelector('.before');
const beforeImage = before.querySelector('img');
const change = document.querySelector('.change');
const body = document.body;

let isActive = false;

const updateImageWidth = () => {
    let width = slider.offsetWidth;
    beforeImage.style.width = `${width}px`;

    const currentLeft = parseFloat(change.style.left) || 0;
    const maxLeft = width - change.offsetWidth;

    if (currentLeft > maxLeft) {
        change.style.left = `${maxLeft}px`;
        before.style.clip = `rect(0, ${maxLeft}px, auto, 0)`;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    updateImageWidth();
});

window.addEventListener('resize', () => {
    updateImageWidth();
});

document.addEventListener('DOMContentLoaded', () => {
    let width = slider.offsetWidth;
    beforeImage.style.width = `${width}px`;
});

change.addEventListener('mousedown', () => {
    isActive = true;
});

body.addEventListener('mouseup', () => {
    isActive = false;
});

body.addEventListener('mouseleave', () => {
    isActive = false;
});

const beforeAfterSlider = (x) => {
    let shift = Math.max(0, Math.min(x, slider.offsetWidth));
    before.style.width = '100%'
    before.style.clip = `rect(0, ${shift}px, auto, 0)`;
    change.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
};

body.addEventListener('mousemove', (e) => {
    if (!isActive) {
        return;
    }

    let x = e.pageX;
    x -= slider.getBoundingClientRect().left;
    beforeAfterSlider(x);
    pauseEvents(e);
});

change.addEventListener('touchstart', () => {
    isActive = true;
});

body.addEventListener('touchend', () => {
    isActive = false;
});

body.addEventListener('touchcancel', () => {
    isActive = false;
});

body.addEventListener('touchmove', (e) => {
    if (!isActive) {
        return;
    }

    let x;

    let i;
    for (i = 0; i < e.changedTouches.length; i++) {
        x = e.changedTouches[i].pageX;
    }

    x -= slider.getBoundingClientRect().left;

    beforeAfterSlider(x);
    pauseEvents(e);
});