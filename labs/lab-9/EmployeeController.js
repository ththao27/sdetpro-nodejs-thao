"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmployeeController = /** @class */ (function () {
    function EmployeeController() {
    }
    EmployeeController.getTotalSalary = function (employeeList) {
        var totalSalary = 0;
        for (var _i = 0, employeeList_1 = employeeList; _i < employeeList_1.length; _i++) {
            var employee = employeeList_1[_i];
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    };
    EmployeeController.getHighestSalaryEmployee = function (employeeList) {
        var highestSalaryEmployee = employeeList[0];
        for (var _i = 0, employeeList_2 = employeeList; _i < employeeList_2.length; _i++) {
            var employee = employeeList_2[_i];
            if (employee.getSalary() > highestSalaryEmployee.getSalary()) {
                highestSalaryEmployee = employee;
            }
        }
        return highestSalaryEmployee;
    };
    EmployeeController.getLowestSalaryEmployee = function (employeeList) {
        var lowestSalaryEmployee = employeeList[0];
        for (var _i = 0, employeeList_3 = employeeList; _i < employeeList_3.length; _i++) {
            var employee = employeeList_3[_i];
            if (employee.getSalary() < lowestSalaryEmployee.getSalary()) {
                lowestSalaryEmployee = employee;
            }
        }
        return lowestSalaryEmployee;
    };
    return EmployeeController;
}());
exports.default = EmployeeController;
