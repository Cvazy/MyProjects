document.addEventListener("DOMContentLoaded", function() {
    const buttonOne = document.getElementById("button-one");
    const buttonTwo = document.getElementById("button-two");

    document.querySelector(".type-btn").addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            buttonOne.classList.toggle("inactive");
            buttonTwo.classList.toggle("inactive");
        }
    });
});


const selection = document.querySelector('.selection');
const selectionActive = document.querySelector('.selection-active');
const choiceTitleItems = document.querySelectorAll('.selection-active__item');
const selectionArrow = selection.querySelector('img');

choiceTitleItems[0].querySelector('.choice').style.display = 'inline-block';

selection.addEventListener('click', () => {
    selectionActive.classList.toggle('show-flex');
});

choiceTitleItems.forEach((choiceTitleItem) => {
    choiceTitleItem.addEventListener('click', () => {
        const choiceTitle = choiceTitleItem.querySelector('.choice-title').textContent;
        selection.querySelector('span').textContent = choiceTitle;

        selectionActive.classList.remove('show-flex');

        choiceTitleItems.forEach((item) => {
            const itemArrow = item.querySelector('.choice');
            if (item !== choiceTitleItem) {
                itemArrow.style.display = 'none';
            } else {
                itemArrow.style.display = 'inline-block';
            }
        });
    });
});


const allSeeButton = document.querySelector('.all-see');
const comparisonBlock = document.querySelector('.comparison__wrapper');

allSeeButton.addEventListener('click', function() {
    comparisonBlock.classList.toggle('expanded');

    if (comparisonBlock.classList.contains('expanded')) {
        allSeeButton.textContent = 'see short comparison';
        comparisonBlock.scrollIntoView({ behavior: 'smooth', block: 'end' });
    } else {
        allSeeButton.textContent = 'see full comparison';
        comparisonBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});