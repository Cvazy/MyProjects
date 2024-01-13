const tipsBtn = document.getElementById('tipsBtn')
const tipsWindow = document.getElementById('tipsWindow')
const closeTips = document.querySelectorAll('.closeTips')
const labelsTip = document.querySelectorAll('.percent_label')
const inputTip = document.querySelector('[name="final_percent"]')

tipsBtn.addEventListener('click', () => {
    tipsWindow.classList.remove('hidden')
})

closeTips.forEach((close) => {
  close.addEventListener('click', () => {
      tipsWindow.classList.add('hidden')
  })
})

labelsTip.forEach((label) => {
    label.addEventListener('click', () => {
        const labelContent = label.querySelector('.value')
        inputTip.value = labelContent.textContent.trim()
    })
})