// key of operator

// example 1
interface IPerson {
  username: string;
  email: string;
  age: number;
}

type PersonKey = keyof IPerson; // username|aga|email
const personKey: PersonKey = "age";

// example 2 with object
const book_obj = {
  title: "text",
  author: "test",
};
type BookKey = keyof typeof book_obj;
const bookKey = "title";
