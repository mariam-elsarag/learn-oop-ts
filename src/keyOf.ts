// key of operator

// example 1
interface IPerson {
  username: string;
  email: string;
  age: number;
}

type PersonKey = keyof IPerson;
const personKey=