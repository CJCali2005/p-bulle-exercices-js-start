//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  isClosed;
  balance;

  constructor() {
    this.isClosed = true;
    this.balance = 0;
  }

  open() {
    this.isClosed = false;
    this.balance = 0;
  }

  close() {
    this.isClosed = true;
  }

  deposit(depoArgent) {
    this.balance += depoArgent;
  }

  withdraw(retraitArgent) {
    this.balance -= retraitArgent;
  }

  get balance() {
    if (this.isClosed) {
      throw new ValueError();
    } else {
      return this.balance;
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
