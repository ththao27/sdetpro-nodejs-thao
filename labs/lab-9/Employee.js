"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(name, basicSalary) {
        this.basicSalary = 0;
        this.salary = 0;
        this.name = name;
        this.basicSalary = basicSalary;
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
exports.default = Employee;
