// Learn inhertance and polymerphism
class Person {
  constructor(public first_name: string, public last_name: string) {}

  get full_name(): string {
    return ` ${this.first_name} ${this.last_name}`;
  }
}
class Student extends Person {
  constructor(
    public student_id: number,
    first_name: string,
    last_name: string
  ) {
    super(first_name, last_name);
  }
  override get full_name(): string {
    return `Student: ${super.full_name} `;
  }
  get details() {
    return { id: this.student_id, full_name: this.full_name };
  }
}
class Employee extends Person {
  // this class will inherti constructor

  override get full_name(): string {
    return `Employee: ${super.full_name}`;
  }
}
let student = new Student(1, "Mariam", "Tarek");
let emplyee = new Employee("Mariam", "Tarek");

const people: Person[] = [student, emplyee];
for (let user of people) {
  console.log(user.full_name);
}
