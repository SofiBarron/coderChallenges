const gridContainer = document.getElementById('js-gridContainer');

//HTML Template
const htmlGridTemplate = (product) => {
    return `<div class='catalogueCard'>
                <h3 class='catalogueCardTitle'>${product.name}</h3>
                <p class='catalogueCardSubp>By: ${product.author}</p>
                <h6 class='catalogueCardSubh6'>Price: $${product.price}</h6>
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

//Search Event
const searchInput = document.getElementById('js-searchInput');
const searchButton = document.getElementById('js-searchButton');

const filterProducts = () => {
    const searchInputValue = searchInput.value;

    const filteredProducts = productList.filter((productList) => {
        const productName = productList.name.toLowerCase();
        return productName.includes (searchInputValue.toLowerCase());
    });

    GridElements(filteredProducts, gridContainer);
}

searchButton.addEventListener("click", filterProducts);

