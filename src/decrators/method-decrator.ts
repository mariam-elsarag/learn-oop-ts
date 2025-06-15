/* Decrators- Method decrator */

function Logger(
  classPrototype: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log(
    classPrototype,
    "class prototype \n",
    methodName,
    "Method name \n",
    descriptor
  );
  // this to add new code to method without delete previous implemntation
  const original = descriptor.value;
  descriptor.value = function (speed: number) {
    original.call(this, speed);
    console.log("Logger decrator");
  };
}

class Car {
  @Logger
  move(speed: number) {
    console.log("The car moving with speed:", speed);
  }
  stop() {
    console.log("The car stop");
  }
}
const c = new Car();
c.move(1000);
