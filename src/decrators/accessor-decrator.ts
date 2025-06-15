/* Decrator - Accessor decrator */

function ToUpperCase(
  classPrototype: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalValue = descriptor.get;
  descriptor.get = function () {
    const result = originalValue?.call(this);
    return result.toUpperCase();
  };
}

class People {
  constructor(public fistName: string, public lastName: string) {}

  @ToUpperCase
  get fullName() {
    return `${this.fistName} ${this.lastName}`;
  }
}
const people1 = new People("mariam", "tarek");
console.log(people1.fullName);
