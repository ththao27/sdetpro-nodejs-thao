import Employee from "./Employee";
export default class FullTimeEmployee extends Employee {

    constructor(name: string) {
        super(name);
        this.basicSalary = 30000;
        this.salary = this.getMaxSalary(40000);
    }

    getMaxSalary(maxSalary: number): number {
        return (Math.floor(Math.random() * (maxSalary - this.basicSalary + 1)) + this.basicSalary);
    }
}