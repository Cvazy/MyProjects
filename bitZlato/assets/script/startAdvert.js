const startBtn = document.querySelector('.start-adverts')
const tokenList = document.querySelectorAll('.token_nav li')

tokenList.forEach((item) => {
    item.addEventListener('click', () => {
        tokenList.forEach((i) => i.classList.remove('active-token'))
        item.classList.add('active-token')
    })
})

startBtn.addEventListener('click', () => {
    startBtn.classList.toggle('bg-light-blue')

    const startCircle = startBtn.querySelector('div')
    const startText = startBtn.querySelector('span')

    startCircle.classList.toggle('bg-dark-grey')

    if (startText.innerText === 'Start all adverts') {
        startText.innerText = 'Pause all adverts'
    } else {
        startText.innerText = 'Start all adverts'
    }
})