"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BabyDuck_1 = __importDefault(require("./BabyDuck"));
const DuckController_1 = __importDefault(require("./DuckController"));
const MallardDuck_1 = __importDefault(require("./MallardDuck"));
const Quack_1 = __importDefault(require("./Quack"));
let babyDuck = new BabyDuck_1.default();
let mallardDuck = new MallardDuck_1.default();
babyDuck.setQuackBehavior(new Quack_1.default());
DuckController_1.default.performQuack(babyDuck);
//# sourceMappingURL=DuckGame.js.map