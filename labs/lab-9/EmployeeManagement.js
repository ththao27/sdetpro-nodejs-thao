"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContractEmployee_1 = __importDefault(require("./ContractEmployee"));
const FullTimeEmployee_1 = __importDefault(require("./FullTimeEmployee"));
const EmployeeController_1 = __importDefault(require("./EmployeeController"));
main();
function main() {
    const employeeList = [];
    employeeList.push(new ContractEmployee_1.default("A"));
    employeeList.push(new ContractEmployee_1.default("B"));
    employeeList.push(new ContractEmployee_1.default("C"));
    employeeList.push(new FullTimeEmployee_1.default("D"));
    employeeList.push(new FullTimeEmployee_1.default("E"));
    const totalSalary = EmployeeController_1.default.getTotalSalary(employeeList);
    console.log(`Total Salary: ${totalSalary}`);
    const highestSalaryEmployee = EmployeeController_1.default.getHighestSalaryEmployee(employeeList);
    console.log(`Highest Salary Employee: ${highestSalaryEmployee.getName()} with Salary: ${highestSalaryEmployee.getSalary()}`);
    const lowestSalaryEmployee = EmployeeController_1.default.getLowestSalaryEmployee(employeeList);
    console.log(`Lowest Salary Employee: ${lowestSalaryEmployee.getName()} with Salary: ${lowestSalaryEmployee.getSalary()}`);
}
