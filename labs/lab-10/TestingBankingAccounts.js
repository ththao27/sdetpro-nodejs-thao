"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CheckingAccount_1 = __importDefault(require("./CheckingAccount"));
const SavingAccount_1 = __importDefault(require("./SavingAccount"));
const account1 = new SavingAccount_1.default("012345", "Cop", 6868);
console.log(`\t Initial Saving Account with: ${JSON.stringify(account1)}`);
account1.deposit(100);
account1.withdraw(100);
// account1.withdraw(-900);
const account2 = new CheckingAccount_1.default("0654321", "Beo", 500);
console.log(`\n \t Initial Checking Account with: ${JSON.stringify(account2)}`);
account2.deposit(100);
account2.withdraw(320);
