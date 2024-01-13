function getGid(btnList) {
    btnList.forEach((el) => {
        el.addEventListener('click', () => {
            fetchGidsData(el.getAttribute('data-route'))
        })
    })
}

function fetchGidsData(routeId) {
    const mainGuidesList = document.getElementById('mainGuidesList')
    const guidesPagination = document.getElementById('guidesPagination')
    mainGuidesList.innerHTML = ''
    guidesPagination.innerHTML = ''
    let thisUrl = new URL(apiEndpoint + '/routes' + `/${routeId}` + '/guides')
    thisUrl.searchParams.append('api_key', apiKey)

    try {
        let response = fetch(thisUrl, { method: 'GET' })
            .then(resp => resp.json())
            .then(data => {
                for (let i = 0; i < 5; i++) {
                    const trElement = document.createElement('tr')

                    trElement.setAttribute('data-aos', 'zoom-in')
                    trElement.setAttribute('data-aos-once', 'true')

                    const tdTravelName = document.createElement('td')
                    tdTravelName.classList.add('text-start')
                    tdTravelName.setAttribute('data-row', 'gidFio')
                    tdTravelName.textContent = `${data[i]['name']}`
                    trElement.appendChild(tdTravelName)

                    const tdLanguage = document.createElement('td')
                    tdLanguage.classList.add('text-center')
                    tdLanguage.textContent = `${data[i]['language']}`
                    trElement.appendChild(tdLanguage)

                    const tdWorkExperience = document.createElement('td')
                    tdWorkExperience.classList.add('text-center')
                    tdWorkExperience.setAttribute('data-row', 'stage')
                    tdWorkExperience.textContent = `${data[i]['workExperience']} года`
                    trElement.appendChild(tdWorkExperience)

                    const tdPricePerHour = document.createElement('td')
                    tdPricePerHour.classList.add('text-center')
                    tdPricePerHour.textContent = `${data[i]['pricePerHour']} ₽ / час`
                    trElement.appendChild(tdPricePerHour)

                    const tdButton = document.createElement('td')
                    tdButton.classList.add('text-end')

                    const buttonElement = document.createElement('button')
                    buttonElement.setAttribute('onclick', 'openConfirmModal(this)')
                    buttonElement.setAttribute('data-action', 'chooseEvent')
                    buttonElement.setAttribute('data-guide', `${data[i]['id']}`)
                    buttonElement.setAttribute('role', 'button')
                    buttonElement.setAttribute('type', 'button')
                    buttonElement.classList.add('text-center', 'text-black', 'bg-main-color', 'border-0', 'px-3', 'py-1', 'rounded-5')
                    buttonElement.textContent = 'Выбрать'

                    tdButton.appendChild(buttonElement)
                    trElement.appendChild(tdButton)

                    mainGuidesList.appendChild(trElement)
                }

                getPagination(Math.ceil(data.length / 5), 'guidesPagination', 'guides')
            })
    } catch (error) {
        console.error('Error:', error)
    }
}