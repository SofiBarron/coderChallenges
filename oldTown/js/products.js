const productList = [];

class Product {
    constructor (id, name, author, price, stock) {
        this.id = parseInt(id);
        this.name = name;
        this.author = author;
        this.price = parseFloat(price);
        this.stock = parseInt(stock);
    }
}

productList.push (new Product(1, 'Beastars Vol. 1', 'Paru Itagaki', 900, 25));
productList.push (new Product(2, 'Slam Dunk Vol. 5', 'Takehiko Inoue', 895, 25));
productList.push (new Product(3, 'Atelier of Witch Hat Vol. 1', 'Kamome Shirahama', 525, 20));
productList.push (new Product(4, 'Ku Vol. 1', 'Tatsuya Shihura', 450, 15));
productList.push (new Product(5, 'The Sandman Vol. 1','Neil Gaiman and Sam Keith', 1906.14, 20));
productList.push (new Product(6, 'The Old Guard Vol. 2', 'Greg Rucka and Leandro Fernandez', 1826.5, 10));
productList.push (new Product(7, 'Teen Titans: Beast Boy', 'Kami Garcia and Gabriel Picolo', 1580, 8));
productList.push (new Product(8, 'Middlewest Vol. 1', 'Skottie Young and Jorge Corona', 1899, 15));
productList.push (new Product(9, 'Six of Crows', 'Leigh Bardugo', 1798.5, 35));
productList.push (new Product(10, 'Season of Storms', 'Andrzej Sapkowski', 2448.5, 6));
productList.push (new Product(11, 'Elantris', 'Brandon Sanderson', 1498.2, 12));
productList.push (new Product(12, 'The Hobbit', 'J.R.R Tolkien', 1349, 24));
productList.push (new Product(13, 'Foundation', 'Isaac Asimov', 1200.95, 14));
productList.push (new Product(14, 'Dune', 'Frank Herbert', 1834.07, 4));
productList.push (new Product(15, 'This is How You Lose the Time War', 'Amal El-Mohtar and Max Gladstone', 1427.62, 3));
productList.push (new Product(16, 'Never Let Me Go', 'Kazuo Ishiguro', 1577.44, 7));
productList.push (new Product(17, 'The vanishing Half', 'Brit Bennet', 1552.22, 5));
productList.push (new Product(18, 'The Devil and the Dark Water', 'Stuart Turton', 1675, 32));
productList.push (new Product(19, 'The Gilded Cage', 'Lynette Noni', 2983, 18));
productList.push (new Product(20, 'Project Hail Mary', 'Andy Weir', 2399, 22));

const saveProductList = (key, value) => {
    localStorage.setItem(key, value);
}

for (const product of productList) {
    saveProductList(product.id, JSON.stringify(product));
}
