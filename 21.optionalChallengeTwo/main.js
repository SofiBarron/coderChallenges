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
productList.push (new Products(2, 'Slam Dunk Vol. 5', 805.10, 25));
productList.push (new Products(3, 'Atelier of Witch Hat Vol. 1', 500, 20));
productList.push (new Products(4, 'Ku Vol. 1', 450, 15));
productList.push (new Products(5, 'The Sandman Vol. 1', 1800, 20));
productList.push (new Products(6, 'The Old Guard Vol. 2', 1750, 10));

function descPriceOrder (a,b) { 
    return b.price - a.price;
}

productList.sort(descPriceOrder);
console.log(productList);