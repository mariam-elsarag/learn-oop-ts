"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* Decrator - parameter decrator */
function Http(classPrototype, methodName, paramaterIndex) {
    if (paramaterIndex === 0) {
        console.log("This is request object");
    }
    else if (paramaterIndex === 1) {
        console.log("This is response object");
    }
    else {
        console.log("This is not request object nor response object");
    }
}
class BookController {
    book(req, res) {
        console.log(req, res);
    }
}
__decorate([
    __param(0, Http)
], BookController.prototype, "book", null);
const b1 = new BookController();
b1.book;
