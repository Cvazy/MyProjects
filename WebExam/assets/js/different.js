function innerSpan(text) {
    const spansList = document.querySelectorAll('span[data-span="selectPlace"]')

    spansList.forEach((el) => {
        el.innerText = text
    })
}

function scrollToGids() {
    gidsList.scrollIntoView(true)
}

function scrollToGidsWithText(btn) {
    const inputTravel = btn.parentElement.parentElement.querySelector('[data-row="travelName"]').textContent.trim()

    innerSpan(inputTravel)

    gidsList.classList.remove('d-none')
    gidsList.classList.add('d-flex')

    gidsList.scrollIntoView(true)
}

function searchByTo(input, sign) {
    const gidsStageRows = document.querySelectorAll('[data-row="stage"]')

    input.addEventListener('input', () => {
        gidsStageRows.forEach((el) => {
            const gidStage = Number(
                Array.from(el.textContent).splice(0, 2).toString().trim().split(',').join('')
            )

            if (sign === 'by') {
                if (gidStage >= input.value) {
                    el.parentElement.classList.remove('d-none')
                } else {
                    el.parentElement.classList.add('d-none')
                }
            } else if (sign === 'to') {
                if (gidStage <= input.value) {
                    el.parentElement.classList.remove('d-none')
                } else {
                    el.parentElement.classList.add('d-none')
                }
            }

            if (!input.value) {
                el.parentElement.classList.remove('d-none')
            }
        })
    })
}