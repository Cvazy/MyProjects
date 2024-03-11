function createCatalogItem(data) {
    const catalogItem = document.createElement('div');
    catalogItem.classList.add('catalog_item');
    catalogItem.setAttribute('data-item-id', data.itemId);

    catalogItem.innerHTML = `
        <div class="catalog_item__wrapper">
            <div class="catalog_top">
                <div class="catalog_image">
                    <img class="w-full br-12px" src="${data.imageUrl}" alt="Image" loading="lazy">
                    <button data-btn-id="${data.itemId}" type="button" class="btn like heart">
                        <img class="no_like" src="assets/images/icons/heart.svg" alt="Like" loading="lazy">
                        <img class="d-none-imp click_like" src="assets/images/icons/heart_click.svg" alt="Like">
                    </button>
                </div>
                <div class="catalog_info">
                    <div class="catalog_info__main">
                        <div class="excursion_info_params">
                            <p class="m-0 text-main-gray sm-text text-medium">${data.excursionType}</p>
                            <div class="flex-items-center gap-8px">
                                <div class="flex-items-center gap-4px">
                                    <img width="20" class="d-block" src="assets/images/icons/group.svg" alt="Icon" loading="lazy">
                                    <p class="m-0 text-main-gray sm-text">${data.excursionParams.group}</p>
                                </div>
                                <div class="flex-items-center gap-4px">
                                    <img width="20" class="d-block" src="assets/images/icons/clock.svg" alt="Icon" loading="lazy">
                                    <p class="m-0 text-main-gray sm-text">${data.excursionParams.clock}</p>
                                </div>
                            </div>
                        </div>
                        <p class="base-text m-0 text-dark">${data.excursionName}</p>
                        <div class="flex-col flex-items-start gap-8px">
                            <p class="m-0 text-main-gray xs-text">Ближайшая:</p>
                            <div class="flex-items-center gap-4px">
                                <div class="desc_medium__times-block-xs-text">${data.nearestTimes[0]}</div>
                                <div class="desc_medium__times-block-xs-text">${data.nearestTimes[1]}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="catalog_bottom">
                <div class="catalog_bottom__info">
                    <div class="flex-col flex-items-start gap-12px">
                        <div class="catalog_bottom__left">
                            <p class="price">${data.price}</p>
                            <p class="text-main-gray m-0 sm-text">за человека</p>
                        </div>
                        <a href="excursionPage.html" class="d-none-imp not-decor-link btn catalog_bottom__right btn_link_exc">Подробнее</a>
                    </div>
                    <div class="flex-col flex-items-start gap-4px">
                        <div class="rating">
                            <div class="text-white xs-text text-bold">${data.rating}</div>
                        </div>
                        <p class="m-0 text-main-gray sm-text">${data.reviews} отзывов</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    return catalogItem;
}
