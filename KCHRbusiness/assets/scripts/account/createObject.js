const nextStepBtns = document.querySelectorAll('.next_step_btn')
const prevStepBtns = document.querySelectorAll('.prev_step_btn')
const menuContainer = document.querySelector('.create_obj__menu')
const createStepList = document.querySelectorAll('.create_obj__menu-item')

const createObjectForm = document.querySelector('.create_obj__main-top')

nextStepBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const nextBlockId = btn.getAttribute('data-next-step')
        const nextForm = document.querySelector(`[data-step-form="${nextBlockId}"]`)
        const nextStepBtn = document.querySelector(`[data-btn-step="${nextBlockId}"]`)
        const currentForm = document.querySelector('.current_form')

        const activeBlockId = (Number(nextBlockId) - 1).toString()
        const activeBlock = document.querySelector(`[data-btn-step="${activeBlockId}"]`)
        const activeBlockImg = activeBlock.querySelector('img')
        const activeBlockText = activeBlock.querySelector('.step_create_obj')

        const requiredInputs = currentForm.querySelectorAll('[data-input-required="required"]')
        const differentInputs = currentForm.querySelectorAll('input')
        let counter = 0

        requiredInputs.forEach((el) => {
            if (el.value === '') {
                counter++
                el.classList.add('error')
            }
        })

        differentInputs.forEach((el) => {
            if (el.classList.contains('error')) {
                counter++
            }
        })

        scrollTo(0, 0)
        menuContainer.scrollTo(activeBlock.offsetLeft + 100, 0);

        if (!counter) {
            createStepList.forEach((el) => {
                el.classList.remove('active_menu_step')
            })

            activeBlockText.classList.add('d-none-imp')
            activeBlockImg.classList.remove('d-none-imp')

            nextStepBtn.classList.add('active_menu_step')

            currentForm.classList.remove('current_form')
            currentForm.classList.add('d-none-imp')
            nextForm.classList.remove('d-none-imp')
            nextForm.classList.add('current_form')

            if (nextBlockId === '2') {
                const threeMinutes = 60 * 3,
                    display = document.getElementById('timer')
                resetTimer(threeMinutes, display)
            }
        }
    })
})

prevStepBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const prevBlockId = btn.getAttribute('data-prev-step')
        const prevForm = document.querySelector(`[data-step-form="${prevBlockId}"]`)
        const prevStepBtn = document.querySelector(`[data-btn-step="${prevBlockId}"]`)
        const currentForm = document.querySelector('.current_form')

        scrollTo(0, 0)

        createStepList.forEach((el) => {
            el.classList.remove('active_menu_step')
        })

        prevStepBtn.classList.add('active_menu_step')

        currentForm.classList.remove('current_form')
        currentForm.classList.add('d-none-imp')
        prevForm.classList.remove('d-none-imp')
        prevForm.classList.add('current_form')
    })
})

createObjectForm.addEventListener('submit', (event) => {
    const allRequiredInputs = document.querySelectorAll('[data-input-required="required"]')
    let counter = 0

    allRequiredInputs.forEach((el) => {
        if (el.value === '') {
            counter++
            el.classList.add('error')
        }
    })

    if (counter) {
        scrollTo(0, 0)
        event.preventDefault()
    }
})