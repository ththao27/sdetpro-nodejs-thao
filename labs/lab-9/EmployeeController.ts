import Employee from "./Employee";
import ContractEmployee from "./ContractEmployee";
import FullTimeEmployee from "./FullTimeEmployee";

export default class EmployeeController {    

    static getTotalSalary(employeeList: Employee[]): number { 
        let totalSalary: number = 0;
        for (const employee of employeeList) {
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    }
}