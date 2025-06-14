// generic class
class Products<Type> {
  constructor(public rating: Type, public reviews: string) {}
  getProduct<T>(value: T): T {
    return value;
  }
}

const p1 = new Products<number>(1, "Good");
const p2 = new Products<string>("1", "Good");
console.log(p1.getProduct<string>("test"));
// generic function
function getValue<T>(value: T): T {
  return value;
}
console.log(getValue<string>("mariam"));
console.log(getValue<number>(1));

// generic interface
interface Order<T> {
  item: T;
  status: "paid" | "confirm" | "cancelled";
}
type Book = {
  price: number;
  quantity: number;
};
const book: Order<Book> = {
  item: {
    price: 10,
    quantity: 1,
  },
  status: "paid",
};

type Laptop = {
  brand: string;
  color: string;
  ramMemory: string;
  OS: string;
  screenSize: string;
};
const o2: Order<Laptop> = {
  item: {
    brand: "Dell",
    color: "black",
    ramMemory: "32 GB",
    OS: "Windows",
    screenSize: "1536px",
  },
  status: "cancelled",
};

class Store<p> {
  private _products: p[] = [];
  add(newProduct: p) {
    this._products.push(newProduct);
  }
}
class Product extends Store<Laptop> {}
class Product1<k> extends Store<k> {}

const product1 = new Product();
product1.add({
  brand: "Dell",
  color: "black",
  ramMemory: "32 GB",
  OS: "Windows",
  screenSize: "1536px",
});

const product2 = new Product1<Laptop>();
product2.add();
