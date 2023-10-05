function toggleMenu() {
    var menu = document.querySelector('.menu');
    var menuButton = document.querySelector('.header__menu img');

    if (menu.classList.contains('active')) {
        menu.style.opacity = '0';
        setTimeout(function () {
            menu.style.display = 'none';
            menu.style.pointerEvents = 'none';
        }, 500);
        menuButton.src = 'img/menu.svg';
        menuButton.style.width = '35px';
    } else {
        menu.style.display = 'block';
        setTimeout(function () {
            menu.style.opacity = '1';
        }, 0);
        menu.style.pointerEvents = 'auto';
        menuButton.src = 'img/cross.svg';
        menuButton.style.width = '25px';
    }

    menu.classList.toggle('active');
}

var menuButton = document.querySelector('.header__menu img');
var up_arrow = document.querySelector('.up_arrow');
menuButton.addEventListener('click', toggleMenu);
up_arrow.addEventListener('click', toggleMenu);


const addButtonList = document.querySelectorAll('.categories .circle');

addButtonList.forEach(function (addButton) {
    addButton.addEventListener('click', function () {
        const category1 = document.createElement('a');
        category1.href = '#';
        category1.className = 'categories__item';
        category1.textContent = 'Category';

        const category2 = document.createElement('a');
        category2.href = '#';
        category2.className = 'categories__item';
        category2.textContent = 'Category';

        const categoriesBlock = addButton.parentElement;
        categoriesBlock.insertBefore(category1, addButton);
        categoriesBlock.insertBefore(category2, addButton);

        categoriesBlock.removeChild(addButton);
    });
});


const headerHeight = document.querySelector('header').offsetHeight;

const scrollButtons = document.querySelectorAll('.scroll-button');

scrollButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const targetId = button.getAttribute('data-target');
        const targetBlock = document.getElementById(`section${targetId}`);

        if (targetBlock) {
            const offsetTop = targetBlock.offsetTop - (window.innerHeight * 0.20) - headerHeight;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

const scrollCategory = document.querySelectorAll('.category-item');

scrollCategory.forEach(function (button) {
    button.addEventListener('click', function () {
        const targetId = button.getAttribute('data-category');
        const targetBlock = document.getElementById(`category${targetId}`);

        if (targetBlock) {
            const topOffset = targetBlock.getBoundingClientRect().top - headerHeight;

            window.scrollTo({
                top: window.scrollY + topOffset,
                behavior: 'smooth'
            });
        }
    });
});


const scrollNavigation = document.querySelectorAll('.article-nav-item');

scrollNavigation.forEach(function (button) {
    button.addEventListener('click', function () {
        const targetId = button.getAttribute('data-nav');
        const targetBlock = document.getElementById(`nav${targetId}`);

        if (targetBlock) {
            const topOffset = targetBlock.getBoundingClientRect().top - headerHeight;

            window.scrollTo({
                top: window.scrollY + topOffset,
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const btnType1 = document.getElementById("btn_type1");
    const btnType2 = document.getElementById("btn_type2");
    const btnType3 = document.getElementById("btn_type3");
    const btnType4 = document.getElementById("btn_type4");

    const blockType1 = document.getElementById("block_type1");
    const blockType2 = document.getElementById("block_type2");
    const blockType3 = document.getElementById("block_type3");
    const blockType4 = document.getElementById("block_type4");

    btnType1.addEventListener("click", function () {
        blockType3.style.display = "none";
        blockType2.style.display = "none";
        blockType4.style.display = "none";

        blockType1.style.display = "block";

        btnType1.classList.add("price_wrapper__item_active");
        btnType2.classList.remove("price_wrapper__item_active");
        btnType2.classList.add("price_wrapper__item");
        btnType3.classList.remove("price_wrapper__item_active");
        btnType3.classList.add("price_wrapper__item");
        btnType4.classList.remove("price_wrapper__item_active");
        btnType4.classList.add("price_wrapper__item");
    });

    btnType2.addEventListener("click", function () {
        blockType1.style.display = "none";
        blockType3.style.display = "none";
        blockType4.style.display = "none";

        blockType2.style.display = "block";

        btnType2.classList.add("price_wrapper__item_active");
        btnType1.classList.remove("price_wrapper__item_active");
        btnType1.classList.add("price_wrapper__item");
        btnType3.classList.remove("price_wrapper__item_active");
        btnType3.classList.add("price_wrapper__item");
        btnType4.classList.remove("price_wrapper__item_active");
        btnType4.classList.add("price_wrapper__item");
    });

    btnType3.addEventListener("click", function () {
        blockType1.style.display = "none";
        blockType2.style.display = "none";
        blockType4.style.display = "none";

        blockType3.style.display = "block";

        btnType3.classList.add("price_wrapper__item_active");
        btnType1.classList.remove("price_wrapper__item_active");
        btnType1.classList.add("price_wrapper__item");
        btnType2.classList.remove("price_wrapper__item_active");
        btnType2.classList.add("price_wrapper__item");
        btnType4.classList.remove("price_wrapper__item_active");
        btnType4.classList.add("price_wrapper__item");
    });

    btnType4.addEventListener("click", function () {
        blockType1.style.display = "none";
        blockType2.style.display = "none";
        blockType3.style.display = "none";

        blockType4.style.display = "block";

        btnType4.classList.add("price_wrapper__item_active");
        btnType1.classList.remove("price_wrapper__item_active");
        btnType1.classList.add("price_wrapper__item");
        btnType2.classList.remove("price_wrapper__item_active");
        btnType2.classList.add("price_wrapper__item");
        btnType3.classList.remove("price_wrapper__item_active");
        btnType3.classList.add("price_wrapper__item");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".faq__wrapper__item");

    items.forEach(function (item) {
        const arrow = item.querySelector(".arrow");
        const hiddenParagraph = item.querySelector(".hidden");

        item.addEventListener("click", function () {
            arrow.classList.toggle("rotate");
            hiddenParagraph.classList.toggle("show");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-menu__item");

    navItems.forEach(function (item) {
        const arrow = item.querySelector(".nav-arrow");
        const hiddenList = item.querySelector(".ul-hidden");

        item.addEventListener("click", function () {
            arrow.classList.toggle("rotate");
            hiddenList.classList.toggle("show-flex");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".article-nav");
    const arrow = nav.querySelector(".article-arrow");
    const hiddenList = document.querySelector(".article-nav-list");

    nav.addEventListener("click", function () {
        arrow.classList.toggle("rotate");
        hiddenList.classList.toggle("ul-hidden");

        if (window.innerWidth < 980) {
            nav.classList.toggle("bt-border-none");
        }
    });
});


function applyClassBasedOnScreenSize() {
    const screenWidth = window.innerWidth;
    const nav = document.querySelector('.article-nav');
    const navList = document.querySelector('.article-nav-list');

    screenWidth < 980 ? nav.classList.add('bt-border-none') : nav.classList.remove('bt-border-none');

    screenWidth < 980 ? navList.classList.add('ul-hidden') : navList.classList.remove('ul-hidden');
}

window.addEventListener('load', applyClassBasedOnScreenSize);
window.addEventListener('resize', applyClassBasedOnScreenSize);


const buttons = document.querySelectorAll('.btn-type3');
const paragraph = document.getElementById('text');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.classList.add('disabled');
        });
        button.classList.remove('disabled');
        const buttonText = button.getAttribute('data-text');
        paragraph.textContent = buttonText;
    });
});


function updateCategoryClasses() {
    const categoryItems = document.querySelectorAll('.category-item');
    const blocks = document.querySelectorAll('.block');

    let scrolledToBlock = false;

    blocks.forEach((block, index) => {
        const span = categoryItems[index].querySelector('span');
        const blockRect = block.getBoundingClientRect();

        if (blockRect.top <= window.innerHeight && blockRect.bottom >= 0 && !scrolledToBlock) {
            span.classList.add('scroll-category');
            scrolledToBlock = true;
        } else {
            span.classList.remove('scroll-category');
        }
    });
}

window.addEventListener('scroll', updateCategoryClasses);

updateCategoryClasses();


const unknownContainer = document.querySelector('.unknown-container');
const mainChat = document.querySelector('.main-chat');
const chatTop = document.querySelector('.chat-top');
const messageBlocks = document.querySelectorAll('.message');
const numVisibleBlocks = 2;
let scrolling = false;

function syncScroll() {
    const scrollPosition = window.scrollY;
    const containerOffsetTop = unknownContainer.offsetTop;
    const maxChatScroll = mainChat.scrollHeight - mainChat.clientHeight + 350;
    const relativeScrollPosition = scrollPosition - containerOffsetTop;
    const visibleFraction = Math.min(relativeScrollPosition / (containerOffsetTop + mainChat.clientHeight), 1);
    const scrollTo = maxChatScroll * visibleFraction * 3;
    mainChat.scrollTop = scrollTo;

    if (relativeScrollPosition >= 0) {
        chatTop.style.transform = 'translate3d(0px, -50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(5deg) skew(0deg, 0deg)';
    } else {
        chatTop.style.transform = '';
    }

    const unknownContainerHeight = unknownContainer.offsetHeight;
    const mainChatHeight = mainChat.offsetHeight;

    let totalBlockHeight = 0;
    const messageBlockHeights = [];

    messageBlocks.forEach((block) => {
        const blockHeight = block.offsetHeight;
        totalBlockHeight += blockHeight;
        messageBlockHeights.push(blockHeight);
    });

    const startIndex = findStartIndex(totalBlockHeight, scrollTo, messageBlockHeights);
    const endIndex = Math.min(startIndex + numVisibleBlocks, messageBlocks.length);

    messageBlocks.forEach((block, index) => {
        if (index >= startIndex && index < endIndex) {
            block.style.transition = 'opacity 0.5s ease';
            block.style.opacity = 1;
        }
    });
}

function findStartIndex(totalHeight, scrollTo, blockHeights) {
    let currentHeight = 0;
    for (let i = 0; i < blockHeights.length; i++) {
        currentHeight += blockHeights[i];
        if (currentHeight >= scrollTo) {
            return i;
        }
    }
    return 0;
}

function handleScroll() {
    if (!scrolling) {
        requestAnimationFrame(() => {
            syncScroll();
            scrolling = false;
        });

        scrolling = true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    syncScroll();
    window.addEventListener('scroll', handleScroll);
});

unknownContainer.addEventListener('DOMSubtreeModified', syncScroll);
mainChat.addEventListener('DOMSubtreeModified', syncScroll);
