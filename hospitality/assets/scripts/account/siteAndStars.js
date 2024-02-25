const siteInput = document.getElementById('siteInput')
const siteCheckbox = document.getElementById('noSite')

const chooseStars = document.querySelectorAll('.choose_star')
const starsQntInput = document.getElementById('starsQntInput')
const noStars = document.getElementById('noStars')

siteCheckbox.addEventListener('change', () => {
    if (siteCheckbox.checked) {
        siteInput.style.pointerEvents = 'none'
        siteInput.value = ''
        siteInput.removeAttribute('data-input-required')
        siteInput.classList.remove('error')
    } else {
        siteInput.style.pointerEvents = 'auto'
        siteInput.setAttribute('data-input-required', 'required')
    }
})

chooseStars.forEach((star) => {
    star.addEventListener('mouseover', () => {
        const starId = star.getAttribute('data-stars-qnt')

        for (let i = 1; i <= Number(starId); i++) {
            const iterStar = document.querySelector(`[data-stars-qnt="${i}"]`)
            iterStar.classList.add('choose_star__hover')
        }
    })

    star.addEventListener('mouseout', () => {
        chooseStars.forEach((el) => {
            el.classList.remove('choose_star__hover')
        })
    })

    star.addEventListener('click', () => {
        const starId = star.getAttribute('data-stars-qnt')
        starsQntInput.value = starId.toString()

        for (let i = 1; i <= Number(starId); i++) {
            const iterStar = document.querySelector(`[data-stars-qnt="${i}"]`)
            iterStar.classList.add('choose_star__active')
        }
    })
})

noStars.addEventListener('change', () => {
    if (noStars.checked) {
        chooseStars.forEach((el) => {
            el.style.pointerEvents = 'none'
            el.classList.remove('choose_star__active')
        })

        starsQntInput.value = ''
    } else {
        chooseStars.forEach((el) => {
            el.style.pointerEvents = 'auto'
        })
    }
})