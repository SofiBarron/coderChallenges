const gridContainer = document.getElementById('js-gridContainer');

//HTML Template
const htmlGridTemplate = (product) => {
    return `<div class='catalogueCard'>
                <h3 class='catalogueCardTitle'>${product.name}</h3>
                <p class='catalogueCardSubp'>By: ${product.author}</p>
                <h6 class='catalogueCardSubh6'>$${product.price}</h6>
                <button class="btn btn-primary mt-auto btn-block catalogueCardBtn" id="${product.id}">Add to Cart</button>
                </div>
            </div>`;
}

//HTML Template Generator
const GridElements = (productList, container) => {
    container.innerHTML = '';

    if (productList.length > 0 ) {
        for (const product of productList) {
            const productGridInHTML = htmlGridTemplate(product);

            container.innerHTML += productGridInHTML;
        }
    } else {
        container.innerHTML = `<p class='errorContainerMessage'>No books found</p>`;
    }
};

GridElements(productList, gridContainer);
