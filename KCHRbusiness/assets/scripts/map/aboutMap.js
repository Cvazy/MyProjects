setTimeout(() => {
    ymaps.ready(init)

    function init() {
        const myMap = new ymaps.Map('map', {
            center: [64, 100],
            zoom: 3,
            controls: [],
            slowDrag: true,
        })

        myMap.behaviors.disable('scrollZoom')

        const clusterer = new ymaps.Clusterer({
            preset: 'islands#invertedVioletClusterIcons',
            groupByCoordinates: false,
            clusterDisableClickZoom: true,
            clusterOpenBalloonOnClick: true
        })

        const points = []

        for (let i = 0; i < 100; i++) {
            const lat = 41 + Math.random() * 46
            const lon = 19 + Math.random() * 120

            const point = new ymaps.Placemark([lat, lon], {
                balloonContent: `
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
                iconLayout: 'default#image',
                iconImageHref: 'assets/images/icons/map_marker.svg',
                iconImageSize: [40, 40],
                iconImageOffset: [-20, -20]
            })

            points.push(point)
        }

        clusterer.add(points)
        myMap.geoObjects.add(clusterer)

        clusterer.events.add('click', function (e) {
            const cluster = e.get('target')
            const zoom = myMap.getZoom()
            const maxZoom = myMap.options.get('maxZoom')

            if (zoom < maxZoom) {
                myMap.setCenter(cluster.geometry.getCoordinates(), zoom + 1)
            }
        })

        clusterer.options.set({
            clusterIconColor: '#037DB1'
        })

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