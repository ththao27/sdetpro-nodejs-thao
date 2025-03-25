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
}
