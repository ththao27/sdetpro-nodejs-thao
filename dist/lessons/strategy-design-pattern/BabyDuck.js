"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Duck_1 = __importDefault(require("./Duck"));
const FlyNoWay_1 = __importDefault(require("./FlyNoWay"));
const Squeak_1 = __importDefault(require("./Squeak"));
class BabyDuck extends Duck_1.default {
    constructor() {
        super(new Squeak_1.default(), new FlyNoWay_1.default());
    }
}
exports.default = BabyDuck;
//# sourceMappingURL=BabyDuck.js.map