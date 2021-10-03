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