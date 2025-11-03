'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class Employee {
  constructor(name, basicSalary) {
    this.basicSalary = 0;
    this.salary = 0;
    this.name = name;
    this.basicSalary = basicSalary;
  }
  getName() {
    return this.name;
  }
  getSalary() {
    return this.salary;
  }
}
exports.default = Employee;
