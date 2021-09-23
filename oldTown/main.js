class Product {
    constructor (identifier, name, price, stock) {
        this.identifier = parseInt(identifier);
        this.name = name;
        this.price = parseFloat(price);
        this.stock = parseInt(stock);
    }
}
const productList = [];
productList.push (new Product(1, 'Beastars Vol. 1', 805, 25));
productList.push (new Product(2, 'Slam Dunk Vol. 5', 805.10, 25));
productList.push (new Product(3, 'Atelier of Witch Hat Vol. 1', 500, 20));
productList.push (new Product(4, 'Ku Vol. 1', 450, 15));
productList.push (new Product(5, 'The Sandman Vol. 1', 1800, 20));
productList.push (new Product(6, 'The Old Guard Vol. 2', 1750, 10));
const discount = 0.10;
const chosenTitle = prompt('Which item would you like to order?');
function findItem(availableProduct) {
    return availableProduct.name == chosenTitle;
}
const productPrice = productList.find(findItem).price;
let result = 0;
function addItem (chosenTitle, productPrice, discount) {
    while (chosenTitle != '' || chosenTitle != 'ESC') {
        if (productPrice < 1000) {
            return result += productPrice;
        }
        else {
            result += productPrice - (productPrice * discount);
        }
        return result;
    }
}
let total = 0;
function showResult(total) {
    total += addItem (chosenTitle, productPrice, discount);
    alert("Amount on cart: " + total);
}
showResult(total);