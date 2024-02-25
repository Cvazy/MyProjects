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

        const placemark2 = new ymaps.Placemark([55.77, 37.63], {
            balloonContentBody: `
                <div class="balloon">
                <div class="balloon__wrapper">
                <div class="balloon_image">
                <img class="d-block" src="assets/images/hotels/hotel5.jpg" alt="Hotel" loading="lazy">
</div>

<div class="flex-col flex-items-start gap-1px w-full">
<div class="flex-items-center justify-between w-full gap-8px">
<div class="flex-items-center gap-4px">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
</div>

<div class="rating">
                            <div class="text-white xs-text text-bold">
                              9,1
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

        const placemark3 = new ymaps.Placemark([55.71, 37.23], {
            balloonContentBody: `
                <div class="balloon">
                <div class="balloon__wrapper">
                <div class="balloon_image">
                <img class="d-block" src="assets/images/hotels/hotel6.jpg" alt="Hotel" loading="lazy">
</div>

<div class="flex-col flex-items-start gap-1px w-full">
<div class="flex-items-center justify-between w-full gap-8px">
<div class="flex-items-center gap-4px">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
</div>

<div class="rating">
                            <div class="text-white xs-text text-bold">
                              5,9
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

        const placemark4 = new ymaps.Placemark([55.87, 37.33], {
            balloonContentBody: `
                <div class="balloon">
                <div class="balloon__wrapper">
                <div class="balloon_image">
                <img class="d-block" src="assets/images/hotels/hotel2.jpg" alt="Hotel" loading="lazy">
</div>

<div class="flex-col flex-items-start gap-1px w-full">
<div class="flex-items-center justify-between w-full gap-8px">
<div class="flex-items-center gap-4px">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
</div>

<div class="rating">
                            <div class="text-white xs-text text-bold">
                              9,9
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

        const placemark5 = new ymaps.Placemark([55.91, 37.23], {
            balloonContentBody: `
                <div class="balloon">
                <div class="balloon__wrapper">
                <div class="balloon_image">
                <img class="d-block" src="assets/images/hotels/hotel7.jpg" alt="Hotel" loading="lazy">
</div>

<div class="flex-col flex-items-start gap-1px w-full">
<div class="flex-items-center justify-between w-full gap-8px">
<div class="flex-items-center gap-4px">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
</div>

<div class="rating">
                            <div class="text-white xs-text text-bold">
                              6,9
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

        const placemark6 = new ymaps.Placemark([55.37, 37.33], {
            balloonContentBody: `
                <div class="balloon">
                <div class="balloon__wrapper">
                <div class="balloon_image">
                <img class="d-block" src="assets/images/hotels/hotel6.jpg" alt="Hotel" loading="lazy">
</div>

<div class="flex-col flex-items-start gap-1px w-full">
<div class="flex-items-center justify-between w-full gap-8px">
<div class="flex-items-center gap-4px">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
<img width="16" class="d-block" src="assets/images/icons/star.svg" alt="Star" loading="lazy">
</div>

<div class="rating">
                            <div class="text-white xs-text text-bold">
                              9,9
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
        myMap.geoObjects.add(placemark2)
        myMap.geoObjects.add(placemark3)
        myMap.geoObjects.add(placemark4)
        myMap.geoObjects.add(placemark5)
        myMap.geoObjects.add(placemark6)
        placemark1.balloon.open()
        placemark2.balloon.open()
        placemark3.balloon.open()
        placemark4.balloon.open()
        placemark5.balloon.open()
        placemark6.balloon.open()
    }
}, 500)