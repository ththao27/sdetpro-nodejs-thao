import CheckingAccount from './CheckingAccount';
import SavingAccount from './SavingAccount';

const account1 = new SavingAccount('012345', 'Cop', 6868);

console.log(`\t Initial Saving Account with: ${JSON.stringify(account1)}`);

account1.deposit(100);
account1.withdraw(100);
// account1.withdraw(-900);

const account2 = new CheckingAccount('0654321', 'Beo', 500);
console.log(`\n \t Initial Checking Account with: ${JSON.stringify(account2)}`);
account2.deposit(100);
account2.withdraw(320);
