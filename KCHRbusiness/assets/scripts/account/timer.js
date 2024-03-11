let timerInterval

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.textContent = "Повторная отправка через: " + minutes + " мин. " + seconds + " сек."

        if (--timer < 0) {
            timer = duration
        }
    }, 1000)
}

function resetTimer(duration, display) {
    clearInterval(timerInterval)
    startTimer(duration, display)
}