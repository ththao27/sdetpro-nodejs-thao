/* 
Creating 1 object representing Bank Count Number with below structure:

{
    accountNumber: String,
    routingNumber: String,
    balance: Number
}
. Creating another Bank Account Object which clone from the previous one and update the accountNumber only . Put them into ann array call: bankAccounts

. Write a consolse interface app to:

allow user to find account by using accountNumber, if the account is existing, print the name and balance info out (NOT all the object)
allow user to withdraw the money and avoid user to take more than current balance
Note: Strongly recommend to create functions to process each tasks
=== Banking application===
1. Find an account
2. Update balance
0. Exit the program
*/

const readline = require('readline-sync');
const NumberHandler = require('../utils/numberHandler');

// Data
const MESSAGES = {
    ENTER_ACCOUNT_NUMBER: "Please enter the account number: ",
    ENTER_WITHDRAW_AMOUNT: "Please enter the amount you want to withdraw: ",
    ENTER_CHOICE: "Please enter your choice: "
};

let bankAccounts = [];
let bankAccount1 = {
    accountNumber: "123456",
    accountName: "Teo",
    routingNumber: "121000248",
    balance: 10000000,
}
let bankAccount2 = JSON.parse(JSON.stringify(bankAccount1));
bankAccount2.accountNumber = "6543421";
bankAccount2.accountName = "Ti";
bankAccounts.push(bankAccount1, bankAccount2);

// Usage
displayMenu();
let userChoice = getUserChoice();
do {
    switch (userChoice) {
        case 0:
            console.log("Goodbye!");
            break;
        case 1:
            let accountNumberInput = getAccountNumber();
            let matchingAccount = findAccount(accountNumberInput);
            if (matchingAccount) {
                console.log(`Account name: ${matchingAccount.accountName}, Balance: ${matchingAccount.balance}`);
            }
            break;
        case 2:
            let accountNumberForWithdrawal = findAccount(getAccountNumber());
            if (accountNumberForWithdrawal) {
                let withdrawAmount = Number(readline.question(MESSAGES.ENTER_WITHDRAW_AMOUNT));
                withdrawFromAccount(withdrawAmount, accountNumberForWithdrawal);
            }
            break;
        default:
            console.log("Invalid number, please try again");
    }
    displayMenu();
    userChoice = getUserChoice();
} while (userChoice !== 0)

// Controller
function displayMenu() {
    console.log(`
=== Banking application ===
    1. Find an account
    2. Update balance
    0. Exit the program
    `);
}

function getUserChoice() {
    return Number(readline.question(MESSAGES.ENTER_CHOICE));
}

function getAccountNumber() {
    return readline.question(MESSAGES.ENTER_ACCOUNT_NUMBER);
}

function findAccount(accountNumber) { 
    for (let i = 0; i < bankAccounts.length; i++) {
        if (bankAccounts[i].accountNumber == accountNumber) {
            return bankAccounts[i];
        }
    }
    console.log("Account not found");
    return null
}

function withdrawFromAccount(withdrawAmount, userAccount) {
    if (isValidWithdrawal(withdrawAmount, userAccount)){
        userAccount.balance -= withdrawAmount;
        console.log(`You withdraw ${withdrawAmount} in the account ${userAccount.accountNumber}`);
        console.log(`Your balance after withdraw is ${userAccount.balance}`);
    }
}

function isValidWithdrawal(withdrawAmount, userAccount) { 
    if (NumberHandler.isNumberInput(withdrawAmount) === false) {
        console.log("Please enter a valid number");
        return false;
    }
    else if (withdrawAmount <= 0) {
        console.log("Please enter a positive number for withdrawal.");
        return false;
    }
    else if (withdrawAmount > userAccount.balance) {
        console.log("You don't have enough balance");
        return false;
    }
    else 
        return true; 
}