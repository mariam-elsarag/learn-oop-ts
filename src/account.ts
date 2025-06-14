// creation of class pascall case
class Account {
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
  private static members: number = 0;
  static id: number = 0;
  // instance properites
  private userName?: string; //optional
  readonly id: number = 0;
  // parameter properties
  constructor(public owner: string, private _balance: number) {
    Account.members++;
    Account.id++;
    this.id = Account.id;
  }

  // method
  getBalance(): number {
    return this._balance;
  }
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("amount cann't be less than 0");
    }
    this._balance += amount;
  }
  // getter
  get username(): string {
    return this.userName || "";
  }
  // setter
  set username(name: string) {
    this.userName = name;
  }

  // static method
  static getMembers(): number {
    return Account.members;
  }
}
const account1 = new Account("Mariam", 100);
const account2 = new Account("alaa", 10);
account1.deposit(10);
account2.deposit(20);

// account1.username = "mariam";
console.log(account1);
console.log(account2);
console.log(account1.getBalance());
console.log(Account.getMembers());
