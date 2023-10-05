function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function updateActiveMenuElement() {
    var menuElements = document.querySelectorAll('.article-nav-list span');
    var menuSubtitles = document.querySelectorAll('.article-nav-list ul li');
    var articleHeadings = document.querySelectorAll('.article__main h2');
    var articleSubheadings = document.querySelectorAll('.article__main h3');
    var articleNavList = document.querySelector('.article-nav-list ul');

    var ulVisible = false;

    articleSubheadings.forEach(function (subheading, index) {
        if (!ulVisible && isElementInViewport(subheading) && index === 0) {
            ulVisible = true;
            articleNavList.style.display = 'block';
        }
    });

    articleHeadings.forEach(function (heading, index) {
        if (isElementInViewport(heading)) {
            menuElements.forEach(function (menuElement) {
                menuElement.classList.remove('active-article');
            });

            menuSubtitles.forEach(function (subtitle) {
                subtitle.classList.remove('active-article');
            });

            menuElements[index].classList.add('active-article');
        }
    });

    articleSubheadings.forEach(function (subheading, index) {
        if (isElementInViewport(subheading)) {
            menuSubtitles.forEach(function (subtitle) {
                subtitle.classList.remove('active-article');
            });

            menuSubtitles[index].classList.add('active-article');
        }
    });
}

window.addEventListener('scroll', updateActiveMenuElement);

window.addEventListener('load', updateActiveMenuElement);

document.addEventListener('DOMContentLoaded', function () {
    var articleNavList = document.querySelector('.article-nav-list ul');
    articleNavList.style.display = 'none';
});