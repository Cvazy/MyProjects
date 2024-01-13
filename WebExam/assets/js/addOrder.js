const addOrderForm = document.getElementById('addOrderForm')
addOrderForm.addEventListener('submit', orderOption)
const confirmEvent = document.getElementById('confirmEvent')

async function orderOption (event) {
    event.preventDefault()
    closeModal(confirmEvent)

    const data = serializeForm(event.target)

    const { status, error } = await sendData(data)

    if (status === 200) {
        onSuccess(event.target)
    } else {
        onError(error)
    }
}

function serializeForm(form) {
    const formData = new FormData(form)
    const data = {}

    formData.forEach((value, key) => {
        data[key] = value
    })

    return data
}

async function sendData(data) {
    let thisUrl = new URL(apiEndpoint + '/orders')
    thisUrl.searchParams.append('api_key', apiKey)

    return await fetch(thisUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            date: data['date'],
            duration: Number(data['duration'].split(' ')[0]),
            guide_id: Number(data['guide_id']),
            id: Math.ceil(Math.random() * 1000),
            optionFirst: Number(data['optionFirst']) ? data['optionFirst'] : 0,
            optionSecond: Number(data['optionSecond']) ? data['optionSecond'] : 0,
            persons: Number(data['persons']),
            price: Number(data['price']),
            route_id: Number(data['route_id']),
            student_id: Math.ceil(Math.random() * 10000000),
            time: data['time']
        })
    })
}

function onSuccess() {
    alert('Ваша заявка отправлена!')
}

function onError(error) {
    alert(`Произошла ошибка ${error}`)
}