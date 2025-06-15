"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// with paramater
function Controller(endpoint) {
    return (constructor) => {
        console.log("basic controller ");
        constructor.prototype.endpoint = endpoint;
        constructor.prototype.login = () => {
            console.log("You are logged in");
        };
    };
}
function Authorization(role) {
    return (constructor) => {
        console.log("authorization controller ");
        constructor.prototype.role = role;
    };
}
let Auth3 = class Auth3 {
};
Auth3 = __decorate([
    Authorization("admin"),
    Controller("api/auth")
], Auth3);
const a1 = new Auth3();
//@ts-ignore
console.log(a1.endpoint);
//@ts-ignore
console.log(a1.login());
