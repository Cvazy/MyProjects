const buySellBtn = document.getElementById('buy-sell')
const spanBuy = document.getElementById('shop_action')
const buySellUl = document.querySelector('.buy-sell')
const dashboard = document.querySelector('.dashboard')
const boardNav = document.querySelector('.board-nav')
const listLi = buySellUl.querySelectorAll('li')
const selectors = document.querySelectorAll('.select__group')
const footerTitle = document.querySelectorAll('.footer__title')
const sideBar = document.querySelector('.sidebar')
const sideBarClose = document.querySelector('.sidebar__close')
const settingsBtn = document.querySelector('.settings')
const typeInput = document.getElementById('type')
const onlineInput = document.getElementById('online')
const verifiedInput = document.getElementById('verified')

buySellBtn.addEventListener('click', () => {
    buySellUl.classList.toggle('hidden')
    buySellBtn.querySelector('.sidebar__arrow').classList.toggle('rotate-180')

    listLi.forEach((li) => {
        li.addEventListener('click', () => {
            buySellBtn.querySelector('.sidebar__span').textContent = li.textContent
            typeInput.value = li.textContent.toLowerCase()
            spanBuy.textContent = li.getAttribute('data-action')
        })
    })
})

selectors.forEach((sel) => {
    sel.addEventListener('click', () => {
        sel.classList.toggle('selector__active')

        const dataParams = sel.getAttribute('data-params')

        if (dataParams === 'online') {
            onlineInput.value = (onlineInput.value === 'true') ? 'false' : 'true'
        } else if (dataParams === 'verify')  {
            verifiedInput.value = (verifiedInput.value === 'true') ? 'false' : 'true'
        }
    })
})

footerTitle.forEach((title) => {
    title.addEventListener('click', () => {
        title.querySelector('.sidebar__arrow').classList.toggle('rotate-180')
        title.nextElementSibling.classList.toggle('md_hidden')
    })
})

settingsBtn.addEventListener('click', () => {
    sideBar.classList.toggle('block')
    dashboard.classList.add('blur')
    boardNav.classList.add('blur')
})

sideBarClose.addEventListener('click', () => {
    sideBar.classList.remove('block')
    dashboard.classList.remove('blur')
    boardNav.classList.remove('blur')
})