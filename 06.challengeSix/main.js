class Products {
    constructor (identifier, name, price, stock) {
        this.identifier=parseInt(identifier);
        this.name = name;
        this.price = parseFloat(price);
        this.stock = parseInt(stock);
    }
    newReleaseDiscount () {
        this.price = this.price - (this.price * 0.10);
    }
}

const productList = [];

productList.push (new Products(1, 'Beastars Vol. 9', 805, 25));
productList.push (new Products (2, 'Slam Dunk Vol. 5', 805.10, 25));

for (const Products of productList) {
    console.log(Products.identifier);
    console.log(Products.name);
}