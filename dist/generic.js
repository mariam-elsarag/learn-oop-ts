"use strict";
// generic class
class Product {
    constructor(rating, reviews) {
        this.rating = rating;
        this.reviews = reviews;
    }
    getProduct(value) {
        return value;
    }
}
const p1 = new Product(1, "Good");
const p2 = new Product("1", "Good");
console.log(p1.getProduct("test"));
// generic function
function getValue(value) {
    return value;
}
console.log(getValue("mariam"));
console.log(getValue(1));
