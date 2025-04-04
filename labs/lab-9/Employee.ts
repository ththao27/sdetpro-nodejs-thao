export default abstract class Employee {

    protected name: string;
    protected basicSalary: number = 0;
    protected salary: number = 0;

    constructor(name: string, basicSalary: number) {
        this.name = name;
        this.basicSalary = basicSalary;
    }

    getName(): string {
        return this.name;
    }
    getSalary(): number {
        return this.salary;
    }

    protected abstract getMaxSalary(maxSalary: number): number
}