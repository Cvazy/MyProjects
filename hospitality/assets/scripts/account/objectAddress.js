ymaps.ready(init)

function init() {
    const myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 10
    })

    myMap.controls.remove('searchControl')
    myMap.controls.remove('trafficControl')
    myMap.controls.remove('typeSelector')
    myMap.controls.remove('zoomControl')
    myMap.controls.remove('rulerControl')
    myMap.controls.remove('geolocationControl')
    myMap.controls.remove('fullscreenControl')

    function setMarker(address) {
        ymaps.geocode(address, {
            results: 1
        }).then(function (res) {
            const firstGeoObject = res.geoObjects.get(0),
                coords = firstGeoObject.geometry.getCoordinates()

            myMap.geoObjects.removeAll()
            const customMarker = new ymaps.Placemark(coords, {}, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: 'assets/images/icons/map_marker.svg',
                iconImageSize: [48, 52],
                iconImageOffset: [-15, -15],
                draggable: true,
                iconContentLayout: ymaps.templateLayoutFactory.createClass(
                    '<div class="custom-marker"></div>'
                )
            })
            myMap.geoObjects.add(customMarker)
            myMap.setCenter(coords)

            customMarker.events.add('dragend', function (e) {
                const newCoords = customMarker.geometry.getCoordinates()
                console.log('Новые координаты метки:', newCoords)
            })
        })
    }

    const cityInput = document.querySelector('input[name="city"]')
    const streetInput = document.querySelector('input[name="street"]')
    const houseInput = document.querySelector('input[name="house"]')
    const corpusInput = document.querySelector('input[name="corpus"]')

    cityInput.addEventListener('change', function () {
        setMarker(cityInput.value + ", " + streetInput.value + ", " + houseInput.value + ", " + corpusInput.value)
    })

    streetInput.addEventListener('change', function () {
        setMarker(cityInput.value + ", " + streetInput.value + ", " + houseInput.value + ", " + corpusInput.value)
    })

    houseInput.addEventListener('change', function () {
        setMarker(cityInput.value + ", " + streetInput.value + ", " + houseInput.value + ", " + corpusInput.value)
    })

    corpusInput.addEventListener('change', function () {
        setMarker(cityInput.value + ", " + streetInput.value + ", " + houseInput.value + ", " + corpusInput.value)
    })
}