const catalogParent = document.querySelector('.cards__wrapper')

function createCatalogItem(data) {
    const {
        hide,
        itemId,
        imageUrl,
        hotelName,
        rating,
        reviews,
        type,
        distance,
        wifi,
        gym,
        parking,
        pool,
        beach,
        pet,
        oldPrice,
        price,
        nights,
        guests
    } = data;

    const catalogItem = document.createElement('div');
    catalogItem.setAttribute('class', `${hide ? 'd-none-imp' : ''}  catalog_item`);
    catalogItem.setAttribute('data-item-id', itemId);

    const catalogItemWrapper = document.createElement('div');
    catalogItemWrapper.setAttribute('class', 'catalog_item__wrapper');

    const catalogTop = document.createElement('div');
    catalogTop.setAttribute('class', 'catalog_top');

    const catalogImage = document.createElement('div');
    catalogImage.setAttribute('class', 'catalog_image');

    const imgCatalog = document.createElement('img');
    imgCatalog.setAttribute('class', 'w-full br-12px');
    imgCatalog.setAttribute('src', imageUrl);
    imgCatalog.setAttribute('alt', 'Image');
    imgCatalog.setAttribute('loading', 'lazy');

    const buttonLike = document.createElement('button');
    buttonLike.setAttribute('data-btn-id', itemId);
    buttonLike.setAttribute('type', 'button');
    buttonLike.setAttribute('class', 'btn like heart');

    const imgLike = document.createElement('img');
    imgLike.setAttribute('class', 'no_like');
    imgLike.setAttribute('src', 'assets/images/icons/heart.svg');
    imgLike.setAttribute('alt', 'Like');
    imgLike.setAttribute('loading', 'lazy');

    const imgClickLike = document.createElement('img');
    imgClickLike.setAttribute('class', 'd-none-imp click_like');
    imgClickLike.setAttribute('src', 'assets/images/icons/heart_click.svg');
    imgClickLike.setAttribute('alt', 'Like');

    buttonLike.appendChild(imgLike);
    buttonLike.appendChild(imgClickLike);

    catalogImage.appendChild(imgCatalog);
    catalogImage.appendChild(buttonLike);

    const catalogInfo = document.createElement('div');
    catalogInfo.setAttribute('class', 'catalog_info');

    const catalogInfoFlex = document.createElement('div');
    catalogInfoFlex.setAttribute('class', 'flex-items-center justify-between gap-8px');

    const starIcons = document.createElement('div');
    starIcons.setAttribute('class', 'flex-items-center gap-4px');

    for (let i = 0; i < 5; i++) {
        const imgStar = document.createElement('img');
        imgStar.setAttribute('class', 'd-block');
        imgStar.setAttribute('src', 'assets/images/icons/star.svg');
        imgStar.setAttribute('alt', 'Star');
        imgStar.setAttribute('loading', 'lazy');
        starIcons.appendChild(imgStar);
    }

    const mapLink = document.createElement('a');
    mapLink.setAttribute('href', '#');
    mapLink.setAttribute('class', 'not-decor-link text-main-col sm-text');
    mapLink.textContent = 'На карте';

    catalogInfoFlex.appendChild(starIcons);
    catalogInfoFlex.appendChild(mapLink);

    const catalogInfoMain = document.createElement('div');
    catalogInfoMain.setAttribute('class', 'catalog_info__main');

    const hotelNameParagraph = document.createElement('p');
    hotelNameParagraph.setAttribute('class', 'base-text m-0 text-dark');
    hotelNameParagraph.textContent = hotelName;

    const cardParams = document.createElement('div');
    cardParams.setAttribute('class', 'card_params');

    const cardParamsTop = document.createElement('div');
    cardParamsTop.setAttribute('class', 'card_params__top');

    const ratingDiv = document.createElement('div');
    ratingDiv.setAttribute('class', 'rating');

    const ratingText = document.createElement('div');
    ratingText.setAttribute('class', 'text-white xs-text text-bold');
    ratingText.textContent = rating;

    const reviewsSpan = document.createElement('span');
    reviewsSpan.setAttribute('class', 'text-dark sm-text');
    reviewsSpan.textContent = reviews + ' отзыва';

    ratingDiv.appendChild(ratingText);

    cardParamsTop.appendChild(ratingDiv);
    cardParamsTop.appendChild(reviewsSpan);

    const typeSpan = createCardParamSpan(type);
    const distanceSpan = createCardParamSpan(distance);

    cardParamsTop.appendChild(typeSpan);
    cardParamsTop.appendChild(distanceSpan);

    const cardParamsBottom = document.createElement('div');
    cardParamsBottom.setAttribute('class', 'card_params__bottom');

    const wifiImg = createCardParamImg('wifi');
    const gymImg = createCardParamImg('gym');
    const parkingImg = createCardParamImg('car');
    const poolImg = createCardParamImg('pool');
    const beachImg = createCardParamImg('beach');
    const petImg = createCardParamImg('pet');

    cardParamsBottom.appendChild(wifiImg);
    cardParamsBottom.appendChild(gymImg);
    cardParamsBottom.appendChild(parkingImg);
    cardParamsBottom.appendChild(poolImg);
    cardParamsBottom.appendChild(beachImg);
    cardParamsBottom.appendChild(petImg);

    cardParams.appendChild(cardParamsTop);
    cardParams.appendChild(cardParamsBottom);

    catalogInfoMain.appendChild(hotelNameParagraph);
    catalogInfoMain.appendChild(cardParams);

    catalogInfo.appendChild(catalogInfoFlex);
    catalogInfo.appendChild(catalogInfoMain);

    catalogTop.appendChild(catalogImage);
    catalogTop.appendChild(catalogInfo);

    const catalogBottom = document.createElement('div');
    catalogBottom.setAttribute('class', 'catalog_bottom');

    const oldPriceDiv = document.createElement('div');
    oldPriceDiv.setAttribute('class', 'old_price');
    oldPriceDiv.textContent = oldPrice;

    const catalogBottomInfo = document.createElement('div');
    catalogBottomInfo.setAttribute('class', 'catalog_bottom__info');

    const catalogBottomLeft = document.createElement('div');
    catalogBottomLeft.setAttribute('class', 'catalog_bottom__left');

    const priceParagraph = document.createElement('p');
    priceParagraph.setAttribute('class', 'price');
    priceParagraph.textContent = price;

    const textMainGray = document.createElement('p');
    textMainGray.setAttribute('class', 'text-main-gray m-0 base-text');
    textMainGray.textContent = `${nights} ночей, ${guests} гостя`;

    catalogBottomLeft.appendChild(priceParagraph);
    catalogBottomLeft.appendChild(textMainGray);

    const catalogBottomRight = document.createElement('a');
    catalogBottomRight.setAttribute('href', '#');
    catalogBottomRight.setAttribute('class', 'not-decor-link catalog_bottom__right base-text');
    catalogBottomRight.textContent = 'Подробнее';

    catalogBottomInfo.appendChild(catalogBottomLeft);
    catalogBottomInfo.appendChild(catalogBottomRight);

    catalogBottom.appendChild(oldPriceDiv);
    catalogBottom.appendChild(catalogBottomInfo);

    catalogItemWrapper.appendChild(catalogTop);
    catalogItemWrapper.appendChild(catalogBottom);

    catalogItem.appendChild(catalogItemWrapper);

    catalogParent.appendChild(catalogItem)
}

function createCardParamSpan(text) {
    const span = document.createElement('span');
    span.setAttribute('class', 'text-dark sm-text');
    span.textContent = text;
    return span;
}

function createCardParamImg(icon) {
    const img = document.createElement('img');
    img.setAttribute('src', `assets/images/icons/${icon}.svg`);
    img.setAttribute('alt', icon);
    img.setAttribute('loading', 'lazy');
    return img;
}