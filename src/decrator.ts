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
function Controller(constructor: Function) {
  // add property
  constructor.prototype.endpoint = "/api/auth";
  // add method
  constructor.prototype.login = () => {
    console.log("You are logged in");
  };
}

@Controller
class Auth3 {}
const a1 = new Auth3();
//@ts-ignore
console.log(a1.endpoint);

//@ts-ignore
console.log(a1.login());
