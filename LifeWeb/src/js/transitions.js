var titles = ["ДИЗАЙН САЙТОВ", "ПРОДВИЖЕНИЕ <br> САЙТОВ", "РАЗРАБОТКА САЙТОВ"];
var dop = ['ДЛЯ ТВОЕГО БИЗНЕСА', 'ДЛЯ ТВОЕГО БИЗНЕСА', 'ДЛЯ ТВОЕГО БИЗНЕСА'];
var descriptions = [
    "Мы разрабатываем уникальный дизайн для сайтов, <br> который поможет привлечь больше посетителей.",
    "Мы поможем вашему сайту занять лидирующие позиции <br> в поисковых системах и привлечь больше клиентов.",
    "Мы предоставляем услуги по созданию качественных <br> и удобных сайтов любой сложности."
];

var currentIndex = 0;
var header = document.getElementById("header");
var business = document.getElementById("business");
var paragraph = document.getElementById("paragraph");

function changeContent() {
    header.style.opacity = "0";
    business.style.opacity = "0";
    paragraph.style.opacity = "0";

    setTimeout(function() {
        header.innerHTML = titles[currentIndex];
        business.innerHTML = dop[currentIndex];
        paragraph.innerHTML = descriptions[currentIndex];

        header.style.opacity = "1";
        business.style.opacity = "1";
        paragraph.style.opacity = "1";
    }, 500);

    currentIndex = (currentIndex + 1) % titles.length;
}

setInterval(changeContent, 5000);