//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  ClsAcc;
  Liaska;

  constructor() {
    this.ClsAcc = true;
    this.Liaska = 0;
  }

  open() {
    this.ClsAcc = false;
  }

  close() {
    this.ClsAcc = true;
  }

  deposit(depoTHUNE) {
    this.Liaska += depoTHUNE;
  }

  withdraw(retraitTHUNE) {
    this.Liaska -= retraitTHUNE;
  }

  get balance() {
    if ((this.ClsAcc = false)) {
      return this.Liaska;
    } else {
      throw new Error(ValueError);
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
