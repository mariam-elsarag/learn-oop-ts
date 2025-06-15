"use strict";
/* Decrators- Method decrator */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(classPrototype, methodName, descriptor) {
    console.log(classPrototype, "class prototype \n", methodName, "Method name \n", descriptor);
    const original = descriptor.value;
    descriptor.value = function (speed) {
        original.call(this, speed);
        console.log("Logger decrator");
    };
}
class Car {
    move(speed) {
        console.log("The car moving with speed:", speed);
    }
    stop() {
        console.log("The car stop");
    }
}
__decorate([
    Logger
], Car.prototype, "move", null);
const c = new Car();
c.move(1000);
