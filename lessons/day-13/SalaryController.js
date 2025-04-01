class SalaryController {

    getTotalSalary(employeeList) {
        let totalSalary = 0;
        for (const employee of employeeList) {
            totalSalary += employee.salary;
        }
        return totalSalary;
    }
}

module.exports = SalaryController;