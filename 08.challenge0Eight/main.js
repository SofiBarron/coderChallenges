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


for (const product of productList) {
    let container = document.createElement("div");
    container.innerHTML = `<p> ID: ${product.identifier} </p>
                           <h3> Título: ${product.name} </h3>
                           <h4> Price: ${product.price} </h4>`;
    document.body.appendChild(container);
}
