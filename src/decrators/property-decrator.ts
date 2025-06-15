/* Decrator - Property decrator */

function IsEmail(classPrototype: Object, prototypeName: string) {
  let value: string;

  // will create descriptor
  let descriptor: PropertyDescriptor = {
    get() {
      return value;
    },
    set(newValue: string) {
      if (!newValue.includes("@") || !newValue.includes(".com")) {
        throw new Error("Invalid email");
      }
      value = newValue;
    },
  };
  Object.defineProperty(classPrototype, prototypeName, descriptor);
}

class Email {
  @IsEmail
  email: string;
  constructor(email: string) {
    this.email = email;
  }
}

const e1 = new Email("mariam");
