import Employee from './Employee';
import ContractEmployee from './ContractEmployee';
import FullTimeEmployee from './FullTimeEmployee';

export default class EmployeeController {
  static getTotalSalary(employeeList: Employee[]): number {
    let totalSalary: number = 0;
    for (const employee of employeeList) {
      totalSalary += employee.getSalary();
    }
    return totalSalary;
  }

  static getHighestSalaryEmployee(employeeList: Employee[]): Employee {
    let highestSalaryEmployee: Employee = employeeList[0];
    for (const employee of employeeList) {
      if (employee.getSalary() > highestSalaryEmployee.getSalary()) {
        highestSalaryEmployee = employee;
      }
    }
    return highestSalaryEmployee;
  }

  static getLowestSalaryEmployee(employeeList: Employee[]): Employee {
    let lowestSalaryEmployee: Employee = employeeList[0];
    for (const employee of employeeList) {
      if (employee.getSalary() < lowestSalaryEmployee.getSalary()) {
        lowestSalaryEmployee = employee;
      }
    }
    return lowestSalaryEmployee;
  }
}
