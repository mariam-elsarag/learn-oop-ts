// Learn decrator
/**
 * Decrator is function
 * And we should right it in piscall case way
 */
// 1 - Class decrator
/**
 * class decrator parametre must be in type function
 * It work at least one time
 *
 */
// regurla one
// function Controller(constructor: Function) {
//   // add property
//   constructor.prototype.endpoint = "/api/auth";
//   // add method
//   constructor.prototype.login = () => {
//     console.log("You are logged in");
//   };
// }

// with paramater
function Controller(endpoint: string) {
  return (constructor: Function) => {
    console.log("basic controller ");
    constructor.prototype.endpoint = endpoint;
    constructor.prototype.login = () => {
      console.log("You are logged in");
    };
  };
}
function Authorization(role: string) {
  return (constructor: Function) => {
    console.log("authorization controller ");
    constructor.prototype.role = role;
  };
}

@Authorization("admin")
@Controller("api/auth")
class Auth3 {}
const a1 = new Auth3();
//@ts-ignore
console.log(a1.endpoint);

//@ts-ignore
console.log(a1.login());
