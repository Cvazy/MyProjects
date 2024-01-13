const createAddress = document.getElementById('createAddress')
const addressesList = document.getElementById('addressList')
const countAddresses = document.getElementById('countAddresses')
const noAddresses = document.querySelector('.no_addresses')
const addressesBlock = document.querySelector('.addresses_list')

createAddress.addEventListener('click', () => {
    const countAddressesElements = addressesList.querySelectorAll('.trade__item').length + 1

    countAddresses.innerText = countAddressesElements

    noAddresses.classList.add('hidden')
    addressesBlock.classList.remove('hidden')
    addressesBlock.classList.add('d-block')

    const newElement = document.createElement('div')
    newElement.className = 'trade__item no-hover'

    const wrapperElement = document.createElement('div')
    wrapperElement.className = 'trade__item__wrapper'

    const randomAccountNumber = generateRandomNumber(1_000_000_000_000_000_000, 9_999_999_999_999_999_999)

    const accountElement1 = createAccountElement('Account number', randomAccountNumber)
    const accountElement2 = createAccountElement('Received sum', '0 BTC')

    wrapperElement.appendChild(accountElement1)
    wrapperElement.appendChild(accountElement2)
    newElement.appendChild(wrapperElement)

    addressesList.appendChild(newElement)
})

function createAccountElement(label, value) {
    const accountElement = document.createElement('div')
    accountElement.className = 'account-element'

    const spanElement = document.createElement('span')
    spanElement.textContent = label

    const valueElement = document.createTextNode(value)

    accountElement.appendChild(spanElement)
    accountElement.appendChild(valueElement)

    return accountElement
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}