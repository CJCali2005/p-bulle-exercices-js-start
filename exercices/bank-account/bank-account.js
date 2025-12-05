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
    this.balance = 0;

    if (!this.isClosed) {
      throw new ValueError();
    } else {
      this.isClosed = false;
    }
  }

  close() {
    if (this.isClosed) {
      throw new ValueError();
    } else {
      this.isClosed = true;
    }
  }

  deposit(depoArgent) {
    if (this.isClosed || depoArgent < 0) {
      throw new ValueError();
    }

    this.balance += depoArgent;
  }

  withdraw(retraitArgent) {
    if (retraitArgent > this.Balance || retraitArgent < 0) {
      throw new ValueError();
    } else {
      this.balance -= retraitArgent;
    }
  }

  get Balance() {
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
