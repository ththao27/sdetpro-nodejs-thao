"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BankingAccount_1 = __importDefault(require("./BankingAccount"));
class CheckingAccount extends BankingAccount_1.default {
    constructor(accountNumber, accountName, initBalance = 50) {
        super(accountNumber, accountName, initBalance);
    }
    deposit(amount) {
        if (amount < 0) {
            console.log('Deposit amount must be greater than 0');
        }
        else {
            this.balance += amount;
            console.log(`Deposited ${amount} to the checking account: ${this.getAccountNumber()}. New balance: ${this.getBalance()}`);
        }
    }
    withdraw(amount) {
        if (amount < 0 || amount > this.getBalance() - 50) {
            console.log('Withdrawal amount must be greater than 0 and less than or equal to the balance minus 50');
        }
        else if (amount > this.balance) {
            console.log('Insufficient funds');
        }
        else {
            this.balance -= amount;
            console.log(`Withdrew ${amount} from the checking account: ${this.getAccountNumber()}. New balance: ${this.getBalance()}`);
        }
    }
    getBalance() {
        return this.balance;
    }
}
exports.default = CheckingAccount;
//# sourceMappingURL=CheckingAccount.js.map