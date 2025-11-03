'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class EmployeeController {
  static getTotalSalary(employeeList) {
    let totalSalary = 0;
    for (const employee of employeeList) {
      totalSalary += employee.getSalary();
    }
    return totalSalary;
  }
  static getHighestSalaryEmployee(employeeList) {
    let highestSalaryEmployee = employeeList[0];
    for (const employee of employeeList) {
      if (employee.getSalary() > highestSalaryEmployee.getSalary()) {
        highestSalaryEmployee = employee;
      }
    }
    return highestSalaryEmployee;
  }
  static getLowestSalaryEmployee(employeeList) {
    let lowestSalaryEmployee = employeeList[0];
    for (const employee of employeeList) {
      if (employee.getSalary() < lowestSalaryEmployee.getSalary()) {
        lowestSalaryEmployee = employee;
      }
    }
    return lowestSalaryEmployee;
  }
}
exports.default = EmployeeController;
