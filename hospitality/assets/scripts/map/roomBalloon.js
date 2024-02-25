setTimeout(() => {
    ymaps.ready(init)

    function init() {
        const myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        })

        const placemark1 = new ymaps.Placemark([55.77, 37.73], {
            balloonContentBody: `
                <div class="balloon">
                <div class="balloon__wrapper">
                <div class="balloon_image">
                <img class="d-block" src="assets/images/hotels/hotel1.jpg" alt="Hotel" loading="lazy">
</div>

<div class="flex-col flex-items-start gap-1px w-full">
<div class="flex-items-center justify-between w-full gap-8px">
<div class="flex-items-center gap-4px">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
</div>

<div class="rating">
                            <div class="text-white xs-text text-bold">
                              8,9
                            </div>
                          </div>
</div>

<p class="m-0 xs-text text-dark">
Гостиница Золотое Кольцо
</p>

<p class="m-0 sm-text text-dark" style="font-weight: 600">10 960 ₽</p>
</div>
</div>
</div>
              `
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'assets/images/icons/map_marker.svg',
            iconImageSize: [48, 52],
            iconImageOffset: [-15, -15],
            iconContentLayout: ymaps.templateLayoutFactory.createClass(
                '<div class="custom-marker"></div>'
            )
        })

        myMap.geoObjects.add(placemark1)
        placemark1.balloon.open()

        const zoomInButton = document.getElementById('zoomInButton')
        const zoomOutButton = document.getElementById('zoomOutButton')

        zoomInButton.addEventListener('click', function() {
            myMap.setZoom(myMap.getZoom() + 1, { duration: 300 })
        })

        zoomOutButton.addEventListener('click', function() {
            myMap.setZoom(myMap.getZoom() - 1, { duration: 300 })
        })
    }
}, 500)