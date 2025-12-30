"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Duck_1 = __importDefault(require("./Duck"));
const FlyWithWings_1 = __importDefault(require("./FlyWithWings"));
const Quack_1 = __importDefault(require("./Quack"));
class MallardDuck extends Duck_1.default {
    constructor() {
        super(new Quack_1.default(), new FlyWithWings_1.default());
    }
}
exports.default = MallardDuck;
//# sourceMappingURL=MallardDuck.js.map