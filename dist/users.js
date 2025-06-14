"use strict";
// Learn inhertance and polymerphism
class Person {
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    get full_name() {
        return ` ${this.first_name} ${this.last_name}`;
    }
}
class Student extends Person {
    constructor(student_id, first_name, last_name) {
        super(first_name, last_name);
        this.student_id = student_id;
    }
    get full_name() {
        return `Student: ${super.full_name} `;
    }
    get details() {
        return { id: this.student_id, full_name: this.full_name };
    }
}
class Employee extends Person {
    // this class will inherti constructor
    get full_name() {
        return `Employee: ${super.full_name}`;
    }
}
let student = new Student(1, "Mariam", "Tarek");
let emplyee = new Employee("Mariam", "Tarek");
const people = [student, emplyee];
for (let user of people) {
    console.log(user.full_name);
}
