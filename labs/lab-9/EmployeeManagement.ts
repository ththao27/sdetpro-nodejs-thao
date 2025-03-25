import Employee from "./Employee";
import ContractEmployee from "./ContractEmployee";
import FullTimeEmployee from "./FullTimeEmployee";
import EmployeeController from "./EmployeeController";

main();
function main() {
    const employeeList: Employee[] = [];
    employeeList.push(new ContractEmployee("A"));
    employeeList.push(new ContractEmployee("B"));
    employeeList.push(new ContractEmployee("C"));
    employeeList.push(new FullTimeEmployee("D"));
    employeeList.push(new FullTimeEmployee("E"));

    const  totalSalary = EmployeeController.getTotalSalary(employeeList);
    console.log(`Total Salary: ${totalSalary}`);
}