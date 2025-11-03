import Employee from './Employee';
import ContractEmployee from './ContractEmployee';
import FullTimeEmployee from './FullTimeEmployee';
import EmployeeController from './EmployeeController';

main();
function main() {
  const employeeList: Employee[] = [];
  employeeList.push(new ContractEmployee('A'));
  employeeList.push(new ContractEmployee('B'));
  employeeList.push(new ContractEmployee('C'));
  employeeList.push(new FullTimeEmployee('D'));
  employeeList.push(new FullTimeEmployee('E'));

  const totalSalary = EmployeeController.getTotalSalary(employeeList);
  console.log(`Total Salary: ${totalSalary}`);

  const highestSalaryEmployee = EmployeeController.getHighestSalaryEmployee(employeeList);
  console.log(
    `Highest Salary Employee: ${highestSalaryEmployee.getName()} with Salary: ${highestSalaryEmployee.getSalary()}`,
  );

  const lowestSalaryEmployee = EmployeeController.getLowestSalaryEmployee(employeeList);
  console.log(
    `Lowest Salary Employee: ${lowestSalaryEmployee.getName()} with Salary: ${lowestSalaryEmployee.getSalary()}`,
  );
}
