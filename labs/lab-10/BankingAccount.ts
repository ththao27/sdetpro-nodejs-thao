export default abstract class BankingAccount {

    protected accountNumber: string;
    protected accountName: string;
    protected balance: number;

    constructor(accountNumber: string, accountName: string, initBalance: number) {
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.balance = initBalance;
    }
    
    protected abstract deposit (amount: number): void;
    protected abstract withdraw (amount: number): void;
    protected abstract getBalance(): number;

    getAccountNumber(): string {
        return this.accountNumber;
    }
    getAccountName(): string {
        return this.accountName;
    }

}