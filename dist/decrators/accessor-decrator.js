"use strict";
/* Decrator - Accessor decrator */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ToUpperCase(classPrototype, methodName, descriptor) {
    const originalValue = descriptor.get;
    descriptor.get = function () {
        const result = originalValue === null || originalValue === void 0 ? void 0 : originalValue.call(this);
        return result.toUpperCase();
    };
}
class People {
    constructor(fistName, lastName) {
        this.fistName = fistName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.fistName} ${this.lastName}`;
    }
}
__decorate([
    ToUpperCase
], People.prototype, "fullName", null);
const people1 = new People("mariam", "tarek");
console.log(people1.fullName);
