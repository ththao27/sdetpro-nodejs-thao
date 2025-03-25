import Employee from "./Employee";
export default class ContractEmployee extends Employee {
    
    constructor(name: string) {
        super(name);
        this.basicSalary = 40000;
        this.salary = this.getMaxSalary(50000);
    }

    getMaxSalary(maxSalary: number): number {
        return (Math.floor(Math.random() * (maxSalary - this.basicSalary + 1)) + this.basicSalary);
    }
}