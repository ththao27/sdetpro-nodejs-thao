const Employee = require('./Employee');
const SalaryController = require('./SalaryController');

// Create Data | OOP

let teo = new Employee('Nguyen Van Teo', 1000);
let ti = new Employee('Nguyen Van Ti', 2000);

// Init controller, process user-defined data | FP
let salaryController = new SalaryController();

// Get the evaluated result
const totalSalary = salaryController.getTotalSalary([teo, ti]);
