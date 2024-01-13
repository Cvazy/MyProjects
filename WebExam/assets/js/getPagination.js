function getPagination(len, blockID, block) {
    const paginationBlock = document.getElementById(`${blockID}`)
    let iter = 0

    if (len > 3) iter = 4
    else iter = len

    for (let i = 1; i < iter + 1; i++) {
        paginationBlock.appendChild(createPaginationItem(block, i.toString()))
    }

    if (len > 3) {
        paginationBlock.appendChild(createPaginationItem(block, '...'))
        paginationBlock.appendChild(createPaginationItem(block, `${len}`))
    }
}

function createPaginationItem(block, symbol) {
    const pagItem = document.createElement("a")

    pagItem.setAttribute("role", "button")
    pagItem.setAttribute("href", `/${block}/?page=${symbol}`)
    pagItem.classList.add('pagination-size', 'bg-main-color', 'p-2', 'rounded-circle', 'fw-medium', 'd-flex', 'justify-content-center', 'align-items-center', 'text-decoration-none', 'text-black')
    pagItem.textContent = symbol

    return pagItem
}
