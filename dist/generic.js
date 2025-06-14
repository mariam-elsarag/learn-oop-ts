"use strict";
// generic class
class Products {
    constructor(rating, reviews) {
        this.rating = rating;
        this.reviews = reviews;
    }
    getProduct(value) {
        return value;
    }
}
const p1 = new Products(1, "Good");
const p2 = new Products("1", "Good");
console.log(p1.getProduct("test"));
// generic function
function getValue(value) {
    return value;
}
console.log(getValue("mariam"));
console.log(getValue(1));
const book = {
    item: {
        price: 10,
        quantity: 1,
    },
    status: "paid",
};
const o2 = {
    item: {
        brand: "Dell",
        color: "black",
        ramMemory: "32 GB",
        OS: "Windows",
        screenSize: "1536px",
    },
    status: "cancelled",
};
class Store {
    constructor() {
        this._products = [];
    }
    add(newProduct) {
        this._products.push(newProduct);
    }
}
class Product extends Store {
}
class Product1 extends Store {
}
const product1 = new Product();
product1.add({
    brand: "Dell",
    color: "black",
    ramMemory: "32 GB",
    OS: "Windows",
    screenSize: "1536px",
});
const product2 = new Product1();
