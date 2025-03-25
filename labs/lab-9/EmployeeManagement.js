"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContractEmployee_1 = require("./ContractEmployee");
var FullTimeEmployee_1 = require("./FullTimeEmployee");
var EmployeeController_1 = require("./EmployeeController");
main();
function main() {
    var employeeList = [];
    employeeList.push(new ContractEmployee_1.default("A"));
    employeeList.push(new ContractEmployee_1.default("B"));
    employeeList.push(new ContractEmployee_1.default("C"));
    employeeList.push(new FullTimeEmployee_1.default("D"));
    employeeList.push(new FullTimeEmployee_1.default("E"));
    var totalSalary = EmployeeController_1.default.getTotalSalary(employeeList);
    console.log("Total Salary: ".concat(totalSalary));
    var highestSalaryEmployee = EmployeeController_1.default.getHighestSalaryEmployee(employeeList);
    console.log("Highest Salary Employee: ".concat(highestSalaryEmployee.getName(), " with Salary: ").concat(highestSalaryEmployee.getSalary()));
    var lowestSalaryEmployee = EmployeeController_1.default.getLowestSalaryEmployee(employeeList);
    console.log("Lowest Salary Employee: ".concat(lowestSalaryEmployee.getName(), " with Salary: ").concat(lowestSalaryEmployee.getSalary()));
}
