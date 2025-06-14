"use strict";
// creation of class pascall case
class Account {
    // parameter properties
    constructor(owner, _balance) {
        this.owner = owner;
        this._balance = _balance;
        this.id = 0;
        Account.members++;
        Account.id++;
        this.id = Account.id;
    }
    // method
    getBalance() {
        return this._balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("amount cann't be less than 0");
        }
        this._balance += amount;
    }
    // getter
    get username() {
        return this.userName || "";
    }
    // setter
    set username(name) {
        this.userName = name;
    }
    // static method
    static getMembers() {
        return Account.members;
    }
}
// properties
// owner: string;
// private _balance: number;
// private userName?: string; //optional
// constructor(id: number, owner: string, balance: number) {
//   this.id = id;
//   this._balance = balance;
//   this.owner = owner;
// }
// static properties
Account.members = 0;
Account.id = 0;
const account1 = new Account("Mariam", 100);
const account2 = new Account("alaa", 10);
account1.deposit(10);
account2.deposit(20);
// account1.username = "mariam";
console.log(account1);
console.log(account2);
console.log(account1.getBalance());
console.log(Account.getMembers());
