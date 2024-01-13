const timerElement = document.querySelector('.timer');
let timeInSeconds = timerElement.getAttribute('data-interval') * 60;

function updateTimer() {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    timerElement.textContent = `00:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    timeInSeconds--;

    if (timeInSeconds < 0) {
        clearInterval(timerInterval);
    }
}

const timerInterval = setInterval(updateTimer, 1000);