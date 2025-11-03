import BankingAccount from './BankingAccount';

export default class SavingAccount extends BankingAccount {
  constructor(accountNumber: string, accountName: string, initBalance: number = 50) {
    super(accountNumber, accountName, initBalance);
  }

  public deposit(amount: number): void {
    if (amount < 0) {
      console.log('Deposit amount must be greater than 0');
    } else {
      this.balance += amount;
      console.log(
        `Deposited ${amount} to the saving account: ${this.getAccountNumber()}. New balance: ${this.getBalance()}`,
      );
    }
  }

  public withdraw(amount: number): void {
    if (amount < 0 || amount > this.getBalance() - 50) {
      console.log(
        'Withdrawal amount must be greater than 0 and less than or equal to the balance minus 50',
      );
    } else if (amount > this.balance) {
      console.log('Insufficient funds');
    } else {
      this.balance -= amount;
      console.log(
        `Withdrew ${amount} from the saving account: ${this.getAccountNumber()}. New balance: ${this.getBalance()}`,
      );
    }
  }

  public getBalance(): number {
    return this.balance;
  }
}
