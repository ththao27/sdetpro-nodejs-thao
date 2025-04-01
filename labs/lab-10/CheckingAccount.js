"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BankingAccount_1 = require("./BankingAccount");
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(accountNumber, accountName, initBalance) {
        if (initBalance === void 0) { initBalance = 50; }
        return _super.call(this, accountNumber, accountName, initBalance) || this;
    }
    CheckingAccount.prototype.deposit = function (amount) {
        if (amount < 0) {
            console.log("Deposit amount must be greater than 0");
        }
        else {
            this.balance += amount;
            console.log("Deposited ".concat(amount, " to the checking account: ").concat(this.getAccountNumber(), ". New balance: ").concat(this.getBalance()));
        }
    };
    CheckingAccount.prototype.withdraw = function (amount) {
        if (amount < 0 || amount > this.getBalance() - 50) {
            console.log("Withdrawal amount must be greater than 0 and less than or equal to the balance minus 50");
        }
        else if (amount > this.balance) {
            console.log("Insufficient funds");
        }
        else {
            this.balance -= amount;
            console.log("Withdrew ".concat(amount, " from the checking account: ").concat(this.getAccountNumber(), ". New balance: ").concat(this.getBalance()));
        }
    };
    CheckingAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return CheckingAccount;
}(BankingAccount_1.default));
exports.default = CheckingAccount;
