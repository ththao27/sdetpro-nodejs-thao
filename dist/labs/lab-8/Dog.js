"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Dog extends Animal_1.default {
    constructor(name) {
        super(name, Animal_1.default.generateRandomSpeed(60));
    }
}
exports.default = Dog;
//# sourceMappingURL=Dog.js.map