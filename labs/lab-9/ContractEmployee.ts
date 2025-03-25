import Employee from "./Employee";
export default class FullTimeEmployee extends Employee {

    constructor(name: string) {
        super(name);
        this.salary = this.getMaxSalary(40000);
    }

    getMaxSalary(maxSalary: number): number {
        return (Math.floor(Math.random() * (maxSalary - this.basicSalary + 1)) + this.basicSalary);
    }
}