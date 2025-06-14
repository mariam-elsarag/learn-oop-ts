// type mapping
// Example => if I wanna change type of user to be readoly so i will use it
/*
 * 1- It only be written inside type
 * 2- index signature property + keyof operator

*/
type Trips = {
  id: number;
  title: string;
};

// type ReadOnlyTrips = {
//   readonly [key in keyof Trips]: Trips[key];
//   /**
//    * Explaniation
//    * key=> variable
//    * in=> for loop
//    * keyof operator => to get key of this intreface
//    * :Trips[key]=> will be restul like this 👇
//    * Trips[id]=>number
//    * Trips[title]=>string
//    * value of this type
//    */
// };

// Example using generic
type ReadOnly<T> = {
  readonly [key in keyof T]: T[key];
};
// another example to make interface optinal
type Optional<T> = {
  [key in keyof T]?: T[key];
};

let trip: ReadOnly<Trips> = {
  id: 1,
  title: "test",
};
