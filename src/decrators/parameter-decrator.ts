/* Decrator - parameter decrator */
function Http(
  classPrototype: Object,
  methodName: string,
  paramaterIndex: number
) {
  if (paramaterIndex === 0) {
    console.log("This is request object");
  } else if (paramaterIndex === 1) {
    console.log("This is response object");
  } else {
    console.log("This is not request object nor response object");
  }
}
class BookController {
  book(@Http req: Object, res: Object) {
    console.log(req, res);
  }
}
const b1 = new BookController();
b1.book;
