"use strict";
// Object Composition -> có nghĩa ngta muốn tổ chức HAS-A-RELATIONSHIP
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ElectricEngine_1 = __importDefault(require("./ElectricEngine"));
const GasEngine_1 = __importDefault(require("./GasEngine"));
class Car {
    constructor(engine) {
        this.engine = engine;
    }
    start() {
        this.engine.start();
    }
    move() {
        console.log('Car moving...');
    }
    stop() {
        console.log('Car stoppedd...');
    }
}
exports.default = Car;
// Object composition
let electricCar = new Car(new ElectricEngine_1.default());
electricCar.start();
let gasCar = new Car(new GasEngine_1.default());
//# sourceMappingURL=Car.js.map