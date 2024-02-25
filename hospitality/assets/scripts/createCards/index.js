function createIndexCard(data, indexParent) {
    const {
        hide,
        link,
        imageUrl,
        cityName,
        price,
        location,
        rating
    } = data;

    const indexParentElement = document.querySelector(`[data-block-offer=${indexParent}]`)

    const aTag = document.createElement('a');
    aTag.setAttribute('href', link || '#');
    aTag.setAttribute('class', `${hide ? 'd-none-imp' : ''} flex-grow not-decor-link`);

    const divCardWithBg = document.createElement('div');
    divCardWithBg.setAttribute('class', 'card_with_bg medium-card');

    const divCardWithBgWrapper = document.createElement('div');
    divCardWithBgWrapper.setAttribute('class', 'card_with_bg__wrapper');

    const divCardImage = document.createElement('div');
    divCardImage.setAttribute('class', 'card_image');

    const imgCardImagePicture = document.createElement('img');
    imgCardImagePicture.setAttribute('class', 'card_image__picture medium_image');
    imgCardImagePicture.setAttribute('src', imageUrl || '');
    imgCardImagePicture.setAttribute('alt', cityName || '');
    imgCardImagePicture.setAttribute('loading', 'lazy');

    const divCardDescription = document.createElement('div');
    divCardDescription.setAttribute('class', 'card_description gap-20px-imp');

    const divCardDescriptionWrapper1 = document.createElement('div');
    divCardDescriptionWrapper1.setAttribute('class', 'card_description__wrapper gap-5px-imp column-start');

    const h5Tag = document.createElement('h5');
    h5Tag.textContent = cityName || '';

    const pTag = document.createElement('p');
    pTag.innerHTML = `<span class="text-main-gray">от</span> ${price || ''} ₽`;

    const divCardDescriptionWrapper2 = document.createElement('div');
    divCardDescriptionWrapper2.setAttribute('class', 'card_description__wrapper small_desc');

    const divFlexItemsCenter1 = document.createElement('div');
    divFlexItemsCenter1.setAttribute('class', 'flex-items-center gap-8px');

    const divFlexItemsCenter2 = document.createElement('div');
    const imgLocation = document.createElement('img');
    imgLocation.setAttribute('src', 'assets/images/icons/location.svg');
    imgLocation.setAttribute('alt', 'Location');
    divFlexItemsCenter2.appendChild(imgLocation);

    const divTextMainGray = document.createElement('div');
    divTextMainGray.setAttribute('class', 'text-main-gray text-normal');
    divTextMainGray.textContent = location || '';

    const divMark = document.createElement('div');
    divMark.setAttribute('class', 'mark');

    const divStar = document.createElement('div');
    const imgStar = document.createElement('img');
    imgStar.setAttribute('src', 'assets/images/icons/star.svg');
    imgStar.setAttribute('alt', 'Star');
    divStar.appendChild(imgStar);

    const pTextMedium = document.createElement('p');
    pTextMedium.setAttribute('class', 'text-medium');
    pTextMedium.textContent = rating || '';

    divCardImage.appendChild(imgCardImagePicture);

    divCardDescriptionWrapper1.appendChild(h5Tag);
    divCardDescriptionWrapper1.appendChild(pTag);

    divFlexItemsCenter1.appendChild(divFlexItemsCenter2);
    divFlexItemsCenter1.appendChild(divTextMainGray);

    divCardDescriptionWrapper2.appendChild(divFlexItemsCenter1);

    divMark.appendChild(divStar);
    divMark.appendChild(pTextMedium);

    divCardDescriptionWrapper2.appendChild(divMark);

    divCardDescription.appendChild(divCardDescriptionWrapper1);
    divCardDescription.appendChild(divCardDescriptionWrapper2);

    divCardWithBgWrapper.appendChild(divCardImage);
    divCardWithBgWrapper.appendChild(divCardDescription);

    divCardWithBg.appendChild(divCardWithBgWrapper);

    aTag.appendChild(divCardWithBg);

    indexParentElement.appendChild(aTag);
}

