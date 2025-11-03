'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class BankingAccount {
  constructor(accountNumber, accountName, initBalance) {
    this.accountNumber = accountNumber;
    this.accountName = accountName;
    this.balance = initBalance;
  }
  getAccountNumber() {
    return this.accountNumber;
  }
  getAccountName() {
    return this.accountName;
  }
}
exports.default = BankingAccount;
