"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Horse_1 = __importDefault(require("./Horse"));
const Dog_1 = __importDefault(require("./Dog"));
const Tiger_1 = __importDefault(require("./Tiger"));
main();
function main() {
    const horse = new Horse_1.default("Horse");
    const dog = new Dog_1.default("Dog");
    const tiger = new Tiger_1.default("Tiger");
    const runningAnimal = [horse, dog, tiger];
    const winner = runningAnimal.reduce((a, b) => a.getSpeed() > b.getSpeed() ? a : b);
    console.log(`Winner is ${winner.getName()} with speed ${winner.getSpeed()} km/h`);
}
