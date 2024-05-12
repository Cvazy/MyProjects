ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map("map", {
    center: [54.274718, 48.266166],
    zoom: 15,
    controls: [],
    type: "yandex#map",
  });

  myMap.behaviors.disable("scrollZoom");

  const customMarker = new ymaps.Placemark(
    [54.274718, 48.266166],
    {},
    {
      iconLayout: "default#imageWithContent",
      iconImageHref: "assets/images/icons/map_marker.svg",
      iconImageSize: [48, 52],
      iconImageOffset: [-15, -15],
      draggable: false,
      iconContentLayout: ymaps.templateLayoutFactory.createClass(
        '<div class="custom-marker"></div>',
      ),
    },
  );

  const zoomInButton = document.getElementById("zoomInButton");
  const zoomOutButton = document.getElementById("zoomOutButton");

  zoomInButton.addEventListener("click", function () {
    myMap.setZoom(myMap.getZoom() + 1, { duration: 300 });
  });

  zoomOutButton.addEventListener("click", function () {
    myMap.setZoom(myMap.getZoom() - 1, { duration: 300 });
  });

  myMap.geoObjects.add(customMarker);
}
