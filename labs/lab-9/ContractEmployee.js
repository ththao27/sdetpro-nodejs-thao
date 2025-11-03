'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const Employee_1 = __importDefault(require('./Employee'));
class FullTimeEmployee extends Employee_1.default {
  constructor(name) {
    super(name, 30000);
    this.salary = this.getMaxSalary(40000);
  }
  getMaxSalary(maxSalary) {
    return Math.floor(Math.random() * (maxSalary - this.basicSalary + 1)) + this.basicSalary;
  }
}
exports.default = FullTimeEmployee;
