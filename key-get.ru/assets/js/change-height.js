const otherContainer = document.querySelector('.other');
const otherItemsWrapper = document.querySelector('.other-items-wrapper');

function expandOtherContainer() {
    const wrapperHeight = otherItemsWrapper.offsetHeight;

    otherContainer.style.height = wrapperHeight + 'px';
}

expandOtherContainer();